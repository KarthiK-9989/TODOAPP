let userInput = document.getElementById('searchbar');
let addButton = document.getElementById('add');
let container = document.createElement('div');
container.setAttribute('class', 'container');

addButton.addEventListener('click', (e) => {
    addTodoListElements(e)
})

function addTodoListElements(e) {
    e.preventDefault();
    let userInputValue = userInput.value;
    userInput.value = "";
    if (userInputValue.length !== 0) {

        let innerContainer = document.createElement("div");
        innerContainer.setAttribute('class', 'innerContainer')

        let p = document.createElement('p');
        p.innerText = `${userInputValue }`;


        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', 'fa fa-trash icon w3-xxlarge');



        innerContainer.append(p, deleteButton);
        container.append(innerContainer);

        document.body.append(container);

        deleteButton.addEventListener('click', (e) => {
            deleteTodoListElements(e);


        })



    }
}

function deleteTodoListElements(e) {
    e.preventDefault();
    container.removeChild(container.lastElementChild);


}