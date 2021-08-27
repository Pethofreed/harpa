import './styles.css'
import Harpa_Picture from '../../Harpa/picture_four.jpeg'

const SectionOne = () => {
  return(
    <div class="Section_One_Container">
      <div  class="Section_Header_One">

      </div>
      <div class="Section_Header_Two">
        <img class="Picture_Main" src={Harpa_Picture} alt="this man is Harpa" />
      </div>
    </div>
  )
}

export default SectionOne