import React, { useState } from 'react';
import style from './Task4.module.css';

import ShippingAnimation from './Animation/ShippingAnimation';
import OrderShop from './OrderShop/OrderShop';
import Registration from './Registration/Registration';



function FourthTask({ orderShop, orderedShirtsArray, shippingAnimation, registration }) {

  return (
    <div>
      <div className="task">
        <p>
          Завдання 4.

          Для цих змагань менеджер замовив певну кількість футболок різних розмірів. Усього надруковано футболки шести розмірів: S, M, L, XL, XXL, XXXL. Для кожного розміру відома кількість футболок.

          Під час реєстрації організатори попросили кожного із n учасників вказати розмір футболки. Учасник міг обрати 2 розміри, наприклад, M і L - це означає, що йому може підійти будь-яка з цих футболок. Якщо учасник обирає 2 розміри, вони обов'язково повинні бути сусідніми. Це не може бути S та XXL.

          Напишіть програму, яка визначить, чи можливо з футболок, які ми маємо, зробити подарунок усім спортсменам. Кожному учаснику має дістатись футболка його розміру:
          необхідного розміру, якщо вказано один розмір;
          будь-якого з двох розмірів, якщо вказано два сусідні розміри.
          Якщо це можливо, програма повинна вивести будь-яке з можливих рішень.
        </p>
      </div>
        {orderShop && <OrderShop orderedShirtsArray={orderedShirtsArray}></OrderShop>}
      {shippingAnimation && <ShippingAnimation></ShippingAnimation>}
      {registration && <Registration></Registration>}

    </div>

  );
}


export default FourthTask;


