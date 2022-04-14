# Aplicación de tareas ToDo
En este repositorio se encuentra una aplicación de lista de tareas hecha con React donde puedes crear tareas pendientes, para despues marcarlas como completadas o tambien eliminarlas. Todas las tareas se guardan únicamente en el almacenamiento local del navegador.

Adicional se explican varios usos básicos para el desarrollo en React JS

## Qué es React?
Es una herramienta para crear Interfaces de Usuarios (UI) interactivas, la cual mejora mucho la experiencia del desarrollador (Developer Experience).

Hacer esto con Javascript puro es difícil, por eso utilizamos herramientas como React que nos ayudan a disminuir costos de tiempo y dificultad.

Es una herramienta que se puede considerar más librería que framework pero, al mismo tiempo se puede integrar con otras librerías de su ecosistema lo cual aumenta sus capacidades cada vez más.

## Objetivos
Como dice la documentación de React sus principales objetivos son:

- Ser declarativo: Que podamos ver código React y entenderlo facil y rapidamente, gracias a la manera que está escrito.

- Basado en componentes: Todo en React es un componente. Crear componentes nos permite reducir la cantidad de código duplicado y es una buena forma de trabajar para asegurar escalabilidad.

- Lear once, write anywhere: React es multiplataforma, lo que quiere decir que con pocos cambios de sintaxis, podrás crear aplicaciones en entornos de Dispositivos Móviles y VR.

## El ciclo de vida de un componente de React
Los componentes de React pasan por tres fases: Mounting, Updating y Unmounting.

La primera fase, la de Mounting significa que el componente está en proceso de insertar su contenido en el DOM.

La segunda, Updating, se llama cuando el componente está siendo actualizado. La actualización de un componente se produce cuando hay un cambio en el estado del componente o de sus props.

La siguiente fase, la última, es Unmounting, que se llama cuando un componente tiene que ser eliminado del DOM.

## React Hooks

### useState - import { useState } from 'react';
Está función crea internamente una variable donde podremos almacenar el estado de nuestro componente. Acepta un valor inicial para esa variable y devuelve un array con dos elementos, el valor de la variable y la función para modificarla.

### useEffect - import { useEffect } from 'react';
Este hook normalmente es usado para la inicialización de variables, llamadas a APIs o para limpiar un componente antes de desmontarlo del DOM.

La llamada a useEffect acepta una función como argumento. Esta función se ejecuta por defecto cuando el componente se renderiza por primera vez, y después cada vez que el componente se actualice.

### useContext
Por medio de el podemos proporcionar datos a los componentes sin importar qué tan profundos estén en el árbol de componentes. Se utiliza para administrar datos globales, por ejemplo, estado global, temas, servicios, configuraciones de usuario y más

Para usarlo se requieren 3 pasos simples: Crear el contexto, proporcionar el contexto y consumir el contexto.