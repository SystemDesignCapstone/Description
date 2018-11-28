const connection = 'postgresql://postgres:@localhost:5432/sdcdb';
const db = new Client(connection);

db.connect();

module.exports = db
