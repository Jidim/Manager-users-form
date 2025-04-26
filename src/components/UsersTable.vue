<script lang="ts" setup>

</script>

<template>
    <form>
        <table>
            <thead>
                <tr>
                    <th scope="col">Метки</th>
                    <th scope="col">Тип записи</th>
                    <th scope="col">Логин</th>
                    <th scope="col">Пароль</th>
                    <th scope="col">Действия</th>
                </tr>
            </thead>
            <tbody>
                <!-- Пример строки -->
                <tr>
                    <td>
                        <input type="text" name="labels" placeholder="Метки" />
                    </td>
                    <td>
                        <select name="type">
                            <option value="local">Локальная</option>
                            <option value="ldap">LDAP</option>
                        </select>
                    </td>
                    <td>
                        <input type="text" name="login" placeholder="Логин" />
                    </td>
                    <td>
                        <input type="password" name="password" placeholder="Пароль" />
                        <button type="button" aria-label="Показать/скрыть пароль">👁️</button>
                    </td>
                    <td>
                        <button type="button" aria-label="Удалить запись">🗑️</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </form>
</template>

<style lang="scss" scoped>
.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    .logo {
        margin: 0 2rem 0 0;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>