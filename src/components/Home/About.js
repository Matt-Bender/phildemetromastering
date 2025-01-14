import Phil from '../../images/Phil.jpg'
import Fade from 'react-reveal/Fade';


const About = () => {


    return (
        <div className="fullscreen d-flex justify-content-center py-5 bg-dark" >
            <Fade bottom>
            <div className="b-example-divider"></div>
                <div className="h-75 w-75">
                    <div className="card bg-dark text-white rounded-5 desktop-about">
                        <img src={Phil} className="card-img rounded-5 about-img" alt="Headshot"/>
                        
                                <div className="card-img-overlay-about position-absolute bottom-0 d-flex justify-content-end width-50-100 align-items-center m-5 ">
                                    <p className="card-text font-about p-3 rounded-3 bg-primary text-dark opacity-100-70">
                                    Formally a senior Mastering Engineer at the prestigious Lacquer Channel, in Toronto, I have 2+ decades of mastering experience and have worked on 10,000's of projects.  I have recently struck out on my own with the intention of serving my clients more efficiently while staying within your budget. 
                                    <br/> <br/>

                                    <em>Phil Demetro</em> 
                                    <br/>
                                    Mastering Engineer
                                    <br/>
                                    <br/>   
                                    <div className="text-center">
                                        <a href="http://www.maximumexposureinc.com/botf/2023/1/30/interview-phil-dimetro" target="_blank">
                                            <button  
                                            className='btn btn-secondary text-dark bold border border-dark font-24 rounded-pill px-5'>Read More</button>
                                        </a>
                                    </div>



                                    </p>
                                </div>
                    </div>

                </div>
                </Fade>
        
      </div>

    )
}

export default About;