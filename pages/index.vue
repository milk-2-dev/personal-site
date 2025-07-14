<script setup>
import {
  HeroSection,
  PromoSection,
  AboutSection,
  SolutionsSection,
  SkillsSection,
  PortfolioSection,
  BlogSection,
  ContactSection,
} from "@/components/sections/home";

// Add a class to the body
useHead({
  bodyAttrs: {
    class: "my-body-class",
  },
});
</script>

<template>
  <div>
    <Html lang="en">
      <Head>
        <Title
          >Senior frontend developer | HTML/CSS, JavaScript, Typescript, React,
          Vue, Next, Nuxt</Title
        >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
    </Html>

    <HeroSection />
    <PromoSection />
    <AboutSection />
    <SolutionsSection />
    <SkillsSection />
    <!-- <PortfolioSection /> -->
    <!-- <BlogSection /> -->
    <ContactSection />
  </div>
</template>
