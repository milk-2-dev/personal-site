<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div
      class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6"
    >
      <div class="col-span-2 mb-8">
        <h2
          class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
        >
          About me.
        </h2>
        <p class="pb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          My story as a front-end developer begins in 2013, and like most of
          them, I started with CSS and HTML. I worked as an html-coder for 4
          years. During this time, I have gained extensive knowledge of
          responsiveness, cross-browser and accessibility.
        </p>
        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Since 2017, I have been fully engaged in front-end development using
          popular frameworks and libraries. For the last {{ expirienceYears }}+
          years, I've been building fast, responsive, and efficient web
          solutions. I specialize in UI/UX, interactive web application
          development, performance optimization, and SEO. I help businesses get
          modern, user-friendly and stylish products that engage users and
          increase conversions. 🚀
        </p>
      </div>
      <div
        class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0"
      >
        <div>
          <font-awesome
            class="mb-2 text-primary"
            :icon="['fas', 'dumbbell']"
            size="2x"
          />
          <h3 class="mb-2 text-2xl font-bold dark:text-white">
            {{ expirienceYears }}+ years
          </h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Years of experience in front-end development.
          </p>
        </div>
        <div>
          <font-awesome
            class="mb-2 text-primary"
            :icon="['fas', 'code']"
            size="2x"
          />
          <h3 class="mb-2 text-2xl font-bold dark:text-white">60+ projects</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Projects that have been successfully completed.
          </p>
        </div>

        <div>
          <font-awesome
            class="mb-2 text-primary"
            :icon="['fas', 'people-group']"
            size="2x"
          />
          <h3 class="mb-2 text-2xl font-bold dark:text-white">1.5 years</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Leadership experience in a team.
          </p>
        </div>
        <div>
          <font-awesome
            class="mb-2 text-primary"
            :icon="['fas', 'people-roof']"
            size="2x"
          />
          <h3 class="mb-2 text-2xl font-bold dark:text-white">8M+ users</h3>
          <p class="font-light text-gray-500 dark:text-gray-400">
            Number of users on the project I worked on.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const expirienceYears = computed(() => {
  const startYear = new Date("01.01.2017").getFullYear();
  const currentYear = new Date().getFullYear();

  return currentYear - startYear;
});
</script>

<style lang="scss" scoped></style>
