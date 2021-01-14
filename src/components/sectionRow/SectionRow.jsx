import React from 'react';
import "../../components/sectionRow/sectionRow.css";
import "../../components/section/section.css";
import llamadoDesk from "../../img/llamado 1@2x.jpg";
import scooterDesk from "../../img/scooter-title@2x.png";





const SectionRow = () => {
  return (
    <div className="containerTransDesk">
      <div className="transporteRow">
        <div className="textTransDesk">
          <p>
            <strong>
              El scooter eléctrico contribuye a reducir la congestion vehicular
              y la contaminación urbana, usa poco espacio, es un excelente medio
              de transporte y además es entretenido. Súbete a la electromovilidad
              hoy con nuestras mejores ofertas.
            </strong>
          </p>
        </div>
        <div className="transporteEficienteDesk">
          <img src={llamadoDesk} alt="" />
        </div>
      </div>

      <div className="transportScooterContainer">
        <div className="transporteScooterDesk">
          <img src={scooterDesk} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SectionRow;
