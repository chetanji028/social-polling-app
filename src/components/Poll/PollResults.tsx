import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Define the shape of each option
interface PollOption {
  text: string;
  votes: number;
}

// Define the props for the component
interface PollResultsProps {
  options: PollOption[];
}

export default function PollResults({ options }: PollResultsProps) {
  // Guard clause to handle empty or invalid options
  if (!options || options.length === 0) {
    return <div>No poll data available</div>;
  }

  return (
    <PieChart width={300} height={300}>
      <Pie
        data={options}
        dataKey="votes"
        nameKey="text"
        outerRadius={100}
        fill="#8884d8"
      >
        {options.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
}