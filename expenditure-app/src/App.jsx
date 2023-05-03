import styled from 'styled-components';
import Items from './components/Items';
import { Devices } from './components/Devices';

const Container = styled.div`
  padding: 4rem;
  background-color: #504f54;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  border-radius: 10px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  margin: 5rem auto;
  @media ${Devices.sm} {
    max-width: 80vw;
  }
  @media ${Devices.lg} {
    max-width: 70vw;
  }
  @media ${Devices.xl} {
    max-width: 50vw;
  }
`;

const MainHeader = styled.h1`
  text-align: center;
  color: white;
`;

function App() {
  const expenses = [
    { id: 1, title: 'Rental car', amount: 40, date: new Date(2022, 0, 1) },
    { id: 2, title: 'Bidet', amount: 240, date: new Date(2022, 2, 11) },
    {
      id: 3,
      title: 'Hooks and cables',
      amount: 120,
      date: new Date(2022, 4, 17),
    },
    { id: 4, title: 'chainsaw', amount: 155, date: new Date(2022, 6, 22) },
  ];
  return (
    <Container>
      <MainHeader> Expenses Tracker </MainHeader>
      {expenses.map((item) => (
        <Items
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Container>
  );
}

export default App;
