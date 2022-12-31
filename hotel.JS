function saveToLocalStorage(event) {
    event.preventDefault();
    const expenseAmount = event.target.amount.value;
    const descriptionChoose = event.target.description.value;
    const categeoryChoose = event.target.categeory.value;


    const obj = {
        expenseAmount,
        descriptionChoose,
        categeoryChoose
    }

    axios.post("https://crudcrud.com/api/75424dc360dc46528f28631cc2747e52/tracker", obj)
        .then((respone) => {
            showNewExpenseOnScreen(respone.data)

        })
        .catch((err) => {
            document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong </h4>"
            console.log(err)
        })

}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/75424dc360dc46528f28631cc2747e52/tracker")
        .then((response) => {
            //  console.log(response) 

            for (var i = 0; i < response.data.length; i++) {
                showNewExpenseOnScreen(response.data[i])
            }
        })
        .catch((error) => {
            console.log(error);
        })

})

function showNewExpenseOnScreen(expense) {
    document.getElementById('amt').value = '';
    document.getElementById('des').value = '';
    document.getElementById('categeory').value = '';

    if (expense.categeoryChoose == "table1") {
        const parentNode = document.getElementById('listOfUsers');
        const childHTML = `<li class="d-flex p-2" id=${expense._id}> ${expense.expenseAmount} - ${expense.categeoryChoose} - ${expense.descriptionChoose} 
                            <button class="btn btn-danger" onclick=deltetable1('${expense._id}')> Delete Expense </button>
                          
                         </li>`

        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    } else if (expense.categeoryChoose == "tabel2") {
        const parentNode = document.getElementById('listOfUsers2');
        const childHTML = `<li class="d-flex p-2" id=${expense._id}> ${expense.expenseAmount} - ${expense.categeoryChoose} - ${expense.descriptionChoose} 
                            <button class="btn btn-danger" onclick=deltetable2('${expense._id}')> Delete Expense </button>
                          
                         </li>`

        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }
    if (expense.categeoryChoose == "tabel3") {
        const parentNode = document.getElementById('listOfUsers3');
        const childHTML = `<li class="d-flex p-2" id=${expense._id}> ${expense.expenseAmount} - ${expense.categeoryChoose} - ${expense.descriptionChoose} 
                            <button class="btn btn-danger" onclick=deltetable('${expense._id}')> Delete Expense </button>
                          
                         </li>`

        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }


}

function deltetable(expenseId) {
    console.log("here in care 3");
    deleteExpense(expenseId);
    console.log("i am here");
    const parentNode = document.getElementById('listOfUsers3');
    const childNodeToBeDeleted = document.getElementById(expenseId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }

}

function deltetable1(expenseId) {
    console.log("here in care 3");
    deleteExpense(expenseId);
    console.log("i am here");
    const parentNode = document.getElementById('listOfUsers');
    const childNodeToBeDeleted = document.getElementById(expenseId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }

}

function deltetable2(expenseId) {
    console.log("here in care 3");
    deleteExpense(expenseId);
    console.log("i am here");
    const parentNode = document.getElementById('listOfUsers2');
    const childNodeToBeDeleted = document.getElementById(expenseId);
    if (childNodeToBeDeleted) {
        parentNode.removeChild(childNodeToBeDeleted)
    }

}

// deleteExpense

function deleteExpense(expenseId) {
    axios.delete(`https://crudcrud.com/api/75424dc360dc46528f28631cc2747e52/tracker/${expenseId}`)
        .then((response) => {
            console.log('delted');
        })
        .catch((error) => {
            console.log(error);
        })


}