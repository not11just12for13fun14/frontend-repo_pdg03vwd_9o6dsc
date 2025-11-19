import { useState } from 'react'
import { Menu, Phone, ChevronRight } from 'lucide-react'

const palette = {
  navy: '#0E2A47',
  midBlue: '#12395C',
  gold: '#EAC84B',
}

export default function HeaderHero() {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('Comercial')

  const tabs = ['Industrial', 'Comercial', 'Residencial', 'Mantenimientos']

  const handleNav = (e, id) => {
    e.preventDefault()
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="relative">
      {/* Top bar */}
      <div className="w-full bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80 sticky top-0 z-40 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg" style={{ backgroundColor: palette.gold }} />
            <div className="text-slate-800 font-semibold text-lg tracking-wide">PIR Constructora</div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#proyectos" onClick={(e)=>handleNav(e,'#proyectos')} className="hover:text-slate-900 transition-colors">Proyectos</a>
            <a href="#servicios" onClick={(e)=>handleNav(e,'#servicios')} className="hover:text-slate-900 transition-colors">Servicios</a>
            <a href="#contacto" onClick={(e)=>handleNav(e,'#contacto')} className="hover:text-slate-900 transition-colors">Contacto</a>
            <a href="#contacto" onClick={(e)=>handleNav(e,'#contacto')} className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-900 font-medium" style={{ backgroundColor: palette.gold }}>
              <Phone className="w-4 h-4" /> Cotizar
            </a>
          </nav>

          <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-200 text-slate-700">
            <Menu className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 flex flex-col gap-3">
              <a href="#proyectos" onClick={(e)=>handleNav(e,'#proyectos')} className="py-2 text-slate-700">Proyectos</a>
              <a href="#servicios" onClick={(e)=>handleNav(e,'#servicios')} className="py-2 text-slate-700">Servicios</a>
              <a href="#contacto" onClick={(e)=>handleNav(e,'#contacto')} className="py-2 text-slate-700">Contacto</a>
            </div>
          </div>
        )}
      </div>

      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2000&auto=format&fit=crop"
            alt="Obra de construcción"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(120deg, rgba(14,42,71,0.85), rgba(18,57,92,0.65))' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-28">
          <div className="max-w-xl bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 shadow-xl border border-white/10">
            <div className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: palette.gold, color: '#0E2A47' }}>PIR</div>
            <h1 className="text-white text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight mb-3">Tú lo imaginas</h1>
            <h2 className="text-white text-3xl sm:text-4xl font-bold opacity-90 mb-4">Nosotros lo construimos</h2>
            <p className="text-white/90 mb-6">Soluciones integrales para proyectos industriales, comerciales y residenciales con altos estándares de calidad.</p>
            <div className="flex items-center gap-3 flex-wrap">
              <a href="#servicios" onClick={(e)=>handleNav(e,'#servicios')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold text-slate-900" style={{ backgroundColor: palette.gold }}>
                Más información <ChevronRight className="w-4 h-4" />
              </a>
              <a href="#contacto" onClick={(e)=>handleNav(e,'#contacto')} className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border border-white/30 text-white hover:bg-white/10 transition">Contacto</a>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="relative -mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-2 flex flex-wrap gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={()=>setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${activeTab===tab ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
                  style={ activeTab===tab ? { backgroundColor: palette.gold } : { backgroundColor: 'transparent' } }
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
