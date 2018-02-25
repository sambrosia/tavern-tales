import React from 'react'
import { Provider, Flex, Box } from 'rebass'
import Header from './Header'
import Trait from './Trait'

class App extends React.Component {
  state = {
    traits: [],
    filteredTraits: []
  }

  setTraits(traits) {
    this.setState({ traits })
  }

  setFilteredTraits = filteredTraits => {
    this.setState({ filteredTraits })
  }

  componentDidMount() {
    import('../data/traits').then(traits => {
      this.setTraits(traits)
    })
  }

  render() {
    return (
      <Provider>
        <Header
          title="Tavern Tales"
          traits={this.state.traits}
          setSearchResults={this.setFilteredTraits}
        />
        <Flex p={16} flexWrap="wrap">
          {(this.state.filteredTraits || this.state.traits).map(trait => (
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
