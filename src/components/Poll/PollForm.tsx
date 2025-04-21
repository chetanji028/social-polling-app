 
'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function PollForm() {
  const [title, setTitle] = useState('')
  const [options, setOptions] = useState('')

  const handleCreate = async () => {
    const { data, error } = await supabase
      .from('polls')
      .insert([{ title, created_by: (await supabase.auth.getUser()).data.user?.id }])
      .select()

    if (error) {
      alert(error.message)
      return
    }

    const pollId = data[0].id
    const optionsArray = options.split(',').map((opt) => ({ poll_id: pollId, text: opt.trim(), votes: 0 }))
    await supabase.from('options').insert(optionsArray)

    alert('Poll Created!')
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <input type="text" placeholder="Poll Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Options (comma separated)" value={options} onChange={(e) => setOptions(e.target.value)} />
      <button className="bg-green-600 text-white p-2 rounded" onClick={handleCreate}>Create Poll</button>
    </div>
  )
}
