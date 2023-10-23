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

const fortuneBtn = document.getElementById("fortuneButton")

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

const addFortuneBtn = document.getElementById("addFortuneButton")

const addFortune = () => {
    let newFortune = prompt("Enter a new fortune:"); // Get the new fortune from user input

    axios.post("http://localhost:4000/api/fortune/", { newFortune })
        .then(res => {
            const data = res.data;
            alert(`"${newFortune}" has been added to the fortune list`);
        })
};

addFortuneBtn.addEventListener('click', addFortune)
