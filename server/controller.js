const fortuneDB = require('./fortuneDB.json');
let index = 0;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getRandomFortune: (req, res) => {
        
        let randomIndex = Math.floor(Math.random() * fortuneDB.length);
        let randomFortune = fortuneDB[randomIndex].fortune;
        //console.log(randomFortune);

        res.status(200).send(randomFortune);
    },
    getIDFortune: (req, res) => {
        const id = req.body.id

        const index = fortuneDB.findIndex(fortune => fortune.id === Number(id));
        if (index === -1) {
            res.sendStatus(404)
        }
        else {
            let fortune = fortuneDB[index].fortune;
            res.status(200).send(fortune)
        }
    },

    addFortune: (req, res) => {
        let { newFortune } = req.body;
        index = fortuneDB[fortuneDB.length - 1].id + 1
        // console.log(index);
        newFortune = {id: index, fortune: newFortune };
        
        fortuneDB.push(newFortune);
        // console.log(fortuneDB);
        res.status(200).send(newFortune);
    },

    deleteFortune: (req, res) => {
        const id = parseInt(req.params.id);

        // Find index of the fortune with the given id
        const index = fortuneDB.findIndex(fortune => fortune.id === id);

        if (index !== -1) {
            // Remove the fortune from the array
            fortuneDB.splice(index, 1);
            res.sendStatus(200);
        } else {
            res.sendStatus(404);
        }
        // console.log(fortuneDB);
        },
    updateFortune: (req, res) => {
        const id = parseInt(req.params.id);
        const { newFortune } = req.body;

        // Find the fortune with the given id
        const index = fortuneDB.findIndex(fortune => fortune.id === id);

        if (index !== -1) {
            // Update the newFortune in the array
            fortuneDB[index].fortune = newFortune;
            res.sendStatus(200);
        }
        else {
            res.sendStatus(404);
        }
        console.log(fortuneDB)
    }
}
