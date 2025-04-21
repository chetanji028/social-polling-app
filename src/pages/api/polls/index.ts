 
import { NextApiRequest, NextApiResponse } from 'next'
import { supabase } from '@/lib/supabase'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { data, error } = await supabase.from('polls').select('*')
    if (error) return res.status(400).json({ error: error.message })
    return res.status(200).json(data)
  }
  if (req.method === 'POST') {
    const { title, options } = req.body
    const { data, error } = await supabase.from('polls').insert([{ title, options }])
    if (error) return res.status(400).json({ error: error.message })
    return res.status(201).json(data)
  }
}
