import { Routes, Route } from 'react-router-dom'
import CriarConta from './CriarConta'
import Login from './Login'
import TelaPrincipal from './TelaPrincipal'
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CriarConta />} />
      <Route path="/login" element={<Login />} />

      <Route path="/TelaPrincipal" element={<TelaPrincipal />} />
    </Routes>
  )
}
