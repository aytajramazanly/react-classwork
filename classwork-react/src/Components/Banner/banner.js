import React from 'react'
import './banner.scss'

function Banner({title}) {
  return (
    <div className="banner-area text-center">	
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className="banner-content-wrapper">
                        <div className="banner-content">
                            <h2>{title}</h2> 
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner