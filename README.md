# MediMap 🏥

> Visualize and type your medical terminologies

MediMap is a modern web application for visualizing, searching, and working with medical terminologies from multiple coding systems. Built with TypeScript, React, and comprehensive type safety.

![MediMap Screenshot](https://github.com/user-attachments/assets/b6dc56e3-9320-4ed0-99f6-a59d73cacb1d)

## Features

- 🔍 **Search & Filter**: Quickly find medical terms by code, name, description, or synonyms
- 🏷️ **Multiple Coding Systems**: Support for ICD-10, ICD-11, SNOMED-CT, LOINC, CPT, RxNorm, and custom systems
- 📊 **Visual Organization**: Clean card-based layout with color-coded badges for systems and categories
- 🔒 **Type Safety**: Full TypeScript implementation with comprehensive interfaces and types
- 🎨 **Modern UI**: Responsive design with an intuitive interface
- 🏗️ **Hierarchical Relationships**: Display parent codes and related terminology

## Supported Medical Terminology Systems

- **ICD-10/ICD-11**: International Classification of Diseases
- **SNOMED-CT**: Systematized Nomenclature of Medicine - Clinical Terms
- **LOINC**: Logical Observation Identifiers Names and Codes
- **CPT**: Current Procedural Terminology
- **RxNorm**: Normalized naming system for medications

## Medical Term Categories

- Diagnosis
- Procedure
- Medication
- Laboratory
- Anatomy
- Symptom
- Observation

## TypeScript Types

The application provides strong typing for medical terminologies:

```typescript
interface MedicalTerm {
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
```

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/beldados/medimap.git
cd medimap

# Install dependencies
npm install

# Start development server
npm run dev
```

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
medimap/
├── src/
│   ├── components/       # React components
│   │   ├── SearchFilter.tsx
│   │   ├── TermCard.tsx
│   │   └── TermList.tsx
│   ├── data/            # Medical terminology data
│   │   └── sampleTerms.ts
│   ├── types/           # TypeScript type definitions
│   │   └── medical.ts
│   ├── utils/           # Utility functions
│   │   └── termUtils.ts
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML entry point
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project dependencies
```

## Usage Examples

### Search for Terms

Type in the search box to filter terms by:
- Code (e.g., "E11", "I10")
- Display name (e.g., "diabetes", "hypertension")
- Description content
- Synonyms

![Search Example](https://github.com/user-attachments/assets/3e54416b-4558-49dc-9345-aed3ed4d2157)

### Filter by System or Category

Use the dropdown filters to narrow results:
- Filter by coding system (ICD-10, SNOMED-CT, etc.)
- Filter by category (Diagnosis, Medication, etc.)
- Combine search with filters for precise results

![Filter Example](https://github.com/user-attachments/assets/f039dd93-919c-445d-8566-304448f7e494)

## Extending the Data

To add your own medical terminologies, edit `src/data/sampleTerms.ts`:

```typescript
import { MedicalTerm } from '../types/medical';

export const sampleMedicalTerms: MedicalTerm[] = [
  {
    id: 'unique-id',
    code: 'CODE123',
    display: 'Term Display Name',
    system: 'ICD-10',
    category: 'Diagnosis',
    description: 'Detailed description',
    synonyms: ['Alternative name 1', 'Alternative name 2'],
  },
  // Add more terms...
];
```

## Technology Stack

- **React 19**: UI framework
- **TypeScript 5**: Type safety and developer experience
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern styling with flexbox and grid

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Acknowledgments

This project provides a foundation for medical terminology visualization and can be extended with:
- Database integration
- API connections to medical terminology services
- Advanced hierarchical tree views
- Export capabilities
- User authentication and saved searches
