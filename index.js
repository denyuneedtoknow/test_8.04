import refs from './refs.js'

const data=[]

const addingPair = (input) =>{
const pair = input.split('=')
const elName =pair[0]
const elValue=pair[1]
const elData={[elName]:elValue}
data.push(elData)
// const dataString = document.createElement("li");
// dataString.textContent = `${elName}=${elValue}`
// refs.dataSheet.append(dataString)
console.log(data[0]);
const markup = data
  .map((dataElement) => {
    // console.log(Object.keys(dataElement));  
    return `<li class="list-item">${Object.keys(dataElement)}=${Object.value(dataElement)}</li>`})
  .join("");
  refs.dataSheet.innerHTML = markup;

}




const addingData=(e) =>{
    e.preventDefault();
    const input = refs.input.value;
    addingPair(input)
    refs.input.value =''
 
}

refs.addBtn.addEventListener('click',addingData )