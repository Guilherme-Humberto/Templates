import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
`;

export const Logo = styled.p`
  font-size: 30px;
  font-weight: bold;
  color: #212032;
  padding-bottom: 5px;
  border-bottom: 2px solid #212032;
`

export const ContainerSocialMedias = styled.div`
  display: flex;
  align-items: center;
  gap: 0 10px;

  @media screen and (max-width: 400px) {
    display: none;
  }
`