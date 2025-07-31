export const mockGptResponse = {
  id: "chatcmpl-mock123456",
  object: "chat.completion",
  created: Date.now(),
  model: "gpt-3.5-turbo",
  choices: [
    {
      index: 0,
      message: {
        role: "assistant",
        content: "Raaz, Bhoot, 1920, Haunted, Darna mana hai",
      },
      finish_reason: "stop",
    },
  ],
  usage: {
    prompt_tokens: 30,
    completion_tokens: 15,
    total_tokens: 45,
  },
};
