let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');
let liSelector=document.querySelectorAll('li');
let filter=document.getElementById('filter');

//submit function 
form.addEventListener('submit' , Takeitem);
//delete function 
itemlist.addEventListener('click',deleteFn)
//filter listner
filter.addEventListener('keyup', filterfn)


for(let i=0;i<liSelector.length;i++){
    let edbtn=document.createElement('button');
    edbtn.className='edit-button btn-danger btn-sm float-right edit';
    edbtn.appendChild(document.createTextNode('Edit'));
    liSelector[i].appendChild(edbtn);
}

//call submit function
function Takeitem(e){
    e.preventDefault();
    //console.log(e);

    //Adding name
    let NewItem=document.getElementById('item').value;
    let li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(NewItem));

    //delete button
    let dlt=document.createElement('button');
    dlt.className='btn btn-danger btn-sm float-right delete';
    dlt.appendChild(document.createTextNode('x'));
    li.appendChild(dlt);
    itemlist.appendChild(li);

    //Edit button new creating li
    let edbtn=document.createElement('button');
    edbtn.className='edit-button btn-danger btn-sm float-right edit';
    edbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edbtn);
    

    //create Div
    //Adding description
    let NewDes=document.getElementById('itemD').value;
    let newDiv=document.createElement('div')
    newDiv.className='Div-class';
    newDiv.id='div1';
    let newDivText=document.createTextNode(NewDes)
    newDiv.appendChild(newDivText);
    //console.log(newDiv)
    let list=document.querySelector('form li');
    //console.log(newDiv);
    li.insertBefore(newDiv,list);
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

//filter
function filterfn(e){
    //convert to lowercase
    let text=e.target.value.toLowerCase();
    //console.log(text);
    let items=document.getElementsByTagName('li');
    console.log(items);
    items.child
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
}