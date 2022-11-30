import { useNavigate } from 'react-router-dom';
import './Header.scss';
// import { BrowserRouter } from 'react-router-dom';

const Header = ({navigateTo}) => {

  const navigate = useNavigate()

  return (
    <div className='back-header__contain'>
        <button onClick={()=>navigate(navigateTo)}>
        <img className='b-back__icon' src='/arrow-left-short.svg' alt=''></img>
        </button>
    </div>
  )
}

export default Header
