import { defineStore } from "pinia"
import { ref } from "vue"

export type AlertType = "success" | "danger" | "warning" | "info"

export const useAlertStore = defineStore("alert", () => {
  const message = ref("")
  const type = ref<AlertType>("info")
  const show = ref(false)

  const showAlert = (msg: string, alertType: AlertType = "info", timeout = 3000) => {
    message.value = msg
    type.value = alertType
    show.value = true

    setTimeout(() => {
      show.value = false
    }, timeout)
  }

  const hideAlert = () => {
    show.value = false
  }

  return { message, type, show, showAlert, hideAlert }
})
