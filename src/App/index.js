import { h } from 'hyperapp'
import Header from './Header'

const App = (state, actions) => (
  <div>
    <Header title={state.title} />
  </div>
)

export default App
