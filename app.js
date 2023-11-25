
const submit = document.getElementById('submit');


function validationForm(){
    const author = document.getElementById('input1').value
    const title = document.getElementById('input2').value
    const pages = document.getElementById('input3').value

    if(author.trim() === '' || title.trim() ==='' || pages.trim() ===''){
        alert('Complete Form');
        return;    
    }
    addBook();

    document.getElementById('input1').value = ''
    document.getElementById('input2').value = ''
    document.getElementById('input3').value = '' 

    const statusV = document.querySelectorAll('.bi-x')
    let isCheck = false
    statusV.forEach((div)=>{
        div.addEventListener('click',(event)=>{
            const clickedDiv = event.target;
            
            if (clickedDiv.classList.contains('bi-x') && isCheck) {
                clickedDiv.classList.add('bi-check2');
                clickedDiv.classList.remove('bi-x');
            } else {
                clickedDiv.classList.remove('bi-check2');
                clickedDiv.classList.add('bi-x');
            }
    
            isCheck = !isCheck;
        })
    })
}




function addBook(){
    const author = document.getElementById('input1').value
    const title = document.getElementById('input2').value
    const pages = document.getElementById('input3').value

    let book = document.createElement('div');
    book.classList.add('book');

    let classes = ['author', 'title', 'pages', 'status', 'delete'];
    for(let i = 0; i < classes.length; i++){
        let innerDiv = document.createElement('div');

        innerDiv.classList.add(classes[i]);
        
        if(i === 0){
            innerDiv.innerHTML = author
        }else if(i === 1){
            innerDiv.innerHTML = title
        }else if(i === 2){
            innerDiv.innerHTML = pages
        }else if(i === 3){
            innerDiv.innerHTML = '<i class="bi bi-x"></i>'
        }else if(i === 4){
            innerDiv.innerHTML= 'delete'
        }


        book.appendChild(innerDiv);
    }

    const books = document.getElementById('books');
    books.appendChild(book);


    books.addEventListener('click',(event)=>{
        if(event.target.classList.contains('delete')){
        book = event.target.parentNode
        book.remove()}
    })

}

const deleteAll = document.getElementById('deleteAll');

    deleteAll.addEventListener('click', ()=>{
        books.innerHTML = ''
    });






submit.addEventListener('click', validationForm)