import { Warper } from '../styledCompunents/Warper';
import { Button } from '../styledCompunents/Button';
import { Text } from '../styledCompunents/Text';
import { useState } from 'react';
import { Input } from '../styledCompunents/Input';
Button
const Card = ({stateLift}) =>{
    const [price, setPrice] = useState(200)
    const [count, setCount] = useState(0)
    const incrementHandel = ()=>{
        setCount(count + 1)
    }
    const decrimentHandel = () =>{
        if(count > 0){
            setCount(count - 1)
        }
        
    }
    const inputHandle = (e)=>{
        setPrice(Number(e.target.value))
    }
    return(
        <>
            <Warper dis = "flex">
               <Button onClick={decrimentHandel}> - </Button>
               <Text sx={{color : 'Green'}} as="p" > {count} </Text>
               <Button css= "color : red;" onClick={incrementHandel}> + </Button>
                <Input onChange = {inputHandle} value = {price} />
               <Text sx={{color : 'Green'}} as="p" > = </Text>
               <Text sx={{color : 'Black'}} as="p" > {count * price} </Text>
            </Warper>
        </>
    )
}


export default Card