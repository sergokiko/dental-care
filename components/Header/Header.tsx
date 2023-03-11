import React from 'react';

export const Header = () => {
  return (
    <>
      <div className='header'>
        header
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

