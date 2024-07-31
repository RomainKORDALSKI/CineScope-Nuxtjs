<template>
  <div
    class="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-auto transform transition-transform duration-300 ease-in-out hover:scale-105"
  >
    <NuxtLink :to="`movies/${movie.id}`" class="block relative">
      <img
        class="w-full h-auto object-cover rounded-t-lg"
        :src="getPosterPath(movie.poster_path)"
        alt="Movie Poster"
        loading="lazy"
      />
      <div
        class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"
      ></div>
      <div class="absolute inset-0 flex items-end p-4">
        <div class="text-white">
          <h2 class="text-lg font-semibold mb-1">{{ movie.title }}</h2>
          <p class="text-sm">{{ movie.release_date.split('-')[0] }}</p>
        </div>
      </div>
    </NuxtLink>
    <div class="p-4">
      <p class="text-sm text-gray-600 truncate">{{ movie.overview }}</p>
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
