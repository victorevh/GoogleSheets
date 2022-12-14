
const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credenciais.json');
const arquivo = require('./arquivo.json');

const getDoc = async () => {
    const doc = new GoogleSpreadsheet(arquivo.ID_SHEETS);
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}
getDoc().then(doc => {
    console.log(doc.title);
});