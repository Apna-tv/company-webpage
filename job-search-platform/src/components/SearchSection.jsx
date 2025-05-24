import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const ColoredText = styled.span`
  color: #00c8ff;
`;

const SearchForm = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const SearchInputContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
`;

const InputWrapper = styled.div`
  position: relative;
  flex: 1;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #aaa;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 12px 12px 12px 35px;
  border: 1px solid #eee;
  border-radius: 5px;
  font-size: 14px;
  background-color: #f9f9f9;
  
  &:focus {
    outline: none;
    border-color: #00c8ff;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const FiltersRow = styled.div`
  display: flex;
  gap: 15px;
`;

const FilterDropdown = styled.select`
  padding: 10px 15px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: white;
  font-size: 14px;
  min-width: 150px;
  
  &:focus {
    outline: none;
    border-color: #00c8ff;
  }
`;

const ClearFilters = styled.button`
  background: none;
  border: none;
  color: #00c8ff;
  font-size: 14px;
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ResultsCount = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;

const SearchResult = styled.span`
  color: #00c8ff;
  font-weight: 500;
`;

const SearchSection = ({ onSearch, totalResults, searchTerm }) => {
  return (
    <SearchContainer>
      <Title>
        Search <ColoredText>Candiates</ColoredText>
      </Title>
      
      <SearchForm>
        <Label>Search</Label>
        <SearchInputContainer>
          <InputWrapper>
            <SearchIcon>
              <i className="fas fa-search"></i>
            </SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Designer" 
              defaultValue={searchTerm}
            />
          </InputWrapper>
        </SearchInputContainer>
        
        <FilterContainer>
          <Label>Filter</Label>
          <ClearFilters>Clear filters</ClearFilters>
        </FilterContainer>
        
        <FiltersRow>
          <FilterDropdown>
            <option>Location</option>
          </FilterDropdown>
          
          <FilterDropdown>
            <option>Experience level</option>
          </FilterDropdown>
          
          <FilterDropdown>
            <option>Industry</option>
          </FilterDropdown>
          
          <FilterDropdown>
            <option>Company type</option>
          </FilterDropdown>
        </FiltersRow>
      </SearchForm>
      
      <ResultsCount>
        {totalResults} results for <SearchResult>"{searchTerm}"</SearchResult>
      </ResultsCount>
    </SearchContainer>
  );
};

export default SearchSection; 