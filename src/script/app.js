window.onload = ()=>{

    showHeader();
    showContent();
    showFooter();
    actionBurguer();
    
    
}



const showHeader = ()=>{
    const head$$ = document.createElement('header');
    head$$.classList.add('header-main');
    document.body.appendChild(head$$);
    const nav$$ = document.createElement('nav');
    nav$$.classList.add('nav-bar')
    head$$.appendChild(nav$$);
    createLogo();
    createNav();
    navBurguerIcon();
    createSignIn();
    
}

const showContent = ()=>{
    const main$$ = document.createElement('main');
    document.body.appendChild(main$$);
    sliderCenter();
    highPost();
    cardPost();
    
    
}

const showFooter = ()=>{
    const footer$$ = document.createElement('footer');
    document.body.appendChild(footer$$);
    createFooter();
}




const createLogo = ()=>{
    const nav$$ = document.querySelector('nav');
    const h1$$ = document.createElement('h1');
    h1$$.classList.add('logo');
    h1$$.innerHTML = '<a href="index.html">Time To<br>Pl<span class="a-span">a</span>y</a>';
    nav$$.appendChild(h1$$);   
}

const createNav = ()=>{

    const nav$$ = document.querySelector('nav');
    const containerfull$$ = document.createElement('div');
    const containercollapse$$ = document.createElement('div');
    containercollapse$$.classList.add('nav-collapse');
    containerfull$$.classList.add('nav-full');
    const ul$$ = document.createElement('ul');

    for (let i = 0; i < 5; i++) {
    const li$$ = document.createElement('li');
    const a$$ = document.createElement('a');
    a$$.setAttribute('href', "#");

    if (i == 0) {
        a$$.textContent = 'Videojuegos';
    }else if (i == 1) {
        a$$.textContent = 'Especiales'
    } else if(i == 2){
        a$$.textContent = 'Retro'
    }else if(i == 3){
        a$$.textContent = 'Analisis'
    }else{
        a$$.textContent = 'Sign in'
            logIn()
        
        
    }
    li$$.appendChild(a$$);
    ul$$.appendChild(li$$);
        a$$.addEventListener('click', ()=>{
            if (a$$.textContent == 'Sign in') {
                a$$.classList.add('a-sign');
                actionSignIn();
                console.log(logIn())
            }
    
        })
    }
    containerfull$$.appendChild(ul$$);
    nav$$.appendChild(containerfull$$);
    containercollapse$$.appendChild(ul$$);
    nav$$.appendChild(containercollapse$$);
    
}

const navBurguerIcon = ()=>{
  const nav$$ = document.querySelector('nav');
  const container$$ = document.createElement('div');
  container$$.classList.add('container-collapse');
  const spanActiveOne$$ = document.createElement('span');
  const spanActiveTwo$$ = document.createElement('span');
  const spanActiveThr$$ = document.createElement('span');
  container$$.appendChild(spanActiveOne$$);
  container$$.appendChild(spanActiveTwo$$);
  container$$.appendChild(spanActiveThr$$);
  nav$$.appendChild(container$$);
}

const actionBurguer = ()=>{
  const container$$ = document.querySelector('.container-collapse');
  const wrapper$$ = document.querySelector('.wrapper');
  const main$$ = document.querySelector('main');
  const navCollap$$ = document.querySelector('.nav-collapse')
  container$$.addEventListener('click', ()=>{
    container$$.classList.toggle('open');
    if (document.querySelector('.container-collapse.open')) {
      main$$.style.visibility = 'hidden';
      navCollap$$.style.visibility = 'visible';
    }else if(container$$){
        main$$.style.visibility = 'visible';
        navCollap$$.style.visibility = 'hidden';
        wrapper$$.classList.remove('close');
        wrapper$$.style.visibility = 'hidden';
    }
  })  
}

const createSignIn = ()=>{
    const header$$ = document.querySelector('.header-main');
    const wrapper$$ = document.createElement('div');
    wrapper$$.classList.add('wrapper');
    const formContent$$ = document.createElement('div');
    formContent$$.classList.add('formContent');
    wrapper$$.appendChild(formContent$$);
    const first$$ = document.createElement('div');
    first$$.classList.add('fadeIn', 'first');
    const imgIcon$$ = document.createElement('img');
    imgIcon$$.setAttribute('src', '/src/assets/img/icon.png');
    imgIcon$$.setAttribute('id', 'icon');
    first$$.appendChild(imgIcon$$);
    formContent$$.appendChild(first$$);
    const form$$ = document.createElement('form');
    const inpLog$$ = document.createElement('input');
    inpLog$$.setAttribute('type', 'text');
    inpLog$$.setAttribute('id', 'login');
    inpLog$$.setAttribute('name', 'login');
    inpLog$$.setAttribute('placeholder', 'Usuario');
    inpLog$$.classList.add('login');
    const inpPass$$ = document.createElement('input');
    inpPass$$.setAttribute('type', 'password');
    inpPass$$.setAttribute('id', 'password');
    inpPass$$.setAttribute('name', 'password');
    inpPass$$.setAttribute('placeholder', 'Contraseña');
    inpPass$$.classList.add('password');
    const inpSub$$ = document.createElement('input');
    inpSub$$.setAttribute('type', 'button');
    inpSub$$.setAttribute('value', 'Iniciar Sesión');
    inpSub$$.classList.add('subInput');
    form$$.appendChild(inpLog$$);
    form$$.appendChild(inpPass$$);
    form$$.appendChild(inpSub$$);
    formContent$$.appendChild(form$$);
    const formFoot$$ = document.createElement('div');
    formFoot$$.setAttribute('id', 'formFooter');
    const afoot$$ = document.createElement('a');
    afoot$$.classList.add('underlineHover');
    afoot$$.setAttribute('href', '#');
    afoot$$.textContent = '¿No está registrado?';
    formFoot$$.appendChild(afoot$$);
    formContent$$.appendChild(formFoot$$);
    wrapper$$.appendChild(formContent$$);
    header$$.appendChild(wrapper$$);
    inpSub$$.addEventListener('click', ()=>{logIn(inpLog$$.value, inpPass$$.value)});
    afoot$$.addEventListener('click', ()=>{createRegister()});
}

const actionSignIn = ()=>{
    const wrapper$$ = document.querySelector('.wrapper');
    const navCollap$$ = document.querySelector('.nav-collapse')
    
      wrapper$$.classList.toggle('close');
      if (document.querySelector('.wrapper.close')) {
        wrapper$$.style.visibility = 'visible';
        navCollap$$.style.visibility = 'hidden';
      }else if(wrapper$$){
          wrapper$$.style.visibility = 'hidden';
          navCollap$$.style.visibility = 'hidden';
      }
      
  }

const logIn = (usr, pass)=>{
    const a$$ = document.querySelector('.a-sign');
    let dbUser = new Dexie("Userdb");
          dbUser.version(2).stores({
              users: 'user ,mail ,password'
          });

          dbUser.users.each(user =>{
              if (user.user == usr && user.password == pass) {
                  return a$$.textContent = 'Bienvenido '+ user.user ;
              }
          })
              
}

const createRegister = ()=>{
    const wrapper$$ = document.querySelector('.wrapper');
    wrapper$$.innerHTML = '';
    const formContent$$ = document.createElement('div');
    formContent$$.classList.add('formContent');
    wrapper$$.appendChild(formContent$$);
    const first$$ = document.createElement('div');
    first$$.classList.add('fadeIn', 'first');
    formContent$$.appendChild(first$$);
    const form$$ = document.createElement('form');
    const inpLog$$ = document.createElement('input');
    inpLog$$.setAttribute('type', 'text');
    inpLog$$.setAttribute('id', 'login');
    inpLog$$.setAttribute('name', 'login');
    inpLog$$.setAttribute('placeholder', 'Nombre usuario');
    inpLog$$.classList.add('login');
    const inpMail$$ = document.createElement('input');
    inpMail$$.setAttribute('type', 'email');
    inpMail$$.setAttribute('placeholder', 'Email');
    inpMail$$.classList.add('mail');
    const inpPass$$ = document.createElement('input');
    inpPass$$.setAttribute('type', 'password');
    inpPass$$.setAttribute('id', 'password');
    inpPass$$.setAttribute('name', 'password');
    inpPass$$.setAttribute('placeholder', 'Contraseña');
    inpPass$$.classList.add('password');
    const inpSub$$ = document.createElement('input');
    inpSub$$.setAttribute('type', 'button');
    inpSub$$.setAttribute('value', 'Crear nueva cuenta');
    inpSub$$.classList.add('subInput');
    form$$.appendChild(inpLog$$);
    form$$.appendChild(inpMail$$);
    form$$.appendChild(inpPass$$);
    form$$.appendChild(inpSub$$);
    formContent$$.appendChild(form$$);
    inpSub$$.addEventListener('click', ()=>{newRegister(inpLog$$.value, inpPass$$.value, inpMail$$.value)})
}

const newRegister = (user, pass, mail)=>{

        let dbUser = new Dexie("Userdb");
          dbUser.version(2).stores({
              users: 'user ,mail ,password'
          });
         
          dbUser.users.put({user: user, mail: mail, password: pass});  
}

const createModal = ()=>{
    const main = document.querySelector('main');
    main.innerHTML = ` <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>`;

}

const createSearch = ()=>{
    const nav$$ = document.querySelector('nav');
    const input$$ = document.createElement('input');
    input$$.classList.add('inp-nav');
    const btn$$ = document.createElement('button');
    btn$$.classList.add('btn-search');
    const i$$ = document.createElement('i');
    i$$.classList.add('bx', 'bx-search');

    nav$$.appendChild(input$$);
    btn$$.appendChild(i$$);
    nav$$.appendChild(btn$$);
    

}

const sliderCenter = ()=>{
    const main$$ = document.querySelector('main');
    const divMain$$ = document.createElement('div');
    divMain$$.classList.add('carousel', 'slide');
    divMain$$.setAttribute('data-bs-ride', 'carousel')
    const divInner$$ = document.createElement('div');
    divInner$$.classList.add('carousel-inner');
    divInner$$.innerHTML = `<div class="carousel-item active">
    <img src="/src/assets/img/mario.png" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="/src/assets/img/Cyberpunk.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="/src/assets/img/ff7.jpg" class="d-block w-100" alt="...">
    </div>`;
    divMain$$.appendChild(divInner$$);
    main$$.appendChild(divMain$$);
}

const highPost = ()=>{
    const main$$ = document.querySelector('main');
    const divMain$$ = document.createElement('div');
    divMain$$.classList.add('highPost');

    callData('highPosts').then(dataPost =>{
        
        for (const post of dataPost) {
            const divPost$$ = document.createElement('div');
            divPost$$.classList.add('item-post');
            const namePost = document.createElement('h4');
            namePost.textContent = post.name;
            const tittlePost = document.createElement('h1');
            tittlePost.textContent = post.tittle;
            const imgPost = document.createElement('img');
            imgPost.setAttribute('src', post.image);
            imgPost.classList.add('wow', 'bounceInUp')
            const aPost = document.createElement('a');
            aPost.setAttribute('href', '#');
            imgPost.addEventListener('click', () => {resetMain(); showArticle(post.id)});
            imgPost.appendChild(aPost);
            divPost$$.appendChild(imgPost);
            divPost$$.appendChild(namePost);
            divPost$$.appendChild(tittlePost);
            divMain$$.appendChild(divPost$$);
           
        }
        
        main$$.appendChild(divMain$$);
    })
    
    
    
}

const cardPost = ()=>{
    const main$$ = document.querySelector('main');
    const divMain$$ = document.createElement('div');
    divMain$$.classList.add('card-post');

    callData('posts').then(postData =>{
        for (const post of postData) {
            const card$$ = document.createElement('div');
            card$$.classList.add('card');
            const imgCard$$ = document.createElement('img');
            imgCard$$.classList.add('card-img-top');
            imgCard$$.setAttribute('src', post.image);
            card$$.appendChild(imgCard$$);
            divMain$$.appendChild(card$$);
            const cardBody$$ = document.createElement('div');
            cardBody$$.classList.add('card-body');
            const h5Card$$ = document.createElement('h5');
            h5Card$$.textContent = post.tittle;
            const pCard$$ = document.createElement('p');
            pCard$$.textContent = post.content;
            const aCard$$ = document.createElement('a');
            aCard$$.setAttribute('href', '#');
            aCard$$.textContent = 'Seguir leyendo';
            cardBody$$.appendChild(h5Card$$);
            cardBody$$.appendChild(pCard$$);
            cardBody$$.appendChild(aCard$$);
            card$$.appendChild(cardBody$$);
            const cardFooter$$ = document.createElement('div');
            cardFooter$$.classList.add('card-footer');
            const smallCard$$ = document.createElement('small');
            smallCard$$.classList.add('text-muted');
            smallCard$$.textContent = post.date;
            cardFooter$$.appendChild(smallCard$$);
            card$$.appendChild(cardFooter$$);
            divMain$$.appendChild(card$$);
            aCard$$.addEventListener('click', ()=>{resetMain(); showArticle(post.id+4)})
        }
       main$$.appendChild(divMain$$);
    })

}

const showArticle = (data)=>{

    callData('contentPosts/'+data).then(post =>{

        const main$$ = document.querySelector('main');
        const divMain$$ = document.createElement('div');
        divMain$$.classList.add('article-post');
        const divlft$$ = document.createElement('div');
        divlft$$.classList.add('cont-lft');
        const divrgt$$ = document.createElement('div');
        divrgt$$.classList.add('cont-rgt');
        divMain$$.appendChild(divlft$$);
        divMain$$.appendChild(divrgt$$);
        
        const h4$$ = document.createElement('h4');
        h4$$.textContent = post.name;
        const h2$$ = document.createElement('h2');
        h2$$.textContent = post.tittle;
        const pOne$$ = document.createElement('p');
        pOne$$.textContent = post.date;
        pOne$$.classList.add('date');
        const h5$$ = document.createElement('h5');
        h5$$.textContent = 'Escrito por: '+post.author;
        const img$$ = document.createElement('img');
        img$$.setAttribute('src', post.image);
        const pTwo$$ = document.createElement('p'); 
        pTwo$$.classList.add('content');
        pTwo$$.innerHTML = post.content;
        divlft$$.appendChild(img$$);
        divlft$$.appendChild(h4$$);
        divlft$$.appendChild(h2$$);
        divlft$$.appendChild(pOne$$);
        divlft$$.appendChild(pTwo$$);
        divlft$$.appendChild(h5$$);
        divrgt$$.innerHTML = `<h3>Sobre Nosotros</h3><p>Blog dedicado a informar sobre las últimas noticias de videojuegos</p><h2>Archives</h2><ul><li><a href="#">Noviembre 2020</a></li><li><a href="#">Octubre 2020</a></li><li><a href="#">Septiembre 2020</a></li><li><a href="#">Agosto 2020</a></li><li><a href="#">Julio 2020</a></li><li><a href="#">Junio 2020</li></a><li><a href="#">Mayo 2020</a></li><li><a href="#">Abril 2020</a></li></ul>`;
        divMain$$.appendChild(divrgt$$);
        main$$.appendChild(divMain$$);
        showNewMessage();
        showMessage();
    })
    
}


const sendMessage = (name, message, mail)=>{

    let date = new Date();
    date.toLocaleDateString();

        let db = new Dexie("Messagedb");
          db.version(1).stores({
              messages: 'name,mail,content, date'
          });
         
          db.messages.put({name: name, mail: mail, content: message, date: date})  
          showMessage();
}

const showMessage = ()=>{

     let db = new Dexie("Messagedb");
          db.version(1).stores({
              messages: 'name,mail,content'
          });
    
    const main$$ = document.querySelector('.cont-lft');
    
    db.messages.each(message =>{
        const divMessage$$ = document.createElement('div');
        divMessage$$.classList.add('message');
        const nameh5$$ = document.createElement('h4');
        nameh5$$.textContent = message.name;
        const pdate$$ = document.createElement('p');
        pdate$$.textContent = message.date;
        const pone$$ = document.createElement('p');
        pone$$.textContent = message.content;
        const mail$$ = document.createElement('h5');
        mail$$.textContent = message.mail;
        divMessage$$.appendChild(nameh5$$);
        divMessage$$.appendChild(mail$$);
        divMessage$$.appendChild(pdate$$);
        divMessage$$.appendChild(pone$$);
        main$$.appendChild(divMessage$$);
    })
    
    
    
    
}

const showNewMessage = ()=>{
    const main$$ = document.querySelector('.cont-lft');
    const divMessage$$ = document.createElement('div');
    divMessage$$.classList.add('new-message')
    const tittleh3$$ = document.createElement('h3');
    tittleh3$$.textContent = 'Escribe un nuevo comentario';
    const form$$ = document.createElement('form');
    form$$.setAttribute('action', '#');
    const textAre$$ = document.createElement('textarea');
    textAre$$.setAttribute('placeholder', 'Escribe un comentario...')
    const inputName$$ = document.createElement('input');
    inputName$$.classList.add('inputName');
    inputName$$.setAttribute('placeholder', 'Nombre');
    const inputMail$$ = document.createElement('input');
    inputMail$$.classList.add('inputMail');
    inputMail$$.setAttribute('placeholder', 'Email');
    const btnSend$$ = document.createElement('button');
    btnSend$$.textContent = 'Enviar';
    btnSend$$.setAttribute('type', 'submit');
    divMessage$$.appendChild(tittleh3$$);
    form$$.appendChild(inputName$$);
    form$$.appendChild(inputMail$$);
    form$$.appendChild(textAre$$);
    form$$.appendChild(btnSend$$);
    divMessage$$.appendChild(form$$);
    main$$.appendChild(divMessage$$)

    btnSend$$.addEventListener('click', ()=>{sendMessage(inputName$$.value, textAre$$.value, inputMail$$.value); alert('Comentario enviado.')})
}


const createFooter = ()=>{
    const foot$$ = document.querySelector('footer');
    foot$$.innerHTML = `<p><Strong>Time to Play</Strong> Blog de videojuegos creado por Juan A. Cortés</p>`;

}


const resetInput = (name, mail)=>{
    const divMessage$$ = document.querySelector('.new-message');
    divMessage$$.innerHTML = '';

}

const resetMain = ()=>{
    const main$$ = document.querySelector('main');
    main$$.innerHTML = "";
}

/* function insertAfter(e,i){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
} */

const callData = async (type)=>{
    try {
        const res = await fetch('http://localhost:3000/' + type);
        const data = await res.json();
        return data;
    } catch (error) {
        return console.warn(error);
    }
    
}
