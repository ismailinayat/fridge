import React from 'react'
import { useNavigate } from 'react-router-dom'
import {useSocket} from '../contexts/SocketProvider';



function JoyStick() {

    const navigate = useNavigate()
    const socket = useSocket();

    const handleLeft = (e) => {

        socket.emit('left')
    
    }
    
    const handleRight = (e) => {
        socket.emit('right')
    }
    
    const handleTop = (e) => {
        socket.emit('top')
    }
    
    const handleBottom = (e) => {
        socket.emit('bottom')
    }
    
    const handleOk = (e) => {
        socket.emit('ok')
    }

    const handleGoBack = (e) => {
        socket.emit('welcome');
        navigate('/welcome')
    }


    return (
        <div className='joystick-container'>
            <div className="bar top-bar">

            </div>

            <div className="go-back" onClick={(e) => handleGoBack(e)}>

                Back
            </div>

            <div className="heading-mobile">
                <h2>Press the arrow key</h2>
            </div>
            
            <div className="joystick">

                <div className="joystick-buttons">
                    <div onClick = {(e) => handleLeft(e)}className="joystick-btn left"><img src="/UI/left.png" alt="" /></div>
                    <div onClick = {(e) => handleRight(e)}className="joystick-btn right"><img src="/UI/right.png" alt="" /></div>
                    <div onClick = {(e) => handleTop(e)}className="joystick-btn top"><img src="/UI/top.png" alt="" /></div>
                    <div onClick = {(e) => handleBottom(e)}className="joystick-btn bottom"><img src="/UI/bottom.png" alt="" /></div>

                    <div onClick = {(e) => handleOk(e)}className="joystick-btn selected">OK</div>
                </div>
            </div>

            <div className="bar bottom-bar">
  
            </div>
        </div>
    )
}

export default JoyStick
