import React from 'react';
import style from './Stage.module.css'
import styled from 'styled-components';
import Flex from '../additional/Flex';

//clientTop

const StyledModal = styled.div`
position: absolute;
width: ${props => props.containerWidth - 200 + "px"};
top: ${props => {
    if (props.clientTop < window.innerHeight / 2) {
      return props.top + "px"
    }
    else return props.top - props.containerHeight + 300 + "px"
  }
  };
left: ${props => {
    if (props.left < window.innerWidth / 2) {
      return props.left + "px"
    }
    else return props.left - props.containerWidth + 200 + "px"
  }};
height:${props => props.containerHeight - 300 + "px"} ;
border: 2px solid black;
border-radius: 10px;
background-color: white;
z-index: 2;
`

function ModalActors(props) {
  let modalHandler = (key) => {
    props.chooseActor(key, props.target)
  }

  let mapActors = props.actorsList.map((actor) => {
    return (<img className={style.actorsModalImage} src={actor.img} key={actor.positionIndex} onClick={() => modalHandler(actor.positionIndex)} alt={String(actor.positionIndex)} />)
  })

  return (
    <StyledModal {...props}>

      <Flex justify="center" className={style.modalContainer}>
        {mapActors}
      </Flex>


    </StyledModal>

  )
}


export default ModalActors;
