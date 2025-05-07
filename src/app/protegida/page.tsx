"use client"
import { Protect } from "@clerk/nextjs";
import React  from 'react';

import { useUser } from "@clerk/nextjs";


const ProtectedPage: React.FC = () => {
  
  const { user } = useUser();
  const userId = user?.id;
  console.log("User ID:", userId); // Verifica si el ID del usuario se obtiene correctamente
  console.log("User:", user); // Verifica si el objeto de usuario se obtiene correctamente 

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Página Protegida</h1>
      <p>   Bienvenido !
     
      </p>
      <p>Este contenido es exclusivo para usuarios autenticados.</p>

       <Protect permission="org:sys_domains:leer" fallback={<p>No tienes acceso</p>}>
          <form>
            
            <p>Este contenido es exclusivo para usuarios autenticados en org:team_settings:manage</p>
            
            </form>
       </Protect>


    </div>
  );
};

export default ProtectedPage;