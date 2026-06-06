export const maanden = ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

export const cashflowData = [
  { maand: 'Jan', omzet: 8200, kosten: 2100, netto: 6100, voorspeld: false },
  { maand: 'Feb', omzet: 7400, kosten: 1800, netto: 5600, voorspeld: false },
  { maand: 'Mrt', omzet: 9100, kosten: 2400, netto: 6700, voorspeld: false },
  { maand: 'Apr', omzet: 8800, kosten: 2200, netto: 6600, voorspeld: false },
  { maand: 'Mei', omzet: 6200, kosten: 1900, netto: 4300, voorspeld: false },
  { maand: 'Jun', omzet: 10200, kosten: 2600, netto: 7600, voorspeld: false },
  { maand: 'Jul', omzet: 9500, kosten: 2300, netto: 7200, voorspeld: true },
  { maand: 'Aug', omzet: 8900, kosten: 2100, netto: 6800, voorspeld: true },
  { maand: 'Sep', omzet: 11200, kosten: 2800, netto: 8400, voorspeld: true },
];

export const facturen = [
  { id: 'F-2024-041', klant: 'Bakkerij De Molen', bedrag: 2400, vervaldatum: '2024-07-08', risicoScore: 82, dpo: 47 },
  { id: 'F-2024-039', klant: 'Tech Startup B.V.', bedrag: 4800, vervaldatum: '2024-07-15', risicoScore: 61, dpo: 32 },
  { id: 'F-2024-038', klant: 'Gemeente Haarlem', bedrag: 1200, vervaldatum: '2024-07-18', risicoScore: 12, dpo: 28 },
  { id: 'F-2024-037', klant: 'Studio Bright', bedrag: 900, vervaldatum: '2024-07-22', risicoScore: 35, dpo: 18 },
  { id: 'F-2024-036', klant: 'Logistiek NL', bedrag: 3600, vervaldatum: '2024-07-30', risicoScore: 74, dpo: 41 },
];

export const reserveringen = {
  omzetJaar: 72400,
  omzetMaand: 7200,
  kostenMaand: 2100,
  btwPercentage: 0.21,
  btwGereserveerd: 9144,
  btwVerschuldigd: 15204,
  btwTekort: 6060,
  inkomstenbelasting: 14800,
  zelfstandigenaftrek: 5030,
  mkbWinstvrijstelling: 0.127,
  bespaard: 11200,
  beschikbaarVoorUitkering: 4800,
};

export const aiInsights = [
  {
    id: 1,
    type: 'waarschuwing',
    titel: 'Winst 18% lager dan vorige maand',
    tekst: 'In mei daalde je omzet met €2.600. Dit komt doordat klant Studio Bright (€1.800) en Bakkerij De Molen (€800) geen nieuwe opdrachten stuurden. Overweeg proactief contact op te nemen.',
    datum: '2024-06-05',
  },
  {
    id: 2,
    type: 'tip',
    titel: 'BTW-deadline over 26 dagen',
    tekst: 'Je Q2 BTW-aangifte moet voor 31 juli ingediend zijn. Je reservering dekt €9.144 maar je schuld is €15.204 – zorg voor €6.060 extra liquiditeit.',
    datum: '2024-06-05',
  },
  {
    id: 3,
    type: 'positief',
    titel: 'Sterk kwartaal voorspeld',
    tekst: 'Op basis van jouw huidige pijplijn en historische data voorspel ik een omzet van €29.600 in Q3. Dat is 14% boven je jaardoel.',
    datum: '2024-06-04',
  },
];
