import { useEffect, useState } from 'react';
import './Main.css';
import arrow from '../../images/arrow.svg';
import { endtime } from '../../constants/constants';
const Main = () => {
  const [time, setTime] = useState({});

  useEffect(() => {
    let interval = setInterval(() => {
      getTimeRemaining(endtime);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    setTime({
      total: t,
      days: days.toString().padStart(2, '0'),
      hours: hours.toString().padStart(2, '0'),
      minutes: minutes.toString().padStart(2, '0'),
      seconds: seconds.toString().padStart(2, '0'),
    });
  }
  return (
    <main className='main'>
      <h1 className='main__title'>Under Construction</h1>
      <p className='main__description'>
        We're making lots of improvements and will be back soon
      </p>
      <section className='timer'>
        <article className='timer__time'>
          <p className='timer__time_value'>{time.days}</p>
          <span className='timer__time_separator'>:</span>
          <p className='timer__time_description'>Days</p>
          <p className='timer__time_description timer__time_description_small'>
            DD
          </p>
        </article>
        <article className='timer__time'>
          <p className='timer__time_value'>{time.hours}</p>
          <span className='timer__time_separator'>:</span>
          <p className='timer__time_description'>Hours</p>
          <p className='timer__time_description timer__time_description_small'>
            HH
          </p>
        </article>
        <article className='timer__time'>
          <p className='timer__time_value'>{time.minutes}</p>
          <span className='timer__time_separator'>:</span>
          <p className='timer__time_description'>Minutes</p>
          <p className='timer__time_description timer__time_description_small'>
            MM
          </p>
        </article>
        <article className='timer__time'>
          <p className='timer__time_value'>{time.seconds}</p>
          <p className='timer__time_description'>Seconds</p>
          <p className='timer__time_description timer__time_description_small'>
            SS
          </p>
        </article>
      </section>
      <section className='event'>
        <p className='event__description'>
          Check our event page when you wait:
        </p>
        <a className='event__link' href='https://github.com/sergejjlozjuk' target='_blanc'>
          Go to the event <img src={arrow} alt='arrow' />
        </a>
      </section>
    </main>
  );
};
export default Main;
