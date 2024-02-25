<script setup lang="ts">
import type { FormError, FormErrorEvent } from "#ui/types";
import { useScoreStore } from "@/store/score";
import type { Leaderboard } from "~/interfaces/leaderboard";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
  score: {
    type: Number,
    required: true,
  },
});

const router = useRouter();

const scoreStore = useScoreStore();

const state = reactive<Pick<Leaderboard, "name">>({
  name: "",
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name)
    errors.push({ path: "name", message: "Please enter your name" });
  return errors;
};

async function onError(event: FormErrorEvent) {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
  element?.scrollIntoView({ behavior: "smooth", block: "center" });
}

const onSubmitScore = () => {
  scoreStore.addScore({ ...state, score: props.score });

  router.push({ name: "leaderboard" });
};
</script>

<template>
  <UModal :modelValue="isOpen" @close="onSubmitScore" prevent-close>
    <UForm
      :validate="validate"
      :state="state"
      class="space-y-4"
      @submit="onSubmitScore"
      @error="onError"
    >
      <UCard>
        <div class="flex flex-col items-center">
          <h1 class="text-2xl font-bold">Your score</h1>
          <h2 class="text-4xl font-bold">{{ score }}</h2>
        </div>
        <div class="flex flex-col items-center mt-4">
          <UFormGroup name="name" class="w-1/2">
            <UInput v-model="state.name" placeholder="Enter your name"></UInput>
          </UFormGroup>
        </div>
        <div class="flex justify-center mt-4">
          <UButton type="submit">Submit</UButton>
        </div>
      </UCard>
    </UForm>
  </UModal>
</template>
