import styled from "styled-components";

const testFun = (obj)=>{
    let str =  ""
    Object.keys(obj).map((v) => {
        let str2 = `${v}: ${obj[v]}`
        str += str2;
    })
    return str
}
export const Text = styled.p`
  /* Adapt the colors based on primary prop */
 
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  padding: 0.25em;

  ${props => testFun(props.sx)}
`;