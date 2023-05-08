import styled from "styled-components";

const StyledVerticalLamp = styled.div`
  width: 50px;
  height: 30px;
  position: relative;
  top: ${props => props.top || '0px'};
  display: ${props => props.display || 'none'};
  background-color: rgb(0, 0, 0);
`

function VerticalLamp(props) {
    return <StyledVerticalLamp {...props} />
}

export default VerticalLamp;