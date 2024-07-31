// server/api/movies/[id]/videos.ts
import { defineEventHandler, useQuery, createError } from 'h3';
import { useRuntimeConfig } from '#imports';

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const config = useRuntimeConfig();

  try {
    const response = await $fetch(
      `${config.public.apiBaseUrl}/movie/${id}/videos`,
      {
        params: {
          language: 'fr-FR',
        },
        headers: {
          Authorization: `Bearer ${config.public.apiKey}`,
        },
      }
    );

    return response;
  } catch (error) {
    console.error('Failed to fetch movie videos from API:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: error.message,
    });
  }
});
