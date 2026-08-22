import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { useSeo } from '@/utils/seo'

export function NotFound() {
  useSeo('Página no encontrada', 'La página que buscas no existe o ha sido movida.')

  return (
    <>
      <Navbar />
      <main className="flex-1 flex items-center justify-center min-h-[60vh] px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] mb-6 mx-auto">
            <Search className="h-10 w-10" aria-hidden="true" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-semibold text-[var(--color-text)] mb-4">
            404
          </h1>
          <h2 className="text-xl text-[var(--color-text-muted)] mb-6">
            Página no encontrada
          </h2>
          <p className="text-[var(--color-text-subtle)] mb-8">
            La página que buscas no existe o ha sido movida.
            Puede que el enlace sea antiguo o se haya escrito mal.
          </p>
          <Link
            to="/"
            className="btn btn-primary inline-flex"
          >
            <Home className="h-4 w-4" aria-hidden="true" />
            Volver al inicio
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}