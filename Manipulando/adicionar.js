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