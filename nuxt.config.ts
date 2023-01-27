import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    css: [
        // 'primevue/resources/themes/saga-blue/theme.css',
        // 'primevue/resources/primevue.css',
        // 'primeicons/primeicons.css',
        '@/assets/css/main.css',
    ],
    build: {
        transpile: ['primevue'],
        postcss: {
            plugins: {
                tailwindcss: {},
                autoprefixer: {},
            },
        },
    },
    modules: [
        '@nuxtjs/tailwindcss',        
    ],
    app: {
        head: {
            title: 'Nuxt Dojo',
            meta: [
                {name: 'description', content: 'Everything about Nuxt 3'}
            ],
            link: [
                {rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }            
            ]
        }
    },
    runtimeConfig: {
        currency_key: process.env.CURRENCY_API_KEY
    }
})