export default defineEventHandler(async (event) => {
  const id = [...event.node.req.url.split('/')].pop();
  const config = useRuntimeConfig();
  const encodedId = encodeURIComponent(id);
  try {
    const response = await $fetch(
      `${config.public.apiBaseUrl}/movie/${encodedId}?language=fr-FR`,
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
    console.error('Failed to fetch movie details from API:', error);
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: error.message,
    });
  }
});
