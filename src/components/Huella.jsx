const palette = {
  navy: '#0E2A47',
  midBlue: '#12395C',
  gold: '#EAC84B',
}

export default function Huella() {
  const cities = ['Mérida', 'Campeche', 'Cancún', 'Chetumal', 'Villahermosa']
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Nuestra huella en la península</h3>
          <p className="text-slate-600 mb-4">República</p>
          <ol className="list-decimal list-inside space-y-2 text-slate-700 mb-6">
            {cities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ol>
          <a href="#contacto" className="inline-block px-6 py-3 rounded-lg font-semibold text-slate-900 hover:opacity-90" style={{ backgroundColor: palette.gold }}>
            Cotiza con nosotros
          </a>
        </div>
        <div className="rounded-2xl border border-slate-200 shadow-lg p-2 bg-slate-50">
          <img src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1400&auto=format&fit=crop" alt="Mapa estilizado" className="w-full h-[360px] object-cover rounded-xl" />
        </div>
      </div>
    </section>
  )
}
