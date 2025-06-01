<template>
  <section
    class="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden bg-background"
  >
    <ClientOnly>
      <BlurReveal :delay="0.2" :duration="0.75" class="p-8 z-10">
        <div class="mt-6 py-3 text-base text-gray-600 sm:text-3xl xl:text-4xl">
          <p class="">"I’m like the stylist you trust with your hair — but a</p>
          <p class=" ">
            <TextHighlight
              class="text-base rounded-lg bg-gradient-to-r from-indigo-300 to-purple-300 sm:text-3xl xl:text-4xl"
              :delay="1000"
            >
              frontend developer</TextHighlight
            >
            you can trust with your product."
          </p>
        </div>

        <div class="mt-6">
          <span
            class="font-medium tracking-widest text-center text-gray-500 uppercase text-xs block mb-3 sm:mb-0 sm:inline sm:text-left"
            >You can reach me via:</span
          >

          <div class="flex flex-col flex-wrap items-center sm:flex-row">
            <ul
              class="list-none m-0 mb-3 p-0 flex flex-row flex-wrap items-center sm:mb-0"
            >
              <li class="ms-3 first:ms-0">
                <a
                  class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
                  href="mailto:create.with.klimov@gmail.com"
                  target="_blank"
                >
                  <font-awesome :icon="['fas', 'at']" size="2x" />
                </a>
              </li>
              <li class="ms-3">
                <a
                  class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
                  href="http://linkedin.com/in/roman-klimov-frontend-developer"
                  target="_blank"
                >
                  <font-awesome :icon="['fab', 'linkedin']" size="2x" />
                </a>
              </li>

              <li class="ms-3">
                <a
                  class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
                  href="https://github.com/milk-2-dev"
                  target="_blank"
                >
                  <font-awesome :icon="['fab', 'github']" size="2x" />
                </a>
              </li>
            </ul>

            <span
              class="px-6 font-medium tracking-widest text-gray-500 uppercase text-xs mb-3 sm:mb-0"
              >or</span
            >

            <InteractiveHoverButton
              class="w-56 mb-3 sm:mb-0"
              text="Contact form"
              @click="scrollToAnchor()"
            />
          </div>
        </div>
      </BlurReveal>
    </ClientOnly>

    <ParticlesBg
      class="absolute inset-0"
      :quantity="100"
      :ease="100"
      :color="isDark ? '#FFF' : '#000'"
      :staticity="10"
      refresh
    />
  </section>
</template>

<script setup lang="ts">
import { BlurReveal, TextHighlight } from "@/components/ui/text";
import { ParticlesBg } from "@/components/ui/backgrounds";
import InteractiveHoverButton from "@/components/ui/buttons/InteractiveHoverButton.vue";

import { useRouter } from "vue-router";

const router = useRouter();

const scrollToAnchor = () => {
  router.push({ path: "/", hash: "#contactForm" });
};

const isDark = computed(() => useColorMode().value == "white");
</script>

<style></style>
