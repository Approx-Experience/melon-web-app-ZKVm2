# Onboarding для Melon Web App

Ласкаво просимо до проєкту Melon Web App! Нижче — коротка інструкція для швидкого старту.

---

## 1. Структура проєкту

- `src/` — фронтенд (React, Redux)
- `server/` — бекенд (Node.js, Express)
- `db/` — база даних (моделі, підключення)
- `scripts/seed.js` — сидування тестових даних
- `public/` — статичні файли (зображення, іконки)

## 2. Встановлення залежностей

```bash
npm install
```

## 3. Запуск додатку

### Backend (API)

```bash
node server/app.js
```

### Frontend (React)

```bash
npm run dev
```

> За замовчуванням фронтенд працює на http://localhost:5173, бекенд — на http://localhost:3000

## 4. Основні файли

- `src/App.jsx` — головний компонент React
- `src/redux/` — Redux store та reducer
- `server/handlers.js` — основна логіка API
- `db/model.js` — моделі для роботи з даними

## 5. Тестові дані

- `scripts/data/products.json` — продукти
- `scripts/data/users.json` — користувачі
- Для оновлення даних: запустіть `node scripts/seed.js`

## 6. Redux

- Store: `src/redux/store.js`
- Reducer: `src/redux/reducer.js`

## 7. Додатково

- Конфігурація Vite: `vite.config.js`
- ESLint: `eslint.config.js`

---

### FAQ

- Якщо виникли питання — звертайтесь до README.md або пишіть у командний чат.

Успіхів у розробці! 🚀
