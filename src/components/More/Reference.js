import micheadphones from '../../images/mic-headphones-portait.jpg';
import { EquipmentList } from './EquipmentList';

const Reference = () => {
    return (
        <div className="fullscreen bg-light">
            <h2 className="d-flex justify-content-center py-5 lh-1 mb-3 font-60 bold bg-secondary">Those who work with us</h2>

            <div className="d-flex justify-content-center">
                
                <div className="card w-50 border-0 bg-light">
                    <div className="row">
                        

                        <div className="col-md-5 d-flex align-items-center">
                        <img src= { micheadphones } className="img-fluid rounded-5" width="700" height="500" alt="..."/>
                        </div>
                        <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title font-28 bold">Client Name</h5>
                            <p className="card-text font-italic"><em>This is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional This is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional contentThis is a wider card with supporting text below as a natural lead-in to additional</em></p>
                            <p className="card-text"><small class="text-muted">Satisfied Client</small></p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
      </div>
    )
}

export default Reference;