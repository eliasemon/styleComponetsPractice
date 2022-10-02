import styled from "styled-components";
export const Warper = styled.section`
  padding: 4em;
  display : ${props => props.dis == "flex" ? "flex" : ""};
  justify-content : ${props => props.center ? "center" : ""};
`;