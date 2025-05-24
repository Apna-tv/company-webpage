import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const WhyJoinContainer = styled.section`
  margin: 60px 0;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 40px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
`;

const BenefitIcon = styled.div`
  font-size: 30px;
  color: #00c8ff;
  margin-bottom: 15px;
`;

const BenefitTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
`;

const BenefitDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
`;

const JoinButton = styled(Link)`
  display: inline-block;
  background-color: #00c8ff;
  color: white;
  font-size: 16px;
  font-weight: 500;
  padding: 12px 40px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: #00b8ee;
  }
`;

const WhyJoinUs = () => {
  return (
    <WhyJoinContainer>
      <SectionTitle>Why Companies Choose Us</SectionTitle>
      <Subtitle>
        Join thousands of companies finding top talent through our platform. Post jobs, search candidates, and build your dream team.
      </Subtitle>
      
      <BenefitsGrid>
        <BenefitCard>
          <BenefitIcon>
            <i className="fas fa-user-tie"></i>
          </BenefitIcon>
          <BenefitTitle>Skilled Passionate Talent</BenefitTitle>
          <BenefitDescription>
            Connect with pre-screened candidates who are passionate about their work and bring a wealth of skills and expertise to your company.
          </BenefitDescription>
        </BenefitCard>
        
        <BenefitCard>
          <BenefitIcon>
            <i className="fas fa-comments"></i>
          </BenefitIcon>
          <BenefitTitle>Seamless 1:1 Communication</BenefitTitle>
          <BenefitDescription>
            Our platform facilitates direct, efficient communication between your team and potential candidates, streamlining the hiring process.
          </BenefitDescription>
        </BenefitCard>
        
        <BenefitCard>
          <BenefitIcon>
            <i className="fas fa-lightbulb"></i>
          </BenefitIcon>
          <BenefitTitle>Entrepreneurial Mindset</BenefitTitle>
          <BenefitDescription>
            Find candidates who think like entrepreneurs - proactive problem-solvers who bring innovation and initiative to every project.
          </BenefitDescription>
        </BenefitCard>
      </BenefitsGrid>
      
      <JoinButton to="/company/register">Register Your Company</JoinButton>
    </WhyJoinContainer>
  );
};

export default WhyJoinUs; 