import styled, { css } from "styled-components";
import { VscMenu } from 'react-icons/vsc'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  padding: 10px 20px;
  width: 100%;
  
  color: #fff;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.5s ease-in-out;
  transform: translateY(0);

  > p {
    font-size: clamp(1.6rem, 5vw, 2.3rem);
    text-transform: uppercase;
  }

  ${props => props.elementRef && css`
    opacity: 1;
    transition: 0.5s ease-in-out;
    transform: translateY(0);
    background: rgba(32, 26, 22, 0.9);
  `}
`;
export const IconMenu = styled(VscMenu)`
  font-size: clamp(1.6rem, 5vw, 2rem);
  cursor: pointer;

  @media (min-width: 760px) {
    display: none;
  }
`
export const NavBarLinks = styled.div`
  display: none;

  @media (min-width: 760px) {
    display: flex;
    align-items: center;
    gap: 10px;

    > a {
      text-decoration: none;
      font-size: 20px;
      color: #fff;
      letter-spacing: 1px;
    }

    > button {
      padding: 10px 20px;
      border: 2px solid #fff;
      background: transparent;
      color: #fff;
      letter-spacing: 2px;
      font-size: 18px;
      margin-left: 20px;

      :hover {
        background: #fff;
        color: #000;
        cursor: pointer;
      }
    }
  }
`