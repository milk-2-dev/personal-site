<template>
  <div
    class="relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
  >
    <ClientOnly>
      <BlurReveal :delay="0.2" :duration="0.75" class="p-8 z-10">
        <span class="text-xs tracking-tighter">Hey, there 👋</span>
        <span
          class="text-pretty text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8"
        >
          I`m Roman Klimov
        </span>
        <span>
          <TextHighlight
            class="text-base rounded-lg bg-gradient-to-r from-purple-300 to-orange-300 xl:text-2xl/none sm:text-2xl"
            :delay="1000"
          >
            Frontend developer</TextHighlight
          >
        </span>

        <div class="mt-6 py-3">
          <p class="text-base text-gray-600 sm:text-2xl xl:text-2xl">Code - is an art. Design - is an experience.</p>
          <p class="text-base text-gray-600 sm:text-2xl xl:text-2xl">
            I combine the two to create unique web products.
          </p>
        </div>

        <div class="mt-6">
          <span class="mb-4 font-medium tracking-widest text-gray-500 uppercase text-xs">You can reach me via:</span>

          <div class="flex flex-row flex-wrap items-center">
            <ul class="list-none m-0 p-0 flex flex-row flex-wrap items-center">
              <li class="ms-3 first:ms-0">
                <a
                  class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
                >
                  <font-awesome :icon="['fas', 'at']" size="2x" />
                </a>
              </li>
              <li class="ms-3">
                <a
                  class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer"
                >
                  <font-awesome :icon="['fab', 'linkedin']" size="2x" />
                </a>
              </li>
              
              <li class="ms-3">
                <a class="block text-primary hover:text-indigo-600 visited:text-indigo-700 cursor-pointer">
                  <font-awesome :icon="['fab', 'github']" size="2x" />
                </a>
              </li>
            </ul>

            <span class="px-6 font-medium tracking-widest text-gray-500 uppercase text-xs">or</span>

            <InteractiveHoverButton class="w-56" text="Contact form" />
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
  </div>
</template>

<script setup lang="ts">
const isDark = computed(() => useColorMode().value == "white");
</script>

<style>

</style>
