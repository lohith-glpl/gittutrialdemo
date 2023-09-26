
window.onload=()=>{
        // console.log(document);
        // console.log(document.domain);
        // console.log(document.URL);
        // console.log(document.title);
        // console.log(document.doctype);
        // console.log(document.head);
        // console.log(document.body);
        // console.log(document.all);
        // console.log(document.all[10]);
        // console.log(document.forms[0]);
        // console.log(document.links);
        // console.log(document.images);
        // var headerTitle=document.getElementById('header-title')
        // console.log(headerTitle)
        // headerTitle.textContent = 'Hello';
        // headerTitle.innerText = 'Goodbye';
        // headerTitle.innerHTML= '<h3>Hello</h3>';

        // var items = document.getElementsByClassName('list-group-item');
        // var header = document.getElementsByClassName('main-header');
        // console.log(items);
        // console.log(items[1]);
        // items[1].textContent='Hello 2';
        // items[1].style.fontWeight='bold';
        //    header.style.borderBottom='solid 3px #000'

//GETELEMENTBYCLASSNAME//

// var items = document.getElementsByClassName('list-group-item');
//         console.log(items);
//         console.log(items[1])
//         items[1].textContent ='Hello 2';
//         items[1].style.fontweight ='bold'
//         items[1].style.backgroundColor ='yellow'
        
//         for (let index = 0; index < items.length; index++) {
              
//                 items[i].style.backgroundColor = '#f4f4f4'  
//         }

// GETELEMENTSBYTAGNAME //

//  var li = document.getElementsByTagName('li');
  
//  console.log(li);
//  console.log(li[1]);
//  li[1].textContent = 'Hello 2';
//  li[1].style.fontWeight = 'bold';
//  li[1].style.backgroundColor ='yellow';

//  for (let index = 0; index < array.length; index++) {
//         li[i].style.backgroundColor = "#f4f4f4"
//  }

// QUERYSELECTOR //

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nthchild(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //

// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello' ;

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');

// for (let i = 0; i < odd.length; i++) {
//        odd[i].style.backgroundColor = '#f4f4f4';
//        even[i].style.backgroundColor = '#ccc';     
// }

// var itemList = document.querySelector('#items');
//parentNode 
// console.log(itemList.parentNode)
//  itemList.parentNode.style.backgroundColor = '#f4f4f4';
//  console.log(itemList.parentElement.parentElement.parentElement);

//FirstChild
// console.log(itemList.children);
// console.log(itemList.children[1]);

//firstElementChild
// console.log(itemList.firstElementChild)
// itemList.firstElementChild.textContent="Hello 1"

//lastChild
// console.log(itemList.lastChild);
//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling
// console.log(itemList.nextSibling);
//nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);
//previousElementSibiling
// console.log(itemList.parentElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

//create a div
// var newDiv = document.createElement('div');

// Add class 
// newDiv.className = 'hello';

// Add id 
// newDiv.id = 'hello1';

// Add attr
// newDiv.setAttribute('title', 'Hello Div');

// Create text node 
// var newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);

// container.insertBefore(newDiv, h1)

var form = document.getElementById('addForm');
    var itemList = document.getElementById('items');
   

    // Form submit event
    form.addEventListener('submit', addItem);
    // Delete event
    itemList.addEventListener('click', removeItem);
   


    // Add item
    function addItem(e){
    e.preventDefault();

    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');

    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    // Append li to list
    itemList.appendChild(li);
    }

    // Remove item
    function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
        var li = e.target.parentElement;
        itemList.removeChild(li);
        }
    }
    }
}
