import React from 'react'

function Hero() {
  return (
    <div className='container'>
        <div className='row border-bottom mt-5 text-center'>
            <h1 className='mb-3'>Pricing</h1>
            <p className='mb-5 text-muted'>Free equity investements and flat ₹20 intraday and F&O trades.</p>
        </div>    
        <div className='row mt-5 text-center'>
            <div className='col-4'>
              <img src='media/images/pricing0.svg' style={{width:"70%"}} className='mb-3'/>
              <h1 className='fs-2 mb-4'>Free equity delivery</h1>
              <p className='text-muted fs-5'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className='col-4'>
              <img src='media/images/intradayTrades.svg' style={{width:"70%"}} className='mb-3'/>
              <h1 className='fs-2 mb-4'>Intraday and F&O trades</h1>
              <p className='text-muted fs-5'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className='col-4'>
                <img src='media/images/pricingEquity.svg' style={{width:"70%"}} className='mb-3'/>
                <h1 className='fs-2 mb-4'>Free Direct MF</h1>
                <p className='text-muted fs-5'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
          </div>
    </div>
  )
}

export default Hero