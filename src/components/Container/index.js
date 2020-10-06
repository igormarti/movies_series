import styled from 'styled-components';

const Container = styled.div`
  max-width: 700px;
  background: #fff;
  margin: 80px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: rgb(0, 0, 0, 0.1);

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin: 0 10px;
      font-size: 25px;
      color: red;
    }

    img {
      margin-left: 10px;
      height: 20px;
      width: 20px;
    }
  }

  p {
    font-size: 18px;
    text-align: justify;
    margin-top: 25px;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
    color: #777;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #003386;
    font-weight: 300;
  }

  a:hover {
    font-weight: bold;
  }
`;

export default Container;
