<template>
  <div class="main-container">
    <NuxtLink to="examination">
      <UCard class="menu-card">
        <template #header>
          <Icon
            class="title-icon"
            name="i-healthicons-i-exam-multiple-choice"
          />
        </template>
        <button>Do examination</button>
      </UCard>
    </NuxtLink>

    <NuxtLink to="leaderboard">
      <UCard class="menu-card">
        <template #header>
          <Icon class="title-icon" name="i-ic-twotone-leaderboard" />
        </template>
        <button>Leaderboard</button>
      </UCard>
    </NuxtLink>
  </div>
</template>

<style>
.menu-card {
  @apply flex flex-col justify-between items-center;
  width: 300px;
  height: 300px;

  button {
    width: 100%;
    height: 100%;
    font-size: 1.5rem;
  }
}

.title-icon {
  @apply text-orange-400;
  font-size: 8rem;
}
</style>
