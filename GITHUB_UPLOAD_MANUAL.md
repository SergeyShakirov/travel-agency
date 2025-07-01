# Инструкция по ручной загрузке на GitHub

## Если Git не установлен, следуйте этим шагам:

### Шаг 1: Создание репозитория на GitHub
1. Откройте браузер и перейдите на https://github.com/SergeyShakirov
2. Нажмите зеленую кнопку **"New"** (создать репозиторий)
3. Заполните поля:
   - **Repository name**: `travel-agency`
   - **Description**: `EuroWork - Modern European Employment Agency Website`
   - **Public/Private**: выберите Public
   - ✅ **Add a README file** - СНИМИТЕ эту галочку!
   - ✅ **Add .gitignore** - СНИМИТЕ эту галочку!
4. Нажмите **"Create repository"**

### Шаг 2: Архивирование проекта
1. Откройте папку `C:\Projects\eurowork-site`
2. Выделите ВСЕ файлы и папки КРОМЕ:
   - `node_modules/` (эта папка исключена в .gitignore)
   - `.next/` (временные файлы сборки)
   - `.swc/` (кэш компилятора)
3. Создайте ZIP-архив с именем `eurowork-site.zip`

### Шаг 3: Загрузка через веб-интерфейс GitHub
1. На странице созданного репозитория нажмите **"uploading an existing file"**
2. Перетащите ZIP-архив в область загрузки
3. Дождитесь загрузки и распаковки
4. В поле commit message напишите: `Initial commit: EuroWork website with tests`
5. Нажмите **"Commit changes"**

### Шаг 4: Альтернатива - загрузка файлов по частям
Если ZIP не работает:
1. Нажмите **"Add file"** → **"Upload files"**
2. Загрузите файлы группами:
   - Сначала: `package.json`, `README.md`, `.gitignore`, все `.js` и `.ts` файлы
   - Затем: папку `src/` (перетащите целиком)
   - Потом: папку `.github/` для CI/CD
   - Последними: остальные конфигурационные файлы

## После установки Git (рекомендуется)

После установки Git выполните в терминале VS Code:

```bash
# Инициализация репозитория
git init

# Добавление удаленного репозитория
git remote add origin https://github.com/SergeyShakirov/travel-agency.git

# Добавление всех файлов
git add .

# Первый коммит
git commit -m "Initial commit: EuroWork website with tests"

# Отправка на GitHub
git push -u origin main
```

## Проверка успешной загрузки

После загрузки убедитесь, что на GitHub есть:
- ✅ Все исходные файлы
- ✅ Папка `src/` с компонентами и тестами
- ✅ `package.json` с зависимостями
- ✅ `README.md` с описанием
- ✅ `.github/workflows/` для CI/CD
- ❌ НЕТ папки `node_modules/`
- ❌ НЕТ папки `.next/`

## Автоматический деплой

После загрузки на GitHub:
1. Перейдите во вкладку **Actions** репозитория
2. Увидите workflow "CI/CD Pipeline"
3. Если есть ошибки, проверьте логи и исправьте

## Деплой на Vercel

1. Перейдите на https://vercel.com
2. Подключите GitHub аккаунт
3. Выберите репозиторий `travel-agency`
4. Нажмите **Deploy**
5. Получите ссылку на готовый сайт

---

**Проект полностью готов к работе!** 🚀
