import '../css/Intro.css';
import MyImage from '../assets/pic_of_me3.jpg';
import NightSky from '../components/NightSky';
import NameAnimation from './NameAnimation';


export default function Intro() {
  return (
    <div className="intro">
      <NightSky />
      <div className="intro__content">
        <img className="intro__photo" src={MyImage} alt="Photo of Syd" />
        <div className='intro__name'>
        <NameAnimation name="Sydney Oklota" />
        </div>
      </div>
    </div>
  );
}