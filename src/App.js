import React, { Component } from 'react'
import { plans } from './const'
import { PricePlan, PricePlanContainer } from './PricePlan'
import { priceTableTheme } from './themes'

class App extends Component {
  render() {
    return <PricePlanContainer plans={plans} theme={priceTableTheme} />
  }
}

export default App
