<template>
  <div class="flex flex-col py-10 bg-gray-100 min-h-screen">
    <!-- Header -->
    <div class="text-center mb-10">
      <h2 class="text-4xl font-extrabold text-gray-800">Movie App</h2>
    </div>

    <!-- Search Bar -->
    <div class="flex justify-center mb-10">
      <input
        class="px-4 py-2 border border-gray-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-300 ease-in-out"
        type="text"
        v-model="searchTerm"
        placeholder="Chercher un film ..."
      />
    </div>

    <!-- Movie Grid -->
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 p-4"
    >
      <div
        v-for="movie in data?.results"
        :key="movie.id"
        class="transform transition-transform duration-500 hover:scale-105"
      >
        <MovieCard :movie="movie" />
      </div>
    </div>

    <!-- Loading Spinner -->
    <div v-if="!data" class="flex justify-center items-center min-h-screen">
      <svg
        class="w-12 h-12 text-blue-600 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ApiResponse } from '~/types/ApiResponse';

const searchTerm = ref('');
const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
  return debouncedSearchTerm.value
    ? `/api/movies/search?query=${debouncedSearchTerm.value}`
    : '/api/movies/popular';
});

const { data, error } = await useFetch<ApiResponse>(url);
</script>

<style>
/* Ajoutez ici des styles personnalisés si nécessaire */
</style>
