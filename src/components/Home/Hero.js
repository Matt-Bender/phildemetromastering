import Fade from 'react-reveal/Fade';
import BlankSpace from '../../components/BlankSpace'




const Hero = () => {
    return (
        <div className="fullscreen">
        <Fade duration={2000}>
            
        <div className="fullscreen has-bg-img">
            {/* <BlankSpace /> */}
            <div class="row h-100 m-5">
                <div class="col-sm-12 my-auto   ">
                    <div class="card w-50 bg-info rounded-4 text-dark border-0 opacity-75">
                        <div class="card-body m-4">
                            <h5 class="card-title align-items-center font-36 bold">Your Title here</h5>
                            <p class="card-text font-20">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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