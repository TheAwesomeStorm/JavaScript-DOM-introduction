function taskCompletedListener(event) {
    const buttonTarget = event.target
    const taskCompleted = buttonTarget.parentElement
    taskCompleted.classList.toggle('done')
}

function removeTaskListener(event) {
    const buttonTarget = event.target
    const parentTask = buttonTarget.parentElement
    parentTask.remove()
}

function createText(textValue) {
    const newText = document.createElement('p')
    newText.classList.add('content')
    newText.textContent = textValue
    return newText
}

function createButton(className, buttonText, listenerFunction) {
    const newButton = document.createElement('button')
    newButton.classList.add(className)
    newButton.innerText = buttonText
    newButton.addEventListener('click', listenerFunction)
    return newButton
}

function createItem(textValue) {
    const newItem = document.createElement('li')
    const newText = createText(textValue)
    const newConcludeTaskButton = createButton('check-button', 'concluir', taskCompletedListener)
    const newRemoveTaskButton = createButton('delete-button', 'remover', removeTaskListener)
    newItem.classList.add('task')
    newItem.append(newText, newConcludeTaskButton, newRemoveTaskButton)
    return newItem
}

export default createItem