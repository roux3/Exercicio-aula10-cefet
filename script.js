let header = document.querySelector("header");

let main = document.querySelector("main");






let h1 = document.createElement("h1");



let txt = document.createTextNode("Hello World!");

let txt_h2 = "Hello world h2!";

let txt_p = "Hello world p!";

h1.appendChild(txt);
header.appendChild(h1);

/* aqui criei o h2 */

for(let i = 0; i < 2; i++){

    let div = document.createElement('div');
 
    let p = document.createElement('p');
    let h2 = document.createElement("h2");

    h2.insertAdjacentText('afterbegin', txt_h2);
    p.insertAdjacentText('afterbegin',txt_p);
    div.appendChild(h2);
    div.appendChild(p);
    main.appendChild(div);
    
}







while(true){
    let theme = parseInt(prompt("Escolha um tema do site que mais lhe agrada:\n 1- Tema Dark\n 2- Tema Blue\n 3- Tema Green"));

    if(theme == 1){
        header.classList.add('texto');
        header.id = 'menu1';
        main.id = 'main1';
        
        break;
    }
    
    else if(theme == 2){
        header.classList.add('texto');
        header.id = 'menu2';
        main.id = 'main2';
        break;
    }
    
    else if(theme == 3){
        header.classList.add('texto');
        header.id = 'menu3';
        main.id = 'main3';
        break;
    }
    
    else{
        alert("Valor invalido, digite um dos tres números");

    }

}
