<template>
  <div class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden">
    <NuxtLink :to="`movies/${movie.id}`" class="block">
      <img
        class="w-full h-auto transition-transform transform hover:scale-105 duration-300 ease-in-out"
        :src="getPosterPath(movie.poster_path)"
        alt="Movie Poster"
      />
    </NuxtLink>
    <div class="p-4">
      <h2 class="text-xl font-semibold text-gray-800 mb-2">
        {{ movie.title }}
      </h2>
      <p class="text-sm text-gray-600 truncate">
        {{ movie.overview }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '~/types/ApiResponse';

const { movie } = defineProps<{ movie: Movie }>();

function getPosterPath(posterPath: string | null): string {
  return posterPath
    ? `https://image.tmdb.org/t/p/w200${posterPath}`
    : 'https://via.placeholder.com/300x500'; // Remplacez par le chemin de votre image par défaut
}
function defineProps<T>(): { movie: any } {
  throw new Error('Function not implemented.');
}
</script>
