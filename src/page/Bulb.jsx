import React, { useState } from 'react'
import  "../App.css"
import {styled} from 'styled-components'


export default function Bulb() {

    const [style1,setstyle1] =useState('light')
    const [style2,setstyle2] =useState('light')
    const [buttontext1,setbuttontext1] =useState('on')
    const [buttontext2,setbuttontext2] =useState('on')


    const changestyle1 =()=>{
        console.log('color changed')
      if(style1 !=='light'){
        setstyle1("light")
        setbuttontext1('on')
      }else{
        setstyle1('red')
        setbuttontext1('off')
      }
    }
    const changestyle2 =()=>{
        console.log("color changed")
        if(style2 !=='light'){
            setstyle2('light')
            setbuttontext2('on')
        }else{
            setstyle2('blue')
            setbuttontext2('off')
        }
    }
  
  return (
    <div>
      <Contain>
        <Heading>React Bulb</Heading>
        <Bulbs>
        <Bulb1 className={style1}></Bulb1>
        <Bulb2 className={style2}></Bulb2>
        </Bulbs>
        <Buttons>
         <Button1 onClick={changestyle1} className={style1}>{buttontext1}</Button1>     
         <Button2 onClick={changestyle2} className={style2}>{buttontext2}</Button2>   
        </Buttons>
      </Contain>

    </div>
  )
}
const Contain =styled.div`
width: 600px;
height: 400px;
margin-left: 25%;
margin-top: 10%;
box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
background-color: black;
`
const Heading =styled.h3`
    color: white;
    padding-top: 25px;
    text-align: center;
    font-size: 40px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`
const Bulb1 =styled.div`
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: 50px;
    border-radius: 50%;

`
const Bulb2 =styled.div`
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: 100px;
    border-radius: 50%;

`
const Bulbs =styled.div`
    width: 300px;
    margin-top: 25px;
    height: 60px;
    display:flex;
    margin-left: 150px;
    background-color: black;
`
const Buttons =styled.div`
    margin-top: 120px;
    margin-left: 150px;
    width: 300px;
    height: 60px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    background-color: #0c0b0b;
`
const Button1 =styled.button`
margin-left: 60px;
margin-top: 15px;
width: 50px;
height: 30px;
border-radius: 10%;
border: none;
cursor: pointer;
`
const Button2 =styled.button`
    margin-left: 100px;
    margin-top: 15px;
    width: 50px;
    height: 30px;
    border-radius: 10%;
    border: none;
    cursor: pointer;
     
`
