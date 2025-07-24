<template>
  <SectionWrapper name="skills" :title="$t('home.skillsSection.title')" :desc="$t('home.skillsSection.description')">
    <div
      class="gap-8 grid grid-cols-1 sm:grid-cols-2 xl:gap-16"
    >
      <div class="text-gray-500 sm:text-lg dark:text-gray-400">
        <div v-for="skillList in skills">
          <ul v-for="list in skillList">
            <li
              v-for="item in list"
              class="mb-3 list-inside inline-block bg-indigo-400 border border-indigo-400 rounded-sm text-white py-1 p-2 font-bold me-2 duration-300 ease-in-out cursor-default hover:bg-white hover:text-indigo-400 last:me-0 dark:text-neutral-500"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
      <Tetris
        class="h-full w-full [mask-image:radial-gradient(450px_circle_at_center,#6366f1,transparent)]"
        :base="15"
        square-color="#6366f1"
      />
    </div>
  </SectionWrapper>
</template>

<script setup>
import { Tetris } from "@/components/ui/backgrounds";
import SectionWrapper from "@/components/sections/SectionWrapper.vue";


const skills = [
  [
    ["JAVASCRIPT", "TYPESCRIPT"],
    ["REACT", "VUE", "NEXT", "NUXT"],
    ["JEST", "PLAYWRIGHT"],
  ],
  [["HTML", "CSS", "SASS", "TAILWIND CSS"]],
  [
    ["GULP", "WEBPACK", "VITE"],
    ["GIT", "GITHUB", "CI/CD"],
  ],
  [["NODE JS", "EXPRESS JS", "MONGODB"], ["REST API"]],
];
</script>

<style lang="scss" scoped></style>
