import Fade from 'react-reveal/Fade';
import WhyUsCard from './WhyUsCard';
import WhyUsCards from '../data/WhyUsCards'




const WhyUsSection = () => {
    return (
        <div className="fullscreen bg-light">
            <div className="text-center font-72 bold pb-5 bg-secondary">Why Choose Us?</div>
                <Fade>
                    <div className="d-flex align-items-center justify-content-center flex-wrap pt-5">
                    {WhyUsCards.map(card => {
                        return <WhyUsCard key={card.id} {...card}/>

                    })}
                   
              
                </div>
                </Fade>


               
            </div>

    )
};



  

export default WhyUsSection;