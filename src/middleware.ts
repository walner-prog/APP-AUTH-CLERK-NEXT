// middleware.ts o src/middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

// Rutas protegidas que requieren estar autenticado
const isProtectedRoute = createRouteMatcher([
  '/protegida/:path*',
  '/dashboard/:path*',
]);

// Rutas que requieren rol específico (ej: admin)
const isAdminRoute = createRouteMatcher([
  '/dashboard/admin/:path*',
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  // Redirigir a login si no está autenticado y la ruta está protegida
  if (isProtectedRoute(req) && !userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // Si es ruta admin, verificar rol
  if (isAdminRoute(req)) {
  

    if (isAdminRoute(req)) {
      const role = (sessionClaims?.publicMetadata as { role?: string })?.role;
      if (role !== 'admin') return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Si pasa todo, continuar
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
