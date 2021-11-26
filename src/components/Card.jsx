import React from 'react'

function Card({img}) {
    return (
        <div>
            <div tabIndex='1' className="cardt">
                  <div className="cardt__header">
                    <div className="cardt__picture">
                      <div className="cardt__picture-overlay">&nbsp;</div>
                      <img
                        src= {`/${img}.jpg`}
                        alt="Tour 1"
                        className="cardt__picture-img"
                      />
                     
                    </div>

                  </div>

                  <div className="cardt__details">
                   
                    <div className="name"><h3>Anniversary Gift Box- Rich Dry Chocolate</h3></div>
                   
                    <div className="price"><h3>INR 450</h3></div>
                  </div>

                </div>

                <div className="add-cart-btn"><h3>Add to cart</h3></div>
        </div>
    )
}

export default Card
