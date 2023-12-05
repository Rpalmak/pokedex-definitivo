import React from 'react';
import SubHeader from '../components/SubHeader';
import kantoImage from '../assets/images/regions/kanto.png'

function Kanto() {

  return (
    <>
      <SubHeader imagenRegion={kantoImage} nombre={"Kanto"} altText="Kanto Region" />
    </>
  );
}

export default Kanto;