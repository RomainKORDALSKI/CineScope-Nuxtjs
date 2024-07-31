<template>
  <div
    class="flex flex-col items-center bg-gray-100 min-h-screen py-10 px-4 md:px-20"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-7 gap-8 bg-white shadow-lg rounded-lg p-6"
    >
      <img
        class="col-span-1 lg:col-span-2 rounded-lg"
        :src="`https://image.tmdb.org/t/p/w500${data?.poster_path}`"
        alt="Movie Poster"
        loading="lazy"
      />
      <div class="col-span-1 lg:col-span-5 flex flex-col">
        <h1 class="text-4xl font-bold mb-4 text-gray-800">
          {{ data?.title }}
        </h1>
        <div class="flex flex-wrap mb-4">
          <span
            class="px-3 py-1 bg-blue-200 text-blue-800 rounded-full mr-2 mb-2"
            v-for="genre in data?.genres"
            :key="genre.id"
          >
            {{ genre.name }}
          </span>
        </div>
        <div class="flex items-center mb-4">
          <span class="text-lg font-medium text-gray-600 mr-4"
            >Date de sortie :</span
          >
          <span class="text-lg text-gray-800">{{ data?.release_date }}</span>
        </div>
        <div class="flex items-center mb-4">
          <span class="text-lg font-medium text-gray-600 mr-4">Durée :</span>
          <span class="text-lg text-gray-800">{{ data?.runtime }} mins</span>
        </div>
        <div class="flex items-center mb-4">
          <span class="text-lg font-medium text-gray-600 mr-4"
            >Score des utilisateurs :</span
          >
          <span class="text-lg text-yellow-500"
            >{{ data?.vote_average }} / 10</span
          >
        </div>
        <div class="flex items-center mb-4">
          <span class="text-lg font-medium text-gray-600 mr-4">Budget :</span>
          <span class="text-lg text-gray-800">{{
            formatCurrency(data?.budget)
          }}</span>
        </div>
        <p class="text-gray-700 text-lg leading-relaxed">
          {{ data?.overview }}
        </p>
        <MovieTrailer :movie-id="Number(movieId)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from '#app';
import type { Movie } from '~/types/ApiResponse';

const route = useRoute();
const movieId = route.params.id as string;

const { data, error, refresh } = await useAsyncData<Movie>(
  'movie-details',
  () => $fetch(`/api/movies/${movieId}`)
);

function formatCurrency(value: number | undefined): string {
  if (value === undefined) return 'N/A';
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}
</script>
