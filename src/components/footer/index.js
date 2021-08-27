import './styles.css'

function Footer() {
  return (
    <div class="Footer_Container">
      <div class="Footer_Information">
        <div className="Footer_Section_One">
          <p class="Footer_Title">SOBRE MI</p>
          <p class="Footer_Data_Info_1">Madison is a young and talented singer and rapper,<br/>
            hailing from Los Angeles, CA. His unique style is a blend<br/>
            of underground hip-hop and modern  that has <br/>
            already brought him a huge success and national <br/> recognition.
          </p>
          <a href="/landing" class="Btn_Albums">VER ALBUMS</a>
          <a href="/landing" class="Btn_Events">VER EVENTOS</a>
        </div>
        <div className="Footer_Section_Two">
          <p class="Footer_Title">CONTACTO</p>
          <p class="Footer_Subtitle">
            TELEFONO
          </p>
          <p class="Footer_Data_Info">+(57) 314 612 6146</p>
          <p class="Footer_Subtitle">
            DIRECCIÓN
          </p>
          <p class="Footer_Data_Info">
            523 Sylvan Ave, 5th Floor<br/>
            Mountain View, CA 94041 USA
          </p>
          <p class="Footer_Subtitle">
            E-MAIL
          </p>
          <p class="Footer_Data_Info">
          harpa_proyectourbano@gmail.com
          </p>
        </div>
        <div className="Footer_Section_Three">
          <p class="Footer_Title">MENU</p>
          <p class="Footer_Navegation_Link"><a href="/landing">INICIO</a></p>
          <p class="Footer_Navegation_Link"><a href="/landing">BIOGRAFIA</a></p>
          <p class="Footer_Navegation_Link"><a href="/landing">DISCOGRAFIA</a></p>
          <p class="Footer_Navegation_Link"><a href="/landing">GALERIA</a></p>
          <p class="Footer_Navegation_Link"><a href="/landing">CONTACTO</a></p>
        </div>
      </div>
      <div class="Footer_Copyright">
        <p>&copy; Copyright</p>
      </div>
    </div>
  )
}

export default Footer