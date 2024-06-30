import { OPENAI_API_KEY } from './mine.js';

const url = "https://api.openai.com/v1/chat/completions";

// Replace 'your_api_key_here' with your actual OpenAI API key
const apiKey = OPENAI_API_KEY;

// Create an AbortController to control and cancel the fetch request when the user hits the stop button
const controller = new AbortController();

document.querySelector("#stop").addEventListener("click", () => {
    // Exercise for the reader:
    // Add error handling for when the controller is aborted
    controller.abort();
});

// Make a POST request to the OpenAI API to get chat completions
const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
        messages: [{ role: "user", content: "Tell me a joke" }],
        temperature: 0.6,
        model: "gpt-3.5-turbo",
        // Limiting the tokens during development
        max_tokens: 30,
        stream: true,
    }),
    // Use the AbortController's signal to allow aborting the request
    // This is a `fetch()` API thing, not an OpenAI thing
    signal: controller.signal,
});

// Create a TextDecoder to decode the response body stream
const decoder = new TextDecoder();

// Iterate through the chunks in the response body using for-await...of
for await (const chunk of response.body) {
    const decodedChunk = decoder.decode(chunk);

    // Clean up the data
    const lines = decodedChunk
        .split("\n")
        .map((line) => line.replace("data: ", ""))
        .filter((line) => line.length > 0)
        .filter((line) => line !== "[DONE]")
        .map((line) => JSON.parse(line));

    // Destructuring!
    for (const line of lines) {
        const {
            choices: [
                {
                    delta: { content },
                },
            ],
        } = line;

        if (content) {
            document.querySelector("#content").textContent += content;
        }
    }
}