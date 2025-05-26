<template>
  <section :class="bgClass">
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
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
}

const props = withDefaults(defineProps<Props>(), {
  name: undefined as SectionName | undefined,
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
