import './Popup.css';

const Popup = ({ response }) => {
  function handlerClose(e) {
    document.querySelector('body').style.overflow = 'visible'
    e.target.closest('.popup').classList.remove('popup_active');
  }
  return (
    <div className='popup'>
      <div className='popup__container'>
        <button className='popup__cross' onClick={handlerClose}></button>
        <h1 className='popup__title'>{response.title}</h1>
        <p className='popup__description'>{response.description}</p>
        <button className='popup__close' onClick={handlerClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
