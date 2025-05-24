import React from 'react';
import styled from 'styled-components';
import WhyJoinUs from '../components/WhyJoinUs';

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 60px 20px;
  margin-bottom: 40px;
`;

const HeroTitle = styled.h1`
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #333;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
  color: #666;
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.6;
`;

const HomePage = () => {
  return (
    <MainContent>
      <HeroSection>
        <HeroTitle>Connect with the Best Talent</HeroTitle>
        <HeroSubtitle>
          Our platform helps companies find skilled, passionate professionals 
          for their open positions. Join today and streamline your hiring process.
        </HeroSubtitle>
      </HeroSection>
      
      <WhyJoinUs />
    </MainContent>
  );
};

export default HomePage; 