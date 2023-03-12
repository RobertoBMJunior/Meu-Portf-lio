const btn_read_more = document.querySelector('#read-more')
const list_projects = document.querySelector('.list-proj')

btn_read_more.addEventListener('click',()=>{
    list_projects.classList.toggle('active')
    if(list_projects.classList.contains('active')) {
        return btn_read_more.innerHTML = `
        <span class="material-symbols-outlined">
            keyboard_double_arrow_up
        </span>
        <span>
            Ver menos projetos
        </span>
        `
    }
    
    btn_read_more.innerHTML = `   
    <span class="material-symbols-outlined">
        keyboard_double_arrow_down
    </span>
    <span>
        Ver mais projetos
    </span>
    `
    
})