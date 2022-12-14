
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

let sheet; 
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
    sheet.addRow({
        nome: "Victor Oliveira",
        idade: 26,
        email: "victorevh@gmail.com"
    }).then(() => {
        console.log('dado salvo!')
    })
});