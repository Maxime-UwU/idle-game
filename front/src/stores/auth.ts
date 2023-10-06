import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { axios, setGlobalToken } from '../api/axios'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const token = ref('')
  
  const router = useRouter()
  localStorage.clear()
  const storageToken = localStorage.getItem('le_token')
  if (storageToken) {
    axios.get('/auth/me', { headers: { Authorization: `Bearer ${storageToken}`}})
        .then(() => {
            // le token est valide
            setGlobalToken(storageToken)
            console.log("connected")
             router.push('/game') 
        })
        .catch(_err => {
            console.log("not connected")
            // le token n'est pas valide
             router.push('/')
        })
  }
  
  const tryLogin = (username: string, password: string) => {
    axios.post('/auth/login', { username, password })
        .then((res) => {
      
            if (res.data.token) {
                localStorage.setItem('le_token', res.data.token)
                setGlobalToken(res.data.token)
                 router.push('/game') 
            } else {
                router.push('/')

            }
        })
  }

  const register = (username: string, password: string)=>{
    axios.post('/auth/register', {username, password})
    .then((res) => {
      
        if (res.data.token) {
            localStorage.setItem('le_token', res.data.token)
            setGlobalToken(res.data.token)
             router.push('/game') 
        } else {
            router.push('/')

        }
    })
  }
  
  return { token, tryLogin, register }
})
