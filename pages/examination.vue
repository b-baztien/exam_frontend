<script setup lang="ts">
import { getListQuestion } from "@/constrants/list-question";
import type { Question } from "@/interfaces/Question";

const currentQuestionIndex = ref<number>(0);
const isOpenSubmitScoreModal = ref<boolean>(false);

const listQuestion = getListQuestion();
const questions = ref<Question[]>([]);
const answers = ref<number[]>([]);
const selectedAnswer = ref<number>();
const score = ref<number>(0);

watch(currentQuestionIndex, (newIndex, oldIndex) => {
  if (answers.value?.[oldIndex]) {
    answers.value[oldIndex] = selectedAnswer.value as number;
  } else {
    answers.value.push(selectedAnswer.value as number);
  }

  selectedAnswer.value = toValue(answers)?.[newIndex];
});

const mapQuestionToRadioGroupOptions = (question: Question) => {
  return question.choices.map((choice) => {
    return {
      label: choice.choice,
      value: choice.id,
    };
  });
};

const currentQuestion = computed(() => {
  return toValue(questions)?.[toValue(currentQuestionIndex)];
});

const onNextQuestion = () => {
  const selectedAnswerValue = toValue(selectedAnswer);

  if (selectedAnswerValue) {
    currentQuestionIndex.value += 1;
  }
};

const onPreviousQuestion = () => {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value -= 1;
  }
};

const onSubmitAnswers = () => {
  answers.value.push(selectedAnswer.value as number);
  score.value = checkAnswer();

  isOpenSubmitScoreModal.value = true;
};

const checkAnswer = () => {
  return toValue(questions)
    .map((question, index) => {
      return question.choices.find((choice) => {
        return choice.correct && choice.id === answers.value[index];
      });
    })
    .filter(Boolean).length;
};

onMounted(() => {
  questions.value = listQuestion;
});
</script>

<template>
  <div class="main-container">
    <LazyModalScoreResult :isOpen="isOpenSubmitScoreModal" :score="score" />
    <UCard v-if="questions.length">
      <template #header>
        <h2>
          Question {{ currentQuestionIndex + 1 }} of {{ questions.length }}
        </h2>
      </template>

      <div class="wrap-questions">
        <p>{{ questions?.[currentQuestionIndex].question }}</p>

        <URadioGroup
          :ui="{ wrapper: 'py-4' }"
          v-model="selectedAnswer"
          :options="mapQuestionToRadioGroupOptions(currentQuestion)"
        />
      </div>

      <template #footer>
        <div class="wrap-question-footer">
          <UButton
            :disabled="currentQuestionIndex === 0 || isOpenSubmitScoreModal"
            @click="onPreviousQuestion()"
            color="red"
          >
            Previous
          </UButton>
          <UButton
            v-if="currentQuestionIndex < questions.length - 1"
            :disabled="!selectedAnswer || isOpenSubmitScoreModal"
            color="primary"
            @click="onNextQuestion()"
          >
            Next
          </UButton>
          <UButton
            v-else
            color="primary"
            :disabled="!selectedAnswer || isOpenSubmitScoreModal"
            @click="onSubmitAnswers()"
          >
            Submit
          </UButton>
        </div>
      </template>
    </UCard>
  </div>
</template>

<style scoped>
.wrap-questions {
  @apply flex flex-col gap-4;
}

.wrap-question-footer {
  @apply flex justify-between;
}
</style>
