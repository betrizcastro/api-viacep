import { useState } from 'react';

export function PesquisaInput({ onSearch, loading }) {
  const [input, setInput] = useState('');

  const handleClick = () => {
    onSearch(input);
  };

  return (
    <div className="search-box">
      <input 
        type="text" 
        placeholder="Digite o CEP..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        maxLength={9}
      />
      <button onClick={handleClick} disabled={loading}>
        {loading ? '...' : 'Buscar'}
      </button>
    </div>
  );
}