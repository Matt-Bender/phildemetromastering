import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import ProjectCard from './DiscographyCard';
import ProjectsCards from '../data/ProjectsCards';
import Paginate from './Paginate';
import Pagination from 'react-bootstrap/Pagination';
import YearDropdown from './YearDropdown';
import ProjectsCardsNew from '../data/ProjectsCardsNew';





const Discography = () => {
    const [cards, setCards] = useState(ProjectsCards)
    const [currentPage, setCurrentPage] = useState(1);
    const [cardsPerPage, setCardsPerPage] = useState(18);
    const [show, setShow] = useState(true)
    // const [selectedYear, setSelectedYear] = useState()
    const [ sortBy, setSortBy ] = useState("Year")
    // const [yearFilteredCards, setYearFilteredCards] = useState()
    
    useEffect(() => {
        console.log(sortBy)
        setCards(cards.sort((a,b) => {
            if (sortBy === "Year") {
                return b.Year - a.Year;
            } else if (sortBy ==="Artist") {
                console.log('Artist sort')
                return a.Artist - b.Artist;
            } else if (sortBy === "Album") {
                return a.Album - b.Album
            }
        }))

    },[sortBy])
 
   const indexOfLastCard = currentPage * cardsPerPage;
   const indexOfFirstCard = indexOfLastCard - cardsPerPage;
   const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
//    const years = [...new Set(cards.map((card) => card.Year))];


   function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

   async function handlePageChange(newPage) {
    handleShow()
    setCurrentPage(newPage)
    await delay(1000);
    setShow(true)
    // console.log(newPage)
   }

   function handleShow() {
    //    console.log(!show);
    setShow(!show);
   }

   function findFilenameByIndex(arr, targetIndex) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i].ind);
      if (arr[i].ind == targetIndex) {
        // console.log(arr[i].filename)
        return arr[i].filename;
      }
    }
    return null; // Return null if no matching index is found
  }

    return (
        <div className="fullscreen bg-light">
            <div className="text-center font-72 bold pb-5 bg-secondary">Discography</div>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                        <div className="container mx-auto mt-4">
                        {/* <YearDropdown years={years}/> */}
                    <Paginate
                        cardsPerPage={cardsPerPage} 
                        totalCards={cards.length} 
                        currentPage={currentPage}
                        handlePageChange={handlePageChange} 
                        className="border border-dark border-2"/>


                        {/* Sort By Section */}
                        {/* <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle text-white" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Sort By
                            </button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item"
                                 onClick={() => setSortBy("Year")}
                                 >Year</button></li>
                                <li><button class="dropdown-item"
                                 onClick={() => setSortBy("Artist")}
                                >Artist</button></li>
                                <li><a class="dropdown-item"
                                onClick={() => setSortBy("Album")}
                                 >Album</a></li>
                            </ul>
                            </div> */}

                            <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-6">
                 <Fade left big opposite when={show} duration={1000}>
                    {currentCards.map(card => {
                        const filename = findFilenameByIndex(ProjectsCardsNew, card.ID);
                        console.log("test filename", filename);
                        
                        return <ProjectCard key={card.ID} {...card} />
                        
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