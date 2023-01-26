import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.5rem;
  text-align: center;
  color: indigo;
  padding-top: 1rem;
`;

interface TitleDashboardProps {
  children: React.ReactNode;
}

const DashboardTitle = ({ children }: TitleDashboardProps) => (
  <Title>{children}</Title>
);

export default DashboardTitle;
