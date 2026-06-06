'use client';

import { useState } from 'react';
import { User, Building2, Percent, Bell, Shield, Save } from 'lucide-react';

function Section({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-slate-100">
        <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center">
          <Icon size={16} className="text-indigo-600" />
        </div>
        <h2 className="font-semibold text-slate-800">{title}</h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Field({ label, defaultValue, type = 'text', suffix }: { label: string; defaultValue: string; type?: string; suffix?: string }) {
  return (
    <div>
      <label className="block text-xs font-medium text-slate-500 mb-1.5">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type={type}
          defaultValue={defaultValue}
          className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 bg-slate-50"
        />
        {suffix && <span className="text-slate-400 text-sm shrink-0">{suffix}</span>}
      </div>
    </div>
  );
}

function Toggle({ label, description, defaultChecked }: { label: string; description: string; defaultChecked: boolean }) {
  const [on, setOn] = useState(defaultChecked);
  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-slate-700">{label}</p>
        <p className="text-xs text-slate-400 mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        className={`relative shrink-0 w-11 h-6 rounded-full transition-colors duration-200 ${on ? 'bg-indigo-500' : 'bg-slate-200'}`}
      >
        <span className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${on ? 'translate-x-6' : 'translate-x-1'}`} />
      </button>
    </div>
  );
}

export default function InstellingenPage() {
  const [opgeslagen, setOpgeslagen] = useState(false);

  function handleOpslaan() {
    setOpgeslagen(true);
    setTimeout(() => setOpgeslagen(false), 2500);
  }

  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Instellingen</h1>
        <p className="text-slate-500 text-sm mt-1">Beheer je profiel, bedrijfsgegevens en voorkeuren</p>
      </div>

      <div className="max-w-2xl space-y-5">
        <Section title="Persoonlijk" icon={User}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="Voornaam" defaultValue="Jan" />
            <Field label="Achternaam" defaultValue="de Vries" />
          </div>
          <Field label="E-mailadres" defaultValue="jan@devries.nl" type="email" />
        </Section>

        <Section title="Bedrijfsgegevens" icon={Building2}>
          <Field label="Bedrijfsnaam" defaultValue="Jan de Vries Consultancy" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="KvK-nummer" defaultValue="12345678" />
            <Field label="BTW-nummer" defaultValue="NL123456789B01" />
          </div>
          <Field label="IBAN" defaultValue="NL91 ABNA 0417 1643 00" />
        </Section>

        <Section title="Fiscale instellingen" icon={Percent}>
          <Field label="BTW-tarief" defaultValue="21" type="number" suffix="%" />
          <Field label="Inkomstenbelasting schijf 1 %" defaultValue="37.07" type="number" suffix="%" />
          <Field label="Zelfstandigenaftrek" defaultValue="5030" type="number" suffix="€" />
          <Field label="MKB-winstvrijstelling" defaultValue="12.7" type="number" suffix="%" />
          <Field label="Maandelijkse buffer" defaultValue="2000" type="number" suffix="€" />
        </Section>

        <Section title="Meldingen" icon={Bell}>
          <Toggle label="BTW-deadline herinnering" description="14 dagen voor de aangiftetermijn" defaultChecked={true} />
          <Toggle label="Hoog risico factuur alert" description="Wanneer een klant een risicoscore boven 70 heeft" defaultChecked={true} />
          <Toggle label="Maandelijks cashflow rapport" description="Elke 1e van de maand een samenvatting" defaultChecked={false} />
          <Toggle label="AI-inzichten" description="Automatische verklaringen bij grote afwijkingen" defaultChecked={true} />
        </Section>

        <Section title="Account" icon={Shield}>
          <Toggle label="Tweefactorauthenticatie" description="Extra beveiliging voor je account" defaultChecked={false} />
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-1.5">Wachtwoord wijzigen</label>
            <input
              type="password"
              placeholder="Nieuw wachtwoord"
              className="w-full px-3 py-2 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:border-indigo-400 bg-slate-50"
            />
          </div>
        </Section>

        <div className="flex items-center gap-4">
          <button
            onClick={handleOpslaan}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            <Save size={16} />
            Opslaan
          </button>
          {opgeslagen && (
            <span className="text-sm text-emerald-600 font-medium animate-pulse">
              ✓ Instellingen opgeslagen
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
