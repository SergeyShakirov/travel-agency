# ⚡ Быстрый деплой EuroWork на VPS

## 🚀 Автоматический деплой (рекомендуется)

### 1. Скачайте скрипт на VPS:
```bash
wget https://raw.githubusercontent.com/SergeyShakirov/travel-agency/main/vps-deploy.sh
chmod +x vps-deploy.sh
```

### 2. Запустите скрипт:
```bash
sudo ./vps-deploy.sh
```

**Готово! Сайт будет доступен через 5-10 минут.**

---

## 🛠️ Ручной деплой (пошагово)

### 1. Подключитесь к VPS:
```bash
ssh root@YOUR_VPS_IP
```

### 2. Обновите систему:
```bash
# Ubuntu/Debian
sudo apt update && sudo apt upgrade -y
sudo apt install -y curl git nginx

# CentOS/Rocky
sudo yum update -y
sudo yum install -y curl git nginx
```

### 3. Установите Node.js 18+:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
sudo npm install -g pm2
```

### 4. Клонируйте проект:
```bash
cd /var/www/
sudo git clone https://github.com/SergeyShakirov/travel-agency.git
cd travel-agency
```

### 5. Соберите проект:
```bash
npm ci --only=production
npm run build
```

### 6. Запустите через PM2:
```bash
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'eurowork-site',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/travel-agency',
    instances: 1,
    autorestart: true,
    env: { NODE_ENV: 'production', PORT: 3000 }
  }]
}
EOF

pm2 start ecosystem.config.js
pm2 startup
pm2 save
```

### 7. Настройте Nginx:
```bash
sudo tee /etc/nginx/sites-available/eurowork-site << 'EOF'
server {
    listen 80;
    server_name _;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/eurowork-site /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

### 8. Настройте файрвол:
```bash
sudo ufw allow 22
sudo ufw allow 80
sudo ufw allow 443
sudo ufw --force enable
```

---

## ✅ Проверка

Откройте в браузере: `http://YOUR_VPS_IP`

## 📊 Полезные команды

```bash
# Статус приложения
pm2 status

# Логи
pm2 logs eurowork-site

# Перезапуск
pm2 restart eurowork-site

# Статус Nginx
sudo systemctl status nginx
```

---

## 🔧 Настройка домена (опционально)

### 1. Измените конфигурацию Nginx:
```bash
sudo nano /etc/nginx/sites-available/eurowork-site
# Замените "server_name _;" на "server_name your-domain.com www.your-domain.com;"
sudo systemctl reload nginx
```

### 2. Установите SSL:
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

---

## 🎯 Результат

✅ **Сайт работает** на VPS  
✅ **Автоматический перезапуск** настроен  
✅ **Веб-сервер** обслуживает запросы  
✅ **Безопасность** настроена  

**Время деплоя: 10-15 минут**

---

## 🆘 Проблемы?

1. **Сайт не открывается**: Проверьте `pm2 status` и `sudo systemctl status nginx`
2. **Ошибки сборки**: Проверьте версию Node.js: `node --version` (должно быть 18+)
3. **Нет доступа**: Проверьте файрвол: `sudo ufw status`

**Логи помогут найти проблему:**
```bash
pm2 logs eurowork-site
sudo tail -f /var/log/nginx/error.log
```
