import '../App.css'
import reactIcon from '../assets/reacticon.png'
import menu from '../assets/menu.png'

function Navbar() {
  return (
    <nav>
      <img className='nav-logo' src={reactIcon} alt='react icon' />
      <h3>ReactFacts</h3>
      <img className='nav-menu' src={menu} alt='menu icon' />
    </nav>
  )
}

export default Navbar
