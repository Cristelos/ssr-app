import { ServerRoute, RenderMode } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'about',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'pricing',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'contact',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'pokemons',
    renderMode: RenderMode.Prerender,
  },
  {
    path: 'pokemons/:id',
    renderMode: RenderMode.Server, // 👈 Este es el cambio importante
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];
