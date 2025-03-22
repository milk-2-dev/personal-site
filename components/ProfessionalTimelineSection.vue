<script setup>
import { ref } from "vue";
import { motion, AnimatePresence } from "motion-v";

const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
const tabs = [tomato, lettuce, cheese];

const selectedTab = ref(tabs[0]);

const data = [
  {
    id: "version1.0",
    label: "Bahnhof",
    date: "Mar 2023 - Sep 2024",
    description:
      "Bahnhof AB is a Swedish internet service provider offering high-speed internet up to 10Gbit/s. Bahnhof provides services to individuals, businesses, and housing associations, including broadband, VPN, antivirus, and streaming solutions.",
    responsibilities: [
      "Support (6 projects) and development of 3 new projects.",
      "Implementation of microfrontend architecture.",
      "Design development and design kit.",
      "Work in a team of 5 people.",
      "Code test coverage.",
    ],
    stack: [
      "Vue.js 2/3",
      "Vuex/Pinia",
      "Typescript",
      "PHP",
      "Single-spa",
      "Jest",
      "Cypress",
    ],
  },
  {
    id: "version2.0",
    label: "RVA",
    date: "Sep 2022 - Mar 2023",
    description:
      "RVA Fintech Solutions is a software product outsourcing company specializing in fintech solutions. They offer services including blockchain development, mobile and web application development, and IT outstaffing.",
    responsibilities: [
      "Transition main website from React SPA to SSR(Next.js).",
      "Support of 2 projects.",
      "Developing new functionality and maintaining the old one.",
      "Work with SEO and writing a small article on this topic.",
      "A lot of work with animations, transitions, and effects.",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Docker", "Typescript"],
  },
  {
    id: "version3.0",
    label: "Voxys",
    date: "Sep 2018 - Feb 2022",
    description:
      "Voxys is a leading outsourcing contact center, offering comprehensive communication solutions including call handling, customer support, and digital automation services.",
    responsibilities: [
      "Design development and design kit.",
      "Refactoring of old code.",
      "Development of new projects.",
    ],
    stack: ["Javascript", "React.js", "Next.js", "Node.js", "Figma", ".Net"],
  },
  {
    id: "version4.0",
    label: "MaxieMind",
    date: "Jul 2017 - Sep 2018",
    description:
      "MaxieMind is an innovative company connecting awesome experienced developers with great customers. Company specialized in the development of mobile and web solutions for start-ups and business.",
    responsibilities: [
      "Design development and design kit.",
      "Refactoring of old code.",
      "Development of new projects.",
    ],
    stack: ["Javascript", "React.js", "Next.js", "Figma"],
  },
];
</script>

<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div
      class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6"
    >
      <div>
        <h2
          class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
        >
          Professional experience.
        </h2>
        <p class="pb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          By working hard in various positions, I have gained a rich and
          unforgettable experience in web application development. You can get
          acquainted with the story of my journey, responsibilities, and the
          stack I worked with in the timeline below:
        </p>
      </div>

      <ClientOnly>
        <Timeline :items="data">
          <template
            v-for="(item, index) in data"
            :key="item.id + 'template'"
            #[item.id]
          >
            <div class="relative w-full pl-20 pr-4 md:pl-4">
              <h3
                class="mb-4 block text-left text-2xl font-bold text-neutral-500 dark:text-neutral-500"
              >
                {{ item.date }}
              </h3>
              <p
                class="mb-4 text-left text-lg text-neutral-500 dark:text-neutral-500"
              >
                {{ item.description }}
              </p>

              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2">
                  <span
                    class="mb-3 font-mono text-sm font-medium text-gray-500 dark:text-gray-400"
                    >Responsibilities:</span
                  >
                  <ul class="list-disc">
                    <li
                      v-for="responsibility in item.responsibilities"
                      class="list-inside list-disc font-light text-neutral-500 dark:text-neutral-500"
                    >
                      {{ responsibility }}
                    </li>
                  </ul>
                </div>

                <div>
                  <span
                    class="mb-3 font-mono text-sm font-medium text-gray-500 dark:text-gray-400"
                    >Stack:</span
                  >
                  <ul class="list-disc">
                    <li
                      v-for="stack in item.stack"
                      class="list-inside list-disc font-light text-neutral-500 dark:text-neutral-500"
                    >
                      {{ stack }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </template>
        </Timeline>
      </ClientOnly>
    </div>
  </section>
  <!-- <div class="container">
    <nav class="nav">
      <ul class="tabs-container">
        <motion.li
          v-for="item in tabs"
          :key="item.label"
          tag="li"
          class="tab"
          :initial="false"
          :animate="{
            backgroundColor: item.label === selectedTab.label ? '#eee' : '#eee0'
          }"
          @click="selectedTab = item"
        >
          {{ `${item.icon} ${item.label}` }}
          <motion.div
            v-if="item.label === selectedTab.label"
            class="underline"
            layout-id="underline"
            id="underline"
          />
        </motion.li>
      </ul>
    </nav>
    <main class="icon-container">
      <AnimatePresence mode="wait">
        <motion.div
          :key="selectedTab ? selectedTab.label : 'empty'"
          :initial="{ y: 10, opacity: 0 }"
          :animate="{ y: 0, opacity: 1 }"
          :exit="{ y: -10, opacity: 0 }"
          :transition="{ duration: 0.2 }"
          class="icon"
        >
          {{ selectedTab ? selectedTab.icon : "😋" }}
        </motion.div>
      </AnimatePresence>
    </main>
  </div> -->
</template>

<style>
.container {
  width: 480px;
  height: 60vh;
  max-height: 360px;
  border-radius: 10px;
  background: white;
  overflow: hidden;
  box-shadow: 0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075), 0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075), 0 16px 16px hsl(0deg 0% 0% / 0.075);
  display: flex;
  flex-direction: column;
}

.nav {
  background: #fdfdfd;
  padding: 5px 5px 0;
  border-radius: 10px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom: 1px solid #eeeeee;
  height: 44px;
}

.tabs-container {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  display: flex;
  width: 100%;
}

.tab {
  list-style: none;
  padding: 0;
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  border-radius: 5px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
  padding: 10px 15px;
  position: relative;
  background: white;
  cursor: pointer;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
  user-select: none;
  color: #0f1115;
}

.underline {
  position: absolute;
  bottom: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--accent);
}

.icon-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.icon {
  font-size: 128px;
}
</style>
