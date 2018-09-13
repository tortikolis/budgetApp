import {addNewData, calculateBudget} from './data.js';
import {DOMElementsSelection, getInputs} from './ui.js';

const mainHandler = () => {
    //get inputs
    const inputsValue = getInputs(DOMElementsSelection);
    //save inputs to data
    addNewData(inputsValue);
    //calculate budget
    calculateBudget();
    //calculatePercentages

    //renderData

}

const addEventListeners = () => {
    const addBtn = DOMElementsSelection.addBtn;

    addBtn.addEventListener('click', mainHandler);

    document.addEventListener('keypress', event => {
        if (event.keyCode === 13) {
            mainHandler()
        }
    })

}

export const init = () => {
    addEventListeners();
} 
