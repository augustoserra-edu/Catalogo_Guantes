# **Tp Final **
-----
Curso de ingreso con JavaScript

ejercitación y TP 


[pagina del deploy](https://catalogo-guantes.vercel.app/)



### 1
-----

### Funcionales
Es una aplicacion que se puede ingresar a travez de internet

El sistema permite agregar nuevos equipos de boxeo al catálogo pudiendo poner una imagen y poder borrar los items a disposicion del usuario

los atributos que se van a utilizar son marca, tipo, color, onzas (si el item lo tiene) precio e imagen

va a tener 2 formatos, modo lista y modo tarjetas

gestion de usuario con perfil 


### No Funcionales

Requerimientos No Funcionales

Lenguaje de programación JavaScript React Vite

El sistema debe responder rápidamente a las acciones del usuario.

La interfaz debe ser simple, clara e intuitiva.

Tiene que ser responsive

El código debe estar separado en componentes y clases.

La aplicacion se deployea a travez de vercel 


### 2

### Prueba de componentes
Formulario
CardEquipo
App
clases EquipoBoxeo y Catalogo

### Prueba de Integración 
Comprobar que el formulario se conecta bien con el catálogo: al completar los datos y presionar “Agregar”, aparece una nueva tarjeta.
### Prueba de Caja negra
Probar la app como usuario, sin mirar el código:

cargar datos válidos
intentar enviar campos vacíos
ingresar distintos tipos de equipos
### Prueba de Rendimiento
Revisar que la app responda rápido al agregar equipos y que el build compile correctamente.
### Prueba de Interfaz
Verificar que los textos se lean bien, que el formulario sea claro y que las cards se vean correctamente.
### Prueba de camino
abrir la app
completar formulario
agregar equipo
ver resultado en pantalla


### 3

### Archivo para testear
tests\pruebas-clases.js

### script para correr prueba :
    node tests\pruebas-clases.js

Para hacer los Test utilizamos el "console.assert" en el cual devuelve un true o false introduciendole 2 parametros. el primer parametro es la condicion y el segundo es el mensaje por si falla el test. estamos buscando que en las especificaciones guarde un string o un int


### Lo que muestra la consola al ejecutarse las pruebas:


Aprobada: EquipoBoxeo guarda la marca como string

Aprobada: EquipoBoxeo guarda el tipo como string

Aprobada: EquipoBoxeo guarda el color como string

Aprobada: EquipoBoxeo guarda las onzas como numero entero

Aprobada: Catalogo inicia sin equipos

Aprobada: Catalogo agrega un equipo

Aprobada: Catalogo devuelve el equipo agregado

Fin de pruebas
