<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

//for pinia use
/*import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';

const username = ref('');
const password = ref('');
const authStore = useAuthStore();

const handleLogin = () => {
  authStore.login(username.value, password.value);
};*/

// Reemplazo de `data`
const username = ref('');
const password = ref('');

// Reemplazo de `methods`
const router = useRouter();

const login = () => {
  // Aquí iría la lógica para autenticar al usuario
  console.log('Login:', username.value, password.value);

  // Si la autenticación es exitosa, redirigir
  router.push('/table');
  console.log("llega despues del router");
};

// Reemplazo de `mounted`
onMounted(() => {
  console.log('The component has been mounted');
});
</script>
<template>
    <main id="container" class="container__login">
        <div id="title" class="title__login__left">
            <h1>Sistema Web</h1>
        </div>
        <div id="login" class="form__login__right">
            <form class="form__login" @submit.prevent="login">
                <input type="email" placeholder="Email" class="input__user" v-model="username" required>
                <input type="password" placeholder="Password" class="input__pass" v-model="password" required>
                <button type="submit" class="btn__login" v-on:click.prevent="login()">Iniciar Sesión</button>
            </form>

        </div>
    </main>
</template>
<style>

/* ====================== global variables ================ */
:root {
    --Very-dark-cyan: hsl(209, 100%, 15%);
    --Light-grayish-cyan-1: hsl(189, 41%, 97%);
    --White: hsl(0, 0%, 100%);
 
  }
  
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
}
html, body, #app {
  height: 100%;
  width: 100%;
}
.container__login {
    display: flex;
    height: 100vh;
}

.title__login__left, .form__login__right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title__login__left{
    background-color: var(--Very-dark-cyan); /* Azul */
    color: var(--White);
}

.form__login__right{
    background-color: var(--White);
    color: black;
    flex-direction: column;
}

h1 {
    font-size: 2.5rem;
    text-align: center;
}

.form__login {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 300px;
}

.input__user, .input__pass {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn__login {
    width: 100%;
    padding: 10px;
    background-color: var(--Very-dark-cyan); /* Azul */
    color: var(--White);
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.btn__login:hover {
    background-color: #0056b3;
}
</style>