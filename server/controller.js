const fortuneDB = require('./fortuneDB.json');

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        
        let randomIndex = Math.floor(Math.random() * fortuneDB.length);
        let randomFortune = fortuneDB[randomIndex].fortune;
        //console.log(randomFortune);

        res.status(200).send(randomFortune);
    },

    addFortune: (req, res) => {
        let { newFortune } = req.body;
        newFortune = { fortune: newFortune };
        
        fortuneDB.push(newFortune);
        console.log(fortuneDB);
        res.status(200).send(newFortune);
    }

}