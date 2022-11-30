const hubspot = require('@hubspot/api-client');
const HUBSPOT_API_KEY = 'pat-na1-202a4737-2e1d-4c4e-ad22-0a0d3d7e8794';

const hubspotClient = new hubspot.Client({ accessToken: HUBSPOT_API_KEY });

const limit = 10;
const after = undefined;
const properties = undefined;
const propertiesWithHistory = undefined;
const associations = undefined;
const archived = false;

const main = async () => {
    console.log('mec or not mec?')
    const contacts = await hubspotClient.crm.contacts.basicApi.getPage(
        limit,
        after,
        properties,
        propertiesWithHistory,
        associations,
        archived
    ).catch(err => console.log(err))

    console.log('mec or not mec?')
    console.dir(contacts, { depth: null })
}

main()