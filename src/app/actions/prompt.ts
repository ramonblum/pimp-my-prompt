'use server'

import OpenAI from 'openai'
import { z } from 'zod'

const promptSchema = z.object({
  prompt: z.string().min(1),
})

export async function enhancePrompt({ prompt }: z.infer<typeof promptSchema>) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  })

  try {
    promptSchema.parse({ prompt })

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content:
            'You are an expert prompt engineer. You will be given a prompt and you will need to create an optimized prompt suitable for guiding a powerful language model like ChatGPT to perform a specified task efficiently. Ensure clarity, coherence and and comprehensiveness in your instruction. Use language that encourages logical reasoning, detailed explanations, and well-structured output. Answer according to the input language. Just return the enhanced prompt, no other text.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      max_tokens: 256,
      temperature: 1,
    })

    return completion.choices[0].message.content?.trim()
  } catch (error) {
    console.error('Error enhancing prompt:', error)
    return null
  }
}
