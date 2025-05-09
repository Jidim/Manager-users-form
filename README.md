# Форма управления пользователями

## Описание проекта
Веб-приложение для управления учетными записями пользователей. Позволяет добавлять, редактировать и удалять учетные записи с валидацией данных и сохранением состояния между обновлениями страницы.

## Стек технологий
- **Vue.js 3** (Composition API)
- **TypeScript**
- **Pinia** (стейт-менеджер)
- **UI-фреймворк** (prime vue)

## Функционал формы
- Заголовок и кнопка добавления новой учетной записи.
- Подсказка для поля "Метка".
- Список учетных записей с лейблами полей.

## Структура учетной записи
- **Метка** — необязательное поле. Вводится список меток через символ-разделитель. При сохранении метка преобразуется в массив объектов.
- **Тип записи** — выпадающий список с предопределенными вариантами:
  - `LDAP` — скрывает поле "Пароль".
  - `Локальная` — отображает поле "Пароль".
- **Логин** — обязательное поле для заполнения.
- **Пароль** — обязательное поле при выборе типа "Локальная".

## Поведение формы
- Добавление новой пустой учетной записи по нажатию кнопки.
- Удаление учетной записи.
- Валидация обязательных полей:
  - Для текстовых полей — при потере фокуса.
  - Для списков — при изменении значения.
- При ошибках заполнения поля выделяются красной обводкой.
- Валидные записи сохраняются в **Pinia**.
- Данные учетных записей сохраняются между обновлениями страницы.
