# 🚀 Деплой EuroWork на VPS

## Подготовка VPS

### 1. Требования к серверу:
- **OS**: Ubuntu 20.04+ / CentOS 8+ / Debian 11+
- **RAM**: Минимум 1GB (рекомендуется 2GB+)
- **Storage**: Минимум 10GB свободного места
- **CPU**: 1+ ядро
- **Network**: Публичный IP-адрес

### 2. Подключение к VPS:
```bash
# Подключение по SSH
ssh root@YOUR_VPS_IP
# или с пользователем
ssh username@YOUR_VPS_IP
```

## Установка зависимостей на VPS

### 1. Обновление системы:
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL
sudo yum update -y
```

### 2. Установка Node.js 18+:
```bash
# Ubuntu/Debian - через NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Проверка установки
node --version  # должно быть 18+
npm --version
```

### 3. Установка Git:
```bash
# Ubuntu/Debian
sudo apt install git -y

# CentOS/RHEL
sudo yum install git -y

# Проверка
git --version
```

### 4. Установка PM2 (менеджер процессов):
```bash
sudo npm install -g pm2
pm2 --version
```

### 5. Установка Nginx (веб-сервер):
```bash
# Ubuntu/Debian
sudo apt install nginx -y

# CentOS/RHEL
sudo yum install nginx -y

# Запуск и автозагрузка
sudo systemctl start nginx
sudo systemctl enable nginx
```

## Деплой проекта

### 1. Клонирование репозитория:
```bash
# Переход в домашнюю директорию
cd /var/www/

# Клонирование проекта
sudo git clone https://github.com/SergeyShakirov/travel-agency.git
cd travel-agency

# Проверка файлов
ls -la
```

### 2. Установка зависимостей:
```bash
# Установка пакетов
sudo npm install

# Сборка проекта
sudo npm run build

# Проверка сборки
ls -la .next/
```

### 3. Настройка PM2:
```bash
# Создание ecosystem файла
sudo nano ecosystem.config.js
```

**Содержимое ecosystem.config.js:**
```javascript
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
```

### 4. Запуск приложения:
```bash
# Запуск через PM2
sudo pm2 start ecosystem.config.js

# Проверка статуса
sudo pm2 status

# Просмотр логов
sudo pm2 logs eurowork-site

# Автозагрузка PM2
sudo pm2 startup
sudo pm2 save
```

## Настройка Nginx

### 1. Создание конфигурации сайта:
```bash
sudo nano /etc/nginx/sites-available/eurowork-site
```

**Содержимое конфигурации:**
```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN.com www.YOUR_DOMAIN.com YOUR_VPS_IP;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Кэширование статических файлов
    location /_next/static {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;
}
```

### 2. Активация сайта:
```bash
# Создание символической ссылки
sudo ln -s /etc/nginx/sites-available/eurowork-site /etc/nginx/sites-enabled/

# Удаление дефолтного сайта (опционально)
sudo rm /etc/nginx/sites-enabled/default

# Проверка конфигурации
sudo nginx -t

# Перезагрузка Nginx
sudo systemctl reload nginx
```

## Настройка SSL (HTTPS)

### 1. Установка Certbot:
```bash
# Ubuntu/Debian
sudo apt install certbot python3-certbot-nginx -y

# CentOS/RHEL
sudo yum install certbot python3-certbot-nginx -y
```

### 2. Получение SSL сертификата:
```bash
# Замените YOUR_DOMAIN.com на ваш домен
sudo certbot --nginx -d YOUR_DOMAIN.com -d www.YOUR_DOMAIN.com

# Автоматическое обновление
sudo crontab -e
# Добавьте строку:
0 12 * * * /usr/bin/certbot renew --quiet
```

## Настройка файрвола

### 1. UFW (Ubuntu/Debian):
```bash
sudo ufw allow ssh
sudo ufw allow 'Nginx Full'
sudo ufw enable
```

### 2. Firewalld (CentOS/RHEL):
```bash
sudo firewall-cmd --permanent --add-service=ssh
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

## Мониторинг и обслуживание

### 1. Проверка статуса:
```bash
# Статус приложения
sudo pm2 status

# Статус Nginx
sudo systemctl status nginx

# Логи приложения
sudo pm2 logs eurowork-site

# Логи Nginx
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

### 2. Обновление проекта:
```bash
cd /var/www/travel-agency

# Получение изменений
sudo git pull origin main

# Установка новых зависимостей (если есть)
sudo npm install

# Пересборка
sudo npm run build

# Перезапуск приложения
sudo pm2 restart eurowork-site
```

### 3. Резервное копирование:
```bash
# Создание backup
sudo tar -czf /backup/eurowork-$(date +%Y%m%d).tar.gz /var/www/travel-agency

# Cron для автоматического backup
sudo crontab -e
# Добавьте строку для ежедневного backup в 2:00
0 2 * * * tar -czf /backup/eurowork-$(date +\%Y\%m\%d).tar.gz /var/www/travel-agency
```

## Тестирование деплоя

### 1. Проверка доступности:
```bash
# Локальная проверка
curl http://localhost:3000

# Внешняя проверка
curl http://YOUR_VPS_IP
curl https://YOUR_DOMAIN.com
```

### 2. Проверка производительности:
```bash
# Установка htop для мониторинга
sudo apt install htop -y
htop

# Проверка использования ресурсов
sudo pm2 monit
```

## Решение проблем

### 1. Приложение не запускается:
```bash
# Проверка логов
sudo pm2 logs eurowork-site

# Перезапуск
sudo pm2 restart eurowork-site

# Проверка портов
sudo netstat -tlnp | grep :3000
```

### 2. Nginx выдает ошибки:
```bash
# Проверка конфигурации
sudo nginx -t

# Проверка статуса
sudo systemctl status nginx

# Перезапуск
sudo systemctl restart nginx
```

### 3. SSL проблемы:
```bash
# Проверка сертификата
sudo certbot certificates

# Обновление сертификата
sudo certbot renew --dry-run
```

---

## ✅ Чек-лист успешного деплоя:
- [ ] VPS настроен и доступен
- [ ] Node.js 18+ установлен
- [ ] Git, PM2, Nginx установлены
- [ ] Проект склонирован и собран
- [ ] PM2 запущен и приложение работает
- [ ] Nginx настроен и проксирует запросы
- [ ] SSL сертификат получен (для домена)
- [ ] Файрвол настроен
- [ ] Мониторинг настроен

**После выполнения всех шагов ваш сайт EuroWork будет доступен по адресу VPS или домену!** 🚀
