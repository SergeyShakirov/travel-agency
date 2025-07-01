#!/bin/bash

# 🚀 Скрипт быстрого деплоя EuroWork на VPS
# Сохраните как deploy.sh и выполните: chmod +x deploy.sh && ./deploy.sh

echo "🚀 Начинаю деплой EuroWork на VPS..."

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Функция для вывода статуса
print_status() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Проверка sudo
if [[ $EUID -eq 0 ]]; then
   print_warning "Скрипт запущен от root. Рекомендуется запускать от обычного пользователя с sudo."
fi

# 1. Обновление системы
print_status "Обновление системы..."
sudo apt update && sudo apt upgrade -y

# 2. Установка Node.js 18
print_status "Установка Node.js 18..."
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# 3. Установка Git
print_status "Установка Git..."
sudo apt install git -y

# 4. Установка PM2
print_status "Установка PM2..."
sudo npm install -g pm2

# 5. Установка Nginx
print_status "Установка Nginx..."
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx

# 6. Клонирование проекта
print_status "Клонирование проекта EuroWork..."
cd /var/www/
sudo git clone https://github.com/SergeyShakirov/travel-agency.git
cd travel-agency

# 7. Установка зависимостей
print_status "Установка зависимостей проекта..."
sudo npm install

# 8. Сборка проекта
print_status "Сборка production версии..."
sudo npm run build

# 9. Создание ecosystem.config.js
print_status "Создание конфигурации PM2..."
sudo tee ecosystem.config.js > /dev/null <<EOF
module.exports = {
  apps: [{
    name: 'eurowork-site',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/travel-agency',
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

# 10. Запуск приложения
print_status "Запуск приложения через PM2..."
sudo pm2 start ecosystem.config.js
sudo pm2 startup
sudo pm2 save

# 11. Настройка Nginx
print_status "Настройка Nginx..."
sudo tee /etc/nginx/sites-available/eurowork-site > /dev/null <<EOF
server {
    listen 80;
    server_name _;

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

    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
EOF

# 12. Активация сайта
print_status "Активация сайта в Nginx..."
sudo ln -sf /etc/nginx/sites-available/eurowork-site /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx

# 13. Настройка файрвола
print_status "Настройка файрвола..."
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw --force enable

# 14. Проверка статуса
print_status "Проверка статуса сервисов..."
sleep 5

echo -e "\n${GREEN}📊 Статус сервисов:${NC}"
echo "PM2 статус:"
sudo pm2 status

echo -e "\nNginx статус:"
sudo systemctl status nginx --no-pager -l

echo -e "\nПроверка доступности приложения:"
if curl -s http://localhost:3000 > /dev/null; then
    print_status "Приложение отвечает на localhost:3000"
else
    print_error "Приложение не отвечает на localhost:3000"
fi

# 15. Получение IP адреса
SERVER_IP=$(curl -s http://ipinfo.io/ip)

echo -e "\n${GREEN}🎉 ДЕПЛОЙ ЗАВЕРШЕН!${NC}"
echo -e "${GREEN}📍 Ваш сайт доступен по адресам:${NC}"
echo -e "   🌐 http://$SERVER_IP"
echo -e "   🌐 http://$(hostname -I | awk '{print $1}')"
echo ""
echo -e "${YELLOW}📋 Полезные команды:${NC}"
echo -e "   sudo pm2 status              # Статус приложения"
echo -e "   sudo pm2 logs eurowork-site  # Логи приложения"
echo -e "   sudo pm2 restart eurowork-site # Перезапуск"
echo -e "   sudo nginx -t                # Проверка конфигурации Nginx"
echo -e "   sudo systemctl status nginx  # Статус Nginx"
echo ""
echo -e "${YELLOW}🔄 Для обновления проекта:${NC}"
echo -e "   cd /var/www/travel-agency"
echo -e "   sudo git pull origin main"
echo -e "   sudo npm run build"
echo -e "   sudo pm2 restart eurowork-site"
echo ""
echo -e "${GREEN}✨ EuroWork успешно развернут на VPS!${NC}"
