import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import {
  Container,
  ContainerPrice,
  Title,
  Price,
  Description,
  FeaturesContainer,
  FeaturesItem,
  Feature,
  Button,
  BlockCenter,
  BlockTop,
} from './styles'

export const Table = props => {
  const {
    title,
    button,
    price,
    features,
    description,
    theme = {
      bgColor: 'white',
      flag: '#5ead31',
      middle: '#f9f8f8',
      flagTextColor: 'white',
      angleTitle: '-4deg',
      angleBlock: '6deg',
      descriptionText: '#000000',
      featuresContainerText: '#000000',
    },
  } = props
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Title>
          <span />
          {title}
        </Title>
        <BlockTop>
          <span />
          <Price>{`$${price}`}</Price>
          <Description>{description}</Description>
        </BlockTop>
        <BlockCenter>
          <FeaturesContainer>
            {features.map(item => (
              <Feature key={item}>
                <i className="fas fa-check" />
                <FeaturesItem>{item}</FeaturesItem>
              </Feature>
            ))}
          </FeaturesContainer>
        </BlockCenter>
        <Button>{button}</Button>
      </Container>
    </ThemeProvider>
  )
}

Table.propTypes = {
  title: PropTypes.string,
  button: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export const TableContainer = () => {
  return (
    <ContainerPrice>
      <Table
        title="Basic"
        price="0"
        description="always free"
        features={[
          '2 GB Bandwith',
          '150 GB Storage',
          '10 Accounts',
          '12 Host Domain',
          '24/7 Support',
        ]}
        button="Buy Now"
      />
      <Table
        theme={{
          bgColor: '#303035',
          flag: '#fcfcfc',
          flagTextColor: '#74b136',
          middle: '#222',
          angleTitle: '6deg',
          angleBlock: '-4deg',
          descriptionText: '#fff',
          featuresContainerText: '#fff',
        }}
        title="Professional"
        price="14"
        description="per month"
        features={[
          '5 GB Bandwith',
          '200 GB Storage',
          '20 Accounts',
          '20 Host Domain',
          '24/7 Support',
        ]}
        button="Buy Now"
      />
      <Table
        title="Business"
        price="21"
        description="per month"
        features={[
          '10 GB Bandwith',
          '300 GB Storage',
          '32 Accounts',
          '60 Host Domain',
          '24/7 Support',
        ]}
        button="Buy Now"
      />
    </ContainerPrice>
  )
}
