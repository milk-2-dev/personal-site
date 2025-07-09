<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
    >
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Frontend Architecture Solutions
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            Development of a reliable, scalable, and easy-to-maintain frontend
            architecture. Choosing the best technologies, thinking through the
            project structure, implementing modern approaches to the
            organization of code, state, load, and design systems. Everything is
            for fast development and stable operation of the product.
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Choosing frameworks and technologies (React, Vue, Next.js,
                SSR/SPA, TypeScript).
              </span>
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Designing the code structure, separation of modules, layers
                (UI/state/data/services).
              </span>
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Selection and implementation of scaling strategies, lazy
                loading, micro frontends
              </span>
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Building a design system or integrating with a third-party one
                (for example, Storybook + Figma).
              </span>
            </li>
          </ul>
        </div>
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/architectureSolutions.svg"
          alt="dashboard feature image"
        />
      </div>
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/productOrientedSolutions.svg"
          alt="dashboard feature image"
        />
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            UI/UX Design
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            I will develop a stylish and intuitive UI/UX design that will ensure
            comfortable user interaction with your product. I focus on
            aesthetics, usability, and functionality to make your website or app
            not only look attractive but also work efficiently.
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Higher conversion and user engagement</span
              >
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Better user experience</span
              >
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                Stylish visual style</span
              >
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
              >
                Advantage over competitors</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Custom Web Frontend Development
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            I am open to cooperation and can join your team to work on an
            existing project. I offer Custom Web Frontend Development -
            optimization, refactoring, implementation of new features, and UI/UX
            improvements. I'm ready to quickly grasp the code base, work with
            modern approaches, and help your product become even better.
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Quick integration into the team</span
              >
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Code optimization and improvement</span
              >
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Quality code and support</span
              >
            </li>
            <li class="flex space-x-3">
              <font-awesome
                class="text-primary"
                :icon="['fas', 'circle-check']"
                size="1x"
              />

              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Flexible approach</span
              >
            </li>
          </ul>
        </div>
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/solution1.svg"
          alt="dashboard feature image"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
