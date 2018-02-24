import React from 'react'
import ReactDom from 'react-dom'
import { injectGlobal } from 'styled-components'
import App from './components/App'

injectGlobal`
  body {
    margin: 0;
  }
`

ReactDom.render(<App />, document.getElementById('app'))
