import refs from './refs.js'

let data = []

const addingPair = (input) => {
  const pair = input.split('=')
  const elName = pair[0].trim('')
  const elValue = pair[1].trim('')
  const elData = { name: elName, value: elValue }
  data.push(elData)
  rendering(data)
}

const rendering =(data)=>{
  const markup=data
    .map((dataElement) => {
      return `<li class="listItem">${(dataElement.name)}=${(dataElement.value)}</li>`
    })
    .join("");
  refs.dataSheet.innerHTML = markup;
}


const deleting = () => {
  const item_checked = [...document.getElementsByClassName('checked')];
console.log(item_checked);

const ArrayToDelete =[]  
const newArray = []
item_checked.forEach(item => {
  ArrayToDelete.push(item.textContent.split('=')[0])
  return ArrayToDelete
})
console.log(ArrayToDelete);
ArrayToDelete.forEach(itemToDel=>{
  console.log(itemToDel);

})



  data.forEach(object => {
    if (object.name !== dataKey) {
      newArray.push(object)
    }
     return newArray
  })
  data = newArray
  rendering(data)
}

const sortingByKey = (e) => {
  const key = e.target.id

  const sortedBy = sortByKey(data, key)

rendering(sortedBy)

}

function sortByKey(array, key) {
  return array.sort(function (a, b) {
    const x = a[key];
    const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}

const itemPicker = (e) => {
  if (!e.target.classList.contains('checked')) {
    e.target.classList.add('checked')
  } else { e.target.classList.remove('checked') }

}

const addingData = (e) => {
  e.preventDefault();
  const input = refs.input.value;
  addingPair(input)
  refs.input.value = ''
}


refs.addBtn.addEventListener('click', addingData)
refs.sortByNameBtn.addEventListener('click', sortingByKey)
refs.sortByValueBtn.addEventListener('click', sortingByKey)

refs.dataSheet.addEventListener('click', itemPicker);
refs.deleteBtn.addEventListener('click', deleting)