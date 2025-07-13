// Quita el detalle y agrega la función de resaltar siguientes materias
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
      matDiv.dataset.codigo = mat.codigo; // para identificar luego
      matDiv.onclick = () => resaltaSiguientes(mat.codigo);
      semDiv.appendChild(matDiv);
    });
    cont.appendChild(semDiv);
  }
}

function resaltaSiguientes(codigo) {
  // Busca las materias siguientes
  const siguientes = MATERIAS.filter(m => m.prerrequisitos && m.prerrequisitos.includes(codigo)).map(m => m.codigo);

  // Resalta las materias siguientes, atenúa las demás
  document.querySelectorAll('.materia').forEach(matDiv => {
    if (siguientes.includes(matDiv.dataset.codigo)) {
      matDiv.classList.add('siguiente');
      matDiv.classList.remove('atenuada');
    } else {
      matDiv.classList.remove('siguiente');
      matDiv.classList.add('atenuada');
    }
  });

  // Si no hay siguientes, atenúa todas menos la seleccionada
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

// OPCIONAL: Al hacer clic afuera, restaurar la vista
document.body.onclick = function(e) {
  // Si no se hizo clic en una materia...
  if (!e.target.classList.contains('materia')) {
    document.querySelectorAll('.materia').forEach(matDiv => {
      matDiv.classList.remove('siguiente');
      matDiv.classList.remove('atenuada');
    });
  }
};

window.onload = renderMalla;
