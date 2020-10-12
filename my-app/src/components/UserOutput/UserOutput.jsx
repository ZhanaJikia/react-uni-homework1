import React from "react"

import {
  StyledOutputDiv,
  StyledTextDiv,
  StyledTextH1
} from './UserOutputStyles'

const UserOutput = ({value}) => {
  return (
    <StyledOutputDiv>
      <StyledTextDiv>{value && <StyledTextH1>Hello, {value}!</StyledTextH1>}</StyledTextDiv>
    </StyledOutputDiv>
  )
}

export default UserOutput
