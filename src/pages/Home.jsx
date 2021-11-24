//import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
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
            <section className="section-video">

                <QR></QR>
                <Slides></Slides>
                <div className="bg-video">
                    <video className="bg-video__content" autoPlay muted loop>
                        <source src="/video.mp4" type="video/mp4"/>
                        <source src="/video.webm" type="video/webm"/>
                        Your browser is not supported!
                    </video>


                </div>


            <div className="welcome">

            <Link to='/welcome'>Welcome</Link>
            </div>
               
            </section>
        </div>
    )
}

export default Home
