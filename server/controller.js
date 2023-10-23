const fortuneDB = require('./fortuneDB.json');

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
        let { id } = req.body;
        let fortune = fortuneDB[(id-1)].fortune;
        res.status(200).send(fortune);
    },

    addFortune: (req, res) => {
        let { newFortune } = req.body;
        newFortune = {id: fortuneDB.length + 1, fortune: newFortune };
        
        fortuneDB.push(newFortune);
        console.log(fortuneDB);
        res.status(200).send(newFortune);
    }

}