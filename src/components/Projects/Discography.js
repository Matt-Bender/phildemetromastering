import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ProjectCard from './DiscographyCard';
import ProjectsCards from '../data/ProjectsCards';
import Paginate from './Paginate';
import Pagination from 'react-bootstrap/Pagination';





const Discography = () => {
    const [cards, setCards] = useState(ProjectsCards)
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(12);
    const [show, setShow] = useState(true)
 
 
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

   function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

   async function handlePageChange(newPage) {
    handleShow()
    setCurrentPage(newPage)
    await delay(500);
    setShow(true)
    console.log(newPage)
   }

   function handleShow() {
       console.log(!show);
    setShow(!show);
   }

    return (
        <div className="fullscreen bg-light">
            <div className="text-center font-72 bold pb-5 bg-secondary">Discography</div>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                        <div className="container mx-auto mt-4">
                    <Paginate
                        cardsPerPage={cardsPerPage} 
                        totalCards={cards.length} 
                        currentPage={currentPage}
                        handlePageChange={handlePageChange} 
                        className="border border-dark border-2"/>
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">
                 <Fade left big opposite when={show}>
                    {currentCards.map(card => {
                        return <ProjectCard key={card.id} {...card}/>
                        
                    })}
                    </Fade>
                   
                    </div>
                    <Paginate
                        cardsPerPage={cardsPerPage} 
                        totalCards={cards.length} 
                        currentPage={currentPage}
                        handlePageChange={handlePageChange} 
                        className="border border-dark border-2"/>
              
                </div>
                    </div>


               
            </div>

    )
};



  

export default Discography;