import React from 'react';
import styled from 'styled-components';

const ReviewsContainer = styled.section`
  max-width: 1200px;
  margin: 60px auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 15px;
  color: #333;
`;

const SectionSubtitle = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 40px;
  line-height: 1.6;
`;

const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const CompanyLogo = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  background-color: ${props => props.bgColor || '#f0f0f0'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: white;
  font-size: 24px;
  margin-right: 15px;
`;

const CompanyInfo = styled.div``;

const CompanyName = styled.h4`
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 5px;
`;

const CompanyIndustry = styled.p`
  color: #666;
  font-size: 14px;
  margin: 0;
`;

const ReviewText = styled.p`
  color: #444;
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const ReviewerInfo = styled.div`
  display: flex;
  align-items: center;
`;

const ReviewerAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-weight: 600;
  color: #555;
`;

const ReviewerName = styled.p`
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 2px;
`;

const ReviewerTitle = styled.p`
  color: #666;
  font-size: 13px;
  margin: 0;
`;

const StarRating = styled.div`
  display: flex;
  margin-top: 2px;
  margin-bottom: 15px;
  color: #ffc107;
  font-size: 14px;
`;

const reviews = [
  {
    id: 1,
    companyName: 'TechCorp',
    industry: 'Technology',
    logoColor: '#4285F4',
    text: 'We\'ve hired 15 talented developers through this platform in the last year. The quality of candidates is exceptional, and the hiring process is streamlined and efficient.',
    rating: 5,
    reviewer: {
      name: 'Sarah Johnson',
      title: 'Head of Talent Acquisition',
      avatar: 'SJ'
    }
  },
  {
    id: 2,
    companyName: 'GreenEnergy',
    industry: 'Renewable Energy',
    logoColor: '#0F9D58',
    text: 'As a growing startup, finding the right talent quickly was crucial. This platform connected us with passionate professionals who shared our vision for a sustainable future.',
    rating: 5,
    reviewer: {
      name: 'Michael Chen',
      title: 'CEO',
      avatar: 'MC'
    }
  },
  {
    id: 3,
    companyName: 'FinTrust',
    industry: 'Financial Services',
    logoColor: '#DB4437',
    text: 'The platform\'s matching algorithm is impressive. We\'ve saved countless hours screening candidates and have made some of our best hires through this service.',
    rating: 4,
    reviewer: {
      name: 'Jessica Patel',
      title: 'HR Director',
      avatar: 'JP'
    }
  },
  {
    id: 4,
    companyName: 'HealthPlus',
    industry: 'Healthcare',
    logoColor: '#4285F4',
    text: 'The quality of healthcare professionals we\'ve hired through this platform has significantly improved our patient care. The verification process ensures we get legitimate, qualified candidates.',
    rating: 5,
    reviewer: {
      name: 'David Kim',
      title: 'Operations Manager',
      avatar: 'DK'
    }
  },
  {
    id: 5,
    companyName: 'CreativeMinds',
    industry: 'Design Agency',
    logoColor: '#F4B400',
    text: 'We needed designers who could think outside the box and deliver exceptional creative work. This platform helped us find exactly that - talented individuals who now form the core of our design team.',
    rating: 5,
    reviewer: {
      name: 'Emma Rodriguez',
      title: 'Creative Director',
      avatar: 'ER'
    }
  },
  {
    id: 6,
    companyName: 'LogisticsPro',
    industry: 'Supply Chain',
    logoColor: '#0F9D58',
    text: 'The platform\'s industry-specific filtering helped us find candidates with specialized logistics knowledge. The onboarding process was smooth, and we\'ve seen great results.',
    rating: 4,
    reviewer: {
      name: 'Robert Williams',
      title: 'Supply Chain Director',
      avatar: 'RW'
    }
  }
];

const CompanyReviews = () => {
  // Generate star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i 
          key={i} 
          className={i < rating ? "fas fa-star" : "far fa-star"}
        ></i>
      );
    }
    return stars;
  };

  return (
    <ReviewsContainer>
      <SectionTitle>Trusted by Leading Companies</SectionTitle>
      <SectionSubtitle>
        Hear from companies that have successfully hired top talent through our platform
      </SectionSubtitle>
      
      <ReviewsGrid>
        {reviews.map(review => (
          <ReviewCard key={review.id}>
            <ReviewHeader>
              <CompanyLogo bgColor={review.logoColor}>
                {review.companyName.charAt(0)}
              </CompanyLogo>
              <CompanyInfo>
                <CompanyName>{review.companyName}</CompanyName>
                <CompanyIndustry>{review.industry}</CompanyIndustry>
              </CompanyInfo>
            </ReviewHeader>
            
            <StarRating>
              {renderStars(review.rating)}
            </StarRating>
            
            <ReviewText>"{review.text}"</ReviewText>
            
            <ReviewerInfo>
              <ReviewerAvatar>{review.reviewer.avatar}</ReviewerAvatar>
              <div>
                <ReviewerName>{review.reviewer.name}</ReviewerName>
                <ReviewerTitle>{review.reviewer.title}</ReviewerTitle>
              </div>
            </ReviewerInfo>
          </ReviewCard>
        ))}
      </ReviewsGrid>
    </ReviewsContainer>
  );
};

export default CompanyReviews; 