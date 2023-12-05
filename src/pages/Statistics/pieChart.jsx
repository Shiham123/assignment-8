import { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Legend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartData = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetch('/donation.json')
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.log(error));
  }, []);

  const transformedData = chartData.map((item) => {
    const lengthData = item.length;
    return lengthData;
  });

  const totalDataValue = transformedData.length;

  const localStorageData = JSON.parse(localStorage.getItem('donation'));
  const lengthData = localStorageData?.length ?? 0;

  const donationOne = (100 / totalDataValue) * lengthData;
  const donationTwo = 100 - donationOne;

  const valueOne = parseFloat(donationTwo.toFixed(2));
  const valueTwo = parseFloat(donationOne.toFixed(2));

  const data = [
    { name: 'Total Item', value: valueOne },
    { name: 'Add Item', value: valueTwo },
  ];

  return (
    <div className="max-w-[1640px] mx-auto flex justify-center items-center">
      <div style={{ width: '100%', height: '100%' }}>
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend />
        </PieChart>
      </div>
    </div>
  );
};

export default PieChartData;
