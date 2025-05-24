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
  min-height: 150px;
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

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 5px;
`;

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #333;
  cursor: pointer;
`;

const RadioInput = styled.input`
  margin-right: 8px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

const SkillTag = styled.div`
  background-color: #e6f7ff;
  color: #0091ea;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  display: flex;
  align-items: center;
`;

const RemoveSkill = styled.span`
  margin-left: 6px;
  cursor: pointer;
  font-size: 14px;
  
  &:hover {
    color: #0067a9;
  }
`;

const AddSkillButton = styled.button`
  background: none;
  border: 1px dashed #00c8ff;
  color: #00c8ff;
  font-size: 12px;
  padding: 6px 12px;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  
  &:hover {
    background-color: rgba(0, 200, 255, 0.05);
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 30px;
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
`;

const PreviewButton = styled.button`
  background: none;
  border: 1px solid #00c8ff;
  color: #00c8ff;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: rgba(0, 200, 255, 0.05);
  }
`;

const PostJob = () => {
  const [jobData, setJobData] = useState({
    title: '',
    department: '',
    location: '',
    locationType: 'onsite',
    employmentType: 'full-time',
    experienceLevel: '',
    minSalary: '',
    maxSalary: '',
    salaryCurrency: 'USD',
    description: '',
    requirements: '',
    benefits: '',
    applicationDeadline: '',
    skills: []
  });
  
  const [newSkill, setNewSkill] = useState('');
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [name]: value
    });
  };
  
  const handleAddSkill = () => {
    if (newSkill.trim() && !jobData.skills.includes(newSkill.trim())) {
      setJobData({
        ...jobData,
        skills: [...jobData.skills, newSkill.trim()]
      });
      setNewSkill('');
    }
  };
  
  const handleRemoveSkill = (skillToRemove) => {
    setJobData({
      ...jobData,
      skills: jobData.skills.filter(skill => skill !== skillToRemove)
    });
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Job posting submitted:', jobData);
    // Submit to backend API
  };
  
  return (
    <PageContainer>
      <PageTitle>Post a New Job</PageTitle>
      <PageDescription>
        Create a new job posting to find the perfect candidate for your position.
        Be detailed and specific to attract the right talent.
      </PageDescription>
      
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormSection>
            <SectionTitle>Job Details</SectionTitle>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="title">Job Title *</Label>
                <Input 
                  type="text" 
                  id="title"
                  name="title"
                  value={jobData.title}
                  onChange={handleChange}
                  placeholder="e.g. Senior React Developer"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="department">Department</Label>
                <Input 
                  type="text" 
                  id="department"
                  name="department"
                  value={jobData.department}
                  onChange={handleChange}
                  placeholder="e.g. Engineering"
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="location">Location *</Label>
                <Input 
                  type="text" 
                  id="location"
                  name="location"
                  value={jobData.location}
                  onChange={handleChange}
                  placeholder="e.g. New York, NY or Remote"
                  required
                />
              </FormGroup>
              
              <FormGroup>
                <Label>Location Type *</Label>
                <RadioGroup>
                  <RadioLabel>
                    <RadioInput 
                      type="radio" 
                      name="locationType" 
                      value="onsite"
                      checked={jobData.locationType === 'onsite'}
                      onChange={handleChange}
                    />
                    On-site
                  </RadioLabel>
                  
                  <RadioLabel>
                    <RadioInput 
                      type="radio" 
                      name="locationType" 
                      value="remote"
                      checked={jobData.locationType === 'remote'}
                      onChange={handleChange}
                    />
                    Remote
                  </RadioLabel>
                  
                  <RadioLabel>
                    <RadioInput 
                      type="radio" 
                      name="locationType" 
                      value="hybrid"
                      checked={jobData.locationType === 'hybrid'}
                      onChange={handleChange}
                    />
                    Hybrid
                  </RadioLabel>
                </RadioGroup>
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label>Employment Type *</Label>
                <RadioGroup>
                  <RadioLabel>
                    <RadioInput 
                      type="radio" 
                      name="employmentType" 
                      value="full-time"
                      checked={jobData.employmentType === 'full-time'}
                      onChange={handleChange}
                    />
                    Full-time
                  </RadioLabel>
                  
                  <RadioLabel>
                    <RadioInput 
                      type="radio" 
                      name="employmentType" 
                      value="part-time"
                      checked={jobData.employmentType === 'part-time'}
                      onChange={handleChange}
                    />
                    Part-time
                  </RadioLabel>
                  
                  <RadioLabel>
                    <RadioInput 
                      type="radio" 
                      name="employmentType" 
                      value="contract"
                      checked={jobData.employmentType === 'contract'}
                      onChange={handleChange}
                    />
                    Contract
                  </RadioLabel>
                </RadioGroup>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="experienceLevel">Experience Level *</Label>
                <Select 
                  id="experienceLevel"
                  name="experienceLevel"
                  value={jobData.experienceLevel}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select experience level</option>
                  <option value="entry">Entry Level</option>
                  <option value="mid">Mid Level</option>
                  <option value="senior">Senior Level</option>
                  <option value="executive">Executive</option>
                </Select>
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="minSalary">Minimum Salary</Label>
                <Input 
                  type="number" 
                  id="minSalary"
                  name="minSalary"
                  value={jobData.minSalary}
                  onChange={handleChange}
                  placeholder="e.g. 60000"
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="maxSalary">Maximum Salary</Label>
                <Input 
                  type="number" 
                  id="maxSalary"
                  name="maxSalary"
                  value={jobData.maxSalary}
                  onChange={handleChange}
                  placeholder="e.g. 80000"
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <Label htmlFor="salaryCurrency">Salary Currency</Label>
                <Select 
                  id="salaryCurrency"
                  name="salaryCurrency"
                  value={jobData.salaryCurrency}
                  onChange={handleChange}
                >
                  <option value="USD">USD - US Dollar</option>
                  <option value="EUR">EUR - Euro</option>
                  <option value="GBP">GBP - British Pound</option>
                  <option value="CAD">CAD - Canadian Dollar</option>
                  <option value="AUD">AUD - Australian Dollar</option>
                  <option value="INR">INR - Indian Rupee</option>
                </Select>
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="applicationDeadline">Application Deadline</Label>
                <Input 
                  type="date" 
                  id="applicationDeadline"
                  name="applicationDeadline"
                  value={jobData.applicationDeadline}
                  onChange={handleChange}
                />
              </FormGroup>
            </FormRow>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Job Description</SectionTitle>
            
            <FormGroup>
              <Label htmlFor="description">Job Description *</Label>
              <TextArea 
                id="description"
                name="description"
                value={jobData.description}
                onChange={handleChange}
                placeholder="Provide a detailed description of the job role, responsibilities, and what the candidate will be doing day-to-day..."
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="requirements">Requirements *</Label>
              <TextArea 
                id="requirements"
                name="requirements"
                value={jobData.requirements}
                onChange={handleChange}
                placeholder="List the qualifications, experience, and skills required for this position..."
                required
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="benefits">Benefits</Label>
              <TextArea 
                id="benefits"
                name="benefits"
                value={jobData.benefits}
                onChange={handleChange}
                placeholder="Describe the benefits and perks that come with this position..."
              />
            </FormGroup>
          </FormSection>
          
          <FormSection>
            <SectionTitle>Skills & Qualifications</SectionTitle>
            
            <FormGroup>
              <Label>Required Skills</Label>
              <FormRow>
                <Input 
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Add a required skill (e.g. React, Project Management)"
                />
                <AddSkillButton type="button" onClick={handleAddSkill}>
                  <i className="fas fa-plus" style={{ marginRight: '5px' }}></i> Add Skill
                </AddSkillButton>
              </FormRow>
              
              <SkillsContainer>
                {jobData.skills.map((skill, index) => (
                  <SkillTag key={index}>
                    {skill}
                    <RemoveSkill onClick={() => handleRemoveSkill(skill)}>
                      <i className="fas fa-times"></i>
                    </RemoveSkill>
                  </SkillTag>
                ))}
              </SkillsContainer>
            </FormGroup>
          </FormSection>
          
          <ButtonsContainer>
            <CancelButton to="/company/dashboard">Cancel</CancelButton>
            <PreviewButton type="button">Preview Job</PreviewButton>
            <SubmitButton type="submit">Post Job</SubmitButton>
          </ButtonsContainer>
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default PostJob; 