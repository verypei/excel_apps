const xlsxFile = require('read-excel-file/node');
let x = document.getElementById("myFile");
 
xlsxFile(x).then((rows) => {
    console.table(rows);
})

// import xlsxFile from 'read-excel-file'