

import { fetchData } from './fetchData.js';
const url = "https://adeiltonpereiraalves.github.io/guiaturisticojson/";
function generateShortId(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

async function Home(){
     const data = await fetchData(url)
     console.log(typeof data)
     const container = document.querySelector('.container')
     Object.values(data).forEach((data) =>{
         data.forEach((post) => {
            console.log(post)
          container.innerHTML +=`<div class="contentHome"><div class="h1Home">
               <h1>${post.name}</h1>
          </div>
          <div class="imgHome"><img src ="${post.img}" alt="img"></div>
          <div class="pHome"><p>${post.price}</div></div>`
         })
     })
}

Home()



const editPost = document.querySelector('.editePost')



async function deletePost(url) {
     try {
         const response = await fetch(url, {
             method: "DELETE",
             headers: {
                 "Content-Type": "application/json"
             },
         });
 
         if (!response.ok) {
             // Se a resposta não estiver no intervalo [200, 299], lançar um erro
             throw new Error(`Erro ao excluir o post. Código de resposta: ${response.status}`);
         }
 
         // Opcional: retornar os dados, se houver, para a chamada da função
         return await response.json();
     } catch (error) {
         console.error("Erro ao excluir o post:", error);
         throw error; // Propagar o erro para quem chama a função, se necessário
     }
 }
 

// editar post 
async function editarPost(url){
    console.log(url)
const response = await fetch(url)
if (!response.ok) {
    throw new Error(`Erro ao buscar o post. Código de resposta: ${response.status}`);
}
const postAtual = await response.json();

//pegando tags do html
const novoTitulo = document.querySelector('#titulo')
const novaImg = document.querySelector('#img')
const novaDesc = document.querySelector('#desc')
const imgEd = document.querySelector('.imgEd')
//setando values com as informções do post atual
novoTitulo.value = postAtual.titulo;
novaImg.value = postAtual.foto;
novaDesc.value = postAtual.descricao
imgEd.setAttribute("src",postAtual.foto)

const enviar = document.querySelector('.concluir')
enviar.addEventListener('click',(e) =>{
    e.preventDefault()
    
    
         
         postAtual.titulo = novoTitulo.value || postAtual.titulo;
         postAtual.foto = novaImg.value || postAtual.foto;
         postAtual.descricao = novaDesc.value || postAtual.descricao;
        
       async function concluir(){
             
        const putResponse = await fetch(url, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(postAtual),
      });

      if (!putResponse.ok) {
          throw new Error(`Erro ao editar o post. Código de resposta: ${putResponse.status}`);
      }
     }
     concluir()
    
   })
  
  
}



async function DashBoad(){
     const data = await fetchData(url)
     const containerDash = document.querySelector('.containerDash')
    Object.values(data).forEach((data) => {
        data.forEach((post) =>{
            console.log(post)
            const content = document.createElement('div')
           // const containerdash = document.querySelector('.container')
             const divh1 = document.createElement('div')
             divh1.classList.add('divh1')
             const divImg = document.createElement('div')
             divImg.classList.add('divimg')
             const divBtn = document.createElement('div')
             divBtn.classList.add('divbtn')
             content.classList.add('content')
 
             const titulo = document.createElement('h1')
             const img = document.createElement('img')
             const descricao = document.createElement('P')
             const editar = document.createElement('button')
             editar.classList ='editar'
             editar.textContent ="Editar Post"
             const remover = document.createElement('button')
             remover.classList='remove'
             remover.textContent = "Remover Post"
             titulo.textContent = post.titulo;
             img.setAttribute('src',`${post.foto}`)
             descricao.textContent = post.descricao;
 
             divh1.appendChild(titulo)
             divImg.appendChild(img)
             
             divImg.appendChild(descricao)
         
             
             divBtn.appendChild(editar)
             //editando post 
             editar.addEventListener('click',(e)=>{
                e.preventDefault()
                 
                 editPost.style.display = "flex"
                 const fechar = document.querySelector('.fechar')
                 fechar.addEventListener('click',(e) =>{
                     e.preventDefault()
                     editPost.style.display = "none"
 
                 })
                 editarPost(`${url}${post.id}`)
                 
                 
             })
             //removendo post
             remover.addEventListener('click',()=>{
                 deletePost(`${url}/${post.id}`)
             })
             
             divBtn.appendChild(remover)
             content.appendChild(divh1)
             content.appendChild(divImg)
             content.appendChild(divBtn)
             
             containerDash.appendChild(content)
           })
    })
     
}


DashBoad()
async function criarPost(post){
    
         await fetch(url,{
             method:"POST",
             headers:{
                  "Content-Type": "application/json"
               },
               body: JSON.stringify(post)
             
          })
         
}

//criado post 
const enviar = document.querySelector('#enviar')
enviar.addEventListener('click',(e) =>{
   e.preventDefault();
   const post = {
     id: 0,
     titulo:"",
     foto:"",
     descricao:""
   }
   const titulo = document.querySelector('#titulo')
   const img = document.querySelector('#img')
   const desc = document.querySelector('#desc')
   post.id = generateShortId(3)
   post.titulo = titulo.value;
   post.foto = img.value;
   post.descricao = desc.value;
   criarPost(post)
   
  
})



