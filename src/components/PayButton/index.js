import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Button, Label } from './styles';

export default function PayButton() {
  return (
    <Button
      colors={['#00fc6c', '#00ac4a']}
      start={[1, 0.2]}
    >
      <MaterialIcons name="attach-money" size={30} color="#FFF" />
      <Label>Pagar</Label>
    </Button>
  )
}
