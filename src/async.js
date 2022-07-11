function getAsync(){
  return import('lodash').then(({default:_})=>{
        const element = document.createElement('div')
        element.innerHTML = _.join(['hellow','webpack111'],'  ')
         return element
    })
}
getAsync().then((element)=>{
    document.body.appendChild(element)
})

