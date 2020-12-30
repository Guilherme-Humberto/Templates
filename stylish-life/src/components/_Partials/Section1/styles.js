import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  margin: 150px auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageBox = styled.div`
  position: relative;
  height: 400px;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0px 10px 20px rgb(0, 0, 0, 0.2);
  
  .img {
    object-position: center;
    object-fit: cover;
    border-radius: 10px;
  }
`
export const Texts = styled.div`
  width: 80%;
  padding: 20px 0;
`
export const Title = styled.p`
  font-size: 30px;
  font-weight: 500;
  max-width: 700px;

  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
  @media screen and (max-width: 400px) {
    font-size: 23px;
  }
`
export const Desc = styled.p`
  font-size: 20px;
  max-width: 1100px;

  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
`
export const Text = styled.p`
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  gap: 0 10px;
  margin: 20px 0;
  font-weight: 500;
  padding: 5px 0;
  border-radius: 5px;
  border: 2px solid #212032;

  &:hover {
    background: #212032;
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 500px) {
    font-size: 17px;
    width: 150px;

    .icon {
      display: none;
    }
  }
`