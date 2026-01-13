import { useState, useMemo } from 'react';
import { MedicalTermFilter } from './types/medical';
import { sampleMedicalTerms } from './data/sampleTerms';
import { filterMedicalTerms } from './utils/termUtils';
import SearchFilter from './components/SearchFilter';
import TermList from './components/TermList';
import './App.css';

function App() {
  const [filter, setFilter] = useState<MedicalTermFilter>({});

  // Filter terms based on current filter state
  const filteredTerms = useMemo(() => {
    return filterMedicalTerms(sampleMedicalTerms, filter);
  }, [filter]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="icon">🏥</span>
            MediMap
          </h1>
          <p className="app-subtitle">Visualize and type your medical terminologies</p>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <SearchFilter filter={filter} onFilterChange={setFilter} />
          <TermList terms={filteredTerms} />
        </div>
      </main>

      <footer className="app-footer">
        <p>
          Supporting multiple medical coding systems: ICD-10, ICD-11, SNOMED-CT, LOINC, CPT, and RxNorm
        </p>
      </footer>
    </div>
  );
}

export default App;
