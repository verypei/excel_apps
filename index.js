let input = document.getElementById('myFile');
input.addEventListener('change',()=>{
    readXlsxFile(input.files[0])
                .then((data)=>{
                     console.log(data);
                    let i = 0;
                    let arr = data.filter((el,idx)=>{
                        return el[3] !== null;
                    })
                    
                    arr.map((row,index)=>{
                        if(i < 3 ){
                            let table = document.getElementById('tbl-data');
                            generateTableHead(table, row, index);
                        }
                        if(i > 2){
                            let table = document.getElementById('tbl-data');
                            generateTableRows(table, row);
                        }
                    })
                });
})

function generateTableHead(table, data, index){
    let tHead = table.createTHead();
    let row = tHead.insertRow();
    for (let key of data) {
        let th = document.createElement('th');
        th.setAttribute('id',`THead${index}`);
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTableRows(table, data){
    let newRow = table.insertRow(-1);
    data.map((row,index)=>{
        let newCell = newRow.insertCell();
        let newText = newCell.createTextNode(newText);
    })
}
