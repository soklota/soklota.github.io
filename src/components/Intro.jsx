import '../css/Intro.css';
import Typewriter from 'typewriter-effect';
import MyImage from '../assets/spritesheet.png';


function Intro() {
   
    return (
        <section className='intro'>
            <div className='welcome__message'>
                <div className='intro__character'></div>
                    <div className='intro__tagline'>
                        <Typewriter
                        onInit={(typewriter) => {
                        typewriter
                        .typeString("Hey, it's Syd.")
                        .start();  }}
                        />
                    </div>
            </div>
                <div className='intro__text'>
                    <p>I am a dedicated problem solver with a passion for
                         innovation, technology, and continuous learning.</p>
               
                </div>
          
        </section>
    )
}

export default Intro;
