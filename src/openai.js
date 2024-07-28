// openai.js
export async function sendMsgToOpenAI(message) {
    const { Configuration, OpenAIApi } = await import('openai');

    const configuration = new Configuration({ apiKey: 'sk-None-KM5hyIg66096pfs1pe9gT3BlbkFJn5DSlbCrQfRDt0CGy24F' });

    const openai = new OpenAIApi(configuration);

    const res = await openai.createCompletion({
        model: 'text-davinci-003',  // Corrected the model name
        prompt: message,
        temperature: 0.7,
        max_tokens: 256, // Corrected the property name
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0 // Corrected the property name
    });
    return res.data.choices[0].text;
}
