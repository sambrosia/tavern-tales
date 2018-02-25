import React from 'react'
import { Provider, Flex } from 'rebass'
import Header from './Header'
import Trait from './Trait'

const App = () => (
  <Provider>
    <Header title="Tavern Tales" />
    <Flex p={16} flexDirection="column" flexWrap="wrap">
      <Trait.Card
        name="Trait Name"
        theme="Test"
        category="None"
        html="<p>This is a trait.</p>"
      />
    </Flex>
  </Provider>
)

export default App
