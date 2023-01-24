import Fade from 'react-reveal/Fade';
import ProjectCard from './ProjectCard';
import ProjectsCards from '../data/ProjectsCards'




const ProjectsSection = () => {
    return (
        <div className="fullscreen bg-light">
            <div className="text-center font-72 bold pb-5 bg-secondary">Discography Highlights</div>
                <Fade>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                        <div className="container mx-auto mt-4">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4">


                    {ProjectsCards.map(card => {
                        return <ProjectCard key={card.id} {...card}/>
                        
                    })}
                   
                    </div>
              
                </div>
                    </div>
                </Fade>


               
            </div>

    )
};



  

export default ProjectsSection;