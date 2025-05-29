<template>
  <section :class="bgClass">
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <h2 v-if="props.title" class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
        {{ props.title }}
      </h2>

      <p v-if="props.desc" class="mb-8 pb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400">
        {{ props.desc }}
      </p>

      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
type SectionName =
  | "hero"
  | "promo"
  | "about"
  | "solutions"
  | "skills"
  | "portfolio"
  | "blog"
  | "contact"
  | "footer";

interface Props {
  name?: SectionName;
  title?: string;
  desc?: string;
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined as SectionName | undefined,
  title: "",
  desc: "",
});

const grayBlocks: SectionName[] = ["about", "contact"];

const bgClass = computed(() => {
  if (!props.name) {
    return "bg-white dark:bg-gray-900";
  }
  return grayBlocks.includes(props.name)
    ? "bg-gray-50 dark:bg-gray-800"
    : "bg-white dark:bg-gray-900";
});
</script>

<style lang="scss" scoped></style>
