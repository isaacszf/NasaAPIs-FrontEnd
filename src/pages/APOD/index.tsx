import React, { useEffect, useState } from 'react';
import env from 'react-dotenv';

import { Container, Content } from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

interface AstronomyPictureProps {
  date: Date;
  copyright: string;
  explanation: string;
  hdurl: string;
  title: string;
}

const APOD: React.FC = () => {
  const [picture, setPicture] = useState<AstronomyPictureProps>();

  useEffect(() => {
    api
      .get(`https://api.nasa.gov/planetary/apod?api_key=${env.API_KEY}`)
      .then((response) => setPicture(response.data));
  }, []);

  return (
    <Container>
      <Header headerTitle="Astronomy Picture of the Day" />

      <Content>
        <aside>
          <img src={picture?.hdurl} alt="Astronomy" />
        </aside>

        <div>
          <h1>
            Title: <span>{picture?.title}</span>
          </h1>

          <p>Date: {picture?.date}</p>

          <p className="explanation">
            <strong>Explanation:</strong> <br /> {picture?.explanation}
          </p>

          <p className="copyright">
            <strong>Image Credits:</strong>{' '}
            {picture?.copyright ? picture?.copyright : 'Unknown Author'}
          </p>

          <a href={picture?.hdurl} target="_blank" rel="noreferrer">
            Open image in a new tab
          </a>
        </div>
      </Content>
    </Container>
  );
};

export default APOD;
