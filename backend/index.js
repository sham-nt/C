const express = require('express');
const bodyParser = require('body-parser');
const db_actions = require('./db_actions');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
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

// contents

app.get('/contents', (req, res) => {
    db_actions.getData().then((result) => {
        res.status(200).json({"contents": result});
    });
});


app.get('/contents/:id', (req, res) => {
    const id = req.params.id;
    db_actions.getData_id(id).then((result) => {
        res.status(200).json({"row": result});
    });
});

// posting data

const deal_data = {
    "cust_id": null,
    "comp_id": null,
    "opp_id": null,
    "status":null,
};

app.post('/contents/insert', (req, res) => {
    const customer = req.params.customer;
    if (customer == 1){ // new customer
        const company = req.params.company;
        if (company == 1){ // new company
            db_actions.newCustomerNewCompany(req.body).then((result) => {
                res.status(201).send(result);
                deal_data.cust_id = result.customer.id;
                deal_data.comp_id = result.company.id;
            });
        }
        else if (company == 0){ //new customer old company
            db_actions.getCompanies().then((result) => {
                res.status(201).send(result);
                
            });

        } else {
            res.status(400).json({"error": "invalid flag"});
        }
    } else if (customer == 0){ // existing customer
        db_actions.getCustomers().then((result) => {
            res.status(200).send(result);
        });

    } else {
        res.status(400).json({"error": "invalid flag"});
    }

});

app.post('/contents/newCustOldComp', (req, res) => {
    db_actions.newCustomerOldCompany(req.body).then((result) => {
        res.status(201).send(result);
        deal_data.cust_id = result.customer.id;
        deal_data.comp_id = result.customer.company_id;
    });

});

app.post('/contents/oldCustOldComp', (req, res) => {
    deal_data.cust_id = req.body.customer_id;
    deal_data.comp_id = req.body.company_id;
    res.status(200).json({"status": "success"});
});

app.post('/contents/opp', (req, res) => {
    db_actions.newOpportunity(req.body).then((result,stat,opp_id) => {
        deal_data.opp_id = opp_id;
        deal_data.status = req.body.status;
        res.status(stat).send(result);
    });
    db_actions.newDeal(deal_data).then((result,stat) => {
        res.status(stat).send(result);
    });
    deal_data.keys().forEach(key => deal_data[key] = null);
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});