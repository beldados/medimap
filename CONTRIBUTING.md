# Contributing to MediMap

Thank you for your interest in contributing to MediMap! This document provides guidelines for contributing to the project.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/medimap.git`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`

## Development Workflow

### Making Changes

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test your changes: `npm run build`
4. Commit your changes: `git commit -m "Description of changes"`
5. Push to your fork: `git push origin feature/your-feature-name`
6. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow the existing code structure
- Use functional React components with hooks
- Keep components small and focused
- Add JSDoc comments for complex functions

### Adding Medical Terms

To add new medical terminology data:

1. Edit `src/data/sampleTerms.ts`
2. Follow the `MedicalTerm` interface structure
3. Ensure all required fields are provided
4. Use appropriate medical terminology systems and categories

Example:

```typescript
{
  id: 'unique-id',
  code: 'CODE123',
  display: 'Term Display Name',
  system: 'ICD-10',
  category: 'Diagnosis',
  description: 'Detailed description',
  synonyms: ['Alternative name'],
  parentCode: 'PARENT_CODE', // if applicable
}
```

### Adding New Features

When adding new features:

1. Update TypeScript types if needed (`src/types/medical.ts`)
2. Create reusable components in `src/components/`
3. Add utility functions in `src/utils/`
4. Update the README with new features
5. Ensure the build still works: `npm run build`

## Pull Request Guidelines

- Provide a clear description of the changes
- Reference any related issues
- Include screenshots for UI changes
- Ensure the code builds without errors
- Keep changes focused and minimal

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Help others learn and grow

## Questions?

If you have questions, please open an issue on GitHub.

Thank you for contributing to MediMap! 🏥
