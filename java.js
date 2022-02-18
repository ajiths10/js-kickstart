let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');

//submit function 
form.addEventListener('submit' , Takeitem);
//delete function 
itemlist.addEventListener('click',deleteFn)


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