import styled from 'styled-components';

export const Details = styled.main`
  margin-top: 15px;
  border-top: 1px solid #eee;
`;

export const DetailHeader = styled.header`
  margin-top: 15px;
  display: flex;
  img {
    height: 410px;
    width: 350px;
    border: 2px solid #999;
    border-radius: 2px;
    margin-left: 15px;
  }
`;

export const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin: 5px 20px;
  }
`;

export const Title = styled.span`
  margin-left: 20px;
  font-size: 20px;
  font-weight: 700;
  color: #777;
`;

export const Raiting = styled.div`
  display: flex;
  background: #000;
  align-items: center;
  justify-content: center;
  height: 75px;
  width: 75px;
  padding: 10px;
  margin: 15px;
  font-size: 26px;
  font-weight: 700;
  color: #fff;
  align-self: center;
  border: 1px solid #fff;
  border-radius: 5px;
  flex-direction: column;

  span {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const DetailContent = styled.div`
  padding: 0 10px;
  p {
    font-size: 16px;
    color: #888;
    font-weight: 600;
    text-align: justify;
  }
`;

export const MultiList = styled.div`
  margin-top: 15px;
  border-top: 1px solid #eee;
  display: flex;
  flex-wrap: wrap;
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 10px;
  flex: 1 0 50%;
  h1 {
    margin-bottom: 6px;
    font-size: 14px;
  }
  li {
    padding: 3px 2px;
    font-size: 14px;
  }
`;
