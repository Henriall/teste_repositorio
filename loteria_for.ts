class Loteria {
    sorteio(numero: number): void {
      // Código para realizar o sorteio da loteria
      console.log(`O número sorteado foi: ${numero}`);
    }
  }
  
  // Instanciando a classe "Loteria" e chamando o método "sorteio" com um número aleatório entre 1 e 100
  for(let i = 0; i < 6; i++) {
    const loteria = new Loteria();
    const numeroSorteado = Math.floor(Math.random() * 100) + 1;
    loteria.sorteio(numeroSorteado);
  }