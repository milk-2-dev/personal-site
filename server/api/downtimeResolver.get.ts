export default defineEventHandler(async (event) => {
  return {
    success: true,
    message: `The service is up and running.`,
  };
});