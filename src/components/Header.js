import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, NavLink, Tabs, Tab, Input } from 'rebass'
import Search from './Search'

class Header extends React.Component {
  render() {
    return (
      <Toolbar>
        <NavLink href="/" mr="auto">
          {this.props.title}
        </NavLink>

        <Search
          items={this.props.traits}
          setSearchResults={this.props.setSearchResults}
        />
      </Toolbar>
    )
  }
}

Header.propTypes = {
  title: PropTypes.string,
  traits: PropTypes.array,
  setSearchResults: PropTypes.func
}

export default Header
