let form=document.getElementById('addForm');
let itemlist=document.getElementById('items');
let liSelector=document.querySelectorAll('li');
let filter=document.getElementById('filter');
let d=1;

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
    let container=document.querySelector(`ul .list-group-item`)
    let list=document.querySelector('form li');
    //console.log(newDiv);
    liSelector[j].insertBefore(newDiv,list);

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
    let itemDiscribtion=itemlist.getElementsByTagName('div');
    //console.log(items);
    //convert to array
    Array.from(items).forEach(function(item){
        let itemName = item.firstChild.textContent;
         console.log(itemName);
       if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
        }else if(itemDiscribtion !=' '){
            Array.from(itemDiscribtion).forEach(function(itemZ){
                let AAA = itemZ.firstChild.textContent;
                 console.log(AAA);
                if(AAA.toLowerCase().indexOf(text) != -1){
                    itemZ.style.display="block";
                }else{
                    itemZ.style.display='none';
                }
            });   
        }
        else{
            item.style.display='none';
        }
    });

console.log(Array.from(itemDiscribtion))

    
}


//Add discription to all items
let j=0;
while(j<=liSelector.length){
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
//let container=document.querySelector(`li .list-group-item`);
let list=document.querySelector('form li');
//console.log(newDiv);
liSelector[j].insertBefore(newDiv,list);
j=j+1;
}