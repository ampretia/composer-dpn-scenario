'use strict';

const Table = require('cli-table');
const prettyoutput = require('prettyoutput');
// const config = require('config').get('composer-sample-app');
const BusinessNetworkDefinition = require('composer-common').BusinessNetworkDefinition;
const AdminConnection = require('composer-admin').AdminConnection;
const path = require('path');
const faker = require('faker');
const chalk = require('chalk');

// Require the client API
const BusinessNetworkConnection = require('composer-client').BusinessNetworkConnection;

// these are the credentials to use to connect to the Hyperledger Fabric
let participantId = 'bob@EnglandRegistry.com';//config.get('participantId');
let participantPwd = 'bob';//config.get('participantPwd');

// physial connection details (eg port numbers) are held in a profile
let connectionProfile = 'hlfv1';//config.get('connectionProfile');

// the logical business newtork has an indentifier
let businessNetworkIdentifier = 'dpn-scenario';//config.get('businessNetworkIdentifier');

// ... that allows us to get a connection to this business network
let businessNetworkConnection = new BusinessNetworkConnection();

// the network definition will be used later to create assets
let businessNetworkDefinition;

// asset registry and asset factory
let assetRegistry;
let factory;

// businessNetworkConnection.on('event', (evt) => {
//     console.log('Got an event back');
//     console.log(prettyoutput(serializer.toJSON(evt)));
// });

// Create the connection
businessNetworkConnection = new BusinessNetworkConnection();
console.log("Connecting via "+chalk.blue.bold(connectionProfile)+" to "+chalk.blue.bold(businessNetworkIdentifier)+" as "+chalk.blue.bold(participantId));
console.log("Listing all properties that are available for sale");
// and establish that connection)
businessNetworkConnection.connect(connectionProfile, businessNetworkIdentifier, participantId, participantPwd)
    .then((result) => {
        businessNetworkDefinition = result;
        factory = businessNetworkDefinition.getFactory();
        console.log('Connected: BusinessNetworkDefinition obtained=' + businessNetworkDefinition.getIdentifier());
        return;
    }).then((result) => {
        return businessNetworkConnection.getAssetRegistry('net.biz.digitalproperty.core.LandTitle');
    }).then((result) => {
        assetRegistry = result;

        let landTitle = factory.newResource('net.biz.digitalproperty.core','LandTitle',faker.address.zipCode());
        landTitle.information = faker.address.streetAddress();

        let owner = factory.newRelationship('net.biz.digitalproperty.core','Individual','net.biz.digitalproperty.core.Individual#oscar@example.com');
        landTitle.owner = owner;

        return assetRegistry.add(landTitle);
    }).then((result) => {
        return assetRegistry.getAll();
    }).then((result) => {
        console.log('List of LandTitles');

        let table = new Table({
            head: ['TitleID', 'Owner', 'Information']
        });
        for (let i = 0; i < result.length; i++) {
            let tableLine = [];

            tableLine.push(result[i].titleId);
            tableLine.push(result[i].owner);
            tableLine.push(result[i].information);
            table.push(tableLine);
        }

        console.log(table.toString());
    }).then((result) => {
        return businessNetworkConnection.disconnect();
    }).then(() => {
        console.log('All done');
        process.exit();
    })
    // and catch any exceptions that are triggered
    .catch(function (error) {
        console.log(error);
        console.log(error.stack);
        throw error;
    });
