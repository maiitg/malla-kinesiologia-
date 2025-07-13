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
      matDiv.onclick = () => showDetalle(mat);
      if (mat.prerrequisitos && mat.prerrequisitos.length > 0) {
        const pre = document.createElement('div');
        pre.className = "prereq";
        pre.textContent = "Prerrequisitos: " + mat.prerrequisitos.join(", ");
        matDiv.appendChild(pre);
      }
      semDiv.appendChild(matDiv);
    });
    cont.appendChild(semDiv);
  }
}

function showDetalle(mat) {
  const detalle = document.getElementById('detalle');
  detalle.innerHTML = `
    <button class="close-btn" onclick="closeDetalle()">&times;</button>
    <h2>${mat.nombre}</h2>
    <p><strong>Código:</strong> ${mat.codigo}</p>
    <p><strong>Semestre:</strong> ${SEMESTRES[mat.semestre - 1]}</p>
    <p><strong>Créditos:</strong> ${mat.creditos}</p>
    <p><strong>Horas:</strong> ${mat.horas}</p>
    <p><strong>Tipo:</strong> ${tipoText(mat.tipo)}</p>
    <p><strong>Prerrequisitos:</strong> ${mat.prerrequisitos.length ? mat.prerrequisitos.join(", ") : "Ninguno"}</p>
  `;
  detalle.classList.remove("detalle-oculto");
}

function closeDetalle() {
  document.getElementById('detalle').classList.add("detalle-oculto");
}

function tipoText(tipo) {
  switch (tipo) {
    case "cb": return "Ciencias Básicas";
    case "fg": return "Formación General";
    case "cf": return "Asignatura común de Facultad";
    case "pc": return "Propia de la Carrera";
    case "el": return "Electiva";
    default: return "Otro";
  }
}

window.onload = renderMalla;