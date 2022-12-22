import { Link } from 'react-router-dom'
import logo from '../../images/BenderBooksIcon_Colour.png'
import Social from '../Social'

const Footer = () => {
    return (

        <div className="bg-dark">
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <h3 className="text-primary rounded-4 mx-5 px-4 font-36"><strong>Phil DeMetro Mastering</strong></h3>
        <Social />
            <p className="col-md-4 mb-0 font-20 text-info">&copy; 2022 Phil DeMetro Mastering. All Rights Reserved</p>

            <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use href="#bootstrap"/></svg>
            </a>

           
        </footer>
        </div>
        </div>

    )
}

export default Footer;