export default defineEventHandler((event) => {
  const id = [...event.node.req.url.split('/')].pop();
  const config = useRuntimeConfig();
  const encodedId = encodeURIComponent(id);
  return $fetch(
    `${config.public.apiBaseUrl}/movie/${encodedId}&language=fr-FR`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${config.public.apiKey}`,
      },
    }
  );
  handleCacheHeaderseaders;
});
