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

// --------------------Âncora de índice de conteudo---------------------
// Aqui nós estaremos realizando o scroll da página para 100px abaixo
// de onde ela está atualmente para o conteúdo não ficar abaixo do header
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 100  );
    }
  }
  

let list0 = document.querySelector('a[href^="#about-me"')
let list1 = document.querySelector('a[href^="#ability"')
let list2 = document.querySelector('a[href^="#my-projects"')

let list = [list0,list1,list2]

list.forEach(el => {
    el.addEventListener("click", function() {
    
      window.setTimeout(function() {
        // O clique é capturado antes da mudança do #, então
        // o timeout faz com que esse código seja executado
        // apenas após a rolagem do redirecionamento ser executada
        offsetAnchor();
      }, 0);
  
    });
  })
  
  // Definimos o offset inicial caso a página aberta já esteja indo para um #elemento
window.setTimeout(offsetAnchor, 0);