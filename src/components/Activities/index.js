import React from 'react'
import { Feather } from '@expo/vector-icons';

import avatar from '../../assets/images/avatar.png';

import { Container, Header, Title, Card, CardHeader, Avatar, Description, Bold, CardBody, UserName, CardFooter, Details, Value, Divider, Date } from './styles';

function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@marcostack</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Marcos Ferreira</UserName>
        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider />

            <Feather name="lock" color="#fff" size={14} />
            <Date>há 2 anos</Date>
          </Details>
        </CardFooter>
      </Card>
    </Container>
  )
}

export default Activities
