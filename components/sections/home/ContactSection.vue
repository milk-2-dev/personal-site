<template>
  <SectionWrapper name="contact">
    <div class="mb-4">
      <h2
        class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white"
      >
        Contact form.
      </h2>
      <p class="pb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400">
        If you have any questions, suggestions, or just want to get in touch,
        please fill out the form below and I will respond as soon as possible.
      </p>
    </div>
    <div class="px-4 mx-auto max-w-screen-md">
      <form @submit.prevent="onSubmit" class="space-y-6">
        <div class="flex gap-6">
          <div class="basis-1/2">
            <FormInput
              name="contactFormName"
              label="Your name"
              placeholder="Please write your name"
              :errorMessage="nameError"
              v-model="name"
            />
          </div>

          <div class="basis-1/2">
            <FormInput
              type="email"
              name="contactFormEmail"
              label="Your email"
              placeholder="Please write your email"
              :errorMessage="emailError"
              v-model="email"
            />
          </div>
        </div>

        <div>
          <FormInput
            as="textarea"
            name="contactFormMessage"
            label="Your message"
            placeholder="Please write your message"
            :errorMessage="messageError"
            v-model="message"
          />
        </div>

        <button
          type="submit"
          class="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span v-if="!isPending">Send message</span>
          <template v-else>
            Sending

            <svg
              class="w-3.5 h-3.5 text-white ms-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
            >
              <circle
                fill="currentColor"
                stroke="currentColor"
                stroke-width="10"
                r="15"
                cx="40"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="1"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.4"
                ></animate>
              </circle>
              <circle
                fill="currentColor"
                stroke="currentColor"
                stroke-width="10"
                r="15"
                cx="100"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="1"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="-.2"
                ></animate>
              </circle>
              <circle
                fill="currentColor"
                stroke="currentColor"
                stroke-width="10"
                r="15"
                cx="160"
                cy="65"
              >
                <animate
                  attributeName="cy"
                  calcMode="spline"
                  dur="1"
                  values="65;135;65;"
                  keySplines=".5 0 .5 1;.5 0 .5 1"
                  repeatCount="indefinite"
                  begin="0"
                ></animate>
              </circle>
            </svg>
          </template>
        </button>
      </form>
    </div>

    <Dialog
      v-if="showDialog"
      :defaultOpen="true"
      @update:open="(v) => (showDialog = v)"
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            >Great! Your message has been successfully sent.</DialogTitle
          >
        </DialogHeader>
      </DialogContent>
    </Dialog>
  </SectionWrapper>
</template>

<script lang="ts" setup>
import { object, string, type InferType } from "yup";
import { useForm, useField } from "vee-validate";
import FormInput from "~/components/ui/form/FormInput.vue";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import SectionWrapper from "@/components/sections/SectionWrapper.vue";

const schema = object({
  name: string().required("Name is required").min(2),
  email: string().required("Email is required").email(),
  message: string().required("The message cannot be empty").min(10),
});

type Schema = InferType<typeof schema>;

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const { value: name, errorMessage: nameError } = useField("name", {
  validateOnValueUpdate: false,
});
const { value: email, errorMessage: emailError } = useField("email");
const { value: message, errorMessage: messageError } = useField("message");

const isPending = ref(false);
const showDialog = ref(false);

const onSubmit = handleSubmit(async (values, actions) => {
  console.log("Дані з форми:", values);
  isPending.value = true;

  // Симуляція відправки
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log("Надіслано!", values);

  showDialog.value = true;
  // actions.resetForm();

  isPending.value = false;
});
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
