import styled, { keyframes } from 'styled-components';

import solarSystemBackground from '../../assets/images/solar-system-minimal-blue.jpg';

const appearFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  animation: ${appearFromTop} 3s;

  background: url(${solarSystemBackground}) no-repeat 18% !important;
`;

export const Table = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  table {
    width: 94%;

    background: rgba(0, 0, 0, 0.2);
    color: #eee;

    font-size: 18px;

    tbody {
      tr {
        th {
          text-align: left;
          border: 1px solid rgba(0, 0, 0, 0.2);

          padding: 25px;

          &.sub-th {
            font-weight: 500;
          }
        }

        td {
          border: 1px solid rgba(85, 71, 158, 0.2);
          background: rgba(85, 71, 158, 0.2);
          text-align: center;
          
          &.pressure {
            background: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
        }
      }
    }
  }
`;
