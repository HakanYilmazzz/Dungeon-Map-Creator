var el = document.getElementById('view');
function append(el, text) {
  var p = document.createElement('p');
  var t = document.createTextNode(text);
  p.appendChild(t);
  el.appendChild(p);
}

function updateMap(el) {
  while (el.firstChild) {
    el.removeChild(el.firstChild);
  }
  var floorMap = DungeonGenerator.generate({
    maxRoomSize: parseInt(document.getElementsByClassName("max")[0].innerText),
    minRoomSize: parseInt(document.getElementsByClassName("min")[0].innerText),
    padding: parseInt(document.getElementsByClassName("floor")[0].innerText),
    rooms: parseInt(document.getElementsByClassName("room")[0].innerText),
    rows: parseInt(document.getElementsByClassName("Xaxis")[0].innerText),
    cols: parseInt(document.getElementsByClassName("Yaxis")[0].innerText)
  });

  floorMap.forEach(function(e){
    var txt = e.map(function(cell){
      return cell.cellType === 'wall' ? 'H' : '\u00a0'})
      .join('');
    append(el,txt);
    }
  )
};

document.getElementById('generate').addEventListener('click',function(){
  updateMap(el);
})

updateMap(el);
