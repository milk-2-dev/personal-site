<template>
  <SectionWrapper name="about">
    <div class="items-center md:grid md:grid-cols-4 md:gap-16 lg:gap-24">
      <div class="col-span-2 mb-8">
        <ClientOnly>
          <h2
            class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
          >
            {{ $t("home.aboutSection.title") }}
          </h2>
          <div class="font-light text-gray-500 text-xl dark:text-gray-400">
            <TextGenerateEffect
              :words="aboutText"
              class="pb-3"
              :duration="0.3"
            />
          </div>
        </ClientOnly>
      </div>
      <div class="col-span-2 grid grid-cols-2 gap-12">
        <div>
          <font-awesome
            class="mb-2 text-primary"
            :icon="['fas', 'dumbbell']"
            size="2x"
          />
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            {{ expirienceYears }}+ {{ $t("home.aboutSection.years") }}
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            {{ $t("home.aboutSection.numbers_1") }}
          </p>
        </div>
        <div>
          <font-awesome
            class="mb-2 text-primary"
            :icon="['fas', 'code']"
            size="2x"
          />
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            60+ {{ $t("home.aboutSection.projects") }}
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            {{ $t("home.aboutSection.numbers_2") }}
          </p>
        </div>

        <div>
          <font-awesome
            class="mb-2 text-primary"
            :icon="['fas', 'people-group']"
            size="2x"
          />
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            1.5 {{ $t("home.aboutSection.years") }}
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            {{ $t("home.aboutSection.numbers_3") }}
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup>
import { TextGenerateEffect } from "@/components/ui/text";
import SectionWrapper from "@/components/sections/SectionWrapper.vue";

const expirienceYears = computed(() => {
  const startYear = new Date("01/01/2017").getFullYear();
  const currentYear = new Date().getFullYear();

  return currentYear - startYear;
});

const aboutMeParts = [
  $t("home.aboutSection.aboutMe_1"),
  $t("home.aboutSection.aboutMe_2"),
  $t("home.aboutSection.aboutMe_3"),
];

const aboutText = computed(() => {
  return aboutMeParts.join(" \n ");
});
</script>

<style lang="scss" scoped></style>
