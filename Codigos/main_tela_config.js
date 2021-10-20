function define_atributos_config(){

    var nome_config = "Pablo";
    nome_usuario.textContent = nome_config;

    var data_nascimento_usuario = "17/05/2003";
    data_nascimento.textContent = data_nascimento_usuario;

    var email = "pabloaugustocm@gmail.com";
    email_usuario.textContent = email;

    var telefone = "31982378197";
    telefone_usuario.textContent = telefone;
}
function on_click_img_perfil(){
    
    var caixa_dialogo = confirm("Você deseja alterar sua foto de perfil? ");

}
function on_click_editar_nome(){

    var nome_novo = prompt("Informe um novo nome: ");

    if(nome_novo == null || nome_novo == ""){
        alert("Nome não válido");
    }else{
        nome_usuario.textContent = nome_novo;
    }

}
function on_click_editar_data(){

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

    var data_nascimento_nova = dia_novo + "/" + mes_novo + "/" + ano_novo;

    data_nascimento.textContent = data_nascimento_nova;

}
function on_click_editar_email(){

    var email_novo = prompt("Informe o email novo: ");

    if(email_novo == "" || email_novo == null || !email_novo.includes("@")){
        alert("Email inválido");
    }else{
        email_usuario.textContent = email_novo;
    }


}
function on_click_editar_telefone(){
    
    var novo_telefone = prompt("Informe seu novo telefone: ");

    if(novo_telefone.length < 8){
        alert("Número inválido");
    }else{
        telefone_usuario.textContent = novo_telefone;
    }
}

define_atributos_config();

