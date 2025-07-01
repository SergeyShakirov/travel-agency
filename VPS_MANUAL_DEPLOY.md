# 🖥️ Ручной деплой EuroWork на VPS - Пошаговая инструкция

## 📋 Предварительные требования

### VPS характеристики:
- **OS**: Ubuntu 20.04+ / CentOS 8+ / Debian 11+
- **RAM**: Минимум 1GB (рекомендуется 2GB+)
- **Storage**: Минимум 10GB
- **CPU**: 1+ ядро
- **IP**: Публичный IP-адрес

### Доступы:
- SSH доступ к серверу
- Права sudo/root
- Домен (опционально)

---

## 🚀 Шаг 1: Подключение к VPS

```bash
# Подключение по SSH
ssh root@YOUR_VPS_IP
# или с пользователем
ssh username@YOUR_VPS_IP -p 22
```

**Замените YOUR_VPS_IP на IP адрес вашего сервера**

---

## 🔧 Шаг 2: Подготовка системы

### 2.1 Обновление системы
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y

# CentOS/RHEL/Rocky
sudo yum update -y
# или для новых версий
sudo dnf update -y
```

### 2.2 Установка базовых пакетов
```bash
# Ubuntu/Debian
sudo apt install -y curl wget git nginx ufw htop nano

# CentOS/RHEL/Rocky
sudo yum install -y curl wget git nginx firewalld htop nano
# или
sudo dnf install -y curl wget git nginx firewalld htop nano
```

---

## 📦 Шаг 3: Установка Node.js

### 3.1 Установка Node.js 18+ (рекомендуемый способ)
```bash
# Ubuntu/Debian - через NodeSource
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# CentOS/RHEL/Rocky
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs
# или
sudo dnf install -y nodejs
```

### 3.2 Проверка установки
```bash
node --version  # должно показать v18.x.x или выше
npm --version   # должно показать версию npm
```

### 3.3 Установка PM2 (менеджер процессов)
```bash
sudo npm install -g pm2
pm2 --version
```

---

## 📂 Шаг 4: Клонирование проекта

### 4.1 Создание директории и клонирование
```bash
# Переход в директорию веб-сервера
cd /var/www/

# Клонирование репозитория
sudo git clone https://github.com/SergeyShakirov/travel-agency.git

# Переход в директорию проекта
cd travel-agency

# Проверка файлов
ls -la
```

### 4.2 Установка прав на файлы
```bash
# Назначение владельца (замените username на ваше имя пользователя)
sudo chown -R $USER:$USER /var/www/travel-agency

# Установка правильных прав
chmod -R 755 /var/www/travel-agency
```

---

## 🔨 Шаг 5: Сборка проекта

### 5.1 Установка зависимостей
```bash
# Переход в директорию проекта
cd /var/www/travel-agency

# Установка зависимостей (production only)
npm ci --only=production

# Или если нужны dev зависимости для сборки
npm install
```

### 5.2 Сборка для production
```bash
# Сборка проекта
npm run build

# Проверка сборки
ls -la .next/
```

---

## ⚙️ Шаг 6: Настройка PM2

### 6.1 Создание конфигурации PM2
```bash
# Создание файла конфигурации
nano ecosystem.config.js
```

**Вставьте следующий код:**
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

### 6.2 Запуск приложения
```bash
# Запуск через PM2
pm2 start ecosystem.config.js

# Проверка статуса
pm2 status

# Просмотр логов
pm2 logs eurowork-site

# Настройка автозапуска
pm2 startup
pm2 save
```

---

## 🌐 Шаг 7: Настройка Nginx

### 7.1 Создание конфигурации сайта
```bash
# Создание файла конфигурации
sudo nano /etc/nginx/sites-available/eurowork-site
```

**Вставьте следующую конфигурацию:**
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Замените на ваш домен

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

    # Статические файлы Next.js
    location /_next/static/ {
        proxy_pass http://localhost:3000;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # Gzip сжатие
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;
}
```

### 7.2 Активация сайта
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

---

## 🔥 Шаг 8: Настройка файрвола

### 8.1 Ubuntu/Debian (UFW)
```bash
# Разрешение SSH
sudo ufw allow 22

# Разрешение HTTP
sudo ufw allow 80

# Разрешение HTTPS
sudo ufw allow 443

# Включение файрвола
sudo ufw enable

# Проверка статуса
sudo ufw status
```

### 8.2 CentOS/RHEL/Rocky (firewalld)
```bash
# Запуск службы
sudo systemctl start firewalld
sudo systemctl enable firewalld

# Разрешение служб
sudo firewall-cmd --permanent --zone=public --add-service=ssh
sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https

# Применение изменений
sudo firewall-cmd --reload

# Проверка
sudo firewall-cmd --list-all
```

---

## 🎯 Шаг 9: Запуск и проверка

### 9.1 Запуск всех служб
```bash
# Запуск Nginx
sudo systemctl start nginx
sudo systemctl enable nginx

# Проверка статуса служб
sudo systemctl status nginx
pm2 status
```

### 9.2 Проверка работы сайта
```bash
# Проверка локально на сервере
curl http://localhost:3000

# Проверка через Nginx
curl http://localhost

# Проверка портов
sudo netstat -tlnp | grep :80
sudo netstat -tlnp | grep :3000
```

---

## 🔍 Шаг 10: Тестирование

### 10.1 Открытие сайта в браузере
- Перейдите по адресу: `http://YOUR_VPS_IP`
- Или по домену: `http://your-domain.com`

### 10.2 Проверка функциональности
- ✅ Главная страница загружается
- ✅ Навигация работает
- ✅ Форма обратной связи отображается
- ✅ Адаптивный дизайн работает

---

## 📊 Полезные команды

### PM2 команды:
```bash
pm2 status              # Статус приложений
pm2 logs eurowork-site  # Логи приложения
pm2 restart eurowork-site  # Перезапуск
pm2 stop eurowork-site     # Остановка
pm2 delete eurowork-site   # Удаление
pm2 monit               # Мониторинг
```

### Nginx команды:
```bash
sudo nginx -t                    # Проверка конфигурации
sudo systemctl reload nginx     # Перезагрузка конфигурации
sudo systemctl restart nginx    # Перезапуск
sudo systemctl status nginx     # Статус
tail -f /var/log/nginx/access.log  # Логи доступа
tail -f /var/log/nginx/error.log   # Логи ошибок
```

### Системные команды:
```bash
htop                    # Мониторинг ресурсов
df -h                   # Использование диска
free -h                 # Использование памяти
systemctl status        # Статус всех служб
```

---

## 🛡️ Дополнительная безопасность (рекомендуется)

### 1. SSL сертификат (Let's Encrypt)
```bash
# Установка Certbot
sudo apt install certbot python3-certbot-nginx -y

# Получение сертификата
sudo certbot --nginx -d your-domain.com -d www.your-domain.com

# Автообновление
sudo crontab -e
# Добавить: 0 12 * * * /usr/bin/certbot renew --quiet
```

### 2. Ограничение SSH
```bash
# Редактирование конфигурации SSH
sudo nano /etc/ssh/sshd_config

# Изменить:
# Port 2222  # Нестандартный порт
# PermitRootLogin no  # Запрет root логина
# PasswordAuthentication no  # Только ключи

# Перезапуск SSH
sudo systemctl restart sshd
```

---

## 🎉 Результат

После выполнения всех шагов у вас будет:

✅ **Работающий сайт** EuroWork на вашем VPS  
✅ **Автоматический перезапуск** через PM2  
✅ **Веб-сервер Nginx** для обработки запросов  
✅ **Настроенный файрвол** для безопасности  
✅ **Готовность к SSL** сертификату  

**Ваш сайт доступен по адресу: http://YOUR_VPS_IP**

---

## 🆘 Устранение проблем

### Сайт не открывается:
1. Проверьте статус PM2: `pm2 status`
2. Проверьте логи: `pm2 logs eurowork-site`
3. Проверьте Nginx: `sudo nginx -t`
4. Проверьте файрвол: `sudo ufw status`

### Ошибки сборки:
1. Проверьте версию Node.js: `node --version`
2. Очистите кэш: `npm cache clean --force`
3. Удалите node_modules: `rm -rf node_modules && npm install`

### Проблемы с правами:
```bash
sudo chown -R $USER:$USER /var/www/travel-agency
chmod -R 755 /var/www/travel-agency
```

**Нужна помощь? Проверьте логи и статус всех служб!**
