import React, { useState } from 'react';
import FourthTask from './Task4';


function FourthTaskMath() {
const [orderShop, setOrderShop] = useState(true)

    return <FourthTask orderShop={orderShop}></FourthTask>
}

export default FourthTaskMath;


