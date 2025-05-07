import Image from 'next/image'
import './globals.css'

export default function Home () {
  return (
    <div className=' grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
      <main className='flex flex-col gap-[32px] row-start-2 items-center sm:items-start'>
       
        <h1 className='text-4xl sm:text-5xl font-bold text-center text-gray-200 dark:text-white'>
          Bienvenido a la aplicación de gestión de tareas
        </h1>
        <p className='text-lg text-center justify-content-center text-gray-500 dark:text-gray-400'>
          Esta es una aplicación de ejemplo creada con Next.js y Clerk.
        </p>
        <p className='text-lg text-center text-gray-500 dark:text-gray-400'>
          Puedes iniciar sesión o registrarte para acceder a funciones adicionales.
        </p>
       <div className='flex gap-4 items-center flex-col sm:flex-row text-center text-gray-500 dark:text-gray-400'>
  
       <table className='border-collapse border border-slate-400'>
          <thead> 
            <tr>  
              <th className='border border-slate-300 ...'>State</th>
              <th className='border border-slate-300 ...'>City</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border border-slate-300 ...'>Indiana</td>
              <td className='border border-slate-300 ...'>Indianapolis</td>
            </tr>
            <tr>
              <td className='border border-slate-300 ...'>Ohio</td>
              <td className='border border-slate-300 ...'>Columbus</td>
            </tr>
            <tr>
              <td className='border border-slate-300 ...'>Michigan</td>
              <td className='border border-slate-300 ...'>Detroit</td>
            </tr>
          </tbody>
        </table>

       </div>
        <div className='flex gap-4 items-center flex-col sm:flex-row text-center text-gray-500 dark:text-gray-400'>
          <a
            className='rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto'
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            <Image
              className='dark:invert'
              src='/vercel.svg'
              alt='Vercel logomark'
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className='rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]'
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'
          >
            Read our docs
          </a>
        </div>

        <div className='flex gap-4 items-center flex-col sm:flex-row text-center text-gray-500 dark:text-gray-400'>
          <ul>
            <li>
              <p>
                La aplicación está diseñada para ser una plataforma de gestión
                de tareas y proyectos, permitiendo a los usuarios organizar y
                priorizar su trabajo de manera eficiente.
                <br />
              </p>
              <p>
                La aplicación incluye características como la creación de
                tareas, asignación de prioridades, seguimiento del progreso y
                colaboración en equipo.
                <br />
              </p>
              <p>
                La interfaz es intuitiva y fácil de usar, lo que permite a los
                usuarios centrarse en su trabajo sin distracciones.
                <br />
              </p>
            </li>
          </ul>
        </div>
        <div className='flex gap-4 items-center flex-col sm:flex-row text-center text-gray-500 dark:text-gray-400'>
          <p className='text-lg text-center justify-content-center text-gray-500 dark:text-gray-400'>
            Esta aplicación es un ejemplo de cómo utilizar Next.js y Clerk para
            crear una aplicación web moderna y segura.
          </p>
          <p className='text-lg text-center justify-content-center text-gray-500 dark:text-gray-400'>
            Puedes explorar el código fuente en GitHub y contribuir al
            desarrollo de la aplicación.
          </p>
        </div>
      </main>
    </div>
  )
}
