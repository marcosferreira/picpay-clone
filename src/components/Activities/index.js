import React from 'react'

import avatar from '../../assets/images/avatar.png';

import { Container, Header, Title, Card, CardHeader, Avatar, Description, Bold, CardBody, UserName } from './styles';

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
      </Card>
    </Container>
  )
}

export default Activities
