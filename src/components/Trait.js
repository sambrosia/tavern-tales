import React from 'react'
import PropTypes from 'prop-types'
import { Card as RebassCard, Heading, Small, Tooltip, Text } from 'rebass'

const Card = props => (
  <RebassCard p={16} m={8}>
    <Heading>{props.name}</Heading>
    <Small>
      <Tooltip text="Theme">{props.theme}</Tooltip>
      {' | '}
      <Tooltip text="Category">{props.category}</Tooltip>
    </Small>
    <Text dangerouslySetInnerHTML={{ __html: props.html }} />
  </RebassCard>
)

Card.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.string,
  category: PropTypes.string,
  html: PropTypes.string
}

export default { Card }
