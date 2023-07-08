const express = require('express');
const bodyParser = require('body-parser');
const db_actions = require('./db_actions');
const app = express();
const port = 3000;


app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('iss backend');
});

app.get('/dashboard/comp_money', (req, res) => {
    db_actions.getCompanyMoney().then((result) => {
        res.status(200).json({"comp_money": result});
    });
});

app.get('/dashboard/comp_industry', (req, res) => {
    db_actions.getCompanyIndustry().then((result) => {
        res.status(200).json({"comp_industry": result});
    });
});

app.get('/dashboard/lead_source', (req, res) => {
    db_actions.getLeadSource().then((result) => {
        res.status(200).json({"lead_source": result});
    });
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});