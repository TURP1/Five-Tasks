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

function HorizontalLamp(props) {
    return <StyledHorizontalLamp {...props} />
}

export default HorizontalLamp;