import styled, { css } from 'styled-components'

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  margin-bottom: 5px;
  width: 100%;
  ${props => props.fixed && css`
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, .3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transition: all .8s;
    transform: translateY(-100vh);
    opacity: 0;
    z-index: 1;
    ${props => props.addInView && css`
      transform: translateY(0vh);
      opacity: 1;
      transform: scale(.5);
    `}
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
