import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

export const useAuthStore = defineStore('auth', () => {
  const token = ref(null)
  const user = ref(null)
  const error = ref(null)

  const login = async (username, password) => {
    try {
      const response = await axios.post('https://api.example.com/login', {
        username,
        password,
      });
      
      // Guardar el token y la información del usuario en el estado
      token.value = response.data.token
      user.value = response.data.user
      
      // Guardar el token en localStorage o cookies si deseas persistencia
      localStorage.setItem('token', token.value);

      // Redirigir o realizar alguna acción después del login
      console.log('Login successful');
    } catch (err) {
      console.error('Login failed', err);
      error.value = 'Login failed: ' + err.message;
    }
  }

  const logout = () => {
    token.value = null
    user.value = null
    localStorage.removeItem('token');
  }

  const loadToken = () => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      token.value = savedToken;
    }
  }

  return {
    token,
    user,
    error,
    login,
    logout,
    loadToken
  }
})