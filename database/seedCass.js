const cassandra = require('cassandra-driver');
const distance = cassandra.types.distance;

// const loadBalancing = new cassandra.policies.loadBalancing.DCAwareRoundRobinPolicy('local');


const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  localDataCenter: 'localSDC',
  // pooling: {
  //   coreConnectionsPerHost: {
  //     [distance.local]: 1
  //   }
  // },
  // policies: {
  //   loadBalancing: loadBalancing
  // }
});


client.connect()
  .then(() => {
    const createKS = "CREATE KEYSPACE IF NOT EXISTS sdc WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : '1' }";
    return client.execute(createKS);
  })
  .then(() => {
    const createTable = "CREATE TABLE IF NOT EXISTS sdc.ajd (id int PRIMARY KEY, amenities text, baths int, bedrooms int, beds int, description text, guests int, housename text, imageurl text, lock text, owner text, rate int, type text)";
    return client.execute(createTable);
  })
  // .then(() => {
  //   const test = 'SELECT * from sdc.zillwoah WHERE propertyid = ?';
  //   return client.execute(test, [10000], {prepare: true});
  // })
  .then(() => {

    return client.shutdown();
  })
  .catch(err => {
    console.error('There was an error', err);
    return client.shutdown().then(() => { throw err; });
  });



