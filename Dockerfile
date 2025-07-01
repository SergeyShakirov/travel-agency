# Используем официальный образ Node.js 18
FROM node:18-alpine AS base

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package файлы
COPY package*.json ./

# Установка зависимостей
RUN npm ci --only=production

# Копируем исходный код
COPY . .

# Сборка приложения
RUN npm run build

# Этап production
FROM node:18-alpine AS production

WORKDIR /app

# Создаем пользователя для безопасности
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Копируем необходимые файлы из предыдущего этапа
COPY --from=base /app/public ./public
COPY --from=base /app/.next/standalone ./
COPY --from=base /app/.next/static ./.next/static
COPY --from=base /app/package.json ./package.json

# Устанавливаем права
RUN chown -R nextjs:nodejs /app
USER nextjs

# Открываем порт
EXPOSE 3000

# Переменные окружения
ENV NODE_ENV=production
ENV PORT=3000

# Команда запуска
CMD ["node", "server.js"]
