import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.header`
  background: #191852;
  box-shadow: 1px 2px 9px ${shade(0.2, '#191852')};

  color: #eee;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 21px;

  padding: 15px;

  h1 {
    margin-left: 20px;  
  }

  transition: background 200ms;

  svg {
    color: #eee;

    &:hover {
      color: ${shade(2, '#eee')};
    }
  }

  @media (max-width: 1024px) {
    svg {
      width: 16px;
      height: 16px;
    }
  }
`;
