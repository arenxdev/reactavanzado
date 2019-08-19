import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Button, Title } from './style'

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(email.value, password.value)
  }

  return (
    <>
      <Title>{title}</Title>
      <Form onSubmit={handleSubmit}>
        <Input type='email' placeholder='Email' {...email} />
        <Input type='password' placeholder='Password' {...password} />
        <Button>{title}</Button>
      </Form>
    </>
  )
}
