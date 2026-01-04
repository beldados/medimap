import React from 'react';
import { MedicalTerm } from '../types/medical';
import TermCard from './TermCard';

interface TermListProps {
  terms: MedicalTerm[];
}

const TermList: React.FC<TermListProps> = ({ terms }) => {
  if (terms.length === 0) {
    return (
      <div className="no-results">
        <p>No medical terms found matching your criteria.</p>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="term-list">
      <div className="term-count">
        Showing {terms.length} medical term{terms.length !== 1 ? 's' : ''}
      </div>
      <div className="term-grid">
        {terms.map((term) => (
          <TermCard key={term.id} term={term} />
        ))}
      </div>
    </div>
  );
};

export default TermList;
