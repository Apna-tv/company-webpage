import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  padding: 50px 0 30px;
  margin-top: 60px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div``;

const FooterLogo = styled.div`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
  
  span {
    color: #00c8ff;
  }
`;

const FooterText = styled.p`
  color: #aaa;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const SocialIcon = styled.a`
  color: #fff;
  font-size: 18px;
  
  &:hover {
    color: #00c8ff;
  }
`;

const FooterTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #fff;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 10px;
  
  a {
    color: #aaa;
    font-size: 14px;
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #00c8ff;
    }
  }
`;

const BottomBar = styled.div`
  max-width: 1200px;
  margin: 40px auto 0;
  padding: 20px;
  border-top: 1px solid #444;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: #aaa;
  font-size: 14px;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 20px;
  
  a {
    color: #aaa;
    font-size: 14px;
    text-decoration: none;
    
    &:hover {
      color: #00c8ff;
    }
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo>
            Job<span>Platform</span>
          </FooterLogo>
          <FooterText>
            Connecting companies with top talent. Our platform helps businesses find passionate, 
            skilled professionals who bring an entrepreneurial mindset to every project.
          </FooterText>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>For Companies</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/company/register">Register Company</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/company/post-job">Post a Job</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/company/dashboard">Company Dashboard</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/pricing">Pricing</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Resources</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/blog">Blog</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/testimonials">Success Stories</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/help">Help Center</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/contact">Contact Us</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Company</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <Link to="/about">About Us</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/careers">Careers</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/press">Press</Link>
            </FooterLink>
            <FooterLink>
              <Link to="/partners">Partners</Link>
            </FooterLink>
          </FooterLinks>
        </FooterColumn>
      </FooterContent>
      
      <BottomBar>
        <Copyright>
          © {currentYear} JobPlatform. All rights reserved.
        </Copyright>
        <LegalLinks>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/cookies">Cookie Policy</Link>
        </LegalLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer; 