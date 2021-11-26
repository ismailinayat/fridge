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

            <div className="logo"><h3>Cadbury</h3></div>
        <div className="cardt-container">

            <div tabIndex='1' className="card-1">
                <Card img='image1'></Card>
            </div>

            <div tabIndex='2' className="card-2">
                <Card img='image2'></Card>
            </div>

            <div tabIndex='3' className="card-3">
                <Card img='image3'></Card>
            </div>

            <div tabIndex='4' className="card-4">
                <Card img='image4'></Card>
            </div>

            <div tabIndex='5' className="card-5">
                <Card img='image5'></Card>
            </div>

            <div tabIndex='6' className="card-6">
                <Card img='image6'></Card>
            </div>

            <div tabIndex='7' className="card-7">
                <Card img='image7'></Card>
            </div>

            <div tabIndex='8' className="card-8">
                <Card img='image8'></Card>
            </div>

            <div tabIndex='9' className="card-9">
                <Card img='image9'></Card>
            </div>
            
            
        </div>
        </div>
    )
}

export default Shop
