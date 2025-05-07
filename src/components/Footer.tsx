export default function Footer() {
  return (
    <footer className="w-full border-t  border-gray-200 dark:border-gray-700 px-6 py-8 bg-gray-400 dark:bg-black/80 text-sm text-gray-700 dark:text-gray-300 mt-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} MiApp. Todos los derechos reservados.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Términos</a>
          <a href="#" className="hover:underline">Privacidad</a>
          <a href="#" className="hover:underline">Contacto</a>
        </div>
      </div>
    </footer>
  )
}
