const ulElem = document.getElementById('infinite_list')

var lastIndex = 0, topIndex = 0
var runaway = [] // dom to use
var nowSee = [] // dom using


var seeCount = parseInt(screen.height / 62) + 5
var scrollTop = 0
function initList() {
  var i = 20, itemD
  while(i){
    itemD = createItem()
    itemD.innerHTML = '我是第'+ (++lastIndex) + '个粉丝'
    ulElem.appendChild(itemD)
    nowSee.push(itemD)
    i--
  }
}

function createItem(){
  var itemElem = document.createElement('li')
  itemElem.classList.add('infinite_item')
  return itemElem
}

function buildRunaway(){
  var i = 20
  while(i){
    runaway.push(createItem())
    i--
  }
}

var addEl,delEl,firstNode

function downHandler(){
  console.log('下');
  addEl = runaway.pop()
  addEl.innerHTML = '我是第'+ (++lastIndex) + '个粉丝'
  nowSee.push(addEl)
  ulElem.appendChild(addEl)
  delEl = nowSee.shift()
  ulElem.removeChild(delEl)
  runaway.push(delEl)
  topIndex ++
}
function upHandler(){
  console.log('上')
  if(topIndex === 0){
    return
  }
  addEl = runaway.pop()
  addEl.innerHTML = '我是第'+ (--topIndex) + '个粉丝'
  nowSee.unshift(addEl)
  firstNode = ulElem.firstChild
  ulElem.insertBefore(addEl,firstNode)
  delEl = nowSee.pop()
  ulElem.removeChild(delEl)
  runaway.push(delEl)
  --lastIndex
}

initList()
buildRunaway()
var timer
window.onmousewheel = function(e) {
  if(e.wheelDelta>0){
    if(!timer){
      timer = setTimeout(function() {
        upHandler()
        timer = null
      }, 0)
    }


  }
  if(e.wheelDelta<0){
    if(!timer){
      timer = setTimeout(function() {
        downHandler()
        timer = null
      }, 0)
    }
  }
  scrollTop = document.body.scrollTop
}
