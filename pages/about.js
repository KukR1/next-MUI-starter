import HomepageImage from '../public/homepage-2.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <Image
        src={HomepageImage}
        objectFit="cover"
        layout="responsive"
        width={1000}
        height={150}
        alt="Homepage image"
      />
    </>
  );
};

export default About;
