import { MedicalTerm, MedicalTermFilter } from '../types/medical';

/**
 * Filter medical terms based on search criteria
 */
export function filterMedicalTerms(
  terms: MedicalTerm[],
  filter: MedicalTermFilter
): MedicalTerm[] {
  return terms.filter((term) => {
    // Filter by search query
    if (filter.searchQuery) {
      const query = filter.searchQuery.toLowerCase();
      const matchesQuery =
        term.code.toLowerCase().includes(query) ||
        term.display.toLowerCase().includes(query) ||
        term.description?.toLowerCase().includes(query) ||
        term.synonyms?.some((synonym) =>
          synonym.toLowerCase().includes(query)
        ) ||
        false;
      
      if (!matchesQuery) return false;
    }

    // Filter by system
    if (filter.system && term.system !== filter.system) {
      return false;
    }

    // Filter by category
    if (filter.category && term.category !== filter.category) {
      return false;
    }

    return true;
  });
}

/**
 * Get unique values for a field from medical terms
 */
export function getUniqueValues<K extends keyof MedicalTerm>(
  terms: MedicalTerm[],
  field: K
): MedicalTerm[K][] {
  const values = terms.map((term) => term[field]);
  return Array.from(new Set(values));
}

/**
 * Build a hierarchical tree structure from terms with parent codes
 */
export function buildTermHierarchy(terms: MedicalTerm[]): MedicalTerm[] {
  const termMap = new Map<string, MedicalTerm>();
  const roots: MedicalTerm[] = [];

  // Create map of all terms
  terms.forEach((term) => {
    termMap.set(term.code, term);
  });

  // Identify root terms (no parent) and organize hierarchy
  terms.forEach((term) => {
    if (!term.parentCode || !termMap.has(term.parentCode)) {
      roots.push(term);
    }
  });

  return roots;
}
