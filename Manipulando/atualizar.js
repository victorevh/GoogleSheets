//podemos atualizar seus valores e depois salvar através da função assíncrona save().

let sheet;
getDoc().then(doc => {
    sheet = doc.sheetsByIndex[0];
    sheet.getRows().then(rows => {
        rows.map(row => {
            if(row.nome === "Victor Oliveira"){
                row.nome = "Victor O. Santos";
                row.idade = 26;
                row.email = "victor_oliveirasantos@hotmail.com.com"
                
                row.save().then(() => {
                    console.log('Dado atualizado!');
                });
            }
        });
    })
})