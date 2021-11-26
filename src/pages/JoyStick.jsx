import React from 'react'
import { Link } from 'react-router-dom'

function JoyStick() {
    return (
        <div className='joystick-container'>
            <div className="bar top-bar">

            </div>

            <Link to='/welcome'><button className='back'>Back</button></Link>

            <div className="heading-mobile">
                <h2>Press the arrow key</h2>
            </div>
            
            <div className="joystick">

                <div className="joystick-buttons">
                    <div className="joystick-btn left">Left</div>
                    <div className="joystick-btn right">Right</div>
                    <div className="joystick-btn top">Top</div>
                    <div className="joystick-btn bottom">Bottom</div>

                    <div className="joystick-btn selected">OK</div>
                </div>
            </div>

            <div className="bar bottom-bar">
  
            </div>
        </div>
    )
}

export default JoyStick
