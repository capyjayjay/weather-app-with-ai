const openaiConfig = {
  api: {
    key: process.env.OPENAI_API_KEY ?? "",
  },
};

export { openaiConfig };
export type OpenAIConfig = typeof openaiConfig;
