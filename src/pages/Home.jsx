import {useEffect} from 'react'
import {useNavigate } from 'react-router-dom';
import Slides from '../components/slides'
import QR from '../components/QR'

import {useSocket} from '../contexts/SocketProvider';

function Home() {



    const navigate = useNavigate()
    const socket = useSocket();

    useEffect(() => {
        if (socket == null) return
        socket.on('welcome', ()=> {
            console.log('this triggers')
            navigate('/welcome')
        })

        return () => socket.off('welcome')
    }, [socket, navigate])
   

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
