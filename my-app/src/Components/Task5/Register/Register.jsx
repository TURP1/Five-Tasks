import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Flex from '../additional/Flex';
import ErrorMessage from '../additional/ErrorMessage';
import style from '../Task5.module.css'

function Register({ startPerformance }) {

  const [area, setArea] = useState(0)
  const { register, watch, handleSubmit, formState: { errors } } = useForm();
  const width = watch('width')
  const height = watch('height');

  useEffect(() => {
    if (width && height) {
      setArea(width * height)
    }
  }, [width, height])

  const onSubmit = data => {
    startPerformance(data)

  }

  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction="column" align="center" margin="50px" >
        <h3>Choose actors count</h3>
        {errors.actors &&
          <Flex direction="column" align="center">
            <input className={style.input} type="number" placeholder="actors " {...register("actors", { required: true, max: 8, min: 1 })} />
            <ErrorMessage color="red">This field is required and must be between 1 and 8.</ErrorMessage>
          </Flex>
        }
        {!errors.actors &&
          <Flex direction="column">
            <input className={style.input} type="number" placeholder="actors " {...register("actors", { required: true, max: 8, min: 1 })} />
          </Flex>
        }
        <h3>Choose stage size</h3>

        <Flex gap="40px">
          {errors.height &&
            <Flex direction="column" align="center">
              <Flex align="flex-start">
                <div className={style.margin_top_10 + " " + style.margin_right_5}>Height</div>
                <input className={style.input} type="number" placeholder="height" {...register("height", { required: true, max: 3, min: 1 })} />
              </Flex>
              <ErrorMessage color="red">This field is required and must be between 1 and 3.</ErrorMessage>
            </Flex>
          }
          {!errors.height &&
            <Flex align="flex-start">
              <div className={style.margin_top_10 + " " + style.margin_right_5}>Height</div>
              <input className={style.input} type="number" placeholder="height" {...register("height", { required: true, max: 3, min: 1 })} />
            </Flex>
          }

          {errors.width &&
            <Flex direction="column" align="center">
              <Flex align="center">
                <div className={style.margin_top_10 + " " + style.margin_right_5}>Width</div>
                <input className={style.input} type="number" placeholder="width" {...register("width", { required: true, max: 4, min: 1 })} />
              </Flex>
              <ErrorMessage color="red">This field is required and must be between 1 and 4.</ErrorMessage>
            </Flex>
          }
          {!errors.width &&
            <Flex align="flex-start">
              <div className={style.margin_top_10 + " " + style.margin_right_5}>Width</div>
              <input className={style.input} type="number" placeholder="width" {...register("width", { required: true, max: 4, min: 1 })} />
            </Flex>
          }
        </Flex>
        <h3>Stage Area</h3>

        {area <= 12 &&
          <input className={style.input + " " + style.tac} disabled type="number" value={area} />
        }
        {area > 12 &&
          <input className={style.input + " " + style.error + " " + style.tac} disabled type="number" value={area} />
        }





        <input className='submitBtn' value="Create Stage" type="submit" />
      </Flex>


    </form>

  );
}


export default Register;
