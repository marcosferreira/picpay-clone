import React from 'react';

import img13 from '../../assets/images/13.png';

import { Container, Details, Title, Description, Img } from './styles';

export default function Banner() {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dias, use o PicPay para fazer suas cobranças.
        </Description>
      </Details>
      <Img source={img13} />
    </Container>
  );
}
