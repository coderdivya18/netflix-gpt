import OpenAI from "openai";
import { OPENAI_GPT_API_KEY } from "./constants.js";

const openai =
  import.meta.env.MODE !== "development"
    ? new OpenAI({
        apiKey: OPENAI_GPT_API_KEY,
        dangerouslyAllowBrowser: true,
      })
    : null;

export default openai;
