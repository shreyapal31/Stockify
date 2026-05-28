import React from "react";

function Hero() {
  return (
    <section id="supportHero">
      <div className="pt-5 pb-3" id="supportWrapper">
        <h3 className="text-left">Support Portal</h3>
        <button type="button" class="btn btn-secondary" id="btn"><a href="/" style={{textDecoration:"None"}}>Track Tickets</a></button>
      </div>
      <div className="row ms-5">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-4"/>
          <br />
          <div className="mb-5">
          <a href="/" className="me-3" style={{textDecoration:"None"}}>Track account opening</a>
          <a href="/" className="me-3" style={{textDecoration:"None"}}>Track segment activation</a>
          <a href="/" className="me-3" style={{textDecoration:"None"}}>Intraday margins</a>
          <a href="/" style={{textDecoration:"None"}}>Kite user manual</a>
          </div>
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="/" style={{textDecoration:"None"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="/" style={{textDecoration:"None"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;