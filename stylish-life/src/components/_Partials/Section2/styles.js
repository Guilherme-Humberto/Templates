import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  `;
export const BoxCards = styled.div`
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  width: 300px;
  gap: 10px;
`
export const ImageBox = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.2);

  .img {
    object-fit: cover;
    object-position: center;
  }
`
export const Title = styled.p`
  font-size: 30px;
  font-weight: normal;
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  padding: 10px;

  @media screen and (max-width: 400px) {
    font-size: 20px;
  }
`
export const DateText = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #333;
`
export const TitleCard = styled.p`
  font-size: 25px;
  font-weight: 500;
  max-width: 300px;
`
export const Line = styled.hr`
  width: 150px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #000;
`
export const SubjectProduct = styled.p`
  font-size: 20px;
  font-weight: lighter;
  color: #333;
`