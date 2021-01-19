import React, { useState, useEffect } from 'react';
import env from 'react-dotenv';

import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

import {
  Container,
  ImagesContainer,
  ImageSection,
  InfoContainer,
} from './styles';

import Header from '../../components/Header';

import api from '../../services/api';

interface MarsPhotosProps {
  photos: [
    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    },

    {
      id: number;
      img_src: string;
      earth_date: Date;

      camera: {
        full_name: string;
      };

      rover: {
        name: string;
        launch_date: Date;
        landing_date: Date;
        status: string;
      };
    }
  ];
}

const MarsRover: React.FC = () => {
  const [marsPhotos, setMarsPhotos] = useState<MarsPhotosProps>();

  useEffect(() => {
    api
      .get(
        `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${env.API_KEY}`
      )
      .then((response) => setMarsPhotos(response.data));
  }, []);

  return (
    <Container>
      <Header headerTitle="Mars Rover Photos" />

      <div>
        <ImageSection>
          <CarouselProvider
            naturalSlideWidth={10}
            naturalSlideHeight={10}
            totalSlides={20}
          >
            <ImagesContainer>
              <Slider>
                <Slide index={0}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[0].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[0].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[0].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[0].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[0].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[0].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[0].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={1}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[1].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[1].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[1].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[1].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[1].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[1].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[1].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={2}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[2].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[2].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[2].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[2].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[2].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[2].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[2].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={3}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[3].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[3].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[3].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[3].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[3].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[3].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[3].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={4}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[4].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[4].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[4].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[4].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[4].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[4].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[4].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={5}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[5].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[5].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[5].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[5].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[5].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[5].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[5].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={6}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[6].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[6].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[6].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[6].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[6].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[6].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[6].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={7}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[7].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[7].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[7].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[7].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[7].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[7].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[7].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={8}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[8].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[8].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[8].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[8].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[8].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[8].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[8].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={9}>
                  <InfoContainer>
                    <img src={marsPhotos?.photos[9].img_src} alt="Mars Rover" />

                    <p>
                      <strong>Date: </strong> {marsPhotos?.photos[9].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[9].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[9].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[9].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[9].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[9].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={10}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[10].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[10].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[10].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[10].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[10].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[10].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[10].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={11}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[11].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[11].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[11].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[11].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[11].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[11].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[11].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={12}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[12].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[12].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[12].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[12].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[12].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[12].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[12].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={13}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[13].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[13].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[13].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[13].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[13].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[13].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[13].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={14}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[14].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[14].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[14].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[14].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[14].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[14].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[14].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={15}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[15].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[15].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[15].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[15].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[15].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[15].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[15].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={16}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[16].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[16].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[16].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[16].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[16].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[16].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[16].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={17}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[17].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[17].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[17].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[17].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[17].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[17].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[17].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={18}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[18].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[18].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[18].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[18].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[18].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[18].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[18].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>

                <Slide index={19}>
                  <InfoContainer>
                    <img
                      src={marsPhotos?.photos[19].img_src}
                      alt="Mars Rover"
                    />

                    <p>
                      <strong>Date: </strong>{' '}
                      {marsPhotos?.photos[19].earth_date}
                    </p>

                    <p>
                      <strong>Name:</strong> {marsPhotos?.photos[19].rover.name}
                    </p>

                    <p>
                      <strong>Status:</strong>{' '}
                      {marsPhotos?.photos[19].rover.status}
                    </p>

                    <p>
                      <strong>Launch Date:</strong>{' '}
                      {marsPhotos?.photos[19].rover.launch_date}
                    </p>

                    <p>
                      <strong>Landing Date:</strong>{' '}
                      {marsPhotos?.photos[19].rover.landing_date}
                    </p>

                    <p>
                      <strong>Camera Name:</strong>{' '}
                      {marsPhotos?.photos[19].camera.full_name}
                    </p>
                  </InfoContainer>
                </Slide>
              </Slider>
            </ImagesContainer>
          </CarouselProvider>
        </ImageSection>
      </div>
    </Container>
  );
};

export default MarsRover;
