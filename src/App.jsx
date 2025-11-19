import HeaderHero from './components/HeaderHero'
import Proyectos from './components/Proyectos'
import ServiciosExcelencia from './components/ServiciosExcelencia'
import ServiciosEspecializados from './components/ServiciosEspecializados'
import Contacto from './components/Contacto'
import Huella from './components/Huella'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <HeaderHero />
      <main>
        <Proyectos />
        <ServiciosExcelencia />
        <ServiciosEspecializados />
        <Contacto />
        <Huella />
        <CTA />
      </main>
      <footer className="py-8 text-center text-sm text-slate-500">© {new Date().getFullYear()} PIR Constructora. Todos los derechos reservados.</footer>
    </div>
  )
}

export default App
