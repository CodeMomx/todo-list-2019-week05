/* Create List

something for user input 

sonthing to submit user input
something to listen to user's click
put input into list
e to prevent default refresh 
add list to DOM
be able to remove task added to list
add somethihng to clear whole list
*/

const toDoInput = document.getElementById('toDoInput')
const submitBtn = document.getElementById('submitBtn')
const toDoList = document.getElementById('toDoList')

function createToDoList(e){
  e.preventDefault()
  let text = toDoInput.value
  if(text === ''){
    return
  }
  const li = document.createElement('li')
  li.innerText = text
  toDoList.appendChild(li)
  toDoInput.value = ''
  count()
}

function crossingOut(e){
  e.target.classList.toggle('cross')
  count()
}

function removeAll(){
  document.querySelectorAll('li').forEach(li => li.remove())
  count()
}

function clearCompleted(){
  document.querySelectorAll('.cross').forEach(li => li.remove())
  count()
}

function count(){
  let total = 0
  document.querySelectorAll('li').forEach(li => total++)
  document.querySelectorAll('.cross').forEach(li => total--)
  document.getElementById('notDone').innerText = `${total} tasks left to complete.`
}


submitBtn.addEventListener('click', createToDoList)
toDoList.addEventListener('click', crossingOut)
document.getElementById('clearList').addEventListener('click', removeAll)
document.getElementById('clearCompleted').addEventListener('click', clearCompleted)
