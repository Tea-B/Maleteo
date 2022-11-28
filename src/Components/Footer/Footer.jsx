import {React} from 'react'
import { Link } from 'react-router-dom'
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer>
        <div className='b-icon__son'><Link to={'/home'}><img src="./Assets/Images/house-icon.png" alt=''></img></Link></div>
        <div className='b-icon__son'><Link to={'/map'}><img src="./Assets/Images/icon-footer-search.png" alt=''></img></Link></div>
        <div className='b-icon__son'><Link to={'/chat'}><img src="./Assets/Images/chat-icon-footer.png" alt=''></img></Link></div>
        <div className='b-icon__son'><Link to={'/profile'}><img src="./Assets/Images/user-icon-footer.png" alt=''></img></Link></div>
    </footer>
  )
}

export default Footer
