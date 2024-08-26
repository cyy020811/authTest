// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-04-03",
    devtools: { enabled: true },
    modules: ["@sidebase/nuxt-auth"],
    auth: {
        isEnabled: true,
        disableServerSideAuth: false,
        originEnvKey: "AUTH_ORIGIN",
        baseURL: "http://localhost:3000/api/auth",
        provider: {
            type: "authjs",
            trustHost: false,
            defaultProvider: "auth0",
            addDefaultCallbackUrl: true,
        },
        sessionRefresh: {
            enablePeriodically: true,
            enableOnWindowFocus: true,
        },
    },
});
