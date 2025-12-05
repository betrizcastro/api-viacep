export function EnderecoInput({ address }) {
  return (
    <div className="result-card">
      <p><strong>Rua:</strong> {address.logradouro}</p>
      <p><strong>Bairro:</strong> {address.bairro}</p>
      <p><strong>Cidade:</strong> {address.localidade} - {address.uf}</p>
      <p><strong>CEP:</strong> {address.cep}</p>
    </div>
  );
}