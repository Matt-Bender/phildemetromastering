import React from 'react'

function DiscographyCard(props) {
  const {
    Artist,
    Album,
    Image,
    Year
   } = props

  return (
       <div className="col rounded-5">
        {Image && 
        <div className="card m-3 project-card">
              <img src={Image} className="card-img project-card-image" alt={`Album Artwork ${Album} - ${Artist}`}/>
              <div className=" card-img-overlay hover-appear text-white">
                  <h5 className="card-title font-32 bold mx-2">{Artist.slice(0,20)}</h5>
                  <p className="card-text font-18 mx-2">{Album.slice(0,40)}</p>
                  <p className="card-text font-18 mx-2">{Year}</p>
              </div>
          </div>
}
    </div>
  )
}


export default DiscographyCard