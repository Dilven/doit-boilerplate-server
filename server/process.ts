export const exitProcessWithError = (_signal: string, error: unknown) => {
  console.error("Caught exception in the main process", error);
  process.exit(1);
};

export const exitGracefully = (signal: string) => {
  console.info(`Shutting down app gracefully: ${signal} received`);
  process.exit(0);
};

export const setupProcessHooks = (cleanUp: () => Promise<void>) => {
  process.on("uncaughtException", async (err) => {
    await cleanUp();
    exitProcessWithError("uncaught_exception", err);
  });

  process.on("unhandledRejection", async (err) => {
    await cleanUp();
    exitProcessWithError("unhandled_rejection", err);
  });

  process.on("SIGINT", async () => {
    await cleanUp();
    exitGracefully("SIGINT");
  });

  process.on("SIGTERM", async () => {
    await cleanUp();
    exitGracefully("SIGTERM");
  });
};
