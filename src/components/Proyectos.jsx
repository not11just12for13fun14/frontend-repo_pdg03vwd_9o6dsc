const palette = {
  navy: '#0E2A47',
  midBlue: '#12395C',
  gold: '#EAC84B',
}

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
          <img src="https://images.unsplash.com/photo-1511974035430-5de47d3b95da?q=80&w=1600&auto=format&fit=crop" alt="Trabajadores en obra" className="w-full h-[380px] object-cover" />
        </div>

        <div>
          <span className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 bg-slate-100 text-slate-700">Proyecto</span>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Proyectos de alta calidad en tu comercio.</h3>
          <p className="text-slate-600 mb-6">Acompañamos cada fase de tu inversión, desde el diseño hasta la ejecución, garantizando tiempos, costos y acabados de primera. Nuestro enfoque está alineado a las necesidades de los comercios modernos.</p>

          <div className="flex flex-wrap gap-3">
            {['Invertir', 'Ahora', 'Conócenos'].map((b) => (
              <a key={b} href="#contacto" className="px-4 py-2 rounded-full text-sm font-semibold border border-slate-300 text-slate-700 hover:bg-slate-50">
                {b}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
