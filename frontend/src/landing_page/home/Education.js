import React from 'react'

function Education() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <img src='media/images/education.svg' style={{width:"70%"}} alt='education'/>
        </div>
        <div className='col-6 mt-5'>
          <h1 className='mb-3 fs-2'>Free & Open Market Education</h1>
          <p className='mb-2'>Varsity, the  largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="" style={{ textDecoration: "none", marginBottom:"7px"}}>
              Versity
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
          
          <p className='mt-4 mb-2'>TradingQ&A, the most active trading and inveestment community in India for all your market related queries.</p>
          <a href="" style={{ textDecoration: "none"}}>
              TradingQ&A
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
      </div>

    </div>
  );
}

export default Education;