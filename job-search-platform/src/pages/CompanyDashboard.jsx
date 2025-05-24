import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
`;

const PageHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const PageTitle = styled.h1`
  font-size: 28px;
  color: #333;
`;

const ActionButton = styled(Link)`
  background-color: #00c8ff;
  color: white;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  i {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: #00b8ee;
  }
`;

const DashboardGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 30px;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const MainColumn = styled.div``;

const SideColumn = styled.div``;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #eee;
  margin-bottom: 20px;
`;

const Tab = styled.button`
  padding: 10px 20px;
  background: none;
  border: none;
  font-size: 16px;
  color: ${props => props.active ? '#00c8ff' : '#666'};
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    right: 0;
    height: 3px;
    background-color: ${props => props.active ? '#00c8ff' : 'transparent'};
  }
  
  &:hover {
    color: #00c8ff;
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 25px;
  margin-bottom: 20px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`;

const CardActions = styled.div`
  display: flex;
  gap: 10px;
`;

const IconAction = styled.button`
  background: none;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    color: #00c8ff;
  }
`;

const JobTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  text-align: left;
  padding: 15px 10px;
  font-size: 14px;
  font-weight: 600;
  color: #666;
  border-bottom: 1px solid #eee;
`;

const TableCell = styled.td`
  padding: 15px 10px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    text-align: right;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => {
    switch(props.status) {
      case 'active':
        return '#e6fffb';
      case 'paused':
        return '#fff7e6';
      case 'closed':
        return '#f5f5f5';
      default:
        return '#f5f5f5';
    }
  }};
  color: ${props => {
    switch(props.status) {
      case 'active':
        return '#00b8a3';
      case 'paused':
        return '#ffa940';
      case 'closed':
        return '#8c8c8c';
      default:
        return '#666';
    }
  }};
`;

const SummaryCard = styled(Card)`
  text-align: center;
  padding: 25px 15px;
`;

const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #00c8ff;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #666;
`;

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  margin-bottom: 30px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 50px 20px;
  color: #666;
`;

const EmptyStateIcon = styled.div`
  font-size: 48px;
  color: #ddd;
  margin-bottom: 20px;
`;

const EmptyStateText = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const CompanyDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  
  const jobs = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      location: 'Remote',
      datePosted: '2023-04-10',
      applicants: 24,
      status: 'active',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      location: 'New York, NY',
      datePosted: '2023-04-05',
      applicants: 18,
      status: 'active',
    },
    {
      id: 3,
      title: 'Product Manager',
      location: 'San Francisco, CA',
      datePosted: '2023-03-25',
      applicants: 32,
      status: 'paused',
    },
    {
      id: 4,
      title: 'Backend Developer',
      location: 'Remote',
      datePosted: '2023-03-15',
      applicants: 15,
      status: 'closed',
    }
  ];
  
  const renderContent = () => {
    switch (activeTab) {
      case 'jobs':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Posted Jobs</CardTitle>
              <CardActions>
                <IconAction title="Filter">
                  <i className="fas fa-filter"></i>
                </IconAction>
                <IconAction title="Export">
                  <i className="fas fa-download"></i>
                </IconAction>
              </CardActions>
            </CardHeader>
            
            {jobs.length > 0 ? (
              <JobTable>
                <thead>
                  <tr>
                    <TableHeader>Job Title</TableHeader>
                    <TableHeader>Location</TableHeader>
                    <TableHeader>Posted</TableHeader>
                    <TableHeader>Applicants</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {jobs.map(job => (
                    <tr key={job.id}>
                      <TableCell>{job.title}</TableCell>
                      <TableCell>{job.location}</TableCell>
                      <TableCell>{new Date(job.datePosted).toLocaleDateString()}</TableCell>
                      <TableCell>{job.applicants}</TableCell>
                      <TableCell>
                        <StatusBadge status={job.status}>
                          {job.status.charAt(0).toUpperCase() + job.status.slice(1)}
                        </StatusBadge>
                      </TableCell>
                      <TableCell>
                        <IconAction title="Edit">
                          <i className="fas fa-edit"></i>
                        </IconAction>
                        <IconAction title="View applicants">
                          <i className="fas fa-users"></i>
                        </IconAction>
                        <IconAction title="More options">
                          <i className="fas fa-ellipsis-v"></i>
                        </IconAction>
                      </TableCell>
                    </tr>
                  ))}
                </tbody>
              </JobTable>
            ) : (
              <EmptyState>
                <EmptyStateIcon>
                  <i className="fas fa-briefcase"></i>
                </EmptyStateIcon>
                <EmptyStateText>You haven't posted any jobs yet.</EmptyStateText>
                <ActionButton to="/company/post-job">
                  <i className="fas fa-plus"></i> Post a Job
                </ActionButton>
              </EmptyState>
            )}
          </Card>
        );
      case 'applicants':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Recent Applicants</CardTitle>
              <CardActions>
                <IconAction title="Filter">
                  <i className="fas fa-filter"></i>
                </IconAction>
              </CardActions>
            </CardHeader>
            
            <EmptyState>
              <EmptyStateIcon>
                <i className="fas fa-user-tie"></i>
              </EmptyStateIcon>
              <EmptyStateText>No recent applicants to display.</EmptyStateText>
            </EmptyState>
          </Card>
        );
      case 'messages':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            
            <EmptyState>
              <EmptyStateIcon>
                <i className="fas fa-comments"></i>
              </EmptyStateIcon>
              <EmptyStateText>You don't have any messages yet.</EmptyStateText>
            </EmptyState>
          </Card>
        );
      default:
        return null;
    }
  };
  
  return (
    <PageContainer>
      <PageHeader>
        <PageTitle>Company Dashboard</PageTitle>
        <ActionButton to="/company/post-job">
          <i className="fas fa-plus"></i> Post a Job
        </ActionButton>
      </PageHeader>
      
      <DashboardGrid>
        <MainColumn>
          <TabsContainer>
            <Tab 
              active={activeTab === 'jobs'} 
              onClick={() => setActiveTab('jobs')}
            >
              Jobs
            </Tab>
            <Tab 
              active={activeTab === 'applicants'} 
              onClick={() => setActiveTab('applicants')}
            >
              Applicants
            </Tab>
            <Tab 
              active={activeTab === 'messages'} 
              onClick={() => setActiveTab('messages')}
            >
              Messages
            </Tab>
          </TabsContainer>
          
          {renderContent()}
        </MainColumn>
        
        <SideColumn>
          <StatGrid>
            <SummaryCard>
              <StatNumber>4</StatNumber>
              <StatLabel>Active Jobs</StatLabel>
            </SummaryCard>
            
            <SummaryCard>
              <StatNumber>89</StatNumber>
              <StatLabel>Total Applicants</StatLabel>
            </SummaryCard>
          </StatGrid>
          
          <Card>
            <CardHeader>
              <CardTitle>Company Profile</CardTitle>
              <IconAction title="Edit profile">
                <i className="fas fa-edit"></i>
              </IconAction>
            </CardHeader>
            
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <img 
                src="https://via.placeholder.com/80" 
                alt="Company logo" 
                style={{ 
                  width: '80px', 
                  height: '80px', 
                  borderRadius: '10px',
                  objectFit: 'cover'
                }} 
              />
              <h3 style={{ fontSize: '16px', margin: '10px 0 5px' }}>Acme Inc.</h3>
              <p style={{ fontSize: '14px', color: '#666', margin: 0 }}>Technology</p>
            </div>
            
            <div style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
              <p>Your company profile is 80% complete.</p>
              <div style={{ 
                height: '6px', 
                background: '#f0f0f0', 
                borderRadius: '3px',
                margin: '10px 0'
              }}>
                <div style={{ 
                  width: '80%', 
                  height: '100%', 
                  backgroundColor: '#00c8ff',
                  borderRadius: '3px'
                }}></div>
              </div>
            </div>
            
            <ActionButton to="/company/profile" style={{ width: '100%', justifyContent: 'center' }}>
              Complete Profile
            </ActionButton>
          </Card>
        </SideColumn>
      </DashboardGrid>
    </PageContainer>
  );
};

export default CompanyDashboard; 