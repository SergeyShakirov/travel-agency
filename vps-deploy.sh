#!/bin/bash

# 🚀 Автоматический деплой EuroWork сайта на VPS
# Версия: 2.0
# Дата: 2025-07-01

set -e  # Остановить выполнение при ошибке

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Конфигурация
PROJECT_NAME="eurowork-site"
REPO_URL="https://github.com/SergeyShakirov/travel-agency.git"
DEPLOY_DIR="/var/www/travel-agency"
DOMAIN="your-domain.com"  # Измените на ваш домен
NODE_VERSION="18"

echo -e "${BLUE}🚀 Начинаю деплой EuroWork сайта на VPS...${NC}"

# Функция для вывода сообщений
log() {
    echo -e "${GREEN}[$(date +'%Y-%m-%d %H:%M:%S')] $1${NC}"
}

error() {
    echo -e "${RED}[ERROR] $1${NC}"
    exit 1
}

warning() {
    echo -e "${YELLOW}[WARNING] $1${NC}"
}

# Проверка прав root
if [[ $EUID -ne 0 ]]; then
   error "Этот скрипт должен запускаться с правами root"
fi

log "Обновляем систему..."
# Определяем тип ОС
if [ -f /etc/debian_version ]; then
    apt update && apt upgrade -y
elif [ -f /etc/redhat-release ]; then
    yum update -y
else
    error "Неподдерживаемая операционная система"
fi

log "Устанавливаем необходимые пакеты..."
if [ -f /etc/debian_version ]; then
    apt install -y curl wget git nginx ufw
elif [ -f /etc/redhat-release ]; then
    yum install -y curl wget git nginx firewalld
fi

# Установка Node.js
log "Проверяем Node.js..."
if ! command -v node &> /dev/null; then
    log "Устанавливаем Node.js ${NODE_VERSION}..."
    if [ -f /etc/debian_version ]; then
        curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
        apt-get install -y nodejs
    elif [ -f /etc/redhat-release ]; then
        curl -fsSL https://rpm.nodesource.com/setup_${NODE_VERSION}.x | bash -
        yum install -y nodejs
    fi
else
    NODE_CURRENT=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
    if [ "$NODE_CURRENT" -lt "$NODE_VERSION" ]; then
        warning "Node.js версия $NODE_CURRENT устарела. Рекомендуется обновить до ${NODE_VERSION}+"
    else
        log "Node.js $(node --version) уже установлен"
    fi
fi

# Установка PM2
log "Устанавливаем PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
else
    log "PM2 уже установлен"
fi

# Создаем директорию для проекта
log "Создаем директорию проекта..."
mkdir -p /var/www
cd /var/www

# Клонируем или обновляем репозиторий
if [ -d "$DEPLOY_DIR" ]; then
    log "Обновляем существующий репозиторий..."
    cd $DEPLOY_DIR
    git pull origin main
else
    log "Клонируем репозиторий..."
    git clone $REPO_URL
    cd $DEPLOY_DIR
fi

# Устанавливаем зависимости
log "Устанавливаем зависимости..."
npm ci --only=production

# Собираем проект
log "Собираем проект для production..."
npm run build

# Создаем ecosystem.config.js для PM2
log "Настраиваем PM2..."
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: '$PROJECT_NAME',
    script: 'npm',
    args: 'start',
    cwd: '$DEPLOY_DIR',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
EOF

# Запускаем приложение через PM2
log "Запускаем приложение..."
pm2 delete $PROJECT_NAME 2>/dev/null || true  # Удаляем если существует
pm2 start ecosystem.config.js
pm2 save
pm2 startup

# Настраиваем Nginx
log "Настраиваем Nginx..."
cat > /etc/nginx/sites-available/$PROJECT_NAME << EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
    }

    # Статические файлы
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_proxied expired no-cache no-store private auth;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
}
EOF

# Активируем сайт
ln -sf /etc/nginx/sites-available/$PROJECT_NAME /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Проверяем конфигурацию Nginx
nginx -t
if [ $? -eq 0 ]; then
    log "Конфигурация Nginx корректна"
    systemctl reload nginx
else
    error "Ошибка в конфигурации Nginx"
fi

# Настраиваем файрвол
log "Настраиваем файрвол..."
if [ -f /etc/debian_version ]; then
    ufw allow 22
    ufw allow 80
    ufw allow 443
    ufw --force enable
elif [ -f /etc/redhat-release ]; then
    systemctl start firewalld
    systemctl enable firewalld
    firewall-cmd --permanent --zone=public --add-service=ssh
    firewall-cmd --permanent --zone=public --add-service=http
    firewall-cmd --permanent --zone=public --add-service=https
    firewall-cmd --reload
fi

# Запускаем службы
log "Запускаем службы..."
systemctl start nginx
systemctl enable nginx

log "Проверяем статус приложения..."
pm2 status

echo ""
echo -e "${GREEN}🎉 Деплой завершен успешно!${NC}"
echo -e "${BLUE}📊 Информация о деплое:${NC}"
echo -e "  • Проект: $PROJECT_NAME"
echo -e "  • Директория: $DEPLOY_DIR"
echo -e "  • URL: http://$DOMAIN"
echo -e "  • Node.js: $(node --version)"
echo -e "  • PM2: $(pm2 --version)"
echo ""
echo -e "${YELLOW}📋 Полезные команды:${NC}"
echo -e "  • Логи приложения: pm2 logs $PROJECT_NAME"
echo -e "  • Статус PM2: pm2 status"
echo -e "  • Перезапуск: pm2 restart $PROJECT_NAME"
echo -e "  • Остановка: pm2 stop $PROJECT_NAME"
echo -e "  • Nginx логи: tail -f /var/log/nginx/access.log"
echo ""
echo -e "${GREEN}✅ Сайт доступен по адресу: http://$DOMAIN${NC}"
echo ""
echo -e "${BLUE}🔧 Следующие шаги:${NC}"
echo -e "  1. Настройте DNS записи для вашего домена"
echo -e "  2. Установите SSL сертификат (рекомендуется Let's Encrypt)"
echo -e "  3. Настройте мониторинг и бэкапы"
echo ""
