<script setup>
import PortfolioSection from '~/components/PortfolioSection.vue';
import ProfessionalTimelineSection from '~/components/ProfessionalTimelineSection.vue';

// Add a class to the body
useHead({
  bodyAttrs: {
    class: "my-body-class",
  },
});
const number = ref(1);
</script>

<template>
  <div>
    <Html lang="en">
      <Head>
        <Title>Lucky number: {{ number }}</Title>
        <Meta name="description" :content="`My page's ${number} description`" />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        />
      </Head>
    </Html>

    <TheHero />
    <PromoSection/>
    <AboutSection/>
    <SolutionsSection/>
    <ProfessionalTimelineSection/>
    <SkillsSection/>
    <PortfolioSection/>

  </div>
</template>
