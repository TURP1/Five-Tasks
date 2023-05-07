import styled from "styled-components";

const StyledError = styled.div`
color: ${({ color }) => color};
`

function ErrorMessage(props) {
    return < StyledError {...props} />
}

export default ErrorMessage;