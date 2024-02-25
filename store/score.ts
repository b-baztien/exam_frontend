import type { Leaderboard } from "~/interfaces/leaderboard";

export const useScoreStore = defineStore("score", () => {
  const listLeaderboard = ref<Leaderboard[]>([]);

  function addScore(leaderboard: Leaderboard) {
    listLeaderboard.value.push(leaderboard);
  }

  return {
    listLeaderboard,
    addScore,
  };
});
