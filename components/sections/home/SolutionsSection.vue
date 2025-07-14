<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
    >
      <div class="items-center gap-8 grid grid-cols-1 sm:grid-cols-2 xl:gap-16">
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
      <div class="items-center gap-8 grid grid-cols-1 sm:grid-cols-2 xl:gap-16">
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/productOrientedSolutions.svg"
          alt="dashboard feature image"
        />
        <div class="text-gray-500 order-first sm:order-2 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Product-Oriented Solutions
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            Improving the quality of the interface and user experience to make
            the product fast, convenient, and efficient.
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
                >Contributing to UX/UI solutions, analyzing layouts and
                improving</span
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
                >Optimizing performance: LCP, CLS, TTFB, loading speed</span
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
                Setting up analytics (GA, custom events) and A/B testing</span
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
                Implementing a system for monitoring errors and user behavior
                (Sentry, LogRocket)</span
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
                Ensuring accessibility (a11y), adaptability and i18n
                support</span
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="items-center gap-8 grid grid-cols-1 sm:grid-cols-2 xl:gap-16">
        <div class="text-gray-500 sm:text-lg dark:text-gray-400">
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Team & Process Solutions
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            Assistance in building effective team processes and improving the
            technical culture of the project. Both with newcomers and
            experienced teams.
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
                >Code review, mentoring, onboarding</span
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
                >Setting up CI/CD, tests, code style</span
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
                >Techboard planning, reducing tech debt</span
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
                >Techboard planning, reducing tech debt</span
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
                >Communication with backend, designers, PMs</span
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
                >Participation in planning, estimates, prioritization</span
              >
            </li>
          </ul>
        </div>
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/teamAndProcessSolutions.svg"
          alt="dashboard feature image"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
