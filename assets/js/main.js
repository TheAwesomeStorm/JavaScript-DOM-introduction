import newTaskListener from './newTaskListener.js'

const addNewTask = document.querySelector('[data-form-button]')

addNewTask.addEventListener('click', newTaskListener)