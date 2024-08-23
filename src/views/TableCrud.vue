<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { ref } from 'vue';

  //import axios from "axios"
  onMounted(()=>{
    console.log("montado")
    listarItems()
  })
  const items = ref([])

  const listarItems = async()=>{
    try {
      const response  = await axios.get("http://localhost:3000/posts")
      items.value = response.data
      console.log("Los datos del endpoint: ",items.value)
    } catch (error) {
      console.log("Error al traer o listar items desde el endpoint", error)
    }
  }

  const eliminarItem = async(id, item) =>{
    const confirmDelete = window.confirm(`Estas seguro que quieres eliminar el ${item}`)
    if (confirmDelete) {
        try {
        await axios.delete(`http://localhost:3000/posts/${id}`)
        listarItems()
      } catch (error) {
        console.log("No se pudo eliminar",error)
      }
    }
  }

</script>
<template>
 <main class="table-container">
  <table>
    <thead>
      <tr>
        <th>id</th>
        <th>item</th>
        <th>description</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }} </td>

        <td>{{ item.item }} </td>

        <td>{{ item.description }} </td>

        <div>
          <button @click="eliminarItem(item.id, item.item)">
            Eliminar
          </button>
          <RouterLink :to="{path:'editItem/'+item.id}">Editar</RouterLink> 
        </div>
      </tr>
    </tbody>
  </table>
  <div class="wrapper">
    <nav class="navbar">
      <RouterLink class="link--navbar" to="/item">Nuevo item</RouterLink>
    </nav>
  </div>
 </main>
</template>
<style scoped>
*{
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  background-color: white;
}
.navbar{
margin: 10px auto;
width: 400px;
display: flex;
justify-content: center;
border-radius: 5px;
}
.link--navbar{
  background-color: rgb(0, 81, 255);
  text-decoration: none;
  padding: 10px;
  border-radius: 3px;
  font-weight: 700;
  font-size: 1.2rem;
  color: white;
}

.table-container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
  font-family: 'Arial', sans-serif;
  background-color: #fff;
}

thead {
  background-color: #007BFF;
  color: #fff;
}

th, td {
  text-align: left;
  padding: 12px 15px;
  border-bottom: 1px solid #dddddd;
}

th {
  color: #000;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 14px;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

tbody tr:hover {
  background-color: #f1f1f1;
}

button, a {
  padding: 8px 12px;
  margin-right: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  text-decoration: none;
  color: #fff;
  background-color: #007BFF;
  display: inline-block;
}

button:hover, a:hover {
  background-color: #0056b3;
}

button.delete-btn {
  background-color: #dc3545;
}

button.delete-btn:hover {
  background-color: #c82333;
}
</style>