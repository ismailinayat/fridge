import React from 'react'
import QRCode from 'qrcode.react';

function QR() {
    return (
        <div className='qr_scanner'>
            <QRCode value="https://fridge-sigma.vercel.app/welcome" size={80}></QRCode>
        </div>
    )
}

export default QR
/*
<div className='qr_scanner'>
            <Link to='/welcome'>
                <img src="/qr.png" alt="qr code" />
            
            </Link>
        </div>*/