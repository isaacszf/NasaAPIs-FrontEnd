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

const appearBackgroundImage = keyframes`
  from {
    opacity: 0.25;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  animation: ${appearFromTop} 3s;

  background: url(${solarSystemBackground}) no-repeat 56%;

  @media (max-width: 1024px) {
    background-size: 0;
  }
`;

export const Content = styled.div`
  display: flex;

  background: rgba(11, 9, 59, 0.6);
  border-radius: 15px;
  padding: 30px 0;

  margin:0 20px 0 20px;

  aside {
    margin-left: 20px;

    img {
      animation: ${appearBackgroundImage} 1.5s;

      width: 850px;
      height: 850px;

      border-radius: 25px;
      border: 1px solid #191529;
    }
  }

  div {
    display: flex;
    flex-direction: column;

    margin-top: 15px;
    margin-left: 2%;

    color: #eee;

    a {
      margin-top: 80px;
    }

    p {
      font-size: 1.3rem;
      margin-top: 10px;

      &.explanation {
        strong {
          font-size: 32px;
        }

        line-height: 34px;
        margin-top: 90px;
      }

      &.copyright {
        margin-top: 45px;
      }
    }

    h1 {
      color: #eee;

      span {
        font-weight: 500;
      }
    }

    a {
      font-size: 24px;
      color: #eee;

      cursor: pointer;
    }
  }

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 25px;

    aside {
      img {
        width: 250px;
        height: 250px;
      }
    }

    div {
      h1 {
        text-align: center;
      }

      p {
        font-size: 16px;
        text-align: center;

        &.explanation {
          text-align: left;
        }
      }

      a {
        text-align: center;
      }
    }
  }
`;
