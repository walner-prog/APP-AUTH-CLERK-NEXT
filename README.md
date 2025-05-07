 # Auth-Clerk-App

          Una aplicación de Next.js/React que utiliza Clerk para la autenticación y autorización. Incluye páginas protegidas que muestran contenido exclusivo para usuarios autenticados y con permisos específicos.

          ## Características

          - Autenticación con Clerk
          - Rutas protegidas con verificación de permisos
          - Renderizado condicional según el rol del usuario

          ## Requisitos

          - Node.js (versión 14 o superior)
          - npm o yarn

          ## Instalación

          1. Clona el repositorio:

            ```bash
            git clone https://github.com/tuusuario/auth-clerk-app.git
            ```

          2. Instala las dependencias:

            ```bash
            cd auth-clerk-app
            npm install
            ```

          3. Configura tus credenciales de Clerk:
            - Crea un archivo `.env.local` en la raíz del proyecto.
            - Añade tus claves API y configuraciones necesarias. Ejemplo:

            ```
            NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu-clave-publicable
            CLERK_SECRET_KEY=tu-clave-secreta
            ```

          ## Ejecución en Desarrollo

          Para iniciar el servidor de desarrollo:
