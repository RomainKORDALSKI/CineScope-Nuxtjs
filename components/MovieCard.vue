<template>
  <div class="h-128 w-64 border flex flex-col text-center">
    <NuxtLink :to="`movies/${movie.id}`" class="mb-5 inline-block">
      <img
        class="transform hover:translate-x-6 hover:-translate-y-6 delay-50 duration-100 inline-block"
        :src="getPosterPath(movie.poster_path)"
        alt="Movie Poster"
      />
    </NuxtLink>
    <div class="text-lg">
      {{ movie.title }}
    </div>
    <p
      class="text-m text-gray-500 break-words text-wrap truncate overflow-hidden px-2"
    >
      {{ movie.overview }}
    </p>
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
