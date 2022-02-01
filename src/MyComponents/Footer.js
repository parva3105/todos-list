import React from 'react';

export const Footer = () => {
  let footerStyle = {
    position: "absolute",
    top: "90vh",
    width: "100%",
    border : "2px solid grey"
  }
  return (
    <div className='bg-dark text-light mt-3' style={footerStyle}>
      <p className='text-center py-3'>
        Copyright &copy; MyTodosList.com
      </p>
    </div>
  );
};
