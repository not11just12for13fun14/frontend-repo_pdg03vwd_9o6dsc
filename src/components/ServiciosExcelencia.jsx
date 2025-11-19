import { Droplets, Truck, Building2, Wrench, ArrowRight } from 'lucide-react'

const palette = {
  navy: '#0E2A47',
  midBlue: '#12395C',
  gold: '#EAC84B',
}

const services = [
  {
    icon: Droplets,
    title: 'Impermeabilización',
    desc: 'Sistemas profesionales para proteger cubiertas y muros ante la humedad.',
  },
  {
    icon: Truck,
    title: 'Rampas elevables',
    desc: 'Soluciones de acceso y logística con seguridad y normativa vigente.',
  },
  {
    icon: Building2,
    title: 'Construcción',
    desc: 'Obra civil y acabados para proyectos industriales y comerciales.',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    desc: 'Programas preventivos y correctivos para instalaciones.',
  },
]

export default function ServiciosExcelencia() {
  return (
    <section id="servicios" className="py-20" style={{ backgroundColor: palette.navy }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-white text-3xl sm:text-4xl font-bold mb-10">Servicios de excelencia</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: palette.gold }}>
                  <Icon className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="text-white text-xl font-semibold mb-1">{title}</h4>
                  <p className="text-white/80 mb-4">{desc}</p>
                  <div className="flex gap-3">
                    <a href="#contacto" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-slate-900" style={{ backgroundColor: palette.gold }}>
                      Cotización <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="#contacto" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border border-white/20 text-white hover:bg-white/10">
                      Contacto
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
