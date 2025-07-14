
let tachados = new Set();
let resaltados = new Set();

function renderMalla() {
  const cont = document.getElementById('malla');
  cont.innerHTML = "";
  for (let i = 0; i < SEMESTRES.length; i++) {
    const semDiv = document.createElement('div');
    semDiv.className = "semestre";
    const title = document.createElement('div');
    title.className = "semestre-title";
    title.textContent = SEMESTRES[i];
    semDiv.appendChild(title);

    const matDelSem = MATERIAS.filter(m => m.semestre === i + 1);
    matDelSem.forEach(mat => {
      const matDiv = document.createElement('div');
      matDiv.className = "materia " + mat.tipo;
      matDiv.textContent = mat.nombre;
      matDiv.title = mat.nombre;
      matDiv.dataset.codigo = mat.codigo;
      
      if (tachados.has(mat.codigo)) matDiv.classList.add('tachada');
      if (resaltados.has(mat.codigo)) matDiv.classList.add('siguiente');
      matDiv.onclick = (e) => {
        e.stopPropagation();
        marcarTacharYResaltar(mat.codigo);
      };
      semDiv.appendChild(matDiv);
    });
    cont.appendChild(semDiv);
  }
}

function marcarTacharYResaltar(codigo) {
  tachados.add(codigo);

  const siguientes = MATERIAS.filter(m => m.prerrequisitos && m.prerrequisitos.includes(codigo)).map(m => m.codigo);
  siguientes.forEach(sig => resaltados.add(sig));

  renderMalla();
}

window.onload = renderMalla;
