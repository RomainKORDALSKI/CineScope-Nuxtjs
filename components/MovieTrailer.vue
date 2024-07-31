<template>
  <div v-if="trailerUrl" class="flex flex-col items-center mb-10">
    <div class="relative w-full h-0 pb-[56.25%] mb-4">
      <iframe
        :src="trailerUrl"
        frameborder="0"
        allowfullscreen
        class="absolute top-0 left-0 w-full h-full"
        :style="{ borderRadius: '8px' }"
      ></iframe>
    </div>
    <p class="text-gray-600 text-sm">Regarder la bande-annonce</p>
  </div>
  <div v-else class="flex justify-center mb-10">
    <p class="text-gray-600">Chargement de la bande-annonce...</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  movieId: number;
}

const props = defineProps<{
  movieId: number;
}>();

const trailerUrl = ref<string>('');

onMounted(async () => {
  try {
    const response = await fetch(`/api/movies/${props.movieId}/videos`);
    const data = await response.json();
    const trailer = data.results.find(
      (video: { type: string; site: string; key: string }) =>
        video.type === 'Trailer' && video.site === 'YouTube'
    );
    if (trailer) {
      trailerUrl.value = `https://www.youtube.com/embed/${trailer.key}`;
    }
  } catch (error) {
    console.error('Failed to fetch trailer:', error);
  }
});
</script>
