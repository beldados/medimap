/**
 * Represents a medical terminology system
 */
export type MedicalTerminologySystem = 
  | 'ICD-10'
  | 'ICD-11'
  | 'SNOMED-CT'
  | 'LOINC'
  | 'CPT'
  | 'RxNorm'
  | 'Custom';

/**
 * Represents a category of medical terminology
 */
export type MedicalCategory = 
  | 'Diagnosis'
  | 'Procedure'
  | 'Medication'
  | 'Laboratory'
  | 'Anatomy'
  | 'Symptom'
  | 'Observation';

/**
 * Main interface for a medical terminology entry
 */
export interface MedicalTerm {
  id: string;
  code: string;
  display: string;
  system: MedicalTerminologySystem;
  category: MedicalCategory;
  description?: string;
  synonyms?: string[];
  parentCode?: string;
  relatedCodes?: string[];
}

/**
 * Interface for search/filter criteria
 */
export interface MedicalTermFilter {
  searchQuery?: string;
  system?: MedicalTerminologySystem;
  category?: MedicalCategory;
}

/**
 * Interface for term visualization node
 */
export interface TermNode {
  term: MedicalTerm;
  children: TermNode[];
  expanded: boolean;
}
