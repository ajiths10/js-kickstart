let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');
let sele=document.querySelectorAll('li')
//console.log(sele);
//submit function 
form.addEventListener('submit' , Takeitem);
//delete function 
itemlist.addEventListener('click',deleteFn)

for(let i=0;i<sele.length;i++){

    let edbtn=document.createElement('button');
    edbtn.className='edit-button btn-danger btn-sm float-right edit';
    edbtn.appendChild(document.createTextNode('Edit  '));
    sele[i].appendChild(edbtn);
}

//call submit function
function Takeitem(e){
    e.preventDefault();
    //console.log(1);
    let NewItem=document.getElementById('item').value;
    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(NewItem));
    //delete button
    let dlt=document.createElement('button');
    //add class to the button
    dlt.className='btn btn-danger btn-sm float-right delete';
    //append text node
    dlt.appendChild(document.createTextNode('x'));
    //append button to li
    li.appendChild(dlt);
    itemlist.appendChild(li);

    //Edit button
    let edbtn=document.createElement('button');
    edbtn.className='edit-button btn-danger btn-sm float-right edit';
    edbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edbtn);
    //itemlist.appendChild(li);
}


//call delete function
function deleteFn(e){
    if(e.target.classList.contains('delete')){
        //console.log('1');
        if(confirm('Are you sure?')){
            let li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
}

