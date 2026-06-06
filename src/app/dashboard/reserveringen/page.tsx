import ReserveringCard from '@/components/ReserveringCard';

export default function ReserveringenPage() {
  return (
    <div className="p-4 md:p-8">
      <div className="mb-6 md:mb-8">
        <h1 className="text-xl md:text-2xl font-bold text-slate-800">Reserveringen</h1>
        <p className="text-slate-500 text-sm mt-1">BTW en inkomstenbelasting opzijzetten</p>
      </div>
      <div className="max-w-lg">
        <ReserveringCard />
      </div>
    </div>
  );
}
