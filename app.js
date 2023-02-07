const addButton = document.getElementById('add')

const updateLSdata = () => {
    const textareaData = document.querySelectorAll('textarea')
    const note = []
console.log(textareaData)
    textareaData.forEach((notes) =>{
        return note.push(notes.value)
    })
    // console.log(note)

    localStorage.setItem('note', JSON.stringify(note))

}

const addnewNote = (text = '') => {

    const notes = document.createElement('div')
    notes.classList.add('notes')

    const htmlData = `
        <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i> </button>
            <button class="delete"><i class="fas fa-trash-alt"></i> </button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class=" ${text ? "hidden" : ""}"></textarea> `


    notes.insertAdjacentHTML('afterbegin', htmlData)
    // console.log(notes)


    // getting Reference
    const editButton = notes.querySelector('.edit');
    const delButton = notes.querySelector('.delete');
    const maindiv = notes.querySelector('.main');
    const textarea = notes.querySelector('textarea');


    // delbutton to delete the text
    delButton.addEventListener('click', () => {
        notes.remove();
        updateLSdata();
    })

    // editButton to edit the text
    textarea.value = text;
    maindiv.innerHTML = text;


    editButton.addEventListener('click', () => {
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

    })

    textarea.addEventListener('change', (event)=>{
 const value = event.target.value
 maindiv.innerHTML = value

 updateLSdata()
    })


    document.body.appendChild(notes)
}

// getting databack from localstorage
const note = JSON.parse(localStorage.getItem('note'))

if(note){ note.forEach((notes) => addnewNote(notes))}

addButton.addEventListener('click', () => addnewNote());