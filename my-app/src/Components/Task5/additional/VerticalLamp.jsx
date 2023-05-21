import styled from "styled-components";

const StyledVerticalLamp = styled.div`
  width: 50px;
  height: 30px;
  position: relative;
  top: ${props => props.top || '0px'};
  display: ${props => props.display || 'none'};
  background-color: rgb(0, 0, 0);
`
const StyledVerticalLight = styled.div`
  border-top: 100px solid transparent;
  border-bottom: 100px solid transparent;
  border-right: ${props => props.stageWidth ? props.stageWidth + " solid rgba(220, 212, 130, 0.605)" : '800px solid rgba(220, 212, 130, 0.605)'};
  bottom: -85px;
  left: 30px;
  position: absolute;
  pointer-events: none;
`;


function VerticalLamp(props) {
  return <StyledVerticalLamp {...props} >
    <StyledVerticalLight {...props}></StyledVerticalLight>
  </StyledVerticalLamp>
}

export default VerticalLamp;