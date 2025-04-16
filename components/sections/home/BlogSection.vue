<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div class="mb-4">
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
        >
          Blog.
        </h2>
        <p class="pb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          I am constantly improving my knowledge and mastering new technologies
          to create even better and more efficient solutions. Here are the main
          technologies and tools I work with:
        </p>
      </div>

      <BentoGrid class="w-full">
      <BentoGridItem
        v-for="(item, index) in items"
        :key="index"
        :class="index === 0 && 'md:col-span-2'"
      >
        <template #header>
          <div class="flex size-full animate-pulse space-x-4">
            <div class="flex size-full flex-1 rounded-md bg-zinc-800"></div>
          </div>
        </template>

        <template #title>
          <strong>{{ item.title }}</strong>
        </template>

        <template #icon> </template>

        <template #description>
          <p>{{ item.description }}</p>
        </template>
      </BentoGridItem>
    </BentoGrid>
    </div>
  
  </section>
</template>

<script lang="ts" setup>
import {
  BentoGrid,
  BentoGridItem,
} from "@/components/ui/miscellaneous/BentoGrid";

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and experience design.",
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
  }
];
</script>

<style lang="scss" scoped></style>
