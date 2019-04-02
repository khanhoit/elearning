function userLogout(e){
  document.cookie = "mkt_u=; expires = Thu, 01 Jan 1970 00:00:00 GMT;path = /";
  const data= document.cookie;
  console.log('dangxuat');
}

const dangxuat = document.getElementById('dangxuat');
dangxuat.addEventListener('click',userLogout);
