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
    });
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
};

addFortuneBtn.addEventListener('click', addFortune)
