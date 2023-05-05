import Graph from './graph/graph';

const ExpensesGraph = ({ expenses }) => {
  const graphDataPoints = [
    { lable: 'jan', value: 0 },
    { lable: 'Feb', value: 0 },
    { lable: 'Mar', value: 0 },
    { lable: 'Apr', value: 0 },
    { lable: 'May', value: 0 },
    { lable: 'Jun', value: 0 },
    { lable: 'Jul', value: 0 },
    { lable: 'Aug', value: 0 },
    { lable: 'Sep', value: 0 },
    { lable: 'Oct', value: 0 },
    { lable: 'Nov', value: 0 },
    { lable: 'Dec', value: 0 },
  ];

  return <Graph dataPoints={graphDataPoints} />;
};

export default ExpensesGraph;
