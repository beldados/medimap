"use client";
import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Activity, AlertTriangle, Shield, Thermometer } from 'lucide-react';

// ==========================================
// 📚 THE PHARMACOLOGY DATA STORE
// ==========================================
const pharmacologyData = [
  {
    id: 'root',
    name: 'Antifungal Agents',
    type: 'root',
    description: 'Drugs used to treat fungal infections by targeting cell wall, membrane, or nuclear division.',
    children: [
      {
        id: 'cell-membrane',
        name: 'Target: Cell Membrane Stability',
        type: 'category',
        description: 'These drugs target Ergosterol (the fungal equivalent of cholesterol).',
        children: [
          {
            id: 'ergosterol-synthesis',
            name: 'Ergosterol Synthesis Inhibitors',
            type: 'subcategory',
            children: [
              {
                id: 'squalene-epoxidase',
                name: 'Squalene Epoxidase Inhibitors',
                type: 'class',
                children: [
                  {
                    id: 'terbinafine',
                    name: 'Terbinafine',
                    type: 'drug',
                    moa: 'Inhibits Squalene Epoxidase enzyme. Prevents conversion of Squalene to Lanosterol. Toxic accumulation of Squalene kills the cell.',
                    uses: 'Onychomycosis (Toenail fungus) - Oral form accumulates in nails. Tinea pedis/corporis.',
                    sideEffects: 'Hepatotoxicity, Dysgeusia (Taste disturbance).',
                    trap: 'Does not inhibit CYP450. Specific for Squalene Epoxidase.'
                  }
                ]
              },
              {
                id: 'azoles',
                name: 'Azoles (14-alpha-demethylase Inhibitors)',
                type: 'class',
                moa: 'Inhibits CYP450 14-alpha-demethylase. Prevents Lanosterol → Ergosterol conversion.',
                sideEffects: 'Hepatotoxicity, QT Prolongation, CYP450 Inhibition (Drug Interactions).',
                children: [
                  {
                    id: 'imidazoles',
                    name: 'Imidazoles (Topical/Less Potent)',
                    type: 'subclass',
                    children: [
                      {
                        id: 'ketoconazole',
                        name: 'Ketoconazole',
                        type: 'drug',
                        uses: 'Topical for Tinea Versicolor (Shampoo/Cream). Rarely oral due to toxicity.',
                        sideEffects: 'Gynecomastia (blocks testosterone), Adrenal Insufficiency (blocks cortisol).',
                        trap: 'The "Hormone Killer".'
                      },
                      {
                        id: 'clotrimazole',
                        name: 'Clotrimazole',
                        type: 'drug',
                        uses: 'Topical: Oropharyngeal Candidiasis (Lozenges), Vaginal Yeast, Ringworm.',
                        trap: 'Lozenges are "Topical" for the throat.'
                      },
                      {
                        id: 'miconazole',
                        name: 'Miconazole',
                        type: 'drug',
                        uses: 'Topical: Vaginal Candidiasis, Tinea infections.'
                      }
                    ]
                  },
                  {
                    id: 'triazoles',
                    name: 'Triazoles (Systemic/Potent)',
                    type: 'subclass',
                    children: [
                      {
                        id: 'fluconazole',
                        name: 'Fluconazole',
                        type: 'drug',
                        uses: 'Esophageal Candidiasis, Vaginal Yeast (Oral), Maintenance for Cryptococcal Meningitis.',
                        trap: 'NOT effective against Aspergillus. Second-line for systemic Candida.'
                      },
                      {
                        id: 'voriconazole',
                        name: 'Voriconazole',
                        type: 'drug',
                        uses: 'First-Line for Invasive Aspergillus.',
                        sideEffects: 'Visual disturbances (blurry vision, flashes), Photosensitivity.',
                        trap: 'V is for Voriconazole = Vision + Very bad mold (Aspergillus).'
                      },
                      {
                        id: 'itraconazole',
                        name: 'Itraconazole',
                        type: 'drug',
                        uses: 'Endemic Fungi (Histoplasmosis, Blastomycosis), Onychomycosis (Second line).',
                        trap: 'Requires acidic stomach for absorption.'
                      },
                      {
                        id: 'isavuconazole',
                        name: 'Isavuconazole',
                        type: 'drug',
                        uses: 'First-line for Mucormycosis and Invasive Aspergillus.'
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'pore-formers',
            name: 'Pore Formers (Polyenes)',
            type: 'class',
            moa: 'Binds physically to Ergosterol in the membrane and forms pores (holes). Leaks K+ and Mg++.',
            children: [
              {
                id: 'amphotericin-b',
                name: 'Amphotericin B',
                type: 'drug',
                uses: 'Severe Systemic Infections (Candida, Aspergillus, Crypto Induction, Mucor). The "Nuclear Option".',
                sideEffects: 'Nephrotoxicity (Check Creatinine!), Hypokalemia, Hypomagnesemia, "Shake and Bake" infusion reaction.',
                trap: 'Does NOT inhibit an enzyme. It physically punches holes.'
              },
              {
                id: 'nystatin',
                name: 'Nystatin',
                type: 'drug',
                uses: 'Topical only. "Swish and Swallow" for Oral Thrush. Intertriginous Candida.',
                trap: 'Too toxic for IV use. Swallowed nystatin is NOT absorbed (treats gut/mouth only).'
              }
            ]
          }
        ]
      },
      {
        id: 'cell-wall',
        name: 'Target: Cell Wall Synthesis',
        type: 'category',
        description: 'Targets Beta-1,3-Glucan (The "Bricks" of the wall).',
        children: [
          {
            id: 'echinocandins',
            name: 'Echinocandins (-fungins)',
            type: 'class',
            moa: 'Inhibits Beta-1,3-Glucan Synthase. Causes osmotic lysis.',
            sideEffects: 'Histamine flushing, mild Hepatotoxicity.',
            children: [
              {
                id: 'caspofungin',
                name: 'Caspofungin',
                type: 'drug',
                uses: 'First-Line for Systemic/Invasive Candidiasis. Refractory Aspergillus.',
                trap: 'The "Penicillin" of antifungals (targets the wall).'
              },
              {
                id: 'micafungin',
                name: 'Micafungin',
                type: 'drug',
                uses: 'Esophageal Candidiasis, Prophylaxis in transplant patients.'
              }
            ]
          }
        ]
      },
      {
        id: 'nuclear-division',
        name: 'Target: Nuclear Division',
        type: 'category',
        children: [
          {
            id: 'microtubule-inhibitors',
            name: 'Microtubule Inhibitors',
            type: 'class',
            children: [
              {
                id: 'griseofulvin',
                name: 'Griseofulvin',
                type: 'drug',
                moa: 'Binds to Tubulin, inhibiting Microtubule function and Mitosis.',
                uses: 'Dermatophytes (Ringworm) of scalp/skin (Oral). Rarely used now.',
                sideEffects: 'CYP450 Inducer (Warfarin failure), Teratogenic, Disulfiram reaction.',
                trap: 'Works in the Nucleus, NOT the cell wall/membrane.'
              }
            ]
          }
        ]
      },
      {
        id: 'dna-synthesis',
        name: 'Target: DNA/RNA Synthesis',
        type: 'category',
        children: [
          {
            id: 'antimetabolites',
            name: 'Anti-Metabolites',
            type: 'class',
            children: [
              {
                id: 'flucytosine',
                name: 'Flucytosine',
                type: 'drug',
                moa: 'Converted by Cytosine Deaminase into 5-FU. Inhibits DNA/RNA synthesis.',
                uses: 'Cryptococcal Meningitis (ALWAYS combined with Amphotericin B).',
                sideEffects: 'Bone Marrow Suppression (Pancytopenia).',
                trap: 'Humans lack Cytosine Deaminase, which is why it selects fungus.'
              }
            ]
          }
        ]
      }
    ]
  }
];

// ==========================================
// 🌲 TREE COMPONENT (RECURSIVE)
// ==========================================
const TreeNode = ({ node, onSelect, selectedId, level = 0 }) => {
  const [isOpen, setIsOpen] = useState(true);
  const hasChildren = node.children && node.children.length > 0;
  const isSelected = node.id === selectedId;

  // Indentation logic based on depth level
  const paddingLeft = `${level * 12}px`;

  // Colors based on node type
  let colorClass = "text-gray-800";
  if (node.type === 'category') colorClass = "text-blue-700 font-bold";
  if (node.type === 'class') colorClass = "text-purple-700 font-semibold";
  if (node.type === 'drug') colorClass = "text-emerald-700 font-medium";

  return (
    <div className="select-none">
      <div 
        className={`
          flex items-center py-1 px-2 cursor-pointer hover:bg-gray-100 rounded transition-colors
          ${isSelected ? 'bg-blue-50 border-l-4 border-blue-500' : ''}
        `}
        style={{ paddingLeft }}
        onClick={(e) => {
          e.stopPropagation();
          onSelect(node);
          if (hasChildren) setIsOpen(!isOpen);
        }}
      >
        <span className="mr-1 w-4 h-4 flex items-center justify-center">
          {hasChildren && (
            isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />
          )}
        </span>
        <span className={`${colorClass} text-sm`}>
          {node.type === 'drug' && '💊 '}
          {node.name}
        </span>
      </div>

      {hasChildren && isOpen && (
        <div className="border-l border-gray-200 ml-3">
          {node.children.map(child => (
            <TreeNode 
              key={child.id} 
              node={child} 
              onSelect={onSelect} 
              selectedId={selectedId}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

// ==========================================
// 🖥️ MAIN APP COMPONENT
// ==========================================
export default function PharmacologyStudyGuide() {
  const [selectedNode, setSelectedNode] = useState(pharmacologyData[0]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-4 md:p-8">
      <header className="mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center gap-2">
          <Activity className="text-blue-600" />
          Ninja Nerd Pharmacology: Antifungals
        </h1>
        <p className="text-slate-500 mt-1">Interactive mechanism & clinical use tree</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[80vh]">
        
        {/* LEFT PANEL: TREE STRUCTURE */}
        <div className="md:col-span-4 bg-white rounded-xl shadow-sm border border-gray-200 overflow-y-auto p-4">
          <h3 className="text-xs font-bold text-gray-400 uppercase mb-4 tracking-wider">Navigation Tree</h3>
          {pharmacologyData.map(node => (
            <TreeNode 
              key={node.id} 
              node={node} 
              onSelect={setSelectedNode} 
              selectedId={selectedNode.id}
            />
          ))}
        </div>

        {/* RIGHT PANEL: DETAILS CARD */}
        <div className="md:col-span-8 bg-white rounded-xl shadow-lg border border-blue-100 overflow-y-auto p-6 md:p-10 relative">
          
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Activity size={100} />
          </div>

          <div className="mb-2">
            <span className={`
              text-xs font-bold uppercase tracking-wide px-2 py-1 rounded
              ${selectedNode.type === 'drug' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}
            `}>
              {selectedNode.type}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {selectedNode.name}
          </h2>

          {selectedNode.description && (
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              {selectedNode.description}
            </p>
          )}

          {/* DRUG SPECIFIC DETAILS */}
          <div className="space-y-6">
            
            {/* Mechanism of Action */}
            {selectedNode.moa && (
              <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                <h3 className="flex items-center gap-2 font-bold text-blue-800 mb-2">
                  <Activity size={18} /> Mechanism of Action (Part 1)
                </h3>
                <p className="text-blue-900">{selectedNode.moa}</p>
              </div>
            )}

            {/* Clinical Uses */}
            {selectedNode.uses && (
              <div className="bg-emerald-50 p-5 rounded-lg border-l-4 border-emerald-500">
                <h3 className="flex items-center gap-2 font-bold text-emerald-800 mb-2">
                  <Shield size={18} /> Clinical Uses (Part 2)
                </h3>
                <p className="text-emerald-900">{selectedNode.uses}</p>
              </div>
            )}

            {/* Side Effects */}
            {selectedNode.sideEffects && (
              <div className="bg-rose-50 p-5 rounded-lg border-l-4 border-rose-500">
                <h3 className="flex items-center gap-2 font-bold text-rose-800 mb-2">
                  <Thermometer size={18} /> Adverse Effects & Warnings
                </h3>
                <p className="text-rose-900">{selectedNode.sideEffects}</p>
              </div>
            )}

            {/* Examiner Trap */}
            {selectedNode.trap && (
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200 mt-8">
                <h3 className="flex items-center gap-2 font-bold text-amber-800 mb-2 uppercase text-sm">
                  <AlertTriangle size={18} /> Examiner Trap / Memory Hook
                </h3>
                <p className="text-amber-900 font-medium italic">
                  "{selectedNode.trap}"
                </p>
              </div>
            )}
          </div>

          {/* Placeholder for categories without specific data */}
          {!selectedNode.moa && !selectedNode.uses && !selectedNode.description && (
            <div className="flex flex-col items-center justify-center h-64 text-gray-400">
              <ChevronDown size={48} className="mb-4 animate-bounce" />
              <p>Select a specific drug or sub-class to see pharmacological details.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
