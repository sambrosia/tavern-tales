import React from 'react'
import PropTypes from 'prop-types'
import Fuse from 'fuse.js'
import { Input } from 'rebass'

const options = {
  shouldSort: true,
  findAllMatches: true,
  threshold: 0.35,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: ['name', 'theme', 'category', 'html']
}

function debounce(fn, delay) {
  window.clearTimeout(fn._debounceTimeoutId)
  fn._debounceTimeoutId = window.setTimeout(fn, delay)
}

class Search extends React.Component {
  state = {
    value: '',
    fuse: new Fuse(this.props.items, options)
  }

  search = () => {
    if (!this.state.value) this.props.setSearchResults(this.props.items)
    else {
      const results = this.state.fuse.search(this.state.value)
      this.props.setSearchResults(results)
    }
  }

  componentWillReceiveProps(newProps) {
    // Keep fuse's list of items up to date
    if (newProps.items !== this.props.items)
      this.setState({ fuse: new Fuse(newProps.items, options) })
  }

  render() {
    return (
      <Input
        width={240}
        bg="white"
        color="dark"
        px={10}
        placeholder="Search traits"
        value={this.state.value}
        onChange={event => {
          this.setState({ value: event.target.value })
          debounce(this.search, 250)
        }}
      />
    )
  }
}

Search.propTypes = {
  items: PropTypes.array,
  setSearchResults: PropTypes.func
}

export default Search
