import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid #f0f0f0;
`;

const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 20px;
`;

const CandidateInfo = styled.div`
  flex-grow: 1;
`;

const CandidateName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin: 0 0 5px 0;
  display: flex;
  align-items: center;
`;

const OpenBadge = styled.span`
  background-color: #e6fffa;
  color: #00c8b4;
  font-size: 12px;
  padding: 3px 8px;
  border-radius: 30px;
  margin-left: 10px;
`;

const Location = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
`;

const Position = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const SkillsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const SkillTag = styled.span`
  background-color: #f5f5f5;
  color: #666;
  font-size: 12px;
  padding: 5px 10px;
  border-radius: 4px;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const SendMessageButton = styled.button`
  background: none;
  border: 1px solid #00c8ff;
  color: #00c8ff;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 200, 255, 0.1);
  }
`;

const ConnectButton = styled.button`
  background-color: #00c8ff;
  border: none;
  color: white;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: #00b8ee;
  }
`;

const CandidateCard = ({ 
  name, 
  image, 
  location, 
  position, 
  company, 
  skills,
  isOpenToWork
}) => {
  return (
    <CardContainer>
      <ProfileImage src={image} alt={name} />
      
      <CandidateInfo>
        <CandidateName>
          {name}
          {isOpenToWork && <OpenBadge>Open for work</OpenBadge>}
        </CandidateName>
        <Location>{location}</Location>
        <Position>{position} at {company}</Position>
        
        <SkillsContainer>
          {skills.map((skill, index) => (
            <SkillTag key={index}>{skill}</SkillTag>
          ))}
        </SkillsContainer>
      </CandidateInfo>
      
      <ActionButtons>
        <SendMessageButton>Send message</SendMessageButton>
        <ConnectButton>Connect</ConnectButton>
      </ActionButtons>
    </CardContainer>
  );
};

export default CandidateCard; 