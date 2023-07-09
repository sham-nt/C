const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./db/customer.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    else{
        console.log('Connected to the customer database.');
    }
});


db.serialize(() => {
    db.run(`delete from company`, (err) => {
        if (err) {
            console.error(err.message);
        }
        else{
            console.log('deleted');
        }
    });
});