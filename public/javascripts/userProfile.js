const fa_edit = document.getElementsByClassName('fa-edit');
const btnSaveChange = document.getElementById('btnSaveChange');
var data={};

function handleClickfBtnSaveChange(){
  console.log('save');
  btnSaveChange.hidden = true;
  
  data["name"] = fa_edit[0].parentNode.children[0].value;
  data["email"] = fa_edit[1].parentNode.children[0].value;
  data["phone"] = fa_edit[2].parentNode.children[0].value;
  data["password"] = fa_edit[3].parentNode.children[0].value;
  console.log(data);
  for (let index = 0; index < fa_edit.length; index++) {
    const element = fa_edit[index];
    element.parentNode.children[0].setAttribute('readOnly',true);
    element.parentNode.children[0].classList.remove('myOnChange');
  }

}
  btnSaveChange.addEventListener('click',handleClickfBtnSaveChange);

function handleClickfFaedit(){
  this.parentNode.children[0].removeAttribute('readonly');
  btnSaveChange.removeAttribute('hidden');
  this.parentNode.children[0].focus();
  this.parentNode.children[0].classList.add('myOnChange');
} 
for(let i = 0;i<fa_edit.length;i++){
  fa_edit[i].addEventListener('click',handleClickfFaedit);
}