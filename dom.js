
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
        var headerTitle=document.getElementById('header-title')
        // console.log(headerTitle)
        // headerTitle.textContent = 'Hello';
        // headerTitle.innerText = 'Goodbye';
        // headerTitle.innerHTML= '<h3>Hello</h3>';

        var items = document.getElementsByClassName('list-group-item');
        var header = document.getElementsByClassName('main-header');
        // console.log(items);
        // console.log(items[1]);
        // items[1].textContent='Hello 2';
        // items[1].style.fontWeight='bold';
        //    header.style.borderBottom='solid 3px #000'

//GETELEMENTBYCLASSNAME//

var items = document.getElementsByClassName('list-group-item');
        console.log(items);
        console.log(items[1])
        items[1].textContent ='Hello 2';
        items[1].style.fontweight ='bold'
        items[1].style.backgroundColor ='yellow'
        
        for (let index = 0; index < items.length; index++) {
              
                items[i].style.backgroundColor = '#f4f4f4'  
        }

// GETELEMENTSBYTAGNAME //
}
