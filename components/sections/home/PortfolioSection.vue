<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="relative max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
      <div class="mb-4">
        <h2
          class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
        >
          Portfolio.
        </h2>
        <p class="pb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Explore some of the projects I have worked on, showcasing my skills
          and passion for creating innovative and impactful solutions. Below are
          examples of my work using various technologies and tools:
        </p>
      </div>
      <ClientOnly>
        <div class="grid grid-cols-3 gap-3">
          <CardContainer v-for="index in itemsCount" :key="index">
            <CardBody
              class="group/card relative size-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]"
            >
              <CardItem
                :translate-z="50"
                class="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Fuel prices monitoring app
              </CardItem>
              <CardItem
                as="p"
                translate-z="60"
                class="mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300"
              >
                This application allows the user to track current fuel prices in
                the city of Munster
              </CardItem>
              <CardItem :translate-z="100" class="mt-4 w-full">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div class="mt-20 flex items-center justify-between">
                <CardItem
                  :translate-z="20"
                  as="a"
                  href="https://cfm-fuelprice-client.vercel.app/"
                  target="__blank"
                  class="rounded-xl px-4 py-2 text-xs font-normal dark:text-white"
                >
                  Visit →
                </CardItem>
                <CardItem
                  :translate-z="20"
                  as="button"
                  class="rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                >
                  More info
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </ClientOnly>

      <!-- <div class="mt-8 flex justify-center">
        <InteractiveHoverButton class="w-56" text="More works" />
      </div> -->
    </div>
  </section>
</template>

<script setup>
import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import InteractiveHoverButton from "@/components/ui/buttons/InteractiveHoverButton.vue";

const itemsCount = 3;
</script>

<style lang="scss" scoped></style>
