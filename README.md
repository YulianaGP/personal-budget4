# Laboratorio 08: Prototipos en JavaScript

## ✨ Resumen de la Tarea

En este laboratorio se desarrolló una aplicación web de gestión de presupuesto personal utilizando **JavaScript orientado a objetos con prototipos**. Se implementaron funciones constructoras para representar movimientos financieros (ingresos y egresos), junto con su herencia prototipal. La aplicación permite registrar, visualizar, y eliminar movimientos financieros desde una interfaz visual atractiva usando **Tailwind CSS**.

## 📊 Historias de Usuario

### Historia 1: Registrar movimiento

**Como** usuario,  
**quiero** registrar un ingreso o egreso con su nombre, monto y tipo,  
**para** llevar un control de mis finanzas personales.

**Criterios de Aceptación:**
- El formulario debe tener campos para nombre, monto y tipo.
- Al hacer clic en "Agregar", el movimiento se guarda y aparece en la tabla.
- Se valida que todos los campos sean correctos.

---

### Historia 2: Visualizar historial de movimientos

**Como** usuario,  
**quiero** ver una tabla con los movimientos registrados,  
**para** conocer el detalle de mis ingresos y egresos.

**Criterios de Aceptación:**
- La tabla debe mostrar fecha, nombre, monto, tipo y acciones.
- Los montos deben tener signo y color según su tipo.

---

### Historia 3: Eliminar movimiento

**Como** usuario,  
**quiero** eliminar un movimiento registrado,  
**para** corregir errores o actualizar mi presupuesto.

**Criterios de Aceptación:**
- Al hacer clic en "Eliminar", debe pedirse confirmación.
- Si se confirma, el movimiento se elimina y los totales se actualizan.

---

### Historia 4: Ver resumen de totales

**Como** usuario,  
**quiero** ver el total de ingresos, egresos y balance,  
**para** tener una visión clara de mi situación financiera.

**Criterios de Aceptación:**
- Se deben mostrar tres tarjetas con el balance, total de ingresos y egresos.
- Los colores deben diferenciar visualmente ingresos (verde) y egresos (rojo).

---

## ✅ Checklist de Entrega

- [x] Uso de funciones constructoras (`Movimiento`, `Ingreso`, `Egreso`)
- [x] Aplicación de herencia prototipal
- [x] Validaciones de entradas
- [x] Registro y eliminación de movimientos
- [x] Cálculo automático de totales
- [x] Interfaz visual clara con Tailwind CSS
- [x] Mensajes de confirmación y notificaciones visuales
- [x] Montos con signos y colores según tipo
- [x] Balance y totales en tarjetas visuales diferenciadas

---

> Proyecto funcional, modular, visualmente organizado y alineado con los principios de la Programación Orientada a Objetos usando JavaScript.
