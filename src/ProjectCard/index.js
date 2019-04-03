import React from 'react'
import PropTypes from 'prop-types'
import {
  ProfileContainer,
  TopContainer,
  Price,
  TitleContainer,
  Name,
  Line,
  PriceMonth,
  List,
  First,
  Second,
  Third,
  Btn,
  Table,
  GreenContainer,
} from './styles'

// Тут все ок - просто еще один компонент. Он сэкспортирован с именем
// PriceTab
export const PriceTab = props => {
  const { price, month = 'FREE', name, first, second, third } = props
  return (
    <ProfileContainer>
      <TopContainer>
        <Price>{`$${price}`}</Price>
      </TopContainer>
      <GreenContainer>
        <TitleContainer>
          <Name>{name}</Name>
        </TitleContainer>
        <Line />
        <PriceMonth>{`$${month}`}</PriceMonth>
        <List>
          <First>{first}</First>
          <Second>{second}</Second>
          <Third>{third}</Third>
        </List>
        <Btn>Order Now</Btn>
      </GreenContainer>
    </ProfileContainer>
  )
}

PriceTab.propTypes = {
  price: PropTypes.number,
  month: PropTypes.string,
  name: PropTypes.string,
}
PriceTab.defaultProps = {
  price: 10,
  month: '32/mo',
  name: 'standart',
}

// но тут мы ничего не экспортируем
// точнее нету экспорта export default

export const ProjectCard = () => {
  return (
    <Table>
      <PriceTab
        first="1 gb space"
        second="1 gb bandwidth"
        third="10 portfolio items"
      />
      <PriceTab
        price="30"
        name="Best"
        month="52/mo"
        first="10 gb space"
        second="50 gb bandwidth"
        third="50 portfolio items"
      />

      <PriceTab
        price="80"
        name="Business"
        month="75/mo"
        first="100 gb space"
        second="100 gb bandwidth"
        third="100 portfolio items"
      />
    </Table>
  )
}

// Так не забудешь как называются )
