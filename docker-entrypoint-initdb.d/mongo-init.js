print('Start #################################################################');

db = db.getSiblingDB('gcp-functions-ts-mongodb-boilerplate')

db.createUser({
    user: 'admin',
    pwd: 'admin',
    roles: [{ role: 'readWrite', db: 'gcp-functions-ts-mongodb-boilerplate' }]
});

print('END #################################################################');