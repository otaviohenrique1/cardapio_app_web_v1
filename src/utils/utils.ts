export function FormataValorMonetarioTexto(valor: number) {
  return valor.toFixed(2).toString().replace('.', ',');
}

/**
 * Converte string lista de ingredientes para uma array de objetos
 */
 export function ConverteStringParaArrayObjetos(texto: string) {
  let converteParaArraySimples = texto.split(';');
  let converteParaArrayDeObjetos = converteParaArraySimples.map(item => {
    return { nome: item };
  });
  return converteParaArrayDeObjetos;
}

/**
 * Converte string lista de ingredientes para uma array de objetos
 */
export function ConverteStringParaArrayObjetos2(texto: string) {
  return JSON.parse(texto);
}
