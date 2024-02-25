<script setup lang="ts">
import { useScoreStore } from "~/store/score";

const scoreStore = useScoreStore();

const sortedLeaderboard = computed(() => {
  return scoreStore.listLeaderboard
    .sort((a, b) => b.score - a.score)
    .map((item, index) => {
      return {
        rank: index + 1,
        ...item,
      };
    });
});
</script>

<template>
  <div class="main-container flex-col">
    <h1>Leaderboard</h1>

    <div class="min-w-[50dvw]">
      <UTable class="w-full" :rows="sortedLeaderboard" />
    </div>

    <UButton to="/" class="mt-4"> Main Menu </UButton>
  </div>
</template>

<style>
h1 {
  @apply text-4xl font-bold;
}
</style>
