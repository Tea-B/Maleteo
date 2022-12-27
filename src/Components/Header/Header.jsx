import { useNavigate } from 'react-router-dom';
import './Header.scss';
// import { BrowserRouter } from 'react-router-dom';

const Header = ({navigateTo}) => {

  const navigate = useNavigate()

  return (
     <img onClick={()=>navigate(navigateTo)} className='b-back__icon' src='/arrow-left-short.svg' alt=''></img>
  )
}

export default Header
