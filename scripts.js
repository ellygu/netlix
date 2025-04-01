
let botaoSom = document.querySelector(".botao-som");
let video=document.querySelector(".video");
let botao=document.querySelector(".link-info");
let modal = document.querySelector(".modal");

botaoSom.addEventListener("click", ligaSom);
modal.addEventListener("click", esconderModal);

function ligaSom() {

    video.muted= true ();
        
    

video.play() ;
    

    }

   
    

botao.addEventListener("click")
function mostrarModal(){
    modal.style.display="block"
}
function esconderModal(){
    modal.style.display="none"
}









