//import {useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import Slides from '../components/slides'
import QR from '../components/QR'
import  {io}  from 'socket.io-client';

//const socket = io("http://localhost:8000")
const socket = io("https://fridge-backend421.herokuapp.com")

function Home() {



    const navigate = useNavigate()

/*
    socket.on('game', ()=> {
        navigate('/game')
    })


    socket.on('shop', ()=> {
        navigate('/shop')
    })
*/
    socket.on('welcome', ()=> {
        console.log('this triggers')
        navigate('/welcome')
        //window.location.replace("/welcome")
    })

    return (
        <div>
            <section className="section-home">

                <QR></QR>
                <Slides></Slides>
                <div className="bg-image-container">

                    <img className='bg-image' src="/UI/fridge-home.jpg" alt="fridge with cadburry chocolates in it" />


                </div>

               
            </section>
        </div>
    )
}

export default Home
