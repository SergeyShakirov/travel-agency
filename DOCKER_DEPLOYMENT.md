# 🐳 Docker Деплой EuroWork

## Быстрый старт с Docker

### 1. Установка Docker на VPS:
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Установка Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Проверка
docker --version
docker-compose --version
```

### 2. Клонирование и запуск:
```bash
# Клонирование проекта
git clone https://github.com/SergeyShakirov/travel-agency.git
cd travel-agency

# Сборка и запуск
docker-compose up -d --build

# Проверка статуса
docker-compose ps
```

### 3. Управление контейнерами:
```bash
# Просмотр логов
docker-compose logs -f

# Перезапуск
docker-compose restart

# Остановка
docker-compose down

# Обновление проекта
git pull origin main
docker-compose up -d --build
```

## Альтернативный Docker деплой (без Nginx)

### Простой запуск только приложения:
```bash
# Сборка образа
docker build -t eurowork-site .

# Запуск контейнера
docker run -d \
  --name eurowork \
  -p 3000:3000 \
  --restart unless-stopped \
  eurowork-site

# Проверка
curl http://localhost:3000
```

### Управление:
```bash
# Просмотр логов
docker logs eurowork

# Остановка
docker stop eurowork

# Удаление
docker rm eurowork

# Обновление
git pull origin main
docker build -t eurowork-site .
docker stop eurowork && docker rm eurowork
docker run -d --name eurowork -p 3000:3000 --restart unless-stopped eurowork-site
```

## Файлы созданы:
- ✅ `Dockerfile` - конфигурация образа
- ✅ `docker-compose.yml` - оркестрация сервисов  
- ✅ `nginx.conf` - конфигурация Nginx для Docker

**Docker деплой подходит для продвинутых пользователей. Для простого деплоя используйте `deploy.sh` скрипт!**
