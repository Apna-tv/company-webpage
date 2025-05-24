import React from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  gap: 5px;
`;

const PageItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.active ? '#00c8ff' : 'transparent'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? '#00c8ff' : '#f0f0f0'};
  }
`;

const ArrowButton = styled(PageItem)`
  background-color: #f0f0f0;
  color: #666;
`;

const Ellipsis = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: #666;
  font-size: 14px;
`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    
    pageNumbers.push(
      <ArrowButton key="prev" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        <i className="fas fa-chevron-left"></i>
      </ArrowButton>
    );
    
    // First page
    pageNumbers.push(
      <PageItem 
        key={1} 
        active={currentPage === 1} 
        onClick={() => onPageChange(1)}
      >
        1
      </PageItem>
    );
    
    // Pages 2-4
    for (let i = 2; i <= 4; i++) {
      if (i <= totalPages) {
        pageNumbers.push(
          <PageItem 
            key={i} 
            active={currentPage === i} 
            onClick={() => onPageChange(i)}
          >
            {i}
          </PageItem>
        );
      }
    }
    
    // Ellipsis
    if (totalPages > 6) {
      pageNumbers.push(<Ellipsis key="ellipsis">...</Ellipsis>);
    }
    
    // Last few pages
    if (totalPages > 5) {
      pageNumbers.push(
        <PageItem 
          key={10} 
          active={currentPage === 10} 
          onClick={() => onPageChange(10)}
        >
          10
        </PageItem>
      );
    }
    
    if (totalPages > 6) {
      pageNumbers.push(
        <PageItem 
          key={11} 
          active={currentPage === 11} 
          onClick={() => onPageChange(11)}
        >
          11
        </PageItem>
      );
    }
    
    // Next button
    pageNumbers.push(
      <ArrowButton key="next" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        <i className="fas fa-chevron-right"></i>
      </ArrowButton>
    );
    
    return pageNumbers;
  };
  
  return (
    <PaginationContainer>
      {renderPageNumbers()}
    </PaginationContainer>
  );
};

export default Pagination; 