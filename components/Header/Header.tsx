import React from 'react';

export const Header = () => {
  return (
    <>
      <div className='header'>
        <div className="header__left-side-links">
          <a href="" className="header__link">Послуги</a>
          <a href="" className="header__link">Лікарі</a>
          <a href="" className="header__link">Галерея</a>
        </div>
      </div>
      <style jsx>{`
        .header {
          z-index: 100;
          position: fixed;
          display: flex;
          width: 100%;
          justify-content: space-between;
        }
        .button-wrapper {
          align-self: flex-end;
        }
    `}</style>
    </>
  );
};

