// src/App.jsx
import { useState } from 'react'
import { PesquisaInput } from './components/PesquisaInput'
import { EnderecoInput } from './components/EnderecoInput'
import './App.css'

function App() {
  const [address, setAddress] = useState(null)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchCep = async (cep) => {
    setError('')
    setAddress(null)
    setLoading(true)

    try {
      const cleanCep = cep.replace(/\D/g, '')

      if (cleanCep.length !== 8) {
        throw new Error('CEP deve ter 8 dígitos.')
      }

      const response = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`)
      const data = await response.json()

      if (data.erro) {
        throw new Error('CEP não encontrado.')
      }

      setAddress(data)

    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>Busca CEP</h1>
      
      <PesquisaInput onSearch={fetchCep} loading={loading} />

      {error && <p className="error-message">{error}</p>}
      
      {address && <EnderecoInput address={address} />}
    </div>
  )
}

export default App