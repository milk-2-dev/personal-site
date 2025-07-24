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
            {{ $t('home.solutionsSection.architecture.title') }}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {{ $t('home.solutionsSection.architecture.description') }}
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
                >{{ $t('home.solutionsSection.architecture.feature_1') }}
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
                >{{ $t('home.solutionsSection.architecture.feature_2') }}
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
                >{{ $t('home.solutionsSection.architecture.feature_3') }}
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
                >{{ $t('home.solutionsSection.architecture.feature_4') }}
              </span>
            </li>
          </ul>
        </div>
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/architectureSolutions.svg"
          sizes="584px sm:607px md:480px"
          width="607"
          height="442"
          alt="Image of Frontend Architecture Solutions"
        />
      </div>
      <div class="items-center gap-8 grid grid-cols-1 sm:grid-cols-2 xl:gap-16">
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/productOrientedSolutions.svg"
          sizes="584px sm:607px md:480px"
          width="607"
          height="442"
          alt="Image of Product-Oriented Solutions"
        />
        <div
          class="text-gray-500 order-first sm:order-2 sm:text-lg dark:text-gray-400"
        >
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {{ $t('home.solutionsSection.product.title') }}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {{ $t('home.solutionsSection.product.description') }}
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
                >{{ $t('home.solutionsSection.product.feature_1') }}</span
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
                >{{ $t('home.solutionsSection.product.feature_2') }}</span
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
                {{ $t('home.solutionsSection.product.feature_3') }}</span
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
                {{ $t('home.solutionsSection.product.feature_4') }}</span
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
                {{ $t('home.solutionsSection.product.feature_5') }}</span
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
            {{ $t('home.solutionsSection.process.title') }}
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            {{ $t('home.solutionsSection.process.description') }}
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
                >{{ $t('home.solutionsSection.process.feature_1') }}</span
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
                >{{ $t('home.solutionsSection.process.feature_2') }}</span
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
                >{{ $t('home.solutionsSection.process.feature_3') }}</span
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
                >{{ $t('home.solutionsSection.process.feature_4') }}</span
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
                >{{ $t('home.solutionsSection.process.feature_5') }}</span
              >
            </li>
          </ul>
        </div>
        <NuxtImg
          class="w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="/images/teamAndProcessSolutions.svg"
          sizes="584px sm:607px md:480px"
          width="607"
          height="442"
          alt="Image of Team & Process Solutions"
        />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped></style>
