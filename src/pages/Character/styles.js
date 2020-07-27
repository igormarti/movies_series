import styled from 'styled-components';

export const Loading = styled.div`
  background: #003386;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 22px;
`;

export const DetailCharacter = styled.main`
  margin-top: 15px;
  border-top: 1px solid #eee;
`;

export const DetailCharacterHeader = styled.header`
  margin-top: 15px;
  display: flex;
  align-items: center;
  img {
    height: 80px;
    width: 80px;
    border: 2px solid #999;
    border-radius: 2px;
    margin-left: 15px;
  }
  span {
    margin-left: 20px;
    font-size: 20px;
    font-weight: 700;
    color: #777;
  }
`;
export const DetailCharacterContent = styled.div`
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
