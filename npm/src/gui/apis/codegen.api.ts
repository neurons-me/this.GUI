/**
 * codegen.api.ts
 * -----------------
 * API helper for generating code via OpenAI or local this.env endpoint.
 * Centralizes all network logic for the ChatGPTInterface.
 */

export interface CodeGenRequest {
  type: string;
  prompt: string;
}

export interface CodeGenResponse {
  output: string;
}

export async function generateCode(
  { type, prompt }: CodeGenRequest,
  endpoint: string = "/api/codegen"
): Promise<CodeGenResponse> {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, prompt }),
    });

    if (!response.ok) {
      throw new Error(`Failed to generate code: ${response.statusText}`);
    }

    const data = await response.json();
    return { output: data.output || "No output received." };
  } catch (error: any) {
    console.error("[CodeGen API] Error:", error);
    return { output: `Error: ${error.message || "Unknown error."}` };
  }
}
