import React from 'react';
import style from './Stage.module.css'
import styled from 'styled-components';

//clientTop

const StyledModal = styled.div`
position: absolute;
width: 30%;
top: ${props => {
    if (props.clientTop < window.innerHeight / 2) {
      return props.top + "px"
    }
    else return props.top - 500 + "px"
  }
  };
left: ${props => {
    if (props.left < window.innerWidth / 2) {
      return props.left + "px"
    }
    else return props.left - 430 + "px"
  }};
height: 500px;
border: 2px solid black;
border-radius: 10px;
background-color: white;
z-index: 2;
`

function ModalActors(props) {


  console.log("modal");
  return (
    <StyledModal {...props}>
      MODAL
    </StyledModal>

  )
}


export default ModalActors;
