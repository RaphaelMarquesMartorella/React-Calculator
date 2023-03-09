import React from 'react'
import './Calculator.css'
import { useState } from 'react'



const Calculator = () => {

    const [num, setNum] = useState(0)
    const [oldNum, setOldNum] = useState(0)
    const [Operator, setOperator] = useState()
    console.log(num);

    const Numero = (e) => {
        const input = e.target.value
        setNum(input)
        if(num == 0){
            setNum(input)
        }else {
            setNum(num + input)
        }
        
        
    }

    const Clear = (e) => {
        if(e.target.value == 'AC'){
            setNum(0)
        }

    }

    const invertOperator = (e) => {
        if(num > 0) {
            setNum(-num)
        }else {
            setNum(Math.abs(num))
        }
    } 

    const Percentage = () => {
        setNum(num/100)
    }

    const operatorHandler = (e) => {
        const inputOperator = e.target.value
        setOperator(inputOperator)
        setOldNum(num)
        setNum(0)
    }

    const Result = () => {

        if( Operator == '/'){
            setNum(parseFloat(oldNum / num).toFixed(2))
            
        }if( Operator == 'X'){
            setNum(parseFloat(oldNum * num).toFixed(2))
            
        }if( Operator == '-'){
            setNum(parseFloat(oldNum) - parseFloat(num))
        }if( Operator == '+'){
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
        
        
    }


    
   




    return (

        <section>
            <div className='wrapper'>
            <div className='resultado'><h1 className='resultado'>{num}</h1></div>
                <div className='buttons'>
                <div className='row1'>
            <button onClick={Clear} value='AC' className='white'>AC</button>
            <button className='white' onClick={invertOperator}>+/-</button>
            <button className='white' onClick={Percentage}>%</button>
            <button className='orange' onClick={operatorHandler} value='/'>/</button>
            </div>
            <div className='row1'>
            <button className='gray' onClick={Numero} value='7'>7</button>
            <button className='gray' onClick={Numero} value='8'>8</button>
            <button className='gray' onClick={Numero} value='9'>9</button>
            <button className='orange' onClick={operatorHandler} value='X'>X</button>
            </div>
            <div className='row3'>
            <button className='gray' onClick={Numero} value='4'>4</button>
            <button className='gray' onClick={Numero} value='5'>5</button>
            <button className='gray' onClick={Numero} value='6'>6</button>
            <button className='orange' onClick={operatorHandler} value='-'>-</button>
            </div>
            <div className='row4'>
            <button className='gray' onClick={Numero} value='1'>1</button>
            <button className='gray' onClick={Numero} value='2'>2</button>
            <button className='gray' onClick={Numero} value='3'>3</button>
            <button className='orange' onClick={operatorHandler} value='+'>+</button>
            </div>
            <div className='row5'>
            <button className='gray' onClick={Numero} value='0'>0</button>
            <button className='gray' onClick={Numero} value='.'>.</button>
            <button className='gray'  style={{
                visibility: 'hidden'
            }}>,</button>
            <button className='orange' onClick={Result} value='='>=</button>
            </div>
            </div>
            </div>
        </section>
    )
}

export default Calculator