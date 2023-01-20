import '../App.css'
import reactIcon from '../assets/reacticon.png'

function Navbar(props) {
  return (
    <nav className={props.darkMode ? 'dark' : ''}>
      <img className='nav-logo' src={reactIcon} alt='react icon' />
      <h3>ReactFacts</h3>
      <div className='toggle-wrapper'>
        <p className='toggle-light'>Light</p>
        <div className='toggle-slider' onClick={props.toggleDarkMode}>
          <div className='toggle-circle'></div>
        </div>
        <p className='toggle-dark'>Dark</p>
      </div>
    </nav>
  )
}

export default Navbar
