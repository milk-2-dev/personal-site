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
        <Title>Senior frontend developer | HTML/CSS, JavaScript, Typescript, React, Vue, Next, Nuxt</Title>
        <!-- <Meta name="description" :content="`My page's ${number} description`" /> -->
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </Head>
    </Html>

    <HeroSection />
    <PromoSection />
    <AboutSection />
    <!-- <SolutionsSection /> -->
    <SkillsSection />
    <!-- <PortfolioSection /> -->
    <!-- <BlogSection /> -->
    <ContactSection />
  </div>
</template>
