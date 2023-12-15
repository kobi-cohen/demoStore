const btn = document.querySelector('#btn')
const name = document.querySelector('#name')
const id = document.querySelector('#id')
const cleanFields = ()=>{
    name.value=''
    id.value=''
}

btn.addEventListener('click',()=>{
    alert(`היי ${name.value}  שמחים שאתה כאן איתנו`)
    cleanFields()

})

