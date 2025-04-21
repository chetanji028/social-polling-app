 
import PollForm from '@/components/Poll/PollForm'

export default function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Create a Poll</h2>
      <PollForm />
    </div>
  )
}
