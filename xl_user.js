var userApi="http://localhost:3000/user";

function themuser(){
    const username = document.querySelector('input[name = "username"]').value;
    const password = document.querySelector('input[name = "passWord"]').value;
    const position = document.querySelector('input[name = "position"]').value;
    const usr = new user();
    usr.setUsername(username);
    usr.setPassword(password);
    usr.setPosition(position);
    const db = new database();
    db.them(userApi,usr);
}
async function doc_user(){
    const db = new database();
    const users = await db.doc(userApi);
    const username = document.querySelector('input[name = "username"]').value;
    const password = document.querySelector('input[name = "passWord"]').value;
    //var list = document.querySelector("#listuser");

    kq = 0;
    po = -1;    
    for( let i = 0; i<users.length; i++)
    {
        if(users[i]['username'] == username && users[i]['password'] == password ){
            kq = 1
            po = users[i]['position'];
            break;
        }
        
    ;}
    if(kq == 1 && po == 0){
        window.location= "admin.html";
    }
    if(kq == 1 && po == 1){
        window.location= "index.html";
    }
    else{
        alert ('username va password sai')
    }
    list.innerHTML = text;
}
//                data.sort((a, b) => new Date(b.ngaydang) - new Date(a.ngaydang));
