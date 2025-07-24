<template>
  <Select :defaultValue="currentLocale">
    <SelectTrigger>
      <SelectValue>
        {{ currentLocale.toUpperCase() }}
      </SelectValue>
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectLabel>{{ $t('common.languages') }}:</SelectLabel>
        <SelectItem
          v-for="locale in locales"
          :key="locale.code"
          :value="locale.code"
          :disabled="locale.code === currentLocale"
          @select="switchLocale(locale.code)"
        >
          {{ locale.code.toUpperCase() }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const { locales, locale, setLocale } = useI18n();

const currentLocale = computed(() => {
  return locale.value;
});

function switchLocale(code: any) {
  if (code !== currentLocale.value) {
    setLocale(code);
  }
}
</script>

<style scoped></style>
