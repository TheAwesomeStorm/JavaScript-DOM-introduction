import createItem from './createElements.js'

function newTaskListener(event) {

    const form = document.querySelector('.form')
    const formInput = form.querySelector('[data-form-input]')
    const taskList = document.querySelector('.list')
    const newItem = createItem(formInput.value)

    event.preventDefault()
    taskList.appendChild(newItem)
    form.reset()
}

export default newTaskListener