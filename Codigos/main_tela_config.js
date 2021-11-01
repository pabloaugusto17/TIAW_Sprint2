/** Feito por Pablo Magalhães
 *  TIAW - Sprint 2
 *  Funcionalidade: Customização perfil
 */

/*
function on_click_img_perfil(){
    
    var caixa_dialogo = confirm("Você deseja alterar sua foto de perfil? ");

}
*/

//Funciolanidade para o sprint 3

function define_atributos_config(){

    //Aqui é definido todas as informações do usuário previmanete para que os 'labels' no html já sejam configurados
    //Os dados são obtidos através do local storage já registrado anterioremente

    nome_usuario.textContent = localStorage.getItem('username');
    data_nascimento.textContent = localStorage.getItem('date');
    email_usuario.textContent = localStorage.getItem('email');
    telefone_usuario.textContent = localStorage.getItem('number');

}
function on_click_editar_nome(){

    //É informado um novo nome através do prompt
    var nome_novo = prompt("Informe um novo nome: ");

    //É apenas feita um tratamento caso não seja digitado nada
    if(nome_novo == null || nome_novo == ""){
        alert("Nome não válido");
    }else{
        //Caso esteja certo o novo valor é adicionado ao local storage e o nome é mudado no label
        localStorage.setItem('username', nome_novo);
        nome_usuario.textContent = localStorage.getItem('username');
        
    }

}
function on_click_editar_data(){


    //Em todos os do-while é feito o tratamento até que o dia/mês/ano sejam informados dentro do limite de cada
    do{

        var dia_novo = prompt("Informe o dia: ");

        if(dia_novo < 0 || dia_novo > 31){
            alert("Dia inválido");
        }
        

    }while(dia_novo < 0 || dia_novo > 31);

    do{

        var mes_novo = prompt("Informe o mês: ");

        if(mes_novo < 0 || mes_novo > 12){
            alert("Mês inválido");
        }


    }while(mes_novo < 0 || mes_novo > 12)
    
    do{

        var ano_novo = prompt("Informe o ano: ");

        if(ano_novo < 0){
            alert("Ano inválido");
        }

    }while(ano_novo < 0);

    //Depois de todos dados serem informados corretamente é feito a inserção do novo valor ao banco de dados junto à mudança no 'label'
    var data_nascimento_nova = dia_novo + "/" + mes_novo + "/" + ano_novo;

    localStorage.setItem('date', data_nascimento_nova);
    data_nascimento.textContent = localStorage.getItem('date');

}
function on_click_editar_email(){


    //Funciona da mesma forma que o nome
    var email_novo = prompt("Informe o email novo: ");

    if(email_novo == "" || email_novo == null || !email_novo.includes("@")){
        alert("Email inválido");
    }else{

        localStorage.setItem('email' , email_novo);
        email_usuario.textContent = localStorage.getItem('email');
    }
}
function on_click_editar_telefone(){
    
    //Funciona da mesma forma que o nome e email
    var novo_telefone = prompt("Informe seu novo telefone: ");

    if(novo_telefone.length < 8){
        alert("Número inválido");
    }else{
        localStorage.setItem('number' , novo_telefone);
        telefone_usuario.textContent = localStorage.getItem('number');
    }
}

//Aqui é criado o usuário para que seja usado em outras funcionalidades e provavelmente será enviado para outros lugares com a função...
//...JSON.stringify

//Esses dados já foram inseridos anteriormente, porém em uma situação real, ele seria obtido através da página de login, após...
//O usuário logar no site

/** Usado para definir o exemplo no site
 * 
 * localStorage.setItem('username', "Levi")
 * localStorage.setItem('date', "25/12/1991")
 * localStorage.setItem('email', "levi_ack@gmail.com")
 * localStorage.setItem('number', "123456789")
 */


let usuario = {
    "id": 1,
    "nome": localStorage.getItem('username'),
    "data": localStorage.getItem('date'),
    "email": localStorage.getItem('email'),
    "telefone": localStorage.getItem('number'),
}

//Chama a função para definir os atributos iniciais 
define_atributos_config();  