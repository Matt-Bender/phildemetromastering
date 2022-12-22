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
                        
                                <div className="card-img-overlay d-flex justify-content-end align-items-center mx-5 ">
                                    <p className="card-text w-50 font-about p-3 rounded-3 bg-primary  text-dark">
                                    This is where Phil can introduce himself and say lots of interesting things about himself,
                                    Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                                    <br/> <br/>

                                    <em>Phil Demetro</em> 
                                    <br/>
                                    Master Masterer


                                    </p>
                                </div>
                    </div>

                </div>
                </Fade>
        
      </div>

    )
}

export default About;