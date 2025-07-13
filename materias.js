const SEMESTRES = [
  "I Semestre", "II Semestre", "III Semestre", "IV Semestre",
  "V Semestre", "VI Semestre", "VII Semestre", "VIII Semestre", "IX Semestre", "X Semestre"
];

const MATERIAS = [
  // I Semestre
  { codigo: "MAT-015", nombre: "Principios Matemáticos", semestre: 1, creditos: 8, horas: 144, tipo: "cb", prerrequisitos: [] },
  { codigo: "KIN-122", nombre: "Fundamentos de Anatomía para el Movimiento Humano", semestre: 1, creditos: 7, horas: 108, tipo: "pc", prerrequisitos: [] },
  { codigo: "BIO-002", nombre: "Biología Celular", semestre: 1, creditos: 6, horas: 144, tipo: "cb", prerrequisitos: [] },
  { codigo: "KIN-066", nombre: "Fundamentos del Movimiento Humano", semestre: 1, creditos: 3, horas: 54, tipo: "pc", prerrequisitos: [] },
  { codigo: "FGL-149", nombre: "Taller de Competencias Comunicativas", semestre: 1, creditos: 2, horas: 72, tipo: "fg", prerrequisitos: [] },
  { codigo: "COM-001", nombre: "Taller de Competencias para el Aprendizaje", semestre: 1, creditos: 2, horas: 36, tipo: "fg", prerrequisitos: [] },

  // II Semestre
  { codigo: "KIN-123", nombre: "Anatomía/Fisiología", semestre: 2, creditos: 8, horas: 144, tipo: "pc", prerrequisitos: ["KIN-122"] },
  { codigo: "KIN-124", nombre: "Fisiología de Tejidos y Biofísica", semestre: 2, creditos: 5, horas: 108, tipo: "pc", prerrequisitos: ["MAT-015"] },
  { codigo: "KIN-125", nombre: "Actividad Física y Salud", semestre: 2, creditos: 5, horas: 90, tipo: "pc", prerrequisitos: [] },
  { codigo: "QUI-006", nombre: "Química", semestre: 2, creditos: 6, horas: 108, tipo: "cb", prerrequisitos: [] },
  { codigo: "FGL-001", nombre: "Cultura y Valores", semestre: 2, creditos: 4, horas: 72, tipo: "fg", prerrequisitos: [] },
  { codigo: "FGL-151", nombre: "Taller de Desarrollo Personal I", semestre: 2, creditos: 2, horas: 36, tipo: "fg", prerrequisitos: [] },

  // III Semestre
  { codigo: "KIN-126", nombre: "Fisiopatología y Farmacología", semestre: 3, creditos: 8, horas: 144, tipo: "pc", prerrequisitos: ["BIO-002", "KIN-123"] },
  { codigo: "KIN-073", nombre: "Fisiología Articular", semestre: 3, creditos: 6, horas: 108, tipo: "pc", prerrequisitos: ["KIN-124"] },
  { codigo: "KIN-075", nombre: "Desarrollo Psicomotor Normal y Patológico", semestre: 3, creditos: 6, horas: 108, tipo: "pc", prerrequisitos: ["KIN-125"] },
  { codigo: "BIO-005", nombre: "Bioquímica", semestre: 3, creditos: 6, horas: 108, tipo: "cb", prerrequisitos: ["QUI-006"] },
  { codigo: "FGL-008", nombre: "Inglés Básico I", semestre: 3, creditos: 2, horas: 72, tipo: "fg", prerrequisitos: [] },
  { codigo: "FGL-152", nombre: "Taller de Desarrollo Personal II", semestre: 3, creditos: 2, horas: 36, tipo: "fg", prerrequisitos: ["FGL-151"] },

  // IV Semestre
  { codigo: "KIN-076", nombre: "Biomecánica y Control Motor", semestre: 4, creditos: 8, horas: 144, tipo: "pc", prerrequisitos: ["KIN-073", "KIN-066"] },
  { codigo: "ENF-109", nombre: "Fundamentos en Salud Pública", semestre: 4, creditos: 5, horas: 90, tipo: "cf", prerrequisitos: [] },
  { codigo: "FGL-111", nombre: "Persona y Sentido", semestre: 4, creditos: 4, horas: 72, tipo: "fg", prerrequisitos: [] },
  { codigo: "KIN-127", nombre: "Semiología Kinésica e Imagenología", semestre: 4, creditos: 9, horas: 162, tipo: "pc", prerrequisitos: ["KIN-126"] },
  { codigo: "FGL-010", nombre: "Inglés Básico II", semestre: 4, creditos: 2, horas: 72, tipo: "fg", prerrequisitos: ["FGL-008"] },

  // V Semestre
  { codigo: "KIN-129", nombre: "Rehabilitación con Base en Salud Familiar y Comunitaria", semestre: 5, creditos: 5, horas: 90, tipo: "pc", prerrequisitos: ["ENF-109"] },
  { codigo: "KIN-077", nombre: "Fisiología del Metabolismo Energético del Ejercicio", semestre: 5, creditos: 4, horas: 72, tipo: "pc", prerrequisitos: ["BIO-005"] },
  { codigo: "ENF-079", nombre: "Gestión en Salud", semestre: 5, creditos: 4, horas: 72, tipo: "cf", prerrequisitos: [] },
  { codigo: "KIN-082", nombre: "Fisioterapia y Ejercicio Terapéutico", semestre: 5, creditos: 5, horas: 90, tipo: "pc", prerrequisitos: ["KIN-076"] },
  { codigo: "FGL-152", nombre: "Taller de Desarrollo Personal II", semestre: 5, creditos: 2, horas: 36, tipo: "fg", prerrequisitos: [] },
  { codigo: "GER-001", nombre: "Gerontología", semestre: 5, creditos: 2, horas: 72, tipo: "cf", prerrequisitos: [] },

  // VI Semestre
  { codigo: "KIN-130", nombre: "Rehabilitación Sistema Locomotor Infantil", semestre: 6, creditos: 5, horas: 90, tipo: "pc", prerrequisitos: ["KIN-082"] },
  { codigo: "KIN-131", nombre: "Rehabilitación Cardio Respiratoria Infantil", semestre: 6, creditos: 5, horas: 90, tipo: "pc", prerrequisitos: ["KIN-077"] },
  { codigo: "KIN-083", nombre: "Prescripción Ejercicios en Pacientes Crónicos", semestre: 6, creditos: 4, horas: 72, tipo: "pc", prerrequisitos: ["KIN-082"] },
  { codigo: "ENF-080", nombre: "Ética en Salud", semestre: 6, creditos: 4, horas: 72, tipo: "cf", prerrequisitos: [] },
  { codigo: "KIN-136", nombre: "Neurorehabilitación Infantil", semestre: 6, creditos: 5, horas: 108, tipo: "pc", prerrequisitos: ["KIN-130"] },
  { codigo: "KIN-137", nombre: "Rehabilitación Geriátrica", semestre: 6, creditos: 3, horas: 54, tipo: "pc", prerrequisitos: ["KIN-083"] },
  { codigo: "KIN-EL1", nombre: "Electivo I", semestre: 6, creditos: 4, horas: 72, tipo: "el", prerrequisitos: [] },

  // VII Semestre
  { codigo: "KIN-132", nombre: "Rehabilitación Sistema Locomotor Adulto", semestre: 7, creditos: 6, horas: 108, tipo: "pc", prerrequisitos: ["KIN-130"] },
  { codigo: "KIN-133", nombre: "Rehabilitación Cardio Respiratoria Adulto", semestre: 7, creditos: 5, horas: 108, tipo: "pc", prerrequisitos: ["KIN-131"] },
  { codigo: "KIN-140", nombre: "Metodología de la Investigación", semestre: 7, creditos: 4, horas: 72, tipo: "pc", prerrequisitos: [] },
  { codigo: "KIN-089", nombre: "Rehabilitación Deportiva", semestre: 7, creditos: 4, horas: 72, tipo: "pc", prerrequisitos: ["KIN-132"] },
  { codigo: "KIN-134", nombre: "Neurorehabilitación Adulto", semestre: 7, creditos: 5, horas: 90, tipo: "pc", prerrequisitos: ["KIN-136"] },
  { codigo: "KIN-094", nombre: "Salud Ocupacional", semestre: 7, creditos: 3, horas: 54, tipo: "pc", prerrequisitos: [] },
  { codigo: "KIN-EL2", nombre: "Electivo II", semestre: 7, creditos: 4, horas: 72, tipo: "el", prerrequisitos: [] },

  // VIII Semestre
  { codigo: "KIN-121", nombre: "Rehabilitación en Condiciones Especiales de Salud", semestre: 8, creditos: 6, horas: 108, tipo: "pc", prerrequisitos: ["KIN-133"] },
  { codigo: "KIN-097", nombre: "Tratamiento Kinésico del Paciente Crítico", semestre: 8, creditos: 3, horas: 54, tipo: "pc", prerrequisitos: ["KIN-121"] },
  { codigo: "KIN-139", nombre: "Seminario de Investigación", semestre: 8, creditos: 1, horas: 18, tipo: "pc", prerrequisitos: ["KIN-140"] },
  { codigo: "KIN-135", nombre: "Razonamiento Clínico", semestre: 8, creditos: 4, horas: 72, tipo: "pc", prerrequisitos: ["KIN-121"] },
  { codigo: "KIN-EL3", nombre: "Electivo III", semestre: 8, creditos: 4, horas: 72, tipo: "el", prerrequisitos: [] },

  // IX Semestre
  { codigo: "KIN-101", nombre: "Internado Profesional I", semestre: 9, creditos: 26, horas: 810, tipo: "pc", prerrequisitos: [] },
  { codigo: "KIN-102", nombre: "Internado Profesional II", semestre: 9, creditos: 26, horas: 810, tipo: "pc", prerrequisitos: [] },

  // X Semestre
  { codigo: "KIN-103", nombre: "Internado Profesional III", semestre: 10, creditos: 34, horas: 810, tipo: "pc", prerrequisitos: [] },
  { codigo: "KIN-104", nombre: "Internado Profesional IV", semestre: 10, creditos: 8, horas: 810, tipo: "pc", prerrequisitos: [] },
  { codigo: "KIN-138", nombre: "Actividad de Titulación", semestre: 10, creditos: 3, horas: 8, tipo: "pc", prerrequisitos: [] }
];
