<template>
  <div>
    <NuxtLayout class="layouts">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>

useHead({
  titleTemplate: 'Roman Klimov | %s',
  meta: [
    { name: 'description', content: 'Frontend developer with 8+ years experience in creating modern web interfaces. I specialize in UI/UX, interactive web application development, performance optimization, and SEO. I help businesses get modern, user-friendly and stylish products that engage users and increase conversions. 🚀 ' },
    { property: 'og:title', content: `Roman Klimov | Senior frontend developer` },
    { property: 'og:description', content: 'Frontend developer with 8+ years experience in creating modern web interfaces. I specialize in UI/UX, interactive web application development, performance optimization, and SEO. I help businesses get modern, user-friendly and stylish products that engage users and increase conversions. 🚀 ' },
    { property: 'og:image', content: 'https://personal-site-ix15.onrender.com/og_image.jpg' },
    { property: 'og:image:alt', content: 'Roman Klimov | Senior frontend developer' },
    { property: 'og:url', content: 'https://personal-site-ix15.onrender.com' },
    { name: 'twitter:title', content: `Roman Klimov | Senior frontend developer` },
    { name: 'twitter:description', content: 'Frontend developer with 8+ years experience in creating modern web interfaces. I specialize in UI/UX, interactive web application development, performance optimization, and SEO. I help businesses get modern, user-friendly and stylish products that engage users and increase conversions. 🚀 ' },
    { name: 'twitter:image', content: 'https://personal-site-ix15.onrender.com/og_image.jpg' },
    { name: 'twitter:image:alt', content: 'Roman Klimov | Senior frontend developer' },
  ],
  link: [
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png'
    },
  ]
})


</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>