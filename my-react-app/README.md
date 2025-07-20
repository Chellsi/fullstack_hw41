# React Suspense + ErrorBoundary Demo

Цей проект демонструє використання React Suspense, ErrorBoundary та асинхронного отримання даних через хук `use()` (React 18+).

## Функціонал
- Асинхронне отримання повідомлення з імітацією затримки та можливістю помилки
- Відображення стану завантаження через `Suspense`
- Обробка помилок через ErrorBoundary з кастомним fallback-компонентом
- Стилізація через Tailwind CSS

## Структура
- `src/components/MessageComponent.tsx` — компонент, що використовує хук `use()` для отримання даних з Promise
- `src/components/FetchMessage.tsx` — функція, яка повертає Promise з затримкою
- `src/components/ErrorBoundary.tsx` — ErrorBoundary для обробки помилок
- `src/components/FallbackComponent.tsx` — компонент для відображення помилок
- `src/App.tsx` — головний компонент з Suspense та ErrorBoundary

## Запуск
1. Встановіть залежності:
   ```bash
   npm install
   ```
2. Запустіть проект:
   ```bash
   npm run dev
   ```

## Додатково
- Для зміни тексту помилки — редагуйте рядок у `new Error('...')` у `FetchMessage.tsx`.
- Для зміни вигляду помилки — редагуйте `FallbackComponent.tsx`.

---

**Приклад використання Suspense та ErrorBoundary у сучасному React-проекті.**
