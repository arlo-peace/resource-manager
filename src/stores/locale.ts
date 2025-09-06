import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
    state: () => ({
        locale: localStorage.getItem('locale') || 'en' // default
    }),
    actions: {
        setLocale(lang: any) {
            this.locale = lang
            localStorage.setItem('locale', lang)
        }
    }
})