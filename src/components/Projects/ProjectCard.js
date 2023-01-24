import React from 'react'

function ProjectCard(props) {
  const {
    artist,
    album,
    link,
    img
   } = props

  return (
      <div className="col rounded-5">
        <div className="card m-3 project-card">
              <img src={img} className="card-img project-card-image" alt="album cover"/>
              <div className=" card-img-overlay hover-appear text-white">
                  <h5 className="card-title font-36 bold mx-4">{artist}</h5>
                  <p className="card-text font-18 mx-4">{album}</p>
                  <a href={link} className="btn btn-secondary m-4 ">Listen</a>
              </div>
          </div>
    </div>
  )
}


export default ProjectCard