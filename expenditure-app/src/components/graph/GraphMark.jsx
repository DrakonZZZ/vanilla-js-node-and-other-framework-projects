import styled from 'styled-components';

const MainGraphPoint = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InnerMarkPoint = styled.div`
  height: 100%;
  width: 100%;
  border: 1px solid black;
  background-color: white;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const GraphFill = styled.div`
  background-color: #4826b9;
  width: 100%;
  transition: all 0.2s ease-out;
  height: ${(props) => props.height};
`;

const GraphLabel = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
  text-align: center;
`;

const GraphMark = ({ value, max, label }) => {
  let heightMark = '0%';

  if (max > 0) {
    heightMark = Math.round((value / max) * 100) + '%';
  }
  return (
    <MainGraphPoint>
      <InnerMarkPoint>
        <GraphFill height={heightMark} />
      </InnerMarkPoint>
      <GraphLabel>{label}</GraphLabel>
    </MainGraphPoint>
  );
};

export default GraphMark;
