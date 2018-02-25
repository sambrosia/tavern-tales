import React from 'react'
import { Provider, Flex, Box } from 'rebass'
import Header from './Header'
import Trait from './Trait'

import themes from '../themes.json'
import traits from '../traits.json'

const App = () => (
  <Provider>
    <Header title="Tavern Tales" />
    <Flex p={16} flexWrap="wrap">
      {traits.map(trait => (
        <Box width={[1, 1 / 2, 1 / 3, 1 / 4]}>
          <Trait.Card {...trait} />
        </Box>
      ))}
    </Flex>
  </Provider>
)

export default App
