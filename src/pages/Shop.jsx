import React from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom';
import  {io}  from 'socket.io-client';
const socket = io("https://fridge-backend421.herokuapp.com")



function Shop() {

    const navigate = useNavigate()

socket.on('welcome', ()=> {
    console.log('this triggers')
    navigate('/welcome')
    //window.location.replace("/welcome")
})
    return (
        <div className="shop-page">
        <div className="cardt-container">
            <Card img='image1'></Card>
            <Card img='image2'></Card>
            <Card img='image3'></Card>
            <Card img='image4'></Card>
            <Card img='image5'></Card>
            <Card img='image6'></Card>
            <Card img='image7'></Card>
            <Card img='image8'></Card>
            <Card img='image9'></Card>
        </div>
        </div>
    )
}

export default Shop
