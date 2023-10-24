const complimentBtn = document.getElementById("complimentButton")
//let fortuneDB = require('./fortuneDB.json');
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const fortuneRandomBtn = document.getElementById("fortuneRandomButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneRandomBtn.addEventListener('click', getFortune)

const fortuneIdBtn = document.getElementById("fortuneIdButton")

const getFortuneById = () => {
    let id = prompt("Enter a fortune id:");
    
    axios.post("http://localhost:4000/api/fortuneID/", { id })
        .then(res => {
            //const data = res.data;
            alert(`"${res.data}"`);
    })
    .catch(err => {
        alert("Fortune not found with that ID\n \n \n " + err);
    })
}

fortuneIdBtn.addEventListener('click', getFortuneById)

const addFortuneBtn = document.getElementById("addFortuneButton")

const addFortune = () => {
    let newFortune = prompt("Enter a new fortune:"); // Get the new fortune from user input

    axios.post("http://localhost:4000/api/fortune/", { newFortune })
        .then(res => {
            //const data = res.data;
            alert(`"${newFortune}" has been added to the fortune list with the id of ` + res.data.id);
        })
        .catch(err => {
            alert(err);
        })
};

addFortuneBtn.addEventListener('click', addFortune)

const deleteFortuneBtn = document.getElementById("fortuneDeleteButton")

const deleteFortune = () => {
    let id = prompt("Enter a id to delete:"); // Get the id to delete from user input

    axios.delete(`http://localhost:4000/api/fortune/${id}`)
        .then(res => {
            const data = res.data;
            alert(`Fortune with id ${id} has been deleted`);
        })
        .catch(err => {
            alert("Fortune not found with that ID\n \n \n " + err);
        }) 
};

deleteFortuneBtn.addEventListener('click', deleteFortune)

const updateFortuneBtn = document.getElementById("fortuneUpdateButton")

const updateFortune = () => {
    let id = prompt("Enter a id to update:"); // Get the id to update from user input
    let newFortune = prompt("Enter a new fortune:"); // Get the new fortune from user input

    axios.put(`http://localhost:4000/api/fortune/${id}`, { newFortune })
        .then(res => {
            const data = res.data;
            alert(`Fortune with id ${id} has been updated`);
        })
        .catch(err => {
            alert("Fortune not found with that ID\n \n \n " + err);
        })
};

updateFortuneBtn.addEventListener('click', updateFortune)
