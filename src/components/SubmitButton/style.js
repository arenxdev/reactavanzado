import styled from 'styled-components'

export const Button = styled.button`
  background-color: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  text-align: center;
  width: 100%;
  &[disabled] {
    opacity: .3;
  }
`
