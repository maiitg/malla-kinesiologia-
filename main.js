function showDetalle(mat) {
  const detalle = document.getElementById('detalle');

  // Buscar las materias para las que esta es prerrequisito
  const siguientes = MATERIAS.filter(m => m.prerrequisitos && m.prerrequisitos.includes(mat.codigo));

  let siguientesHtml = "";
  if (siguientes.length > 0) {
    siguientesHtml = "<p><strong>Materias siguientes:</strong></p><ul>" +
      siguientes.map(s => `<li>${s.nombre} (${s.codigo})</li>`).join("") +
      "</ul>";
  } else {
    siguientesHtml = "<p><strong>Materias siguientes:</strong> Ninguna</p>";
  }

  detalle.innerHTML = `
    <button class="close-btn" onclick="closeDetalle()">&times;</button>
    <h2>${mat.nombre}</h2>
    <p><strong>Código:</strong> ${mat.codigo}</p>
    <p><strong>Semestre:</strong> ${SEMESTRES[mat.semestre - 1]}</p>
    <p><strong>Créditos:</strong> ${mat.creditos}</p>
    <p><strong>Horas:</strong> ${mat.horas}</p>
    <p><strong>Tipo:</strong> ${tipoText(mat.tipo)}</p>
    <p><strong>Prerrequisitos:</strong> ${mat.prerrequisitos.length ? mat.prerrequisitos.join(", ") : "Ninguno"}</p>
    ${siguientesHtml}
  `;
  detalle.classList.remove("detalle-oculto");
}
