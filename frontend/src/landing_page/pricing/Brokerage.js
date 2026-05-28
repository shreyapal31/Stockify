import React from 'react';

function Brokerage() {
  return (
    <div className='container'>
        <div className='row p-5 mt-5 border-top'>
            <div className='col-7 p-4 text-left'>
                <h3 className='fs-5 text-center' ><a href="/" style={{textDecoration:"None"}}>Brokerage Calculator</a></h3>
                <ul style={{lineHeight:"2.5", fontSize:"14px"}} className='text-muted'>
                  <li>Call & Trade and RMS auto-squareoff: Additional charges of Rs.50 + GST per order.</li>
                  <li>Digital contract notes will be sent via e-mail.</li>
                  <li>Physical copies of contract notes, if required, shall be charged Rs.20 per contract note. Courier charges apply.</li>
                  <li>For NRI account (non-PIS), 0.5% or Rs.100 per executed order for equity (whichever is lower).</li>
                  <li>For NRI account (PIS), 0.5% or Rs.200 per executed order for equity (whichever is lower).</li>
                  <li>If the account is in debit balance, any order placed will be charged Rs.40 per executed order instead of Rs.20 per executed order.</li>
                </ul>
            </div>
            <div className='col-1'></div>
            <div className='col-4 p-4'>
                <h3 className='fs-5' ><a href="/" style={{textDecoration:"None"}}>List of Charges</a></h3>
            </div>
        </div>
    </div>
  );
}

export default Brokerage;