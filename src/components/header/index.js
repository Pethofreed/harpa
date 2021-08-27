import Facebook_svg from './facebook.svg';
import Twitter_svg from './twitter.svg';
import Instagram_svg from './instagram.svg';
import Youtube_svg from './youtube.svg';
import './styles.css';

const Header = () => {
  return (
    <div className="Header_Container">
      <div className="Header_First_Section">
        <div className="Header_First_Section_Text">
          <p>SIGUEME YA</p>
        </div>
        <div className="social_media_icons">
          <img className="social_icon icon_facebook" src={Facebook_svg} alt="social media link to facebook" />
          <img className="social_icon icon_twitter" src={Twitter_svg} alt="social media link to facebook" />
          <img className="social_icon icon_instagram" src={Instagram_svg} alt="social media link to facebook" />
          <img className="social_icon icon_youtube" src={Youtube_svg} alt="social media link to facebook" />
        </div>
      </div>
      <div className="Header_Second_Section">
        <h1>HARPA</h1>
        <p>PROYECTO URBANO</p>
      </div>
      <div className="Header_Third_Section">
        <h1>Otras Cosas</h1>
      </div>
    </div>
  )
}

export default Header