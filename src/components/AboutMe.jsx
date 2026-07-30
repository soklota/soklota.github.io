import '../css/AboutMe.css';
import Collage from '../assets/collage.png';


function AboutMe() {

    return(
        <section id='intro'>
        <div className='about__content'>
        <div className='about__title'>~ About Me ❁❁</div>
          <div className='bio'>
                <p className='bio__text'>
                    After graduating from the University of South Carolina with a 
                    Bachelor of Science in Computer Science, I had the opportunity to work at 
                    Rumsey Construction and Restoration for nearly three years. During my time 
                    at Rumsey, I discovered the value I could bring to a team through adaptability,
                     collaboration, and a willingness to take on new challenges. That experience 
                     helped me grow both professionally and personally, while reinforcing my 
                     passion for building meaningful solutions with technology.
                     <br />
                     <br />
                     I'm a creative at heart. In my spare time, you'll usually find me creating content for social 
                     media, designing quirky characters for a small horror game I'm developing, 
                     baking, or serving as my own nail tech and hairdresser.
                </p>
                <img src={Collage} alt='Pictures of Me'></img>
            </div> 
        </div>
        </section>
    );

}

export default AboutMe;