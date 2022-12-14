//Pegaremos cada linha sendo um objeto e acessamos suas propriedades (que foram especificadas na linha 1 da planilha). Usamos a função assíncrona getRows().

let sheet; 
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(rows => {
        rows.map(row => {
            console.log(row.nome);
        })
    })
})
