import Fade from 'react-reveal/Fade';
import BlankSpace from '../../components/BlankSpace'




const Hero = () => {
    return (
        <div className="fullscreen">
        <Fade duration={2000}>
            
        <div className="fullscreen has-bg-img">
            {/* <BlankSpace /> */}
            <div className="row h-100 m-5">
                <div className="col-sm-12 my-auto   ">
                    <div className="card bg-info rounded-4 text-dark border-0 opacity-75 width-50-100">
                        <div className="card-body m-4">
                            <h5 className="card-title align-items-center font-44 bold">Welcome to Phil Demetro Mastering!</h5>
                            <p className="card-text font-28">
                            Thank you for visiting
                            </p>
                            {/* <button className="btn btn-dark text-primary bold rounded-4 m-3 p-3">
                                <h1>
                                    Hire Us
                                </h1>
                            </button> */}
                        </div>
                    </div>
                </div>
            </div>
           
            
                    
            
             


        
      </div>

            </Fade>
        
      </div>
    )
}

export default Hero;