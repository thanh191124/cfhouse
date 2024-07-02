var sanphamApi = "http://localhost:3000/sanpham";

docsp();
function themsanpham(){
    const tensp = document.querySelector('input[name = "tensp"]').value;
    const giasp = document.querySelector('input[name = "giasp"]').value;
    const chitietsp = document.querySelector('input[name = "chitietsp"]').value;
    const hinhsp = document.querySelector("#img_preview").getAttribute("src");
    const sp = new sanpham();
    sp.setnamesp(tensp);
    sp.setgiasp(giasp);
    sp.setchitietsp(chitietsp);
    sp.sethinhsp(hinhsp);
    const db = new database();
    db.them(sanphamApi,sp);
}
async function docsp(){
    const db = new database();
    const Sps = await db.doc(sanphamApi);
    var list = document.getElementById('list');
    var text = '';
    for ( let i=0; i<Sps.length; i++)
    {
        text += `
        <div class="box25 mr15">
                        <img src="${Sps[i]['hinhsp']}" alt="Product Image">
                        <span class="price">${Sps[i]['giasp']}</span>
                        <button>Đặt hàng</button>
        </div>`;
        
    }
    list.innerHTML = text;
}

function motsp(sanpham){
    let text ="";
    text += ' <div><img src="'+sanpham['hinhsp']+'"></div>';
    text += ' <p>'+ sanpham['tensp'] +'</p>';
    text += '<p>$<span>'+sanpham['giasp']+'</span></p>';
    text += '<input nam="soluong" value="1" min="1" type="number"><lable hidden>'+sanpham[i]+'</lable>';
    text += '<button onclick="chonhang(this)">Chọn Hàng</button>';
    return text;
  }
  
function motspadmin(sanpham){
    let text = `
      <td width="5%"> ${sanpham['id']} </td>
      <td width="30%"><img height="120" width="190" src="${sanpham['hinhsp']}"></td>
      <td width="20%"> ${sanpham['tensp']} </td>
      <td width="20%"><p>$<span> ${sanpham['giasp']}</span></p></td>
      <td width="10%"><button onclick="editsp('${sanpham['id']}')">edit</button></td>
      <td width="10%"><button onclick="xoasp('${sanpham['id']}')">delete</button></td>`;
      console.log(text);
    return text;
  }

  async function docspadmin() {
    const db = new database();
    const Sps = await db.doc(sanphamApi);
    var list = document.querySelector('#showsanphamadmin');
    var text = '';
    for (let i = 0; i < Sps.length; i++) {
      text += '<tr>';
      text += this.motspadmin(Sps[i]);
      text += "</tr>";
    }
    list.innerHTML = text;
  }
  
  async function xoasp(id){
    const db = new database();
    await db.xoa(sanphamApi + "/" + id);
  }
  
  async function editsp(id){
    const db = new database();
    const sp = await db.doc(sanphamApi + "/" + id);
    document.querySelector('input[name="tensp"]').value = sp['tensp'];
    document.querySelector('input[name="giasp"]').value = sp['giasp'];
    document.querySelector('input[name="chitietsp"]').value = sp['chitietsp'];
    document.getElementById('img_preview').src = sp['hinhsp'];
    document.querySelector('input[name="id_sp"]').value = sp['id'];
  }
  
  function capnhat_sanpham(){
    const id = document.querySelector('input[name="id_sp"]').value;
    const tensp = document.querySelector('input[name="tensp"]').value;
    const giasp = document.querySelector('input[name="giasp"]').value;
    const chitietsp = document.querySelector('input[name="chitietsp"]').value;
    const hinhsp = document.querySelector("#img_preview").getAttribute("src");
    // khởi tạo sp
    const sp = new sanpham();
    // gán giá trị tensp
    // sp.setidsp(id);
    sp.settensp(tensp);
    sp.setgiasp(giasp);
    sp.setchitietsp(chitietsp);
    sp.sethinhsp(hinhsp);
    // khởi tạo database
    const db = new database();
    // gọi hàm cập nhật trong database
    db.capnhat(sanphamApi+"/"+id, sp);
  }
    


  
