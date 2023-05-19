import React from 'react'

const SignInForm = ({label, ...otherProps}) => {
  return (
    <div>
      <div>{label}</div>
      <input  {...otherProps}  />
    </div>
  )
}

export default SignInForm
