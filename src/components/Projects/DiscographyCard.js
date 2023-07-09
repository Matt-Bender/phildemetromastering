import React, { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import loading from '../../images/icons/Spinner-1s-200px.svg';
import album from '../../images/icons/album.png';
// import testimage from filename;


function DiscographyCard(props) {
    const {
    ID,
    Artist,
    Album,
    Image,
    Year
   } = props;

  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [imageUrl, setImageUrl] = useState(Image);

  useEffect(() => {
    // console.log(`${imageUrl}?timestamp=${new Date().getTime()}`)
    setImageUrl(Image)
  },[Image])

  const handleImageError = () => {
    setImageUrl(loading)
    console.log('error')
    setTimeout(() => {
      setImageUrl(Image);
      // console.log(`${imageUrl}?timestamp=${new Date().getTime()}`);
    }, 5000)
  };

  function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('../../images/discography-images/', false, /\.(png|jpe?g|svg)$/));

  return (
       <div className="col rounded-5">
         <div className="card project-card">
         <img 
                src={images[ID-1]}
                className="card-img project-card-image" 
                alt={`Album Artwork ${Album} - ${Artist}`} 
                // onLoad={()=> setIsImageLoaded(true)}
                // onError={handleImageError}
                // style={{ display: isImageLoaded ? 'block' : 'none'}}
                // loading="lazy"
                /> 
         
         {/* {!Image && <img
         className="album-icon"
         src={album}/>} */}
              
              <div className="card-img-overlay hover-appear text-white">
                  <p className="card-title font-18 bold">{Artist.length > 20? Artist.slice(0,20) + "..." : Artist}</p>
                  <p className="card-text font-12">{Album.length > 40 ? Album.slice(0,40) + "..." : Album}</p>
                  <p className="card-text font-14">{Year}</p>
              </div>
          </div>


    </div>
  )
}


export default DiscographyCard