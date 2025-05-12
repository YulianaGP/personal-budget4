// Array global para almacenar los movimientos
const movimientos = [];

// Constructor base
function Movimiento(nombre, monto, tipo) {
  this.nombre = nombre;
  this.monto = monto;
  this.tipo = tipo;
  this.fecha = new Date().toLocaleDateString();
}

// Métodos compartidos
Movimiento.prototype.esValido = function () {
  return this.nombre.trim() !== '' && this.monto > 0;
};

Movimiento.prototype.obtenerMontoFormateado = function () {
  const signo = this.tipo === 'ingreso' ? '+' : '-';
  return `${signo} $${this.monto.toFixed(2)}`;
};

// Subtipo Ingreso
function Ingreso(nombre, monto) {
  Movimiento.call(this, nombre, monto, 'ingreso');
}
Ingreso.prototype = Object.create(Movimiento.prototype);
Ingreso.prototype.constructor = Ingreso;

// Subtipo Egreso
function Egreso(nombre, monto) {
  Movimiento.call(this, nombre, monto, 'egreso');
}
Egreso.prototype = Object.create(Movimiento.prototype);
Egreso.prototype.constructor = Egreso;

// Agregar movimiento
function agregarMovimiento(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const monto = parseFloat(document.getElementById('monto').value);
  const tipo = document.getElementById('tipo').value;

  let nuevoMovimiento;
  if (tipo === 'ingreso') {
    nuevoMovimiento = new Ingreso(nombre, monto);
  } else {
    nuevoMovimiento = new Egreso(nombre, monto);
  }

  if (!nuevoMovimiento.esValido()) {
    alert('Por favor, completa todos los campos correctamente.');
    return;
  }

  movimientos.push(nuevoMovimiento);
  actualizarTabla();
  recalcularTotales();
  document.getElementById('formulario').reset();
  mostrarMensaje('Movimiento agregado correctamente');
}

// Eliminar movimiento con confirmación
function eliminarMovimiento(index) {
  const confirmar = window.confirm("¿Estás seguro de que deseas eliminar este movimiento?");
  if (!confirmar) return;

  movimientos.splice(index, 1);
  actualizarTabla();
  recalcularTotales();
}

// Actualizar tabla
function actualizarTabla() {
  const cuerpoTabla = document.getElementById('tabla-movimientos');
  cuerpoTabla.innerHTML = '';

  movimientos.forEach((mov, index) => {
    const fila = document.createElement('tr');

    const fechaTd = document.createElement('td');
    fechaTd.textContent = mov.fecha;

    const nombreTd = document.createElement('td');
    nombreTd.textContent = mov.nombre;

    const montoTd = document.createElement('td');
    montoTd.textContent = mov.obtenerMontoFormateado();
    montoTd.classList.add(mov.tipo === 'ingreso' ? 'text-green-600' : 'text-red-600');

    const tipoTd = document.createElement('td');
    tipoTd.textContent = mov.tipo;

    const accionesTd = document.createElement('td');
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.className = 'bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700';
    btnEliminar.onclick = () => eliminarMovimiento(index);

    accionesTd.appendChild(btnEliminar);

    fila.appendChild(fechaTd);
    fila.appendChild(nombreTd);
    fila.appendChild(montoTd);
    fila.appendChild(tipoTd);
    fila.appendChild(accionesTd);

    cuerpoTabla.appendChild(fila);
  });
}

// Recalcular y mostrar totales
function recalcularTotales() {
  const totalIngresos = movimientos
    .filter(m => m.tipo === 'ingreso')
    .reduce((sum, m) => sum + m.monto, 0);

  const totalEgresos = movimientos
    .filter(m => m.tipo === 'egreso')
    .reduce((sum, m) => sum + m.monto, 0);

  const balance = totalIngresos - totalEgresos;

  // Actualizar nuevos IDs del HTML
  document.getElementById('balance-total').textContent = `$${balance.toFixed(2)}`;
  document.getElementById('total-ingresos').textContent = `$${totalIngresos.toFixed(2)}`;
  document.getElementById('total-egresos').textContent = `$${totalEgresos.toFixed(2)}`;
}

// Mensaje de confirmación visual
function mostrarMensaje(texto) {
  const mensaje = document.createElement('div');
  mensaje.textContent = texto;
  mensaje.className = 'fixed top-5 right-5 bg-green-500 text-white px-4 py-2 rounded shadow z-50';
  document.body.appendChild(mensaje);

  setTimeout(() => {
    mensaje.remove();
  }, 2000);
}

// Inicializar evento
document.getElementById('formulario').addEventListener('submit', agregarMovimiento);

