import styled from "styled-components";
import test from "../../../public/assets/backgroundHeader.jpeg";

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.8rem;
  font-weight: bold;
  background-image: url("../../../public/assets/backgroundHeader.jpeg");
  background-position: center;
  color: white;
  height: 8vh;
  box-shadow: 9px 7px 5px rgba(73, 89, 134, 0.77);
  margin-bottom: 2rem;
`;

const Header = () => {
  return <Navbar>Harry Potter Books</Navbar>;
};

export default Header;
