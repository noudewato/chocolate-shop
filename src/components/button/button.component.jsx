import React from 'react'
BUTTON_TYPES_CLASSE = {
  inverted: "inverted",
  googleSignIn: "google",
};

const Button = ({children, buttonType, ...otherProps}) => {
  return (
    <button className={`button-container ${BUTTON_TYPES_CLASSE[buttonType]}`} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
