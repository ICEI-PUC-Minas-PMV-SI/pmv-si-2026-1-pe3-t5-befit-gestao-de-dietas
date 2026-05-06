
//Relatório

let tipoRelatorio = '';

function irParaPeriodo(tipo) {
  tipoRelatorio = tipo;
  document.querySelectorAll('input[name="periodo"]').forEach(cb => cb.checked = false);
  mostrarTela('periodo');
}

function irParaFinal() {
  const checkboxes = document.querySelectorAll('input[name="periodo"]:checked');
  const periodos = Array.from(checkboxes).map(cb => cb.value);

  if (periodos.length === 0) {
    alert("Selecione ao menos um período.");
    return;
  }

  const tipoFormatado = tipoRelatorio === 'imc' ? 'IMC' : 'consumo';
  document.getElementById("titulo-relatorio").innerText = `Relatório de ${tipoFormatado}`;
  document.getElementById("resumo-relatorio").innerText = `Períodos selecionados: ${periodos.join(', ')}`;
  document.getElementById("valor-imc").innerHTML = '';
  document.getElementById("listaAgenda").innerHTML = '';
  mostrarTela('final');
}


function mostrarTela(id) {
  document.querySelectorAll('.section').forEach(div => div.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

async function salvarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const titulo = document.getElementById("titulo-relatorio").innerText;
  const resumo = document.getElementById("resumo-relatorio").innerText;

  doc.setFontSize(18);
  doc.text(titulo, 10, 20);
  doc.setFontSize(12);
  doc.text(resumo, 10, 30);

  doc.save("relatorio.pdf");
}

//função resultado IMC

function mostrarResultadoSalvo() {
  const resultado = JSON.parse(localStorage.getItem("resultadoIMC"));
  if (resultado) {
    document.getElementById("valor-imc").innerHTML = (`Último IMC calculado: ${resultado.imc} - ${resultado.classificacao} (em ${resultado.data})`);
  } else {
    alert("Nenhum resultado salvo encontrado.");
  }
}



//função resultado Receita

//function listarAgenda() {
  //const dados = JSON.parse(localStorage.getItem('db_agenda') || '[]');
  //dados.forEach((item, index) => {
    //console.log(`--- Receita ${index + 1} ---`);
    //console.log(item);
  //});
  //return dados;
//}

//função resultado Receita

function listarAgenda() {
  const dados = JSON.parse(localStorage.getItem('db_agenda') || '[]');

  const container = document.getElementById('listaAgenda');
  container.innerHTML = '';

  if (dados.length === 0) {
    container.innerHTML = '<div class="agenda-item"><strong>Nenhuma receita encontrada.</strong><span>Adicione receitas na agenda para visualizar aqui.</span></div>';
    return dados;
  }

  dados.forEach((item) => {
    const receitaDiv = document.createElement('div');
    receitaDiv.className = 'agenda-item';
    const nome = item.receita?.nomeReceita || 'Receita sem nome';
    const dia = item.id || '-';
    receitaDiv.innerHTML = `
      <strong>${nome}</strong>
      <span>Dia ${dia}</span>
    `;
    container.appendChild(receitaDiv);
  });

  return dados;
}
