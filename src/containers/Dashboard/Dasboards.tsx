import Bar from "./Bar/Bar";
import Pie from "./Pie/Pie";
import Line from "./Line/Line";
import HorizontalBar from "./HorizontalBar/HorizontalBar";
import styled from "styled-components";
import DashboardTitle from "../../components/DashboardTitle/DashboardTitle";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const DashStyle = styled.div`
  height: 300px;
  width: 100%;
  margin-bottom: 6rem;
  @media (min-width: 769px) {
    max-width: 45%;
  }
`;

const Dasboard = () => {
  return (
    <Container>
      <DashStyle>
        <DashboardTitle>Pages in each books</DashboardTitle>
        <Bar />
      </DashStyle>
      <DashStyle>
        <DashboardTitle>House scores in the first book</DashboardTitle>
        <Pie />
      </DashStyle>
      <DashStyle>
        <DashboardTitle>Trips to Hogwarts</DashboardTitle>
        <Line />
      </DashStyle>
      <DashStyle>
        <DashboardTitle>Deaths in all the books</DashboardTitle>
        <HorizontalBar />
      </DashStyle>
    </Container>
  );
};

export default Dasboard;
