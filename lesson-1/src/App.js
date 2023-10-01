// =========================== Repeta ===========================


import PaintingList from './components/PaintingList';
import Section from './components/Section';
import paintings from './components/paintings.json';

export default function App() {
  return (
    <div>
      <Section title="Week Top">
        <PaintingList items={paintings} />
      </Section>
      <Section title="Best"></Section> 
    </div>
  );
}

// ==========================================

// export default function App() {
//     const isOnline = true;
//     return (
//       <div>
//        {isOnline ? "Online" : "Offline"}
//       </div>
//     );
//   }

// =========================== Repeta ===========================