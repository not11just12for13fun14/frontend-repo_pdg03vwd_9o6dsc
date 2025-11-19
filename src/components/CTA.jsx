const palette = {
  navy: '#0E2A47',
  midBlue: '#12395C',
  gold: '#EAC84B',
}

export default function CTA() {
  return (
    <section className="py-16" style={{ backgroundColor: '#F6F8FB' }}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Cotiza con nosotros</h3>
        <p className="text-slate-600 mb-6">Obtén una propuesta clara y rápida para tu próximo proyecto. Estamos listos para construir tu visión.</p>
        <a href="#contacto" className="inline-block px-6 py-3 rounded-lg font-semibold text-slate-900" style={{ backgroundColor: palette.gold }}>
          Iniciar cotización
        </a>
      </div>
    </section>
  )
}
