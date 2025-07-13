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
      matDiv.onclick = (e) => {
        e.stopPropagation(); // Prevent body click handler
        resaltaSiguientes(mat.codigo);
      };
      semDiv.appendChild(matDiv);
    });
    cont.appendChild(semDiv);
  }
}

function resaltaSiguientes(codigo) {
  const siguientes = MATERIAS.filter(m => m.prerrequisitos && m.prerrequisitos.includes(codigo)).map(m => m.codigo);

  document.querySelectorAll('.materia').forEach(matDiv => {
    if (siguientes.includes(matDiv.dataset.codigo)) {
      matDiv.classList.add('siguiente');
      matDiv.classList.remove('atenuada');
    } else {
      matDiv.classList.remove('siguiente');
      matDiv.classList.add('atenuada');
    }
  });

  if (siguientes.length === 0) {
    document.querySelectorAll('.materia').forEach(matDiv => {
      if (matDiv.dataset.codigo === codigo) {
        matDiv.classList.add('siguiente');
        matDiv.classList.remove('atenuada');
      } else {
        matDiv.classList.remove('siguiente');
        matDiv.classList.add('atenuada');
      }
    });
  }
}

// Al hacer clic fuera, se restauran los estilos
document.body.onclick = function(e) {
  if (!e.target.classList.contains('materia')) {
    document.querySelectorAll('.materia').forEach(matDiv => {
      matDiv.classList.remove('siguiente');
      matDiv.classList.remove('atenuada');
    });
  }
};

window.onload = renderMalla;
