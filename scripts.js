console.log('chegou, porra!')

function adic_carro() {

    const carros = document.getElementById('lista_carros');

    const html_carro = `<div class="item_carros">
                            <input type="number" name="posicao_carro" readonly>
                            <input type="text" placeholder="modelo do carro">
                            <input type="text" placeholder="cor do carro">
                            <input type="number" placeholder="valor do carro" name="valor_carro" onchange="calcula_totais()">
                            <a class="deletar">deletar</a>
                        </div>`;

    carros.insertAdjacentHTML('beforeend', html_carro);
    coloca_itens()
}

function coloca_itens() {
    const posicao_carro = document.getElementsByName('posicao_carro');  
    const tamanho_lista_carros = posicao_carro.length;   

    for (let n = 0; n < tamanho_lista_carros; n++) {
        posicao_carro[n].value = n+1;
    }
}

function calcula_totais() {
    const valor_carro = document.getElementsByName('valor_carro');
    const id_total = document.getElementById('id_total')

    const tamanho_lista_carros = valor_carro.length;

    var valor_total = 0.00

    for (let i = 0; i < tamanho_lista_carros; i++) {
        var valor = valor_carro[i].value;

        console.log(valor)
        
        if (valor == '') {        
            valor = 0;
        }

        valor = parseFloat(valor);
        valor_total = valor_total + valor;
    }

    id_total.value = valor_total;
}

document.addEventListener('DOMContentLoaded', function() {
    
  const lista = document.getElementById('lista_carros');
  
  lista.addEventListener('click', function(e) {
    if (e.target.classList.contains('deletar')) {
      e.preventDefault(); // Impede o comportamento padrão do link
      const itemLista = e.target.parentElement;
      itemLista.remove(); // Remove o elemento li
      coloca_itens();
      calcula_totais();
    }
  });
});