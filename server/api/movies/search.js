export default defineEventHandler(async (event) => {
  const query = getQuery(event).query;
  const config = useRuntimeConfig();
  try {
    const response = await $fetch(
      `${config.public.apiBaseUrl}/search/movie?query=${encodeURIComponent(
        query
      )}&language=fr-FR`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${config.public.apiKey}`,
        },
      }
    );
    return response;
  } catch (error) {
    console.error('Failed to fetch movies from API:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: error.message,
    });
  }
});
