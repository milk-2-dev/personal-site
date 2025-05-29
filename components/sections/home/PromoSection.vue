<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
      <div
        class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
      >
        <div class="flex items-center lg:justify-center">
          <font-awesome :icon="['fas', 'chart-simple']" size="2x" />
          <span class="ml-2 font-bold text-2xl"> MarTech </span>
        </div>
        <div class="flex items-center lg:justify-center">
          <font-awesome :icon="['fas', 'bullhorn']" size="2x" />
          <span class="ml-2 font-bold text-2xl"> AdTech </span>
        </div>

        <div class="flex items-center lg:justify-center">
          <font-awesome :icon="['fas', 'chart-line']" size="2x" />
          <span class="ml-2 font-bold text-2xl"> FinTech </span>
        </div>
        <div class="flex items-center lg:justify-center">
          <font-awesome :icon="['fas', 'store']" size="2x" />
          <span class="ml-2 font-bold text-2xl"> RetailTech </span>
        </div>
        <div class="flex items-center lg:justify-center">
          <font-awesome :icon="['fas', 'user-graduate']" size="2x" />
          <span class="ml-2 font-bold text-2xl"> EdTech </span>
        </div>
        <div class="flex items-center lg:justify-center">
          <font-awesome :icon="['fas', 'city']" size="2x" />
          <span class="ml-2 font-bold text-2xl"> Smart City </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
