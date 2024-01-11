data()







































// // const url = 'http://localhost:3000/locais'

// import {data} from './fetchData'

// // const painel = document.querySelector('.painel')

// // let i = 10;
// // function createId(i){
// //    return ++i;
// // }
// function generateShortId(length) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';

//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters.charAt(randomIndex);
//     }

//     return result;
// }
// const edit = document.querySelector('.editePost')


// data()



// // async function fetchData(url){
// //     fetch(url).then(response => response.json())
// //     .then(data =>{
        
// //         data.forEach((post) =>{
// //             const container = document.querySelector('.container')
// //             const content = document.createElement('div')
// //             const divh1 = document.createElement('div')
// //             divh1.classList.add('divh1')
// //             const divImg = document.createElement('div')
// //             divImg.classList.add('divimg')
// //             const divBtn = document.createElement('div')
// //             divBtn.classList.add('divbtn')
// //             content.classList.add('content')

// //             const titulo = document.createElement('h1')
// //             const img = document.createElement('img')
// //             const descricao = document.createElement('P')
// //             const editar = document.createElement('button')
// //             editar.classList ='editar'
// //             editar.textContent ="Editar Post"
// //             const remover = document.createElement('button')
// //             remover.classList='remove'
// //             remover.textContent = "Remover Post"
// //             titulo.textContent = post.titulo;
// //             img.setAttribute('src',`${post.foto}`)
// //             descricao.textContent = post.descricao;

// //             divh1.appendChild(titulo)
// //             divImg.appendChild(img)
            
// //             divImg.appendChild(descricao)
        
            
// //             divBtn.appendChild(editar)
// //             //editando post 
// //             editar.addEventListener('click',()=>{
                
// //                 edit.style.display = "flex"
// //                 console.log(post.id)
// //                 editarPost(post.id)
                
                
// //             })
// //             //removendo post
// //             remover.addEventListener('click',()=>{
// //                 deletePost(`${url}/${post.id}`)
// //             })
            
// //             divBtn.appendChild(remover)
// //             content.appendChild(divh1)
// //             content.appendChild(divImg)
// //             content.appendChild(divBtn)
// //             container.appendChild(content)

// //         })
// //     })
// // } 
// // fetchData(url)

// // excluindo post 
// async function deletePost(url){
    
    
       
//     const res = await fetch(url,{
//         method:"DELETE",
//         headers:{
//           "Content-Type": "application/json"
//          },
         
        
//      })
//      fetchData(url);
     
// }
// // enviando post
// async function criarPost(post){
    
//     await fetch(url,{
//         method:"POST",
//         headers:{
//           "Content-Type": "application/json"
//          },
//          body: JSON.stringify(post)
        
//      })
//      fetchData(url)
// }

// //editando post 
// async function editarPost(id){
//   const response = await fetch(`${url}/${id}`)
//   const postAtual = await response.json();
 
//   //pegando tags do html
//   const novoTitulo = document.querySelector('#titulo')
//   const novaImg = document.querySelector('#img')
//   const novaDesc = document.querySelector('#desc')
//   const imgEd = document.querySelector('.imgEd')
//   //setando values com as informções do post atual
//   novoTitulo.value = postAtual.titulo;
//   novaImg.value = postAtual.foto;
//   novaDesc.value = postAtual.descricao
//   imgEd.setAttribute("src",postAtual.foto)

//   const enviar = document.querySelector('.concluir')
//   enviar.addEventListener('click',(e) =>{
//       e.preventDefault()
     
//       edit.style.display= "none"
//       const novoPost = {
//          id:generateShortId(3),
//          titulo: novoTitulo.value || postAtual.titulo,
//          foto: novaImg.value || postAtual.foto,
//          descricao: novaDesc.value || postAtual.desc
//       }
   
//     criarPost(novoPost)
//     deletePost(`${url}/${postAtual.id}`)
   
    
// })

// fetchData(url)
  

// }

// const enviar = document.querySelector('#enviar')
// enviar.addEventListener('click',(e) =>{
//    e.preventDefault();
//    const post = {
//      id: 0,
//      titulo:"",
//      foto:"",
//      descricao:""
//    }
//    const titulo = document.querySelector('#titulo')
//    const img = document.querySelector('#img')
//    const desc = document.querySelector('#desc')
//    post.id = generateShortId(3)
//    post.titulo = titulo.value;
//    post.foto = img.value;
//    post.descricao = desc.value;
//    criarPost(post)
   
  
// })

