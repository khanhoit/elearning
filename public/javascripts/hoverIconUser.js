const iconUserHeader = document.getElementsByClassName('iconUserHeader')[0];
const childerenIconUserHeader = document.querySelector('.iconUserHeader ul');
iconUserHeader.addEventListener('mousemove',function(){
  childerenIconUserHeader.classList.add('showhiddenIconUserHeader')
})
iconUserHeader.addEventListener('mouseout',function(){
  childerenIconUserHeader.classList.remove('showhiddenIconUserHeader')
})
