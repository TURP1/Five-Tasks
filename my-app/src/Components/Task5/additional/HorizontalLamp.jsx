import styled from "styled-components";

const StyledHorizontalLamp = styled.div`
  width: 30px;
  height: 50px;
  position: relative;
  bottom: -20px;
  left: ${props => props.left || ' 0px'};
  display: ${props => props.display || 'none'};
  background-color: black;
`
const StyledHorizontalLight = styled.div`
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;
  border-top: ${props => props.stageHeight ? props.stageHeight + " solid rgba(220, 212, 130, 0.605)" : '600px solid rgba(220, 212, 130, 0.605)'};
  bottom: 30px;
  left: -84px;
  position: absolute;
  pointer-events: none;
  filter: blur(10px);
`;

function HorizontalLamp(props) {
  return <StyledHorizontalLamp {...props} >
    <StyledHorizontalLight {...props}></StyledHorizontalLight>
  </StyledHorizontalLamp>
}

export default HorizontalLamp;