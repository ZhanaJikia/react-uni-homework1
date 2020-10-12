import React from "react"

import {
  StyledInputDiv,
  StyledInput
} from './UserInputStyles'

const UserInput = ({ value, onChange }) => {
  return (
    <StyledInputDiv>
      <label htmlFor="username">Value: </label>
      <StyledInput type="text" maxlength="50" name="username" value={value} onChange={onChange}></StyledInput>
    </StyledInputDiv>
  )
}
export default UserInput