const ulElem = document.getElementById('infinite_list')
var lastIndex = 0
function initList() {
  var i = 20
  while(i){
    appendItem()
    i--
  }
}
function appendItem(){
  var itemElem = document.createElement('li')
  itemElem.classList.add('infinite_item')
  itemElem.innerHTML = '我是第'+ (++lastIndex) + '个粉丝'
  ulElem.appendChild(itemElem)
}
window.onmousewheel = function(e) {
  if(e.wheelDelta<0){
    console.log('下');
    appendItem()

  }

}


initList()
