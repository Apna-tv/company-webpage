import React from 'react';
import styled from 'styled-components';
import sidebarImage from '../assets/sidebar-image.svg';

const SidebarContainer = styled.div`
  background-color: #f0fcfb;
  border-radius: 8px;
  padding: 20px;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

const SidebarTitle = styled.h3`
  font-size: 18px;
  color: #00c8b4;
  margin-bottom: 15px;
`;

const SidebarText = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const GetStartedButton = styled.button`
  background-color: #00c8b4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 0;
  width: 100%;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background-color: #00b8a4;
  }
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <Image src={sidebarImage} alt="People working" />
      
      <SidebarTitle>Incididunt et magna</SidebarTitle>
      
      <SidebarText>
        Incididunt et magna enim mollit quis ut
        sit ut enim do est ute fugiat irure in occaecat.
      </SidebarText>
      
      <GetStartedButton>Get started</GetStartedButton>
    </SidebarContainer>
  );
};

export default Sidebar; 