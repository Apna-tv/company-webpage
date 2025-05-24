import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 0 20px;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 10px;
  color: #333;
`;

const PageDescription = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 30px;
`;

const FormSection = styled.div`
  margin-bottom: 30px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #00c8ff;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  min-height: 120px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #00c8ff;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: #00c8ff;
  }
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
`;

const TermsText = styled.span`
  color: #666;
`;

const TermsLink = styled(Link)`
  color: #00c8ff;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;
`;

const CancelButton = styled(Link)`
  display: inline-block;
  background: none;
  border: 1px solid #ddd;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  text-decoration: none;
  
  &:hover {
    background-color: #f5f5f5;
  }
`;

const SubmitButton = styled.button`
  background-color: #00c8ff;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #00b8ee;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const CompanyRegister = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyDescription: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation would go here
    console.log('Form submitted:', formData);
    // Submit to backend API
  };
  
  return (
    <PageContainer>
      <PageTitle>Register Your Company</PageTitle>
      <PageDescription>
        Join our platform to find the best talent for your team. 
        Create your company profile and start posting jobs.
      </PageDescription>
      
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Company Information</SectionTitle>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="companyName">Company Name *</Label>
                <Input 
                  type="text" 
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="industry">Industry *</Label>
                <Select 
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </Select>
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="companySize">Company Size *</Label>
                <Select 
                  id="companySize"
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select company size</option>
                  <option value="1-10">1-10 employees</option>
                  <option value="11-50">11-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-500">201-500 employees</option>
                  <option value="501-1000">501-1000 employees</option>
                  <option value="1000+">1000+ employees</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="website">Company Website</Label>
                <Input 
                  type="url" 
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="https://example.com"
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <Label htmlFor="companyDescription">Company Description *</Label>
              <TextArea 
                id="companyDescription"
                name="companyDescription"
                value={formData.companyDescription}
                onChange={handleChange}
                placeholder="Tell potential candidates about your company, culture, and mission..."
                required
              />
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Contact Person</SectionTitle>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="firstName">First Name *</Label>
                <Input 
                  type="text" 
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input 
                  type="text" 
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="email">Email Address *</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Account Security</SectionTitle>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="password">Password *</Label>
                <Input 
                  type="password" 
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="confirmPassword">Confirm Password *</Label>
                <Input 
                  type="password" 
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <CheckboxLabel>
                <Checkbox 
                  type="checkbox" 
                  id="agreeToTerms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                />
                <TermsText>
                  I agree to the <TermsLink to="/terms">Terms of Service</TermsLink> and <TermsLink to="/privacy">Privacy Policy</TermsLink>
                </TermsText>
              </CheckboxLabel>
            </FormGroup>
          </FormSection>
          
          <ButtonsContainer>
            <CancelButton to="/">Cancel</CancelButton>
            <SubmitButton type="submit" disabled={!formData.agreeToTerms}>Register Company</SubmitButton>
          </ButtonsContainer>
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default CompanyRegister; 