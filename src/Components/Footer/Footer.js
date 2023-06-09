import { responseText } from '../../constants/constants';
import arrow from '../../images/arrow.svg';
import './Footer.css';
import emailjs from 'emailjs-com';
const Footer = ({ setResponse }) => {
  function sendEmail(e) {
    e.preventDefault();
    const popup = document.querySelector('.popup');

    emailjs
      .sendForm(
        'service_x1cayt5',
        'template_87n4v6n',
        e.target,
        'OuFXGSfMj4Zk3Hgac'
      )
      .then((result) => {
        if (result.text) {
          setResponse(responseText.success);
        }
      })
      .catch((err) => {
        if (err) {
          setResponse(responseText.cancel);
        }
      })
      .finally(() => {
        popup.classList.add('popup_active');
        document.querySelector('body').style.overflow = 'hidden'
        e.target.reset();
      });
  }
  return (
    <footer className='footer'>
      <form className='footer__form' onSubmit={sendEmail}>
        <input
          className='form__input'
          placeholder='Enter your Email and get notified'
          name='email'
          required
          type='email'
          pattern='.+@[A-Za-z]*\.[a-z]{2,4}'
        ></input>
        <button className='form__submit' type='submit'>
          <img src={arrow} alt='arrow' />
        </button>
      </form>
    </footer>
  );
};
export default Footer;
