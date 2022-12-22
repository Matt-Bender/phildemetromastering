import { Link } from 'react-router-dom'
import React from "react"
import Social from './Social'


const Navbar = () => {
  const navbarLinks = [
    {
      id: 1,
      title: "Home",
      link: "/"

    },
    {
      id: 2,
      title: "More",
      link: "/more"

    },
  ]
    return (
        <nav className="navbar navbar-expand-lg py-3 shadow-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h3 className="text-primary rounded-4 mx-5 px-4 font-36"><strong>Phil DeMetro Mastering</strong></h3>
            </Link>
            <Social />
            <div>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navbarLinks.map(link => {
                return (
                <li className="nav-item text-align-center">
                  <Link className="nav-link active fs-3 mx-5 px-4 rounded-4 hover-button align-text-bottom text-light"
                    aria-current="page" 
                    to={link.link}>
                    {link.title}
                    </Link>
                  
                </li>
                  )

              })}

              
              
             
              <li className="nav-item dropdown">  
                <Link className="nav-link mx-5 px-4 rounded-5 btn btn-primary bold text-dark font-20" to="/contact" role="button" aria-expanded="false">
                  Hire Us
                </Link>
              
              </li>
            </ul>

            </div>
          </div>
        </div>
      </nav>
    )
  }

  export default Navbar;