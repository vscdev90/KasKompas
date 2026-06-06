import UitkeringCard from '@/components/UitkeringCard';

export default function UitkeringPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Hoeveel kan ik uitkeren?</h1>
        <p className="text-slate-500 text-sm mt-1">Bereken je beschikbaar inkomen na alle reserveringen</p>
      </div>
      <div className="max-w-lg">
        <UitkeringCard />
      </div>
    </div>
  );
}
