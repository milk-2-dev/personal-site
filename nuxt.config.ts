// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    "@nuxtjs/color-mode",
    "@vesp/nuxt-fontawesome",
    "@nuxt/image",
    "@vee-validate/nuxt",
    "shadcn-nuxt",
    "nuxt-anchorscroll",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: "VeeForm",
      Field: "VeeField",
      FieldArray: "VeeFieldArray",
      ErrorMessage: "VeeErrorMessage",
    },
  },
  fontawesome: {
    icons: {
      solid: [
        "at",
        "chart-simple",
        "bullhorn",
        "chart-line",
        "user-graduate",
        "store",
        "city",
        "code",
        "dumbbell",
        "people-group",
        "people-roof",
        "circle-check",
      ],
      brands: ["github", "linkedin", "figma"],
    },
  },
});
