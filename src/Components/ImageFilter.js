import React from "react"
import alimentacao from '../assets/images/alimentacao.svg';
import outros from '../assets/images/outros.svg';
import saude from '../assets/images/saude.svg';
import transporte from '../assets/images/transporte.svg';
import utilidades from '../assets/images/utilidades.svg';

import { Icone } from './UI';

export default (type) => {
  const Images = {
    Restaurante: <Icone src={alimentacao} alt="Restaurante" />,
    Utilidades: <Icone src={utilidades} alt="Utilidades" />,
    Saude: <Icone src={saude} alt="Saúde" />,
    Transporte: <Icone src={transporte} alt="Transporte" />,
    default: <Icone src={outros} alt="Outros" />,
  };

  return Images[type] || Images.default;
}
