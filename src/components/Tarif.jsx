import React from 'react';
import './tarif.css';

class Tarif extends React.Component {
  render() {
    const {bezlimit,ryb,doc,isSelected} = this.props;
    return (
      <div className={"tarif "+(isSelected?"selected":"") }>
        <div className="tafir_bezlimit">{bezlimit}</div>
        <div className="tarif_ryb">{ryb}</div>
        <div className="tarif_doc">{doc}</div>
        <div className="tarif_ob">Объем включенного трафика не ограничен</div>
      </div>
    );
  }
}

export default Tarif;