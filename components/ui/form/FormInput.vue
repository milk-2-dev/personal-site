<template>
  <div>
    <label
      :for="name"
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      :class="[isError ? errorLabelClass : activeLabelClass]"
      >{{ label }}</label
    >
    <input
      v-if="as === 'input'"
      :type="as === 'input' ? type : undefined"
      :id="name"
      class="block p-3 w-full rounded-lg border shadow-sm text-sm text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      :class="[isError ? errorInputClass : activeInputClass]"
      :placeholder="placeholder || `Please write ${label.toLowerCase()}`"
      v-model="model"
    />

    <textarea
      v-else
      :id="name"
      :rows="rows || 6"
      class="block p-3 w-full rounded-lg border shadow-sm text-sm text-gray-900 bg-gray-50 border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
      :class="[isError ? errorInputClass : activeInputClass]"
      :placeholder="placeholder || `Please write ${label.toLowerCase()}`"
      v-model="model"
    />

    <transition name="fade">
      <p v-if="isError" class="text-sm mt-1 text-red-600 dark:text-red-500">
        {{ props.errorMessage }}
      </p>
    </transition>
  </div>
</template>

<script lang="ts" setup>

interface Props {
  type?: string | undefined;
  as?: "input" | "textarea";
  rows?: string | undefined;
  name: string;
  label: string;
  placeholder: string;
  errorMessage: string | undefined;
  mode?: string;
}

const props = withDefaults(defineProps<Props>(), {
  type: "text",
  as: "input",
});

const model = defineModel();
const { name, label } = props;

const isError = computed(() => {
  return props.errorMessage !== undefined;
});

const activeLabelClass = ref("text-gray-900 dark:text-gray-300");
const errorLabelClass = ref("text-red-700 dark:text-red-500");
const activeInputClass = ref("border-gray-300");
const errorInputClass = ref("border-red-500");

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
