const faker = require('faker');

let people = ['Editor', 'Author', 'Subscriber'];




for (let i=0; i<4; i++){
    var person = {
         'firstname': faker.name.firstName(),
         'lastname': faker.name.lastName()
    };
    person['email']= person.firstname+person.lastname+'@example.com';
    person['jobtitle']=people[0]+'-'+faker.commerce.department();
    person['$CLASS']='org.acme.biznet.detail.'+people[0];
    console.log(JSON.stringify(person));
}

for (let i=0; i<10; i++){
    var person = {
         'firstname': faker.name.firstName(),
         'lastname': faker.name.lastName()
    };
    person['email']= person.firstname+person.lastname+'@example.com';
    person['jobtitle']=people[1]+'-'+faker.commerce.productAdjective();
    person['$CLASS']='org.acme.biznet.detail.'+people[1];
    console.log(JSON.stringify(person));
}

for (let i=0; i<20; i++){
    var person = {
         'firstname': faker.name.firstName(),
         'lastname': faker.  "scripts": {
    "runtime-cycle" : "./scripts/fabric-tools/teardownFabric.sh && ./redo-runtime.sh  && ./scripts/fabric-tools/startFabric.sh && ./scripts/fabric-tools/createComposerProf
ile.sh",
    "deploy-network" : "npm --prefix packages/sample-network run buildBNA && npm --prefix packages/sample-network run deployNetwork",
    "update-network" : "npm --prefix packages/sample-network run buildBNA && npm --prefix packages/sample-network run updateNetwork",
    "network-setup" : "./scripts/dataflood.sh",
    "all" : "npm run runtime-cycle && npm run deploy-network && npm run network-setup",
    "createRegistry" :"npm --prefix packages/composer-sample-app run createRegistry"

  },
  "dependencies": {
    "mkdirp": "^0.5.1"
  }name.lastName()
    };
    person['email']= person.firstname+person.lastname+'@example.com';
    person['jobtitle']=people[2]+'-general';
    person['$CLASS']='org.acme.biznet.detail.'+people[2];
    console.log(JSON.stringify(person));
}
