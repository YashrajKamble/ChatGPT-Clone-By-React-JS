import OpenAI from 'openai';

const { Configuration, OpenAIApi } = OpenAI;


const configuration = new Configuration({ apiKey: 'sk-None-KM5hyIg66096pfs1pe9gT3BlbkFJn5DSlbCrQfRDt0CGy24F' })

const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAI(message) {
    const res = await openai.createCompletion({
        model: 'text-devinci-003',
        prompt: message,
        temperature: 0.7,
        max_token: 256,
        top_p: 1,
        frequency_penalty: 0,
        presense_penalty: 0
    })
    return res.data.choices[0].text;
}