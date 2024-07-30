<template>
  <div class="flex flex-col py-10">
    <div>
      <h2 class="text-3xl font-bold text-center">Movie app</h2>
    </div>
    <div class="flex justify-center items-center h-32">
      <input
        class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
        type="text"
        v-model="searchTerm"
        placeholder="Search..."
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10"
    >
      <!-- Display the movie results -->
      <MovieCard
        :movie="movie"
        v-for="movie in data?.results"
        :key="movie.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
/* __placeholder__ */
import type { ApiResponse } from '~/types/ApiResponse';

const searchTerm = ref('');

const debouncedSearchTerm = refDebounced(searchTerm, 700);

const url = computed(() => {
  return `api/movies/search?query=${debouncedSearchTerm.value}`;
});

const { data, error } = await useFetch<ApiResponse>(url);
</script>

<style>
/* Add your styles here */
</style>
