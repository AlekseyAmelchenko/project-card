import React from 'react'
import PropTypes from 'prop-types'
import {
  ContainerPricing,
  Container,
  Cloud,
  Title,
  Caption,
  PriceValue,
  Feature,
  FeaturesContainer,
  FeaturesItem,
  Button,
  Wordpress,
} from './styles'

export const Pricing = props => {
  const { icon: Icon, title, price, button, caption, features } = props
  return (
    <ContainerPricing>
      <Icon />
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
      <PriceValue>{price}</PriceValue>
      <FeaturesContainer>
        {features.map(item => (
          <Feature key={item}>
            <i className="fas fa-check" />
            <FeaturesItem>{item}</FeaturesItem>
          </Feature>
        ))}
      </FeaturesContainer>
      <Button>{button}</Button>
    </ContainerPricing>
  )
}

Pricing.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  price: PropTypes.string,
  button: PropTypes.string,
  caption: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export const PricingContainer = () => {
  return (
    <Container>
      <Pricing
        icon={Cloud}
        title="Elfsight Apps"
        price="from $0 / month"
        button="Try For Free"
        caption="Cross-platform version that works on any website"
        features={[
          'Unlimited websites',
          'Premium support',
          'Free installation service',
          'Special offer for multiple apps',
        ]}
      />
      <Pricing
        icon={Wordpress}
        title="WordPress plugin"
        price="$20"
        button="Buy Plugin"
        caption="Works on any WP website"
        features={[
          '1 website',
          '6 months of support',
          'Visual Composer friendly',
        ]}
      />
    </Container>
  )
}
