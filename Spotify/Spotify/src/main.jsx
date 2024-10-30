import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetalhesArtistas from './Componentes/DetalhesArtistas.jsx'
import ConteudoPrincipal from './Componentes/ConteudoPrincipal.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    children: [
      {index: true, element: <ConteudoPrincipal></ConteudoPrincipal>},
      {path: '/artistas/:id',element: <DetalhesArtistas></DetalhesArtistas>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
