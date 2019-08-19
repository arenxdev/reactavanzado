import React from 'react'
import { Button } from './style'

export const SubmitButton = ({ children, onClick, disabled }) => (
  <Button disabled={disabled} onClick={onClick}>
    {children}
  </Button>
)
