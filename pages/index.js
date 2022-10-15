import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Slider from 'react-slick';
import Head from 'next/head';

let images = ['1', '2', '3', '4', '5', '6', '7', '8'].map((image, index) => {
  return (
    <Image
      priority={true}
      key={index}
      alt={image}
      src={require(`./../public/carousel/${image}.jpg`)}
    />
  );
});

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 780,
        settings: {
          centerMode: true,
          centerPadding: 80,
          infinite: true,
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Head>
        <title>Diti Painting & Decorating</title>
        <meta
          name="description"
          content="Based in London, our expert painters and decorators are ready to change your home as you wish. Our services have to do with any type of decorating and painting your house!"
        />
        <meta name="og:title" content="Diti Painting & Decorating" />
      </Head>
      <Box>
        <Slider {...settings}>{images}</Slider>
      </Box>
      <Box
        sx={{
          width: { xs: '20rem', md: '32rem' },
          height: '7vh',
          margin: 'auto',
          padding: { xs: '1rem', lg: '0rem' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: (theme) => theme.palette.primary.main,
          borderRadius: '0.5rem',
        }}
      >
        <Typography
          sx={{
            color: '#ffff',
            fontSize: { xs: '0.8rem', md: '1rem', textAlign: 'center' },
            fontFamily: 'Open Sans, sans-serif',
          }}
        >
          Expert interior painters are prepared to change your property
        </Typography>
      </Box>
    </>
  );
}
