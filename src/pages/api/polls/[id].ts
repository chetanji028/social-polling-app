 
import type { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { pollId } = req.query

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { optionId } = req.body

    if (!optionId) {
      return res.status(400).json({ error: 'Option ID is required' })
    }

    // Step 1: Increment the votes for the selected option
    const { error: updateError } = await supabase
      .from('options')
      .update({ votes: supabase.rpc('increment', { x: 1 }) })  // Server-side increment if you create a function
      .eq('id', optionId)

    if (updateError) {
      throw new Error(updateError.message)
    }

    return res.status(200).json({ message: 'Vote submitted successfully!' })
  } catch (error: any) {
    console.error('Voting error:', error)
    return res.status(500).json({ error: error.message || 'Internal Server Error' })
  }
}
