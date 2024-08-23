<script setup>
import { ref } from 'vue';

const contador = ref(0)
const incrementar = () =>{
  contador.value++
}
const decrementar = () =>{
  contador.value--
}
</script>

<template>

<p>Contador</p>
<h1>{{ contador }}</h1>
<button @click="incrementar">incrementar</button>
<button @click="decrementar">Decrementar</button>
</template>

<style scoped>
p{
    color: blue;
}

</style>
