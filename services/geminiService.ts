
import { GoogleGenAI } from "@google/genai";

/**
 * Chat with RIFA's AI Safety Consultant.
 * Uses gemini-3-flash-preview for lightning-fast responses.
 */
export const chatWithSafetyAI = async (message: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  // Initialize AI instance with apiKey from process.env
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  const chat = ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: 'You are a highly professional Fire Safety Consultant for RIFA Fire Safety Services in Solapur. You provide expert advice based on the Maharashtra Fire Prevention & Life Safety Measures Act, 2006. Your tone is authoritative yet helpful. Always guide the user to contact RIFA leadership for official certifications. Use concise technical terms.',
    },
    history: history as any,
  });

  // Use sendMessage and access the .text property
  const response = await chat.sendMessage({ message });
  return response.text;
};

/**
 * Generate a safety-related visualization using Gemini's image generation capabilities.
 * Dynamically switches to gemini-3-pro-image-preview for high-resolution needs.
 */
export const generateSafetyVisual = async (prompt: string, size: '1K' | '2K' | '4K', aspectRatio: string) => {
  // Determine the correct model based on resolution requirements
  const isHighRes = size === '2K' || size === '4K';
  const selectedModel = isHighRes ? 'gemini-3-pro-image-preview' : 'gemini-2.5-flash-image';

  // For high-quality image generation tasks using Pro series, user must explicitly select their API key.
  if (isHighRes && typeof window !== 'undefined' && (window as any).aistudio) {
    const hasKey = await (window as any).aistudio.hasSelectedApiKey();
    if (!hasKey) {
      // Prompt user to select a key from a paid GCP project (billing info: ai.google.dev/gemini-api/docs/billing)
      await (window as any).aistudio.openSelectKey();
    }
  }

  // Always initialize right before the call to ensure up-to-date environment context
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: selectedModel,
      contents: {
        parts: [
          {
            text: `Create a professional technical fire safety visualization or diagram for: ${prompt}. Style: Architectural blueprint or clean 3D technical rendering, high detail, safety compliance focused.`,
          },
        ],
      },
      config: {
        imageConfig: {
          aspectRatio: aspectRatio as any,
          // imageSize is only supported for gemini-3-pro-image-preview models
          ...(isHighRes ? { imageSize: size } : {}),
        },
      },
    });

    // Extract the image part by iterating through all response parts (as per best practices)
    const candidate = response.candidates?.[0];
    if (candidate?.content?.parts) {
      for (const part of candidate.content.parts) {
        if (part.inlineData) {
          return `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
        }
      }
    }
  } catch (err: any) {
    // Graceful error handling: if key is invalid/missing, prompt for re-selection.
    if (err?.message?.includes("Requested entity was not found.") && typeof window !== 'undefined' && (window as any).aistudio) {
      await (window as any).aistudio.openSelectKey();
    }
    throw err;
  }

  throw new Error("Could not generate image. Please try a more descriptive prompt.");
};
