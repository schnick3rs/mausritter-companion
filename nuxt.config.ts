import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        databaseUrl: process.env.DATABASE_URL,
        databaseDisableSsl: process.env.DATABASE_DISABLE_SSL,
    }
})
