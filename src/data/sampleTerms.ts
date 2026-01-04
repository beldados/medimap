import { MedicalTerm } from '../types/medical';

/**
 * Sample medical terminology data
 * In a real application, this would come from a database or API
 */
export const sampleMedicalTerms: MedicalTerm[] = [
  // ICD-10 Diagnoses
  {
    id: '1',
    code: 'E11',
    display: 'Type 2 diabetes mellitus',
    system: 'ICD-10',
    category: 'Diagnosis',
    description: 'A chronic condition that affects the way the body processes blood sugar (glucose)',
    synonyms: ['Type II diabetes', 'Adult-onset diabetes', 'Non-insulin-dependent diabetes'],
  },
  {
    id: '2',
    code: 'E11.9',
    display: 'Type 2 diabetes mellitus without complications',
    system: 'ICD-10',
    category: 'Diagnosis',
    parentCode: 'E11',
    description: 'Type 2 diabetes with no documented complications',
  },
  {
    id: '3',
    code: 'E11.21',
    display: 'Type 2 diabetes mellitus with diabetic nephropathy',
    system: 'ICD-10',
    category: 'Diagnosis',
    parentCode: 'E11',
    description: 'Type 2 diabetes with kidney disease',
  },
  {
    id: '4',
    code: 'I10',
    display: 'Essential (primary) hypertension',
    system: 'ICD-10',
    category: 'Diagnosis',
    description: 'High blood pressure without a known secondary cause',
    synonyms: ['High blood pressure', 'HTN', 'Primary hypertension'],
  },
  {
    id: '5',
    code: 'J44.0',
    display: 'Chronic obstructive pulmonary disease with acute lower respiratory infection',
    system: 'ICD-10',
    category: 'Diagnosis',
    description: 'COPD with current acute respiratory infection',
    synonyms: ['COPD with infection'],
  },
  
  // Procedures
  {
    id: '6',
    code: '99213',
    display: 'Office or other outpatient visit, established patient, level 3',
    system: 'CPT',
    category: 'Procedure',
    description: 'Evaluation and management service for established patient',
  },
  {
    id: '7',
    code: '80053',
    display: 'Comprehensive metabolic panel',
    system: 'CPT',
    category: 'Laboratory',
    description: 'Blood test measuring 14 different substances',
    synonyms: ['CMP', 'Chemistry panel'],
  },
  
  // Medications
  {
    id: '8',
    code: '310964',
    display: 'Metformin 500 MG Oral Tablet',
    system: 'RxNorm',
    category: 'Medication',
    description: 'Oral medication for type 2 diabetes',
    synonyms: ['Glucophage'],
  },
  {
    id: '9',
    code: '197361',
    display: 'Lisinopril 10 MG Oral Tablet',
    system: 'RxNorm',
    category: 'Medication',
    description: 'ACE inhibitor for blood pressure',
    synonyms: ['Prinivil', 'Zestril'],
  },
  
  // SNOMED CT
  {
    id: '10',
    code: '73211009',
    display: 'Diabetes mellitus',
    system: 'SNOMED-CT',
    category: 'Diagnosis',
    description: 'A group of metabolic diseases characterized by high blood sugar',
  },
  {
    id: '11',
    code: '386661006',
    display: 'Fever',
    system: 'SNOMED-CT',
    category: 'Symptom',
    description: 'Elevated body temperature',
    synonyms: ['Pyrexia', 'Febrile'],
  },
  {
    id: '12',
    code: '25064002',
    display: 'Headache',
    system: 'SNOMED-CT',
    category: 'Symptom',
    description: 'Pain in the head or upper neck',
    synonyms: ['Cephalgia'],
  },
  
  // Laboratory
  {
    id: '13',
    code: '4548-4',
    display: 'Hemoglobin A1c/Hemoglobin.total in Blood',
    system: 'LOINC',
    category: 'Laboratory',
    description: 'Measure of average blood sugar over 2-3 months',
    synonyms: ['HbA1c', 'Glycated hemoglobin'],
  },
  {
    id: '14',
    code: '2093-3',
    display: 'Cholesterol [Mass/volume] in Serum or Plasma',
    system: 'LOINC',
    category: 'Laboratory',
    description: 'Total cholesterol level in blood',
  },
  
  // Anatomy
  {
    id: '15',
    code: '80891009',
    display: 'Heart',
    system: 'SNOMED-CT',
    category: 'Anatomy',
    description: 'The muscular organ that pumps blood',
  },
];
