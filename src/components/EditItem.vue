<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter()
const updateItem = ref({
    id: null,
    item: '',
    description: ''
})

const cargarItem = async()=> {
    const itemId = useRoute().params.id
    try {
        const response= await axios.get(`http://localhost:3000/posts/${itemId}`)
        updateItem.value = response.data
        console.log(updateItem.value)
    } catch (error) {
        console.log("error al cargar item ",error)
    }
}

const editarItem = async()=>{
    try {
        await axios.put(`http://localhost:3000/posts/${updateItem.value.id}`, updateItem.value)
        setTimeout(()=>{
            alert("libro editado con exito")
        }, 400)
        router.push("/table")
    } catch (error) {
        console.log("error al guardar item ",error)
    }
}

onMounted(()=>{
    cargarItem()
})
</script>
<template>
        <main>
            <form @submit.prevent="editarItem">
                <div>
                    <div>
                        <label for="">Item</label>
                        <input type="text" placeholder="" v-model="updateItem.item" required>
                    </div>
                    <div>
                        <label for="">descripcion</label>
                        <input type="text" placeholder="" v-model="updateItem.description" required>
                    </div>
                </div>
                <button>Guardar cambios item</button>
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