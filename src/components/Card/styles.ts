import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  padding-bottom: 60px;
  
  margin: 35px;

  border-radius: 15px;

  transition: box-shadow 550ms;

  &:hover {
    box-shadow: ${lighten(0.25, '#1a1a66')} 1px 1px 16px;
  }

  background: linear-gradient(to right, #1a1a66, #101052);

  img {
    width: 250px;
    height: 150px;

    border-radius: 15px;
  }

  h2 {
    text-align: center;
    
    margin-bottom: 20px;
    margin-top: 15px;
  }

  a {
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 35px;

    color: #eee;
    font-size: 18px;

    transition: color 1s;

    &:hover {
      color: #845f9c;
    }
  }

  svg {
    &.redirect-icon {
      margin-right: 15px;
    }
  }
`;
