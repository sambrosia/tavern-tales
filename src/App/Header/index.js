import { h } from 'hyperapp'
import style from './style.scss'

const Header = ({ title }) => (
  <header className={style.header}>
    <h1>{title}</h1>
  </header>
)

export default Header
