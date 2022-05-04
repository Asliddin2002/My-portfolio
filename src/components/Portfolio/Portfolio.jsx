import React from 'react'
import './portfolio.scss'


const Portfolio = () => {
  return (
        <div className="container portfolio" id='portfolio'>
        <div className='h4 text-center'>Portfolio</div>
        <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="box">
                    <img src={require("../assets/feedback-app.jpg")} alt="" />
                    <div className="shadow">
                        <div className="title">Feedback-app</div>
                        <div className="btns">
                            <a href="#">kod</a>
                            <a href="https://khoasfeedbackapp.netlify.app/">demo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="box">
                    <img src={require("../assets/home-market.jpg")} alt="" />
                    <div className="shadow">
                        <div className="title">House-market-app</div>
                        <div className="btns">
                            <a href="https://github.com/Asliddin2002/house-market-app">kod</a>
                            <a href="https://khoas-house-market-app.netlify.app/">demo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="box">
                    <img src={require("../assets/admin-panel.jpg")} alt="" />
                    <div className="shadow">
                        <div className="title">admin-panel</div>
                        <div className="btns">
                            <a href="https://github.com/Asliddin2002/admin-panel">kod</a>
                            <a href="https://khoas-admin-panel.vercel.app/">demo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="box">
                    <img src={require("../assets/payme.jpg")} alt="" />
                    <div className="shadow">
                        <div className="title">Payme</div>
                        <div className="btns">
                            <a href="https://github.com/Asliddin2002/payme_multilangual_app">kod</a>
                            <a href="https://khoas-payme.netlify.app/">demo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12  col-md-6 col-lg-6 ">
                <div className="box">
                    <img src={require("../assets/shop.jpg")} alt="" />
                    <div className="shadow">
                        <div className="title">shopping-cart-app</div>
                        <div className="btns">
                            <a href="https://github.com/Asliddin2002/commercial-card">kod</a>
                            <a href="https://khoas-commercial-card.vercel.app/">demo</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4 ">
                <div className="box">
                    <img src={require("../assets/redux.jpg")} alt="" />
                    <div className="shadow">
                        <div className="title">Redux-toolkit-app</div>
                        <div className="btns">
                            <a href="https://github.com/Asliddin2002/Redux-toolkit-project">kod</a>
                            <a href="https://khoas-redux-toolkit-project.vercel.app/">demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
  )
}

export default Portfolio