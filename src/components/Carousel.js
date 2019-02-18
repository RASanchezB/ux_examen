import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <h4 className="mt-5 mb-2">El Mejor en Bienes Raices</h4>
      <MDBCarousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src="https://www.ciudadceleste.com/wp-content/uploads/2015/09/notte-ciudad-celeste.jpg" alt="Casa" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Casas</h3>
              <p>Donde la familia descansa</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src="https://i.ytimg.com/vi/_W-wYevNRbc/maxresdefault.jpg" alt="Edificios" />
              <MDBMask overlay="black-strong" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Edificios</h3>
              <p>Donde usted pone sus deseas</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/3/3c/HSBC_Bank_Tegucigalpa.jpg" alt="Oficinas" />
              <MDBMask overlay="black-slight" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Oficinas</h3>
              <p>Donde se crean oportunidades</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img className="d-block w-100" src="https://elcapitalfinanciero.com/wp-content/uploads/2014/11/clientes-banco-1024x745.jpg" alt="Servicio" />
              <MDBMask overlay="black-light" />
            </MDBView>
            <MDBCarouselCaption>
              <h3 className="h3-responsive">Visitanos</h3>
              <p>Organiza una cita lo antes posible</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;