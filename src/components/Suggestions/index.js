import React from 'react'

import img1 from '../../assets/images/01.png';

import { Container, Option, Img, Label } from './styles';

export default function Suggestions() {
  return (
    <Container>
      <Option>
        <Img source={img1} />
        <Label>Doações</Label>
      </Option>
    </Container>
  );
}

