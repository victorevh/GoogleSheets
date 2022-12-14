//podemos deletar com a função assíncrona delete().

let sheet; 
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(rows => {
        rows.map(row => {
            if(row.nome === "Victor"){
                row.delete().then(() => {
                    console.log('Dado deletado!');
                });
            }
        });
    })
})