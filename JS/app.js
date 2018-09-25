import {data, addNewData, calculateBudget, calculateAllPercentages, deleteItem, getPercentages} from './data.js';
import {DOMElementsSelection, getInputs, renderItem, renderTotals, displayPercentages, deleteDOMItem, showMonth, clearInputs} from './ui.js';

const addNewItem = () => {
    //get inputs
    const inputsValue = getInputs(DOMElementsSelection);
    //check if inputs are valid
    if(!inputsValue.description || !inputsValue.value) {
        alert('You need to fill description and value fields!')
        return false;
    }
    //clear inputs
    clearInputs(DOMElementsSelection);
    //save inputs to data
    const newItem = addNewData(inputsValue);
    //calculate budget
    calculateBudget();
    //calculatePercentages
    calculateAllPercentages();
    //renderData
    renderItem(newItem, inputsValue.type);
    renderTotals(data);
    const perc = getPercentages();
    displayPercentages(perc);
}

const removeItemHandler = event => {
    const elementId = event.target.parentElement.parentElement.parentElement.parentElement.id;
        const id = parseInt(elementId.slice(elementId.length-1));
        const type = elementId.includes('income') ? 'income' : 'expense';
           
        deleteItem(id, type);
        calculateBudget();
        calculateAllPercentages();
        deleteDOMItem(id, type);
        renderTotals(data);
        const perc = getPercentages();
        displayPercentages(perc);
}

const addEventListeners = () => {
    const addBtn = DOMElementsSelection.addBtn;
    const itemsContainer = DOMElementsSelection.container;
    //add item on click
    addBtn.addEventListener('click', addNewItem);
    //add item on enter
    document.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
            addNewItem()
        }
    })
    //delete item
    itemsContainer.addEventListener('click', event => {
      if(event.target.className === 'far fa-times-circle') {
        removeItemHandler(event);
        }
    })
}

export const init = () => {
    addEventListeners();
    renderTotals(data);
    showMonth()
} 
