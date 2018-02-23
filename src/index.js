import { h, app } from 'hyperapp'
import App from './App'

const state = {
  title: 'Tavern Tales'
}

const actions = {}

app(state, actions, App, document.body)
