codigo = ['123456', '654321','222333444']
produtos = ['Leite', 'Pão de Queijo', 'Queijo']
preço = [5.00, 20.00, 50.00]
todo = 0
i = 1

document.addEventListener('keydown', function(event) {
    //console.log(`Tecla pressionada: ${event.key}, Código: ${event.code}`);


    if (event.key === 'Enter') {
        procurar()
    }
});

function desistir() {
    // Seleciona a lista de spans
    const lista = document.getElementById('produtos');
    const spans = lista.getElementsByTagName('span'); // Seleciona todos os spans dentro da lista
    h4 = document.querySelector('h4')
    // Verifica se há spans na lista e remove o último
    if (spans.length > 0) {
        lista.removeChild(spans[spans.length - 1]); // Remove o último span da lista
    } else {
        console.log('Nenhum item para remover');
    }

    if (todo < 6) {
        todo = 5
    }

    i--

    if (i <= 0) {
        i = 1
    }

    todo -= preço[res]

    total.innerHTML = `R$ ${todo}`
}

function cancelar() {
    const lista = document.getElementById('produtos');
    const spans = lista.getElementsByTagName('span');
    total = document.getElementById('total')
    total.innerHTML = `R$ 0`
    todo = 0
    i = 1

    while (i < 2) {
        lista.removeChild(spans[spans.length - 1]);
    }
}

function pagar() {
    body = document.querySelector('body')
    nome = document.getElementById('nome').value
    CPF = document.getElementById('CPF').value
    pagamento = document.createElement('section')
    h5 = document.createElement('h5')
    chave = document.createElement('h6')
    contato = document.createElement('h6')
    pfinal = document.createElement('div')
    pfinal.id = 'final'
    ptotal = document.createElement('h6')
    ptotal.id = 'conta'
    totalfim = document.getElementById('total')
    cliente = document.createElement('h6')
    itens = document.createElement('h6')
    i -= 1
    
    body.appendChild(pagamento)
    pagamento.appendChild(h5)
    pagamento.appendChild(cliente)
    pagamento.appendChild(chave)
    pagamento.appendChild(contato)
    pagamento.appendChild(pfinal)
    pagamento.appendChild(ptotal)
    pagamento.appendChild(itens)

    pfinal.innerHTML = 'Total'
    ptotal.innerHTML = totalfim.innerHTML
    cliente.innerHTML = `Tenha um bom dia ${nome}. Seu CPF é ${CPF}`
    h5.innerHTML = 'Pagamento'
    chave.innerHTML = 'Chave Pix: luizlevimodesto@gmail.com'
    contato.innerHTML = 'Contato: (61) 98339-2121'
    itens.innerHTML = `Sua compra tem ${i} itens`
}

function procurar() {
    texto = document.getElementById('codigo').value
    produto = document.getElementById('produto')
    lista = document.getElementById('produtos')
    res = codigo.indexOf(texto)
    resp = document.getElementById('preço')

    /* console.log(texto)
    console.log(res)
    console.log(produtos[res]) */

    resp.innerHTML = ''

    if (res == -1 || produtos[res] == undefined) {
        produto.innerText = `Digite um código válido`
        resp.innerHTML = 'R$ 00,00'
    } else {

    produto.innerHTML = `${produtos[res]}`
    resp.innerHTML = `R$ ${preço[res]}`
    
    span = document.createElement('span')
    span.id = i
    h3 = document.createElement('h3')
    h3.innerHTML = `${i}. |||||| R$ <h4>${preço[res]}</h4>. |||||||| ${produtos[res]}`
    lista.appendChild(span)
    span.appendChild(h3)

    total = document.getElementById('total')
    primeiro = preço[res]

    todo = todo + primeiro

    total.innerHTML = `R$ ${todo}`

    i++
    }
}