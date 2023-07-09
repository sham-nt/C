const sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./db/customer.db", (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Connected to the customer database.");
  }
});

// create db
db.serialize(() => {
  db.run(
    `create table if not exists company(id integer primary key autoincrement, name text not null, address text not null, money_spent integer,industry text not null, email text not null, phone integer not null)`
  );

  db.run(
    `CREATE TABLE IF NOT EXISTS customer(id integer primary key autoincrement, fname text not null, lname text not null, email text not null, phone integer not null, company_id integer not null, FOREIGN KEY(company_id) REFERENCES company(id))`
  );

  db.run(
    `create table if not exists opportunity(id integer primary key autoincrement, lead_source text not null, expected_revenue integer not null)`
  );

  db.run(
    `create table if not exists deal(cid integer not null, coid integer not null, oid integer not null, status text not null, primary key(cid, coid, oid), foreign key(cid) references customer(id), foreign key(coid) references company(id), foreign key(oid) references opportunity(id))`
  );
});

// functions for dashboard

function getCompanyMoney() {
  return new Promise((resolve, reject) => {
    db.all(`select name,money_spent from company`, (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function getCompanyIndustry() {
  return new Promise((resolve, reject) => {
    db.all(
      `select industry,count(*) as count from company group by industry`,
      (err, rows) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

function getLeadSource() {
  return new Promise((resolve, reject) => {
    db.all(
      `select lead_source,count(*) as count from opportunity group by lead_source`,
      (err, rows) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log(rows);
          resolve(rows);
        }
      }
    );
  });
}

function getData() {
  return new Promise((resolve, reject) => {
    db.all(
      `select * from company c,customer cu,opportunity o, deal d where c.id = d.coid and cu.id = d.cid and o.id = d.oid`,
      (err, rows) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

function getData_id(id) {
  return new Promise((resolve, reject) => {
    db.get(
      `select * from company c,customer cu,opportunity o, deal d where c.id = d.coid and cu.id = d.cid and o.id = d.oid and cu.id = ?`,
      [id],
      (err, rows) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          resolve(rows);
        }
      }
    );
  });
}

function getCompanies() {
  return new Promise((resolve, reject) => {
    db.get(`select id,name from company`, [id], (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function getCustomers() {
  return new Promise((resolve, reject) => {
    db.get(`select id,name from customers`, [id], (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

// User/customer functions

function newCustomerNewCompany(data) {
  return new Promise((resolve, reject) => {
    const customer = data.customer;
    const company = data.company;
    db.serialize(() => {
      db.run(
        `insert into company(name,address,money_spent,industry,email,phone) values(?,?,?,?,?,?)`,
        [
          company.name,
          company.address,
          company.money_spent,
          company.industry,
          company.email,
          company.phone,
        ],
        (err) => {
          if (err) {
            console.error(err.message);
            reject(err);
          } else {
            db.get(
              `select id from company where name = ?`,
              [company.name],
              (err, row) => {
                if (err) {
                  console.error(err.message);
                  reject(err);
                } else {
                  company_id = row.id;
                  db.run(
                    `insert into customer(fname,lname,email,phone,company_id) values(?,?,?,?,?)`,
                    [
                      customer.fname,
                      customer.lname,
                      customer.email,
                      customer.phone,
                      company_id,
                    ],
                    (err) => {
                      if (err) {
                        console.error(err.message);
                        reject(err);
                      }
                    }
                  );
                }
              }
            );
          }
        }
      );
    });
    resolve("Success");
  });
}

function newCustomerOldCompany(data){
  return new Promise((resolve, reject) => {
    const customer = data.customer;
    db.run(
      `insert into customer(fname,lname,email,phone,company_id) values(?,?,?,?,?)`,
      [
        customer.fname,
        customer.lname,
        customer.email,
        customer.phone,
        company_id,
      ],
      (err) => {
        if (err) {
          console.error(err.message);
          reject(err);
        }
      }
    );
    resolve("Success")
  });
}

function newOpportunity(data){
  return new Promise((resolve, reject) => {
    db.run(`insert into opportunity(lead_source,expected_revenue) values(?,?)`,[data.lead_source,data.expected_revenue],(err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else{
        db.get(`select id from opportunity where lead_source = ? and expected_revenue = ?`,[data.lead_source,data.expected_revenue],(err,row) => {
          if (err) {
            console.error(err.message);
            reject(err);
          }
        });
      }
  resolve("Success")
});
});
}



function newDeal(deal_data){
  return new Promise((resolve, reject) => {
    db.run(`insert into deal(cid,coid,oid,status) values(?,?,?)`,[deal_data.cust_id,deal_data.comp_id,deal_data.opp_id,deal_data.status],(err) => {
      if (err) {
        console.error(err.message);
        reject(err);
      }
  });
  resolve("Success");
  });
}


module.exports = {
  getCompanyMoney,
  getCompanyIndustry,
  getLeadSource,
  getData,
  getData_id,
  getCustomers,
  getCompanies,
  newCustomerNewCompany,
  newCustomerOldCompany,
  newOpportunity,
  newDeal
};
