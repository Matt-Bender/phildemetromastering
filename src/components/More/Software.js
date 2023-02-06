import Xero from '../../images/logos/Xero-logo.png'
import Dext from '../../images/logos/Dext-logo.png'
import plooto from '../../images/logos/plooto-logo.png'
import QBO from '../../images/logos/QBO-logo.png'
import wave from '../../images/logos/wave-logo.jpg'
import PaySimply from '../../images/logos/PaySimply-logo.png'
import Fade from 'react-reveal/Fade';
import { EquipmentList } from './EquipmentList'


const Software = () => {
    
    return (
    <div className="py-5 bg-light">
        <Fade>
        <div className="container">
            <div className="font-72 bold text-center">
                Approach
            </div>
            <p className="font-20">
            Years of ongoing critical listening tests of every aspect of a modern studio has culminated in assembling the best audio signal path that I am aware of anywhere in the world. From 240V power to custom cabling to proprietary gear modifications All of these elements ensure the lowest noise floor to make room for the maximum delivery of a musical signal.
            </p>
        
          
            <div className="row d-flex justify-content-around align-items-center">


            {/* {EquipmentList.map((el) => {
                            return <div id={el.id}>
                                {el.Name}
                            <img src={el.img} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>


                            </div>

                        })} */}
                <div className="col-lg-2 col-md-4 col-sm-6 col-6 hover-grow">

                    <a href="https://www.waveapps.com/" target="_blank">
                        <img src={wave} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6 hover-grow">
                    <a href="https://quickbooks.intuit.com/ca/" target="_blank">
                        <img src={QBO} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6 hover-grow">
                    <a href="https://www.xero.com/ca/" target="_blank" width="100px" height="100px">
                        <img src={Xero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6 hover-grow">
                    <a href="https://dext.com/ca" target="_blank">
                        <img src={Dext} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" height="150px"/>
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6 hover-grow">
                    <a href="https://www.plooto.com/" target="_blank">
                        <img src={plooto} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" loading="lazy" width="150px" height="150px"/>
                    </a>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-6 hover-grow" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">
                    <a href="https://www.paysimply.ca/" target="_blank">
                        <img src={PaySimply} className="d-block mx-lg-auto img-fluid rounded-circle" alt="Bootstrap Themes" loading="lazy" width="150px" height="150px" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"/>
                    </a>
                </div>
                
                
            </div>
        </div>
        </Fade>
    </div>
    );
  }
  
  export default Software;
  
  