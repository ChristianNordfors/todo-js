import './styles.css';

import { Todo, TodoList } from './classes'; //Busca el index.js por defecto
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

//todoList.todos.forEach( todo => crearTodoHtml( todo ) );
// Unicamente funciona cuando la funcion, en este caso crearTodoHtml,
// recibe solamente un argumento

todoList.todos.forEach( crearTodoHtml );

todoList.todos[0].imprimirClase();

console.log( 'Todos', todoList.todos );
