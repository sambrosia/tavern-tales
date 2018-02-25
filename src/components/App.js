import React from 'react'
import { Provider, Flex, Box } from 'rebass'
import Header from './Header'
import Trait from './Trait'

class App extends React.Component {
  state = {
    traits: []
  }

  componentDidMount() {
    import('../traits.json').then(traits => {
      this.setState({ traits })
    })
  }

  render() {
    return (
      <Provider>
        <Header title="Tavern Tales" />
        <Flex p={16} flexWrap="wrap">
          {this.state.traits.map(trait => (
            <Box key={trait.name} width={[1, 1 / 2, 1 / 3, 1 / 4]}>
              <Trait.Card {...trait} />
            </Box>
          ))}
        </Flex>
      </Provider>
    )
  }
}

export default App
