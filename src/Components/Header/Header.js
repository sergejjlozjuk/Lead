import './Header.css';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className='header'>
      <a className='header__logo' href='/#'>
        <img src={logo} alt='Lead' />
      </a>
    </header>
  );
};
export default Header;
