import { defineStore } from "pinia"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useAlertStore } from "./alert"

export const useAuthStore = defineStore("auth", () => {
  const router = useRouter()
  const user = ref<string | null>(localStorage.getItem("user") || null)
  const token = ref<string | null>(localStorage.getItem("authToken") || null)

  const isLoggedIn = () => !!token.value

  const login = (username: string, password: string) => {
    // fake login check – replace with real API
    if (username === "admin" && password === "123456") {
      user.value = username
      token.value = "example-token"
      localStorage.setItem("user", username)
      localStorage.setItem("authToken", token.value)
      router.push("/")
    } else {
      alert("Invalid credentials")
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem("user")
    localStorage.removeItem("authToken")
    router.push("/login")
  }

  return { user, token, isLoggedIn, login, logout }
})
