export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  try {
    const response = await $fetch(
      `${config.public.apiBaseUrl}/movie/popular?language=fr-FR`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${config.public.apiKey}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Failed to fetch popular movies from API:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: error.message,
    });
  }
});
