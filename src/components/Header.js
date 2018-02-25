import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, NavLink, Tabs, Tab, Input } from 'rebass'

const Header = props => (
  <Toolbar>
    <NavLink href="/" mr="auto">
      {props.title}
    </NavLink>

    <Tabs borderBottom="none" ml={8}>
      <Tab borderColor="white">List</Tab>
      <Tab>Cards</Tab>
    </Tabs>

    <Input
      bg="white"
      color="dark"
      width={[1, 1 / 3]}
      placeholder="Search traits"
      px={10}
    />
  </Toolbar>
)

Header.propTypes = {
  title: PropTypes.string
}

export default Header
