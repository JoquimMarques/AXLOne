document.addEventListener("DOMContentLoaded", function() {
    const Sol = document.querySelector('.luzes-ligada');  
    const Lua = document.querySelector('.luzes-apagada');  
    const Accc1 = document.querySelector('.acao1');  
    const Accc2 = document.querySelector('.acao2');  
    const Accc3 = document.querySelector('.acao3');  
    const Accc4 = document.querySelector('.acao4');  
    const Accc5 = document.querySelector('.acao5');  
    const Accc6 = document.querySelector('.acao6');  

    const Logo = document.querySelector('.logo');  
    const body = document.body; 


    function mudarParaClaro() {
        if (body.style.backgroundColor !== 'white') { // Evita repetição desnecessária
            body.style.backgroundColor = 'white';  
            body.style.color = 'black'; 
            Accc1.style.color = 'black'; 
            Accc2.style.color = 'black';
            Accc3.style.color = 'black';
            Accc4.style.color = 'black';
            Accc5.style.color = 'black';
            Accc6.style.color = 'black';
            Logo.src = "../cartoes/logo3.png"; // CORRIGIDO: Alterando a imagem corretamente
            Sol.style.display = 'none';  
            Lua.style.display = 'block'; 
        }
    }

    function mudarParaEscuro() {
        if (body.style.backgroundColor !== 'black') { // Evita repetição desnecessária
            body.style.backgroundColor = 'black';  
            body.style.color = 'white'; 
            Accc1.style.color = 'white'; 
            Accc2.style.color = 'white';
            Accc3.style.color = 'white';
            Accc4.style.color = 'white';
            Accc5.style.color = 'white';
            Accc6.style.color = 'white';
          
            Logo.src = "../cartoes/logo2.png"; // Retorna a imagem original
            Sol.style.display = 'block'; 
            Lua.style.display = 'none';  
        }
    }

    Sol.addEventListener("click", mudarParaClaro);
    Lua.addEventListener("click", mudarParaEscuro);
});


function acaoValor() {
    const Cartoes = document.querySelector('.cartoes');
    const Acoes = document.querySelector('.acoes');
    const Lgs = document.querySelector('.logo');
    const Caminhos = document.querySelector('.caminhos');
    const Calendario = document.querySelector('.calendario');
    const Valor = document.querySelector('.valor');
    const Consulta = document.querySelector('.consulta');
    const Extrato = document.querySelector('.extrato');
    const Perfil = document.querySelector('.PerfiL');

    if (Caminhos.style.display === 'none') {
        setTimeout(() => {
            Caminhos.style.display = 'block';
            Perfil.style.display = 'none';
            Valor.style.display = 'block';
            Extrato.style.display = 'none';
            Consulta.style.display = 'none';
            Calendario.style.display = 'none';
            Cartoes.style.display = 'none';
            Acoes.style.display = 'none';
            Lgs.style.display = 'none';
        }, 500); // Espera 500ms antes de executar
    } else {
        setTimeout(() => {
            Caminhos.style.display = 'none';
            Calendario.style.display = 'none';
            Perfil.style.display = 'none';
            Extrato.style.display = 'none';
            Valor.style.display = 'none';
            Consulta.style.display = 'none';
            Cartoes.style.display = 'block';
            Acoes.style.display = 'block';
            Lgs.style.display = 'block';
        }, 500); // Espera 500ms antes de executar
    }
}

function acaoCalendario(){
        const Cartoes = document.querySelector('.cartoes');
        const Acoes = document.querySelector('.acoes');
        const Lgs = document.querySelector('.logo');
        const Caminhos = document.querySelector('.caminhos');
        const Valor = document.querySelector('.valor');
        const Calendario = document.querySelector('.calendario');
        const Consulta = document.querySelector('.consulta');
        const Extrato = document.querySelector('.extrato');
        const Perfil = document.querySelector('.PerfiL');
    
        if (Caminhos.style.display === 'none') {
            setTimeout(() => {
                Caminhos.style.display = 'block';
                Perfil.style.display = 'none';
                Consulta.style.display = 'none';
                Cartoes.style.display = 'none';
                Valor.style.display = 'none';
                Calendario.style.display = 'block';
                Extrato.style.display = 'none';
                Acoes.style.display = 'none';
                Lgs.style.display = 'none';
            }, 500); // Espera 500ms antes de executar
        } else {
            setTimeout(() => {
                Caminhos.style.display = 'none';
                Calendario.style.display = 'none';
                Perfil.style.display = 'none';
                Consulta.style.display = 'none';
                Extrato.style.display = 'none';
                Cartoes.style.display = 'block';
                Valor.style.display = 'block';
                Acoes.style.display = 'block';
                Lgs.style.display = 'block';
            }, 500); // Espera 500ms antes de executar
        }

}


function acaoConsultar(){
    const Consulta = document.querySelector('.consulta');
    const Cartoes = document.querySelector('.cartoes');
    const Acoes = document.querySelector('.acoes');
    const Lgs = document.querySelector('.logo');
    const Caminhos = document.querySelector('.caminhos');
    const Valor = document.querySelector('.valor');
    const Calendario = document.querySelector('.calendario');
    const Extrato = document.querySelector('.extrato');
    const Perfil = document.querySelector('.PerfiL');


    if (Caminhos.style.display === 'none') {
        setTimeout(() => {
            Caminhos.style.display = 'block';
            Perfil.style.display = 'none';
            Cartoes.style.display = 'block';
            Consulta.style.display = 'block';
            Extrato.style.display = 'none';
            Valor.style.display = 'none';
            Calendario.style.display = 'none';
            Acoes.style.display = 'none';
            Lgs.style.display = 'none';
        }, 500); // Espera 500ms antes de executar
    } else {
        setTimeout(() => {
            Caminhos.style.display = 'none';
            Consulta.style.display = 'none';
            Perfil.style.display = 'none';
            Calendario.style.display = 'none';
            Cartoes.style.display = 'none';
            Extrato.style.display = 'none';
            Valor.style.display = 'block';
            Acoes.style.display = 'block';
            Lgs.style.display = 'block';
        }, 500); // Espera 500ms antes de executar
    }



}

function verExtrato(){
    const Consulta = document.querySelector('.consulta');
    const Extrato = document.querySelector('.extrato');
    const Cartoes = document.querySelector('.cartoes');
    const Acoes = document.querySelector('.acoes');
    const Lgs = document.querySelector('.logo');
    const Caminhos = document.querySelector('.caminhos');
    const Valor = document.querySelector('.valor');
    const Calendario = document.querySelector('.calendario');
    const Perfil = document.querySelector('.PerfiL');



    if (Caminhos.style.display === 'none') {
        setTimeout(() => {
            Caminhos.style.display = 'block';
            Extrato.style.display = 'block';
            Perfil.style.display = 'none';
            Cartoes.style.display = 'none';
            Consulta.style.display = 'none';
            Valor.style.display = 'none';
            Calendario.style.display = 'none';
            Acoes.style.display = 'none';
            Lgs.style.display = 'none';
        }, 500); // Espera 500ms antes de executar
    } else {
        setTimeout(() => {
            Caminhos.style.display = 'none';
            Perfil.style.display = 'none';
            Consulta.style.display = 'none';
            Calendario.style.display = 'none';
            Cartoes.style.display = 'none';
            Extrato.style.display = 'none';
            Valor.style.display = 'block';
            Acoes.style.display = 'block';
            Lgs.style.display = 'block';
        }, 500); // Espera 500ms antes de executar
    }
}



function acaoPerfil(){
    const Consulta = document.querySelector('.consulta');
    const Extrato = document.querySelector('.extrato');
    const Cartoes = document.querySelector('.cartoes');
    const Acoes = document.querySelector('.acoes');
    const Lgs = document.querySelector('.logo');
    const Caminhos = document.querySelector('.caminhos');
    const Valor = document.querySelector('.valor');
    const Calendario = document.querySelector('.calendario');
    const Perfil = document.querySelector('.PerfiL');



    if (Caminhos.style.display === 'none') {
        setTimeout(() => {
            Caminhos.style.display = 'block';
            Extrato.style.display = 'none';
            Perfil.style.display = 'block';
            Cartoes.style.display = 'none';
            Consulta.style.display = 'none';
            Valor.style.display = 'none';
            Calendario.style.display = 'none';
            Acoes.style.display = 'none';
            Lgs.style.display = 'none';
        }, 500); // Espera 500ms antes de executar
    } else {
        setTimeout(() => {
            Caminhos.style.display = 'none';
            Perfil.style.display = 'none';
            Consulta.style.display = 'none';
            Calendario.style.display = 'none';
            Cartoes.style.display = 'none';
            Extrato.style.display = 'none';
            Valor.style.display = 'block';
            Acoes.style.display = 'block';
            Lgs.style.display = 'block';
        }, 500); // Espera 500ms antes de executar
    }




}
function voltarPri(){
    const Cartoes =document.querySelector('.cartoes');
    const Acoes =document.querySelector('.acoes');
    const Lgs = document.querySelector('.logo');
    const Caminhos = document.querySelector('.caminhos');

    if(Caminhos.style.display === 'block'){
        setTimeout(() => {
        Caminhos.style.display = 'none';
        Cartoes.style.display = 'block';
        Acoes.style.display= 'flex';
        Lgs.style.display = 'block';
        }, 500);
    }else{
        setTimeout(() => {
        Caminhos.style.display = 'none';
        Cartoes.style.display = 'block';
        Acoes.style.display= 'none';
        Lgs.style.display = 'none';
    }, 500);

    }

}

// function subirPri() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   }
function mostrarBanner(mensagem, tipo = 'info') {
    const banner = document.getElementById('banner');
    banner.textContent = mensagem;
    banner.className = 'banner ' + tipo; // exemplo: 'banner erro' ou 'banner sucesso'
    banner.style.display = 'block';

    setTimeout(() => {
        banner.style.display = 'none';
    }, 4000);
}





document.addEventListener("DOMContentLoaded", function() {
    carregarDados();  // Chama a função para carregar os dados ao carregar a página

    const form = document.querySelector('.camposV');
    const botoesDias = document.querySelectorAll('.btnA');
    let diasSelecionados = [];

    // Adicionando eventListener aos botões dos dias
    botoesDias.forEach(botao => {
        botao.addEventListener('click', () => {
            const dia = botao.textContent;
            botao.classList.toggle('ativo');

            if (diasSelecionados.includes(dia)) {
                diasSelecionados = diasSelecionados.filter(d => d !== dia);
            } else {
                diasSelecionados.push(dia);
            }
            console.log('Dias selecionados:', diasSelecionados);
        });
    });

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const valor = document.querySelector('input[placeholder="Depositar Valor"]').value;
        const desconto = document.querySelector('input[placeholder="Desconto de Ida"]').value;
        const descontoHor = document.querySelector('input[placeholder="Desconto de Regresso"]').value;

        const usuario_id = localStorage.getItem('usuario_id');  // Recuperando o ID
        console.log("usuario_id", usuario_id);

        if (!usuario_id) {
            mostrarBanner("Usuário não está logado!", "erro");
            return;
        }

        const usuario_id_int = parseInt(usuario_id); // Garantir que o usuario_id é um número

        if (isNaN(usuario_id_int)) {
            mostrarBanner("ID de usuário inválido!", "erro");
            return;
        }

        if (!valor || !desconto || !descontoHor) {
            mostrarBanner("Todos os campos são obrigatórios!", "info");
            return;
        }

        // Criando o objeto de dados a ser enviado
        const dados = {
            usuario_id: usuario_id_int,
            valor: parseFloat(valor),
            desconto: parseFloat(desconto),
            desconto_hor: parseInt(descontoHor), // Conversão para número inteiro
            dias: diasSelecionados
        };

        console.log(dados); // Verifique os dados antes de enviar

        // Enviando os dados para o servidor
        fetch('http://192.168.1.128:5000/salvar', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dados)
        })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.message || 'Erro desconhecido');
                });
            }
            return response.json();
        })
        .then(data => {
            console.log("Resposta do servidor:", data);
            if (data.message === "Valores adicionados com sucesso!") {
                mostrarBanner("Valores salvos com sucesso!", "sucesso");
                // Exibindo o valor final e histórico
                
            } else {
                mostrarBanner("Valor Adicionados!", "sucesso");
            }
        })
        .catch(error => {
            console.error('Erro ao enviar dados:', error);
            mostrarBanner(`Erro ao salvar os valores: ${error.message}`, `erro`);
        });
        form.reset();
    });
});




// Função para formatar valores
function formatarValor(valor) {
    const partes = valor.toFixed(2).split('.'); // Divide o número em parte inteira e decimal
    const parteInteira = partes[0];
    const parteDecimal = partes[1];

    // Adiciona o separador de milhares (ponto)
    const parteInteiraFormatada = parteInteira.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

    // Retorna o valor formatado com separador de milhares e decimal
    return `${parteInteiraFormatada},${parteDecimal}Kz`;
}


// Função para carregar os dados
function carregarDados() {
    const usuario_id = localStorage.getItem('usuario_id');
    if (!usuario_id) {
        mostrarBanner("Usuário não está logado!", "erro");
        return;
    }

    fetch(`http://192.168.1.128:5000/consultar/${usuario_id}`)
        .then(res => {
            if (!res.ok) throw new Error("Erro na requisição: " + res.status);
            return res.json();
        })
        .then(data => {
            if (data && data.length > 0) {
                const usuario = data[0];
                console.log('Dados do usuário:', usuario);

                const desconto = parseFloat(usuario.desconto);
                const descontoHor = parseFloat(usuario.desconto_hor);

                const agora = new Date();
                const horaAtual = agora.getHours();
                const minutoAtual = agora.getMinutes();
                const diaSemana = agora.getDay(); // 0 = domingo, 1 = segunda, ..., 5 = sexta
                
                const ano = agora.getFullYear();
                const mes = String(agora.getMonth() + 1).padStart(2, '0');
                const dia = String(agora.getDate()).padStart(2, '0');
                const hojeStr = `${dia}/${mes}/${ano}`;
                const horaStr = `${horaAtual}:${String(minutoAtual).padStart(2, '0')}`;
                const ehDiaUtil = diaSemana >= 1 && diaSemana <= 5;
                
                // AQUI, GARANTIMOS QUE O VALOR COMEÇA COMO 0 PARA NOVOS USUÁRIOS, A MENOS QUE O USUÁRIO ADICIONE UM VALOR
                let valorSalvo = parseFloat(localStorage.getItem('valorComDesconto'));
                if (isNaN(valorSalvo) || valorSalvo === 0) {
                    valorSalvo = parseFloat(usuario.valor);  // Aqui pegamos o valor inicial do banco de dados
                    localStorage.setItem('valorComDesconto', valorSalvo.toFixed(2));
                }

                // Verificar se o valor foi adicionado pelo usuário
                const valorInput = parseFloat(document.querySelector('.valor-input').value);
                if (!isNaN(valorInput) && valorInput > 0) {
                    valorSalvo = valorInput;
                    localStorage.setItem('valorComDesconto', valorSalvo.toFixed(2));  // Armazena o novo valor
                }

                // Exibe o valor com desconto formatado
                document.querySelector('.valore').textContent = formatarValor(valorSalvo);

                // Resetar os descontos se não houver valor
                if (valorSalvo <= 0) {
                    localStorage.setItem('dataUltimoDesconto7h', '');
                    localStorage.setItem('dataUltimoDesconto12h', '');
                }

                const dataDesc7h = localStorage.getItem('dataUltimoDesconto7h');
                const dataDesc12h = localStorage.getItem('dataUltimoDesconto12h');
                
                // Histórico de descontos
                let historico = JSON.parse(localStorage.getItem('historicoDescontos')) || [];

                if (ehDiaUtil) {
                    // Desconto das 7h
                    if (horaAtual >= 7 && horaAtual < 12 && dataDesc7h !== hojeStr && valorSalvo > 0) {
                        const valorAntes = valorSalvo;
                        valorSalvo -= desconto;
                        localStorage.setItem('dataUltimoDesconto7h', hojeStr);
                
                        historico.push({
                            data: hojeStr,
                            hora: horaStr,
                            tipo: "Desconto das Ida",
                            valorAntes: formatarValor(valorAntes),
                            valorDescontado: formatarValor(desconto),
                            novoValor: formatarValor(valorSalvo)
                        });
                    }
                
                    // Desconto das 12h
                    if (horaAtual >= 12 && dataDesc12h !== hojeStr && valorSalvo > 0) {
                        const valorAntes = valorSalvo;
                        valorSalvo -= descontoHor;
                        localStorage.setItem('dataUltimoDesconto12h', hojeStr);
                
                        historico.push({
                            data: hojeStr,
                            hora: horaStr,
                            tipo: "Desconto das Regresso",
                            valorAntes: formatarValor(valorAntes),
                            valorDescontado: formatarValor(descontoHor),
                            novoValor: formatarValor(valorSalvo)
                        });
                    }
                }
                
                // Atualiza o localStorage com o novo saldo e histórico
                localStorage.setItem('valorComDesconto', valorSalvo.toFixed(2));
                localStorage.setItem('historicoDescontos', JSON.stringify(historico));
       

                // Exibe o histórico de descontos
                const historicoDiv = document.querySelector('.historico');
               
                historicoDiv.innerHTML = ''; // Limpa antes de preencher
               
                // Agrupa os registros por data
                const historicoPorData = {};
                historico.forEach(entry => {
                    if (!historicoPorData[entry.data]) {
                        historicoPorData[entry.data] = [];
                    }
                    historicoPorData[entry.data].push(entry);
                });

                // Mostra os grupos
                Object.keys(historicoPorData).forEach(data => {
                    const blocoDia = document.createElement('div');
                    blocoDia.style.marginBottom = '20px';
                    blocoDia.style.padding = '13px';
                    blocoDia.style.border = '2px solid #ccc';
                    blocoDia.style.borderRadius = '8px';
                    blocoDia.style.backgroundColor = '#f9f9f9';
                
                    const titulo = document.createElement('h3');
                    titulo.textContent = `📅 ${data}`;
                    titulo.style.marginBottom = '10px';
                    titulo.style.color = '#333';
                    blocoDia.appendChild(titulo);

                    historicoPorData[data].forEach(entry => {
                        const item = document.createElement('div');
                        item.style.marginBottom = '8px';
                        item.style.padding = '10px';
                        item.style.borderRadius = '16px';
                        item.style.borderLeft = '4px solid rgb(255, 170, 0)';
                        item.style.backgroundColor = '#fff';
                        item.style.boxShadow = '0 1px 4px rgb(0, 0, 0)';
                        
                        item.innerHTML = `
                            🕒 ${entry.hora} - <strong>${entry.tipo}</strong><br>
                            Saldo anterior: <strong>${entry.valorAntes}</strong><br>
                        Desconto: <strong>-${entry.valorDescontado}</strong><br>
                            Novo Saldo: <strong>${entry.novoValor}</strong>
                        `;
                
                        blocoDia.appendChild(item);
                    });
                
                    historicoDiv.appendChild(blocoDia);
                });
                
            } else {
                console.log('Nenhum dado encontrado.');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os dados:', error);
        });
}



// Função para limpar todos os dados do localStorage e reiniciar o valorSalvo
function limparLocalStorage() {
    // Limpa todos os dados do localStorage
    localStorage.clear();
    mostrarBanner("Todos os dados foram reiniciados!", "info");

    // Reinicia o valorSalvo para 0
    localStorage.setItem('valorComDesconto', '0.00');  // Define o valorSalvo como 0

    // Limpa os dados adicionais, como histórico e data dos descontos
    localStorage.setItem('historicoDescontos', JSON.stringify([]));  // Limpa o histórico de descontos
    localStorage.setItem('dataUltimoDesconto7h', '');  // Limpa a data do último desconto das 7h
    localStorage.setItem('dataUltimoDesconto12h', '');  // Limpa a data do último desconto das 12h

    // Limpa outros dados relacionados a sessão de usuário, como ID
    localStorage.removeItem('usuario_id');
    
    // Opcional: Pode redirecionar o usuário ou atualizar a página
    window.location.reload(); // Recarregar a página para reiniciar os dados no front-end
}


function carregarPerfil() {
    const usuario_id = localStorage.getItem('usuario_id');
    console.log("ID do usuário armazenado no localStorage:", usuario_id);

    if (!usuario_id) {
        mostrarBanner("Usuário não está logado!", "erro");
        return;
    }

    fetch(`http://192.168.1.128:5000/perfil/${usuario_id}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro ao carregar o perfil: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log("Dados do usuário recebidos:", data);

        const user = data[0]; // ou apenas `data` se o backend retornar direto o objeto

        document.querySelector('.nome-usuario').textContent = user.name || '-----------------';
        document.querySelector('.nomek').textContent = user.name || '-----------------';
        document.querySelector('.email-usuario').textContent = user.email || '----------------';
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao carregar o perfil do usuário');
    });
}

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    carregarPerfil();
});




document.addEventListener("DOMContentLoaded", function () {
    const diasContainer = document.getElementById("dias");
    const mesAno = document.getElementById("mesAno");

    const hoje = new Date();
    const mesAtual = hoje.getMonth();
    const anoAtual = hoje.getFullYear();

    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];

    // Lista de feriados fixos de Angola no formato MM-DD
    const feriadosFixos = [
        "01-01", // Ano Novo
        "02-04", // Dia do Início da Luta Armada
        "03-08", // Dia Internacional da Mulher
        "04-04", // Dia da Paz e Reconciliação
        "04-18",
        "05-01",
        "05-02", // Dia do Trabalhador
        "09-17", // Dia do Herói Nacional
        "11-02",
        "11-10",// Dia dos Finados
        "11-11", // Dia da Independência
        "12-25", // Natal
    ];

    // Função para verificar se a data é um feriado
    function isFeriado(dia, mes) {
        const dataStr = `${String(mes + 1).padStart(2, '0')}-${String(dia).padStart(2, '0')}`;
        return feriadosFixos.includes(dataStr);
    }

    // Função para verificar se é uma ponte (segunda antes de feriado terça ou sexta após feriado quinta)
    function isPonte(dia, mes) {
        const dataAtual = new Date(anoAtual, mes, dia);
        const diaSemana = dataAtual.getDay();

        // Segunda antes de um feriado na terça
        if (diaSemana === 1) {
            const diaSeguinte = new Date(anoAtual, mes, dia + 1);
            return isFeriado(diaSeguinte.getDate(), diaSeguinte.getMonth());
        }

        // Sexta após um feriado na quinta
        if (diaSemana === 5) {
            const diaAnterior = new Date(anoAtual, mes, dia - 1);
            return isFeriado(diaAnterior.getDate(), diaAnterior.getMonth());
        }

        return false;
    }

    // Atualiza o título do mês e ano
    mesAno.textContent = `${meses[mesAtual]} ${anoAtual}`;

    const primeiroDia = new Date(anoAtual, mesAtual, 1).getDay();
    const diasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();

    diasContainer.innerHTML = "";

    for (let i = 0; i < primeiroDia; i++) {
        const vazio = document.createElement("div");
        diasContainer.appendChild(vazio);
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
        const diaElemento = document.createElement("div");
        diaElemento.textContent = dia;

        if (dia === hoje.getDate()) {
            diaElemento.classList.add("hoje");
        }

        // Adiciona classe para feriados
        if (isFeriado(dia, mesAtual)) {
            diaElemento.classList.add("feriado");
        }

        // Adiciona classe para pontes
        if (isPonte(dia, mesAtual)) {
            diaElemento.classList.add("ponte");
        }

        diasContainer.appendChild(diaElemento);
    }
});




const inputFoto = document.getElementById('foto');
const preview = document.getElementById('preview');

// Carregar imagem do localStorage ao abrir
window.addEventListener('DOMContentLoaded', () => {
  const imagemSalva = localStorage.getItem('fotoPerfil');
  if (imagemSalva) {
    preview.src = imagemSalva;
    preview.style.display = 'block'; // garante que apareça
  }
});

inputFoto.addEventListener('change', function () {
  const arquivo = this.files[0];
  if (arquivo) {
    const leitor = new FileReader();

    leitor.onload = function (e) {
      const imagemBase64 = e.target.result;
      preview.src = imagemBase64;
      localStorage.setItem('fotoPerfil', imagemBase64);
    }

    leitor.readAsDataURL(arquivo);
  }
});




function editarNome() {
    const nome = document.getElementById("nomeUsuario").innerText;
    document.getElementById("inputNome").value = nome;
    document.getElementById("nomeUsuario").style.display = "none";
    document.getElementById("inputNome").style.display = "inline-block";
  
    document.querySelector(".btn-editar").style.display = "none";
    document.querySelector(".btn-salvar").style.display = "inline-block"; 
    document.querySelector(".btn-sair").style.display = "none";
  }


  function salvarPerfil() {
    const novoNome = document.getElementById("inputNome").value;
    const usuarioId = localStorage.getItem('usuario_id'); // Obtém o ID do usuário do localStorage

    if (!usuarioId) {
        mostrarBanner("Usuário não está logado!", "erro");
        return;
    }

    // Atualiza visualmente
    document.getElementById("nomeUsuario").innerText = novoNome;
    document.getElementById("nomeUsuario").style.display = "block";
    document.querySelector(".btn-sair").style.display = "block";
    document.getElementById("inputNome").style.display = "none";

    document.querySelector(".btn-editar").style.display = "inline-block";
    document.querySelector(".btn-salvar").style.display = "none";

    // Enviar a requisição para atualizar o nome
    fetch(`http://192.168.1.128:5000/atualizar-nome/${usuarioId}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome: novoNome }),
    })
    .then(res => {
        if (!res.ok) throw new Error("Erro na resposta do servidor");
        return res.json();
    })
    .then(data => {
        if (data.sucesso) {
            mostrarBanner("Nome atualizado com sucesso!", "sucesso");
        } else {
            mostrarBanner("Erro ao atualizar o nome.", "erro");
        }
    })
    .catch(erro => {
        console.error("Erro na requisição:", erro);
        mostrarBanner("Ocorreu um erro ao tentar salvar.", "erro");
    });
}

  





  function gerarIBAN() {
    // Gera um número IBAN de 16 dígitos
    let iban = '';
    for (let i = 0; i < 16; i++) {
        iban += Math.floor(Math.random() * 10); // Adiciona um número aleatório de 0 a 9
    }

    // Armazena o IBAN no localStorage
    localStorage.setItem('iban', iban);

    // Atualiza o elemento no DOM
    const ibanElement = document.querySelector('.iban');
    if (ibanElement) {
        ibanElement.textContent = iban;
    }

    console.log('IBAN gerado e armazenado:', iban);
}

document.addEventListener('DOMContentLoaded', () => {
    // Verifica se o IBAN já está armazenado no localStorage
    let iban = localStorage.getItem('iban');
    if (!iban) {
        // Se não existir, gera um novo IBAN
        gerarIBAN();
    } else {
        // Atualiza o elemento no DOM com o IBAN armazenado
        const ibanElement = document.querySelector('.iban');
        if (ibanElement) {
            ibanElement.textContent = iban;
        }
        console.log('IBAN carregado do localStorage:', iban);
    }
});