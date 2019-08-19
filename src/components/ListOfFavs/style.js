import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { fadeIn } from '../../styles/animation'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  width: 31.33%;
  position: relative;
  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
`

export const GridSkeleton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0;
  flex-wrap: wrap;
`

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  ${fadeIn()};
`
