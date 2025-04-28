<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div class="flex justify-center items-center">
        <ul
          class="list-none m-0 p-0 flex flex-row flex-wrap items-center space-x-6"
        >
          <li>
            <a
              class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
              href="mailto:create.with.klimov@gmail.com"
              target="_blank"
            >
              <font-awesome :icon="['fas', 'at']" size="lg" />
            </a>
          </li>
          <li>
            <a
              class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
              href="http://linkedin.com/in/roman-klimov-frontend-developer"
              target="_blank"
            >
              <font-awesome :icon="['fab', 'linkedin']" size="lg" />
            </a>
          </li>

          <li>
            <a
              class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
              href="https://github.com/milk-2-dev"
              target="_blank"
            >
              <font-awesome :icon="['fab', 'github']" size="lg" />
            </a>
          </li>
        </ul>
      </div>
      <div class="text-sm text-center text-gray-500 dark:text-gray-400 mt-3">
        © {{ currentYear }} - {{ logo }}. All Rights Reserved.
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
const logo = "<Klimov/>";
</script>

<style lang="scss" scoped></style>
