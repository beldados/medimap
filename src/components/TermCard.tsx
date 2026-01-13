import React from 'react';
import { MedicalTerm } from '../types/medical';

interface TermCardProps {
  term: MedicalTerm;
}

const TermCard: React.FC<TermCardProps> = ({ term }) => {
  return (
    <div className="term-card">
      <div className="term-header">
        <div className="term-code-display">
          <span className="term-code">{term.code}</span>
          <h3 className="term-display">{term.display}</h3>
        </div>
        <div className="term-badges">
          <span className={`badge badge-system badge-${term.system.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}>
            {term.system}
          </span>
          <span className={`badge badge-category badge-${term.category.toLowerCase()}`}>
            {term.category}
          </span>
        </div>
      </div>

      {term.description && (
        <p className="term-description">{term.description}</p>
      )}

      {term.synonyms && term.synonyms.length > 0 && (
        <div className="term-synonyms">
          <strong>Synonyms:</strong> {term.synonyms.join(', ')}
        </div>
      )}

      {term.parentCode && (
        <div className="term-parent">
          <strong>Parent Code:</strong> {term.parentCode}
        </div>
      )}

      {term.relatedCodes && term.relatedCodes.length > 0 && (
        <div className="term-related">
          <strong>Related Codes:</strong> {term.relatedCodes.join(', ')}
        </div>
      )}
    </div>
  );
};

export default TermCard;
