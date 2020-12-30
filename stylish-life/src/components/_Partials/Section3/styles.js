import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 100px 10px;
`
export const Title = styled.p`
  font-size: 30px;
  font-weight: 500;

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`
export const Line = styled.hr`
  width: 200px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px solid #000;
  margin: 10px 0;
`
export const Desc = styled.p`
  font-size: 25px;
  max-width: 850px;

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`
export const ImageBox = styled.div`
  position: relative;
  height: 400px;
  width: 100%;

  .img {
    object-position: center;
    object-fit: cover;
  }
`