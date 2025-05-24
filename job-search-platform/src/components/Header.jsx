import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { profile } from '../assets/avatars';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: white;
  border-bottom: 1px solid #f0f0f0;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  
  img {
    height: 30px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
  margin-left: 20px;
`;

const NavLink = styled(Link)`
  color: ${props => props.active ? '#00c8ff' : '#666'};
  text-decoration: none;
  font-size: 14px;
  &:hover {
    color: #00c8ff;
  }
`;

const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const ProfilePic = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;

const ProfileDropdown = styled.div`
  position: relative;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  min-width: 180px;
  z-index: 100;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 8px 20px;
  color: #666;
  text-decoration: none;
  font-size: 14px;
  
  &:hover {
    background-color: #f5f5f5;
    color: #00c8ff;
  }
`;

const PostJobButton = styled(Link)`
  background-color: #00c8ff;
  color: white;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  margin-right: 10px;
  
  &:hover {
    background-color: #00b8ee;
  }
`;

const Header = () => {
  const location = useLocation();
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  
  const toggleProfileMenu = () => {
    setShowProfileMenu(!showProfileMenu);
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <HeaderContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Logo to="/">
          <img src={logo} alt="Logo" />
        </Logo>
        <Navigation>
          <NavLink to="/" active={isActive('/')}>Home</NavLink>
          <NavLink to="/company/dashboard" active={isActive('/company/dashboard')}>Dashboard</NavLink>
          <NavLink to="/company/post-job" active={isActive('/company/post-job')}>Post Job</NavLink>
        </Navigation>
      </div>
      
      <ProfileSection>
        <PostJobButton to="/company/post-job">
          <i className="fas fa-plus"></i> Post Job
        </PostJobButton>
        
        <ProfileDropdown>
          <ProfilePic src={profile} alt="Profile" onClick={toggleProfileMenu} />
          
          {showProfileMenu && (
            <DropdownMenu>
              <DropdownItem to="/company/dashboard">Company Dashboard</DropdownItem>
              <DropdownItem to="/company/post-job">Post a Job</DropdownItem>
              <DropdownItem to="/company/register">Register Company</DropdownItem>
            </DropdownMenu>
          )}
        </ProfileDropdown>
      </ProfileSection>
    </HeaderContainer>
  );
};

export default Header; 