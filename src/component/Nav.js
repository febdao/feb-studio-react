import React from 'react'

const handleClickScroll = (id) => {
  const element = document.getElementById(id);
  console.log('id: ', id);
  console.log('element: ', element);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Nav = ({sections}) => {
  return (
    <div className='nav'>
      <ul className='nav__list'>
       {sections.map((section, index) => (
        <li key={index} className='nav__item'>
          <a className='nav__link' onClick={() => handleClickScroll(section.id)} href={`#${section.id}`}>{section.label}</a>
        </li>
       ))}
      </ul>
    </div>
  )
}

export default Nav