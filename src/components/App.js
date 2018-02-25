import React from 'react'
import { Provider, Flex, Box } from 'rebass'
import Header from './Header'
import Trait from './Trait'

class App extends React.Component {
  state = {
    traits: [],
    filteredTraits: [],
    loadedTraits: 0
  }

  loadTraits = () => {
    const distToBottom = document.body.scrollHeight - window.innerHeight * 2
    console.log(window.pageYOffset, distToBottom)

    if (window.pageYOffset > distToBottom)
      this.setState({ loadedTraits: this.state.loadedTraits + 4 })
  }

  setTraits(traits) {
    this.setState({ traits })
    this.setFilteredTraits(traits)
  }

  setFilteredTraits = filteredTraits => {
    this.setState({ filteredTraits, loadedTraits: 8 })
  }

  componentDidMount() {
    import('../data/traits').then(traits => {
      this.setTraits(traits)
    })

    window.addEventListener('scroll', this.loadTraits)
    window.addEventListener('resize', this.loadTraits)
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
          {this.state.filteredTraits
            .slice(0, this.state.loadedTraits)
            .map(trait => (
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
