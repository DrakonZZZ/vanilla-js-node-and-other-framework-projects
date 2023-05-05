import GraphMark from './GraphMark';
import styled from 'styled-components';

const GraphDiv = styled.div`
  padding: 1rem;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  height: 10rem;
`;

const Graph = ({ dataPoints }) => {
  const dataPointsValue = dataPoints.map((dataPoint) => {
    dataPoint.value;
  });
  const maximumValue = Math.max(...dataPointsValue);
  return (
    <GraphDiv>
      {dataPoints.map((dataPoint) => {
        <GraphMark
          key={dataPoint.id}
          value={dataPoint.value}
          max={maximumValue}
          label={dataPoint.label}
        />;
      })}
    </GraphDiv>
  );
};

export default Graph;
