import React from 'react';
import { MedicalTermFilter, MedicalTerminologySystem, MedicalCategory } from '../types/medical';

interface SearchFilterProps {
  filter: MedicalTermFilter;
  onFilterChange: (filter: MedicalTermFilter) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ filter, onFilterChange }) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filter, searchQuery: e.target.value });
  };

  const handleSystemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange({
      ...filter,
      system: value === '' ? undefined : (value as MedicalTerminologySystem),
    });
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    onFilterChange({
      ...filter,
      category: value === '' ? undefined : (value as MedicalCategory),
    });
  };

  return (
    <div className="search-filter">
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by code, name, or description..."
          value={filter.searchQuery || ''}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      
      <div className="filters">
        <div className="filter-group">
          <label htmlFor="system-filter">System:</label>
          <select
            id="system-filter"
            value={filter.system || ''}
            onChange={handleSystemChange}
            className="filter-select"
          >
            <option value="">All Systems</option>
            <option value="ICD-10">ICD-10</option>
            <option value="ICD-11">ICD-11</option>
            <option value="SNOMED-CT">SNOMED-CT</option>
            <option value="LOINC">LOINC</option>
            <option value="CPT">CPT</option>
            <option value="RxNorm">RxNorm</option>
            <option value="Custom">Custom</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="category-filter">Category:</label>
          <select
            id="category-filter"
            value={filter.category || ''}
            onChange={handleCategoryChange}
            className="filter-select"
          >
            <option value="">All Categories</option>
            <option value="Diagnosis">Diagnosis</option>
            <option value="Procedure">Procedure</option>
            <option value="Medication">Medication</option>
            <option value="Laboratory">Laboratory</option>
            <option value="Anatomy">Anatomy</option>
            <option value="Symptom">Symptom</option>
            <option value="Observation">Observation</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;
