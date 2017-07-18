
# Extended Digital Property Scenario

Takes the digitalProperty network and adds in other ogranizations. This is then
able to demonstrate the types of 'System ACLs' that can be used

## Organizations

There are a few types of organizations, with the following domain names (for the email address).

* Agents
  * SellCheap     
  * QuickSale
* LandRegitry
  * EnglandRegistry
* Developers
  * BlockLink
  * CongaBuid

## Roles

There are IDAdmins who can create Participants and Identities only, Business
Admins who can do updates to all network assets etc only. Network admins
are the only ones that can update the network.

These roles do not overlap - network admins can see the business registires.

In addition there are staff members (*OrganizationRepresentive*) per ogranization.
And also individuals who are the ones who own/sell/buy property.

* _ID Admins_         ian@xxx.com
* _Business Admins_   bob@xxx.com
* _Network  Admins_   nell@xxx.com

* _Regular Staff_     alice@xxx.com, charlie@xxx.com

* _Individuals_            lisa@xxx.com,  erin@xxx.com,  joseph@xxx.com,      oscar@xxx.com

## Usage

1. In the root of the project `npm install && lerna bootstrap`
2. Issue `npm run fabric-cycle` to teardown, cleanup and restart HLF v1
3. Issue `nom run deploy-network` to create the BNA and deploy the network (as the PeerAdmin)
   - Issue `npm run update-network` to update the network, for example if the ACLs have been updated.
4. The `npm run setup-network` has the sequence of commands that will start to create the participants and identities. Also initial Organization (that has to be done as a node program)
5. The `npm run landregistry:addTitles`  now starts to use (in this case only Bob's Identity to create some starting land titles owner by Oscar)

## System ACL Notes
The [packages/digitalproperty-ext-network/permissions.acl](packages/digitalproperty-ext-network/permissions.acl) file contains details of the types of system rules that can be put together.
