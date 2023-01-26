import styled from "styled-components";

const FooterText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  background: midnightblue;
  color: white;
  height: 6vh;
  margin-top: 0.5rem;
`;

const Footer = () => {
  return <FooterText>Desenvolvido por Bárbara Oliveira</FooterText>;
};

export default Footer;
