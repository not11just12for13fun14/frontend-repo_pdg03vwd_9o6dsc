import { MapPin, MessageCircle, Clock, Mail, Facebook, Instagram, Linkedin } from 'lucide-react'

const palette = {
  navy: '#0E2A47',
  midBlue: '#12395C',
  gold: '#EAC84B',
}

export default function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())
    if (!data.nombre || !data.correo || !data.titulo || !data.mensaje) {
      alert('Por favor completa todos los campos.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.correo)) {
      alert('Ingresa un correo válido.')
      return
    }
    alert('Mensaje enviado. ¡Gracias por contactarnos!')
    form.reset()
  }

  const cards = [
    { icon: MapPin, title: 'Ubicación', desc: 'Mérida, Yucatán, MX' },
    { icon: MessageCircle, title: 'WhatsApp', desc: '+52 999 000 0000' },
    { icon: Clock, title: 'Horarios', desc: 'Lun - Vie: 9:00 - 18:00' },
    { icon: Mail, title: 'Correo', desc: 'hola@pirconstructora.com' },
  ]

  return (
    <section id="contacto" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Contáctanos</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-600 mb-1">Nombre</label>
              <input name="nombre" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EAC84B]" placeholder="Tu nombre" />
            </div>
            <div>
              <label className="block text-sm text-slate-600 mb-1">Correo</label>
              <input name="correo" type="email" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EAC84B]" placeholder="tu@correo.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Título</label>
              <input name="titulo" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EAC84B]" placeholder="Asunto" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-slate-600 mb-1">Mensaje</label>
              <textarea name="mensaje" rows="5" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#EAC84B]" placeholder="Cuéntanos sobre tu proyecto"></textarea>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-slate-900" style={{ backgroundColor: palette.gold }}>
                Enviar
              </button>
            </div>
          </form>
        </div>

        {/* Info */}
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            {cards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow border border-slate-200 p-4 flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: palette.gold }}>
                  <Icon className="w-5 h-5 text-slate-900" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{title}</div>
                  <div className="text-slate-600 text-sm">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-4">
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition">
              <Facebook className="w-5 h-5 text-slate-700" />
            </a>
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition">
              <Instagram className="w-5 h-5 text-slate-700" />
            </a>
            <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 hover:bg-slate-200 transition">
              <Linkedin className="w-5 h-5 text-slate-700" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
