
import  LightIcon from '../assets/images/icon-sun.svg'
import  DarkIcon  from '../assets/images/icon-moon.svg'

const Header = ({ theme, toggleTheme }) => {
  return (
    <div className="header">
      <h1 className="title">TODO</h1>
      <button aria-label="Switch Theme" className="btn-switch" onClick={() => toggleTheme()}>
       { theme === 'light' ? <img src={DarkIcon}></img>: <img src={LightIcon}></img>}
      </button>
    </div>
  )
}

export default Header