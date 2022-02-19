let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');
let sele=document.querySelectorAll('li')
let filter=document.getElementById('filter');
let d=1;

//submit function 
form.addEventListener('submit' , Takeitem);

//delete function 
itemlist.addEventListener('click',deleteFn)

//filter listner
filter.addEventListener('keyup', filterfn)

for(let i=0;i<sele.length;i++){

    let edbtn=document.createElement('button');
    edbtn.className='edit-button btn-danger btn-sm float-right edit';
    edbtn.appendChild(document.createTextNode('Edit'));
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

    //Edit button new creating li
    let edbtn=document.createElement('button');
    edbtn.className='edit-button btn-danger btn-sm float-right edit';
    edbtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(edbtn);
    

//create Div
    let newDiv=document.createElement('div')
    newDiv.className='Div-class';
    newDiv.id='div1';
    //create text node
    let newDivText=document.createTextNode(`description ${d}`)
    d=d+1;
    //add to div
    newDiv.appendChild(newDivText);
    //console.log(newDiv)
    
    //add element to the page
    let M=document.querySelector(`ul .list-group-item`)
    let TT=document.querySelector('form li');
    //console.log(newDiv);
    sele[j].insertBefore(newDiv,TT);

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
    let items=itemlist.getElementsByTagName('li');
    //console.log(items);
    //convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
        //console.log(itemName);
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }else{
            item.style.display='none';
        }
    });
}


//Add discription to all items
let j=0;
while(j<=sele.length){
//create Div
let newDiv=document.createElement('div')
newDiv.className='Description';
newDiv.id='des1';
//create text node
let newDivText=document.createTextNode(`description ${d}`)
d=d+1;
//add to div
newDiv.appendChild(newDivText);
//console.log(newDiv)
    
//add element to the page
let M=document.querySelector(`ul .list-group-item`);
let TT=document.querySelector('form li');
//console.log(newDiv);
sele[j].insertBefore(newDiv,TT);
j=j+1;
}



