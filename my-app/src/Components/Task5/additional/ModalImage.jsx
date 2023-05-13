import styled from "styled-components";

const StyledModalImage = styled.image`
width: 
`

function ModalImage(props) {
    return <StyledModalImage {...props} src={props.src} />
}

export default ModalImage;