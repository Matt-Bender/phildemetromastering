import React from 'react'
import BlankSpace from '../components/BlankSpace';
import EquipmentData from '../components/data/EquipmentData';
import Fade from 'react-reveal/Fade';

function EquipmentAccordion() {
    return (
        <div className="bg-light">
      <Fade bottom>
        <div className="fullscreen delivery-cover-image">
          <BlankSpace/>
          <div className="text-center font-72 bold bg-secondary">Equipment</div>
    
          <div className="container">
            <div className="row blankspace"></div>
            <div className="row d-flex justify-content-center align-items-center">
            <div className="accordion w-75-100" id="EquipmentAccordion">
              {/* <div className="card-columns"> */}
    
    
          
          {EquipmentData.map(item => {
          
            return <div key={item.id} className="accordion-item bg-primary" >
                        <h1 className="accordion-header" id={`header${item.id}`}>
                        <button className="accordion-button btn btn-primary font-36 bold" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${item.id}`} aria-expanded="false" aria-controls={`collapse${item.id}`}>
                        {item.title}
      </button></h1>
                    <div id={`collapse${item.id}`} className="accordion-collapse collapse" aria-labelledby={`header${item.id}`} data-bs-parent="#EquipmentAccordion">
                    <div class="accordion-body">
                    <div className="row">{item.list.map(listitem => {
                          return <p className=" py-2 px-4 rounded text-dark fs-4 col-auto">{listitem}</p>})}
                          </div>
                    </div>
                    </div>
                        
                      </div>
    
    
              
          })}
    
    
    
        </div>
        
    
          </div>
          </div>
    
          
        </div>
          </Fade>
          </div>
      )
    };

    export default EquipmentAccordion