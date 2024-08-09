import { useState } from "react";
import people from './data'


const Review = () => {
  const [index, setIndex] = useState(0);
  const {name, job, image, text} = people[index];
  const prevBtn = '<';
  const nextBtn = '>';

  const checkNumber = function(number){
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);

    })
  };
  const prevPerson = () => {
    
    setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex)

      });
  };
  const randomPerson = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if(randomIndex === index){
      randomIndex = index + 1;
    }
    setIndex(() => {
      let newIndex = randomIndex;
      return checkNumber(newIndex);
    })
  };

  return (
    <article className="review">
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <p style={{ fontSize: '2rem' }}>&quot;</p>
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>

      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          {prevBtn}
        </button>
        <button className='next-btn' onClick={nextPerson}>
          {nextBtn}
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  )
}

export default Review
