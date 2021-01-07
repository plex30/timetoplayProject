window.onload = () => {
    showHeader();
    showContent();
    showFooter();
    actionBurguer();
    authUser();

};

//***********************SHOW CONTENT******************************

const showHeader = () => {
    const head$$ = document.createElement("header");
    head$$.classList.add("header-main");
    document.body.appendChild(head$$);
    const nav$$ = document.createElement("nav");
    nav$$.classList.add("nav-bar");
    head$$.appendChild(nav$$);
    createLogo();
    createNavFull();
    createNavCollapse();
    navBurguerIcon();
    createSignIn();
};

const showContent = () => {
    const main$$ = document.createElement("main");
    document.body.appendChild(main$$);
    sliderCenter();
    highPost();
    cardPost();
};

const showFooter = () => {
    const footer$$ = document.createElement("footer");
    document.body.appendChild(footer$$);
    createFooter();
};

//************CREATE LOGO & NAVBAR ***********************************/

const createLogo = () => {
    const nav$$ = document.querySelector("nav");
    const h1$$ = document.createElement("h1");
    h1$$.classList.add("logo",'wow', 'fadeInUp', 'data-wow-delay="0.3s"');
    h1$$.innerHTML =
        '<a href="index.html">Time To<br>Pl<span class="a-span">a</span>y</a>';
    nav$$.appendChild(h1$$);
};

const createListNav = () => {
    const ul$$ = document.createElement("ul");

    for (let i = 0; i < 5; i++) {
        const li$$ = document.createElement("li");
        const a$$ = document.createElement("a");

        if (i == 0) {
            a$$.textContent = "Videojuegos";
        } else if (i == 1) {
            a$$.textContent = "Especiales";
        } else if (i == 2) {
            a$$.textContent = "Retro";
        } else if (i == 3) {
            a$$.textContent = "Analisis";
        } else {
            a$$.innerHTML = `<i class='bx bx-user' style="color:orange"></i>`;
            a$$.classList.add("a-sign");
            li$$.classList.add('dropdown-item');
            
        }
        li$$.appendChild(a$$);
        ul$$.appendChild(li$$);
        a$$.addEventListener("click", () => {
            if (a$$.classList == "a-sign") {
                actionSignIn();
            }
        });
    }

    return ul$$;
};

const createNavFull = () => {
    const nav$$ = document.querySelector("nav");
    const containerfull$$ = document.createElement("div");
    containerfull$$.classList.add("nav-full");
    const ul$$ = createListNav();
    containerfull$$.appendChild(ul$$);
    nav$$.appendChild(containerfull$$);
};

const createNavCollapse = () => {
    const nav$$ = document.querySelector("nav");
    const containercollapse$$ = document.createElement("div");
    containercollapse$$.classList.add("nav-collapse");
    const ul$$ = createListNav();
    containercollapse$$.appendChild(ul$$);
    nav$$.appendChild(containercollapse$$);
};

const navBurguerIcon = () => {
    const nav$$ = document.querySelector("nav");
    const container$$ = document.createElement("div");
    container$$.classList.add("container-collapse");
    const spanActiveOne$$ = document.createElement("span");
    const spanActiveTwo$$ = document.createElement("span");
    const spanActiveThr$$ = document.createElement("span");
    container$$.appendChild(spanActiveOne$$);
    container$$.appendChild(spanActiveTwo$$);
    container$$.appendChild(spanActiveThr$$);
    nav$$.appendChild(container$$);
};

const actionBurguer = () => {
    const container$$ = document.querySelector(".container-collapse");
    const wrapper$$ = document.querySelector(".wrapper");
    const main$$ = document.querySelector("main");
    const navCollap$$ = document.querySelector(".nav-collapse");
    const footer$$ = document.querySelector("footer");
    container$$.addEventListener("click", () => {
        container$$.classList.toggle("open");
        if (document.querySelector(".container-collapse.open")) {
            main$$.style.display = "none";
            navCollap$$.style.display = "block";
            footer$$.style.display = "none";
        } else if (container$$) {
            main$$.style.display = "block";
            navCollap$$.style.display = "none";
            wrapper$$.classList.remove("close");
            wrapper$$.style.display = "none";
            footer$$.style.display = "block";
        }
    });
};

//*********************CREATE FORM SIGN IN & FORM REGISTER *********************/

const createSignIn = () => {
    const header$$ = document.querySelector(".header-main");
    const wrapper$$ = document.createElement("div");
    wrapper$$.classList.add("wrapper");
    const formContent$$ = document.createElement("div");
    formContent$$.classList.add("formContent");
    wrapper$$.appendChild(formContent$$);
    const first$$ = document.createElement("div");
    first$$.classList.add("fadeIn", "first");
    const imgIcon$$ = document.createElement("img");
    imgIcon$$.setAttribute("src", "/src/assets/img/icon.png");
    imgIcon$$.setAttribute("id", "icon");
    first$$.appendChild(imgIcon$$);
    formContent$$.appendChild(first$$);
    const form$$ = document.createElement("form");
    const inpLog$$ = document.createElement("input");
    inpLog$$.setAttribute("type", "text");
    inpLog$$.setAttribute("id", "login");
    inpLog$$.setAttribute("name", "login");
    inpLog$$.setAttribute("placeholder", "Usuario");
    inpLog$$.classList.add("login");
    const inpPass$$ = document.createElement("input");
    inpPass$$.setAttribute("type", "password");
    inpPass$$.setAttribute("id", "password");
    inpPass$$.setAttribute("name", "password");
    inpPass$$.setAttribute("placeholder", "Contraseña");
    inpPass$$.classList.add("password");
    const inpSub$$ = document.createElement("input");
    inpSub$$.setAttribute("type", "button");
    inpSub$$.setAttribute("value", "Iniciar Sesión");
    inpSub$$.classList.add("subInput");
    form$$.appendChild(inpLog$$);
    form$$.appendChild(inpPass$$);
    form$$.appendChild(inpSub$$);
    formContent$$.appendChild(form$$);
    const formFoot$$ = document.createElement("div");
    formFoot$$.setAttribute("id", "formFooter");
    const afoot$$ = document.createElement("a");
    afoot$$.classList.add("underlineHover");
    afoot$$.textContent = "¿No está registrado?";
    formFoot$$.appendChild(afoot$$);
    formContent$$.appendChild(formFoot$$);
    wrapper$$.appendChild(formContent$$);
    header$$.appendChild(wrapper$$);
    inpSub$$.addEventListener("click", () => {
        logIn(inpLog$$.value, inpPass$$.value);
    });
    afoot$$.addEventListener("click", () => {
        createRegister();
    });
};

const actionSignIn = () => {
    const wrapper$$ = document.querySelector(".wrapper");
    const navCollap$$ = document.querySelector(".nav-collapse");
    const main$$ = document.querySelector("main");
    const footer$$ = document.querySelector("footer");
    wrapper$$.classList.toggle("open");
    if (document.querySelector(".wrapper.open")) {
        wrapper$$.style.display = "block";
        navCollap$$.style.display = "none";
        footer$$.style.display = "none";
        main$$.style.display = "none";
    } else if (wrapper$$) {
        wrapper$$.style.display = "none";
        navCollap$$.style.display = "none";
        main$$.style.display = "block";
        footer$$.style.display = "block";
    }
};

const createRegister = () => {
    const wrapper$$ = document.querySelector(".wrapper");
    wrapper$$.innerHTML = "";
    const formContent$$ = document.createElement("div");
    formContent$$.classList.add("formContent");
    wrapper$$.appendChild(formContent$$);
    const first$$ = document.createElement("div");
    first$$.classList.add("fadeIn", "first");
    formContent$$.appendChild(first$$);
    const form$$ = document.createElement("form");
    const inpLog$$ = document.createElement("input");
    inpLog$$.setAttribute("type", "text");
    inpLog$$.setAttribute("id", "login");
    inpLog$$.setAttribute("name", "login");
    inpLog$$.setAttribute("placeholder", "Nombre usuario");
    inpLog$$.classList.add("login");
    const inpMail$$ = document.createElement("input");
    inpMail$$.setAttribute("type", "email");
    inpMail$$.setAttribute("placeholder", "Email");
    inpMail$$.classList.add("mail");
    const inpPass$$ = document.createElement("input");
    inpPass$$.setAttribute("type", "password");
    inpPass$$.setAttribute("id", "password");
    inpPass$$.setAttribute("name", "password");
    inpPass$$.setAttribute("placeholder", "Contraseña");
    inpPass$$.classList.add("password");
    const inpSub$$ = document.createElement("input");
    inpSub$$.setAttribute("type", "submit");
    inpSub$$.setAttribute("value", "Crear nueva cuenta");
    inpSub$$.classList.add("subInput");
    form$$.appendChild(inpLog$$);
    form$$.appendChild(inpMail$$);
    form$$.appendChild(inpPass$$);
    form$$.appendChild(inpSub$$);
    formContent$$.appendChild(form$$);
    inpSub$$.addEventListener("click", () => {
        newRegister(inpLog$$.value, inpPass$$.value, inpMail$$.value);
    });
};

//***********ACTIONS FORM SIGN IN & FORM REGISTER *****************************/

const logIn = (usr, pass) => {

    const token = generate_token(32);

    let dbUser = new Dexie("Userdb");
    dbUser.version(2).stores({
        users: "user ,mail ,password, token",
    });

    dbUser.users.where({user: usr, password: pass}).first(user => {
        if (user != undefined) {
            dbUser.users.update(user.user, {token: token});
            authUser(usr, token);
            location.reload()
        }else{
            alert('Usuario no registrado')
        }
        
    })
}

const authUser = () => {
    const liDrop$$ = document.querySelectorAll('.dropdown-item');
    let dbUser = new Dexie("Userdb");
    dbUser.version(2).stores({
        users: "user ,mail ,password, token",
    });
    dbUser.users.each(user => {
        if (user.token != '') {
            for (let i = 0; i < liDrop$$.length; i++) {
                liDrop$$[i].innerHTML=` <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Bienvenido ${user.user}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item logout">Cerrar Sesión</a></li>
          </ul>`
                
            }
            
            const aDrop$$ = document.querySelectorAll('.dropdown-item.logout');
            for (let i = 0; i < aDrop$$.length; i++) {
                aDrop$$[i].addEventListener('click', ()=>{logOut(user.user)});
                
            }
            
        }

    })
}

const logOut = (user)=>{
    const a$$ = document.querySelector(".a-sign.logout");
    let dbUser = new Dexie("Userdb");
    dbUser.version(2).stores({
        users: "user ,mail ,password, token",
    });

    dbUser.users.where({user: user}).first(user=>{
        if (user.token != '') {
            dbUser.users.update(user, {token:''})
            location.reload();
        }else{
            a$$.classList.remove("logout");
            a$$.innerHTML = `<i class='bx bx-user'></i>`;
        }
    })
}


const newRegister = (user, pass, mail) => {
    let dbUser = new Dexie("Userdb");
    dbUser.version(2).stores({
        users: "user ,mail ,password, token",
    });

    dbUser.users.put({
        user: user,
        mail: mail,
        password: pass,
        token: ''
    });
};



/* const createModal = ()=>{
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
    const nav$$ = document.querySelector('.nav-full');
    const input$$ = document.createElement('input');
    input$$.classList.add('inp-nav');
    const btn$$ = document.createElement('button');
    btn$$.classList.add('btn-search');
    const i$$ = document.createElement('i');
    i$$.classList.add('bx', 'bx-search');

    nav$$.appendChild(input$$);
    btn$$.appendChild(i$$);
    nav$$.appendChild(btn$$);
    

} */

//*********CREATE SLIDER *****************************/

const sliderCenter = () => {
    const main$$ = document.querySelector("main");
    const divMain$$ = document.createElement("div");
    divMain$$.classList.add("carousel", "slide");
    divMain$$.setAttribute("data-bs-ride", "carousel");
    const divInner$$ = document.createElement("div");
    divInner$$.classList.add("carousel-inner");
    divInner$$.innerHTML = `<div class="carousel-item active">
    <img src="/src/assets/img/SuperMario.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="/src/assets/img/Cyberpunk.jpg" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
    <img src="/src/assets/img/ff7.jpg" class="d-block w-100" alt="...">
    </div>`;
    divMain$$.appendChild(divInner$$);
    main$$.appendChild(divMain$$);
};

//*********CREATE CARD HIGHPOST, CARD POST & CREATE ARTICLE ********************/

const highPost = () => {
    const main$$ = document.querySelector(".carousel");
    const divMain$$ = document.createElement("div");
    divMain$$.classList.add("highPost");

    callData("highPosts").then((dataPost) => {
        for (const post of dataPost) {
            const divPost$$ = document.createElement("div");
            divPost$$.classList.add("item-post");
            const namePost = document.createElement("h4");
            namePost.textContent = post.name;
            const tittlePost = document.createElement("h1");
            tittlePost.textContent = post.tittle;
            const imgPost = document.createElement("img");
            imgPost.setAttribute("src", post.image);
            imgPost.classList.add("wow", "bounceInUp");
            const aPost = document.createElement("a");
            imgPost.addEventListener("click", () => {
                resetMain();
                showArticle(post.id);
            });
            imgPost.appendChild(aPost);
            divPost$$.appendChild(imgPost);
            divPost$$.appendChild(namePost);
            divPost$$.appendChild(tittlePost);
            divMain$$.appendChild(divPost$$);
        }

        insertAfter(main$$, divMain$$);
    });
};

const cardPost = () => {
    const main$$ = document.querySelector("main");
    const divMain$$ = document.createElement("div");
    divMain$$.classList.add("card-post");

    callData("posts").then((postData) => {
        for (const post of postData) {
            const card$$ = document.createElement("div");
            card$$.classList.add("card");
            if (post.id == 1 || post.id == 2 || post.id == 5 || post.id == 6 || post.id == 9 || post.id == 10) {
                card$$.setAttribute('data-aos', 'fade-right')
                card$$.setAttribute('data-aos-offset', '300')
                card$$.setAttribute('data-aos-easing', 'ease-in-sine')
            }else{
                card$$.setAttribute('data-aos', 'fade-left')
                card$$.setAttribute('data-aos-offset', '300')
                card$$.setAttribute('data-aos-easing', 'ease-in-sine')
            }
            
            const imgCard$$ = document.createElement("img");
            imgCard$$.classList.add("card-img-top");
            imgCard$$.setAttribute("src", post.image);
            card$$.appendChild(imgCard$$);
            divMain$$.appendChild(card$$);
            const cardBody$$ = document.createElement("div");
            cardBody$$.classList.add("card-body");
            const h5Card$$ = document.createElement("h5");
            h5Card$$.textContent = post.tittle;
            const pCard$$ = document.createElement("p");
            pCard$$.textContent = post.content;
            const aCard$$ = document.createElement("a");
            aCard$$.setAttribute("href", "#");
            aCard$$.textContent = "Seguir leyendo";
            cardBody$$.appendChild(h5Card$$);
            cardBody$$.appendChild(pCard$$);
            cardBody$$.appendChild(aCard$$);
            card$$.appendChild(cardBody$$);
            const cardFooter$$ = document.createElement("div");
            cardFooter$$.classList.add("card-footer");
            const smallCard$$ = document.createElement("small");
            smallCard$$.classList.add("text-muted");
            smallCard$$.textContent = post.date;
            cardFooter$$.appendChild(smallCard$$);
            card$$.appendChild(cardFooter$$);
            divMain$$.appendChild(card$$);
            aCard$$.addEventListener("click", () => {
                resetMain();
                showArticle(post.id + 4);
            });
        }
        main$$.appendChild(divMain$$);
    });
};

const showArticle = (data) => {
    callData("contentPosts/" + data).then((post) => {
        const main$$ = document.querySelector("main");
        const divMain$$ = document.createElement("div");
        divMain$$.classList.add("article-post");
        const divlft$$ = document.createElement("div");
        divlft$$.classList.add("cont-lft");
        const divrgt$$ = document.createElement("div");
        divrgt$$.classList.add("cont-rgt");
        divMain$$.appendChild(divlft$$);
        divMain$$.appendChild(divrgt$$);

        const h4$$ = document.createElement("h4");
        h4$$.textContent = post.name;
        const h2$$ = document.createElement("h2");
        h2$$.textContent = post.tittle;
        const pOne$$ = document.createElement("p");
        pOne$$.textContent = post.date;
        pOne$$.classList.add("date");
        const h5$$ = document.createElement("h5");
        h5$$.textContent = "Escrito por: " + post.author;
        const img$$ = document.createElement("img");
        img$$.setAttribute("src", post.image);
        const pTwo$$ = document.createElement("p");
        pTwo$$.classList.add("content");
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
        showNewMessage(post.id);
        showMessage(post.id);
    });
};

//*********CREATE NEWMESSAGE, SHOWMESSAGE & ACTIONS SENDMESSAGE ********************/

const showMessage = (id) => {
    let db = new Dexie("Messagedb"+id);
    db.version(1).stores({
        messages: "name,mail,content",
    });

    const main$$ = document.querySelector(".cont-lft");

    db.messages.each((message) => {
        const divMessage$$ = document.createElement("div");
        divMessage$$.classList.add("message");
        const nameh5$$ = document.createElement("h4");
        nameh5$$.textContent = message.name;
        const pdate$$ = document.createElement("p");
        pdate$$.textContent = message.date;
        const pone$$ = document.createElement("p");
        pone$$.textContent = message.content;
        const mail$$ = document.createElement("h5");
        mail$$.textContent = message.mail;
        divMessage$$.appendChild(nameh5$$);
        divMessage$$.appendChild(mail$$);
        divMessage$$.appendChild(pdate$$);
        divMessage$$.appendChild(pone$$);
        main$$.appendChild(divMessage$$);
    });
};

const showNewMessage = (id) => {
    const main$$ = document.querySelector(".cont-lft");
    const divMessage$$ = document.createElement("div");
    divMessage$$.classList.add("new-message");
    const tittleh3$$ = document.createElement("h3");
    tittleh3$$.textContent = "Escribe un nuevo comentario";
    const form$$ = document.createElement("form");
    
    const textAre$$ = document.createElement("textarea");
    textAre$$.setAttribute("placeholder", "Mensaje...");
    const inputName$$ = document.createElement("input");
    inputName$$.classList.add("inputName");
    inputName$$.setAttribute("placeholder", "Nombre");
    const inputMail$$ = document.createElement("input");
    inputMail$$.classList.add("inputMail");
    inputMail$$.setAttribute("placeholder", "Email");
    const btnSend$$ = document.createElement("button");
    btnSend$$.textContent = "Enviar";
    btnSend$$.setAttribute("type", "submit");
    divMessage$$.appendChild(tittleh3$$);
    form$$.appendChild(textAre$$);
    form$$.appendChild(inputName$$);
    form$$.appendChild(inputMail$$);
    form$$.appendChild(btnSend$$);
    divMessage$$.appendChild(form$$);
    main$$.appendChild(divMessage$$);

    btnSend$$.addEventListener("click", () => {
        sendMessage(inputName$$.value, textAre$$.value, inputMail$$.value, id);
        alert("Comentario enviado.");
    });
};

const sendMessage = (name, message, mail, id) => {
    let date = new Date();
    date.toLocaleDateString();

    let db = new Dexie("Messagedb"+id);
    db.version(1).stores({
        messages: "name,mail,content, date",
    });

    db.messages.put({
        name: name,
        mail: mail,
        content: message,
        date: date
    });
    showMessage();
};

//******CREATE FOOTER ***************************/

const createFooter = () => {
    const foot$$ = document.querySelector("footer");
    foot$$.innerHTML = `<p><Strong>Time to Play</Strong> Blog de videojuegos creado por Juan A. Cortés</p>`;
};

//********VARIOUS**************************************/

const resetInput = (name, mail) => {
    const divMessage$$ = document.querySelector(".new-message");
    divMessage$$.innerHTML = "";
};

const resetMain = () => {
    const main$$ = document.querySelector("main");
    main$$.innerHTML = "";
};

function insertAfter(e, i) {
    if (e.nextSibling) {
        e.parentNode.insertBefore(i, e.nextSibling);
    } else {
        e.parentNode.appendChild(i);
    }
}

const callData = async (type) => {
    try {
        const res = await fetch("http://localhost:3000/" + type);
        const data = await res.json();
        return data;
    } catch (error) {
        return console.warn(error);
    }
};


async function basiclogin(email, password) {
    const response = await zlFetch.post(loginEndpoint, {
        auth: {
            username: email,
            password: password
        },
        body: {
            /*...*/
}
    })
    const {
        token
    } = response.body

    localStorage.setItem('token', token)
}

async function isLoggedIn() {
    const token = store.get('token')
    if (!token) return false
}

async function autoRedirect() {
    const validLogin = await isLoggedIn()
    if (!validLogin && location.pathname !== '/login/') redirect('/login')
    if (validLogin && location.pathname === '/login/') redirect('/')
}

async function isLoggedIn() {
    // ...
    // Checks validity of token
    const response = await zlFetch.post(loginEndpoint, {
        auth: token,
        body: {
            course: 'learn-javascript'
        }
    })
    const {
        token
    } = response.body
    localStorage.setItem('token', token)
    return true;
}

function generate_token(length) {
    //edit the token allowed characters
    var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
    var b = [];
    for (var i = 0; i < length; i++) {
        var j = (Math.random() * (a.length - 1)).toFixed(0);
        b[i] = a[j];
    }
    return b.join("");
}