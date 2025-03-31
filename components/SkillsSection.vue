<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div class="mb-4">
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
        >
          Skills.
        </h2>
        <p
            class="pb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400"
          >
            I am constantly improving my knowledge and mastering new
            technologies to create even better and more efficient solutions.
            Here are the main technologies and tools I work with:
          </p>
      </div>

      <div class="gap-8 grid sm:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          
          <div v-for="skillList in skills">
            <ul v-for="list in skillList">
              <li
                v-for="item in list"
                class="mb-3 list-inside inline-block bg-indigo-400 rounded-sm text-white py-1 p-2 font-bold me-2 last:me-0 dark:text-neutral-500"
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
        ></Tetris>
      </div>
    </div>
  </section>
</template>

<script setup>
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
