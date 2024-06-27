<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Effective Mobile Тестовое задание</h1>
    <h2>Описание</h2>
    <p>Это тестовое задание для Effective Mobile . Проект использует Docker Compose для оркестрации сервисов и предоставляет API для работы с историей и пользователями.</p>
    <h2>Запуск проекта</h2>
    <ol>
        <li>Склонируйте репозиторий:
            <pre><code>git clone &lt;repository_url&gt;
cd &lt;repository_name&gt;
            </code></pre>
        </li>
        <li>Запустите Docker Compose:
            <pre><code>docker-compose up
            </code></pre>
        </li>
    </ol>
    <h2>Тестирование API</h2>
    <p>Вы можете тестировать API с помощью Postman. Ниже приведены доступные эндпоинты:</p>
    <h3>History</h3>
    <ul>
        <li>Для того чтобы брать данные историй пользователя:
            по дефолту filter ASC page=0
            <pre><code>[GET http://localhost:3000/history/1?filter=ASC&page=0]</code></pre>
        </li>
        <li>Для получения всех историй:
            <pre><code>[GET http://localhost:3000/history]</code></pre>
        </li>
        <li>Для создания пользователя:
            <pre><code>[POST http://localhost:1337/create]</code></pre>
            ПРИМЕР ТЕЛА ЗАПРОСА
            <code>{
    "login": "test",
    "password": "testpass",
    "email": "sdgnjsdgnkds"
}</code>
        </li>
        <li>Для обновления пользователя:
            <pre><code>[PATCH http://localhost:3000/update/:id]</code></pre>
        </li>
        <li>Для получения данных пользователя:
            <pre><code>[GET http://localhost:3000/history/get/:id]</code></pre>
        </li>
    </ul>
</body>
</html>
