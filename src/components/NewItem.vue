<script setup>
import { ref } from 'vue';
import axios from 'axios';

const nuevoItem = ref({
    item: '',
    description: ''
})

const crearItem = async()=> {
    try {
        const response = await axios.post("http://localhost:3000/posts",nuevoItem.value)
        nuevoItem.value.item = ''
        nuevoItem.value.description = ''
        console.log("Libro creado",response.data)
    } catch (error) {
        console.log("No se pudo crear un nuevo libro", error)
    }
}
</script>
<template>
    <main class="container">
            <form @submit.prevent="crearItem">
                <div>
                    <div>
                        <label for="">Item</label>
                        <input type="text" placeholder="" v-model="nuevoItem.item" required>
                    </div>
                    <div>
                        <label for="">descripcion</label>
                        <input type="text" placeholder="" v-model="nuevoItem.description" required>
                    </div>
                </div>
                <button class="btn--create">Crear nuevo item</button>
            </form>
    </main>
</template>
<style scoped>
form {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #004494;
}
</style>