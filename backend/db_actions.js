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
    `create table if not exists deal(cid integer not null, coid integer not null, oid integer not null, primary key(cid, coid, oid), foreign key(cid) references customer(id), foreign key(coid) references company(id), foreign key(oid) references opportunity(id))`
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
    db.all(`select industry,count(*) as count from company group by industry`, (err, rows) => {
      if (err) {
        console.error(err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

function getLeadSource() {
    return new Promise((resolve, reject) => {
      db.all(`select lead_source,count(*) as count from opportunity group by lead_source`, (err, rows) => {
        if (err) {
          console.error(err.message);
          reject(err);
        } else {
          console.log(rows);
          resolve(rows);
        }
      });
    });
  }



module.exports = {
  getCompanyMoney,
    getCompanyIndustry,
    getLeadSource
};
