function getString(){
    return new Promise((resolve,reject)=>{
       setTimeout(()=>{
         resolve('我要打印一下111')
       },2000)
    })
}

async function helloWord(){
   let string = await getString()
   console.log(string)
}

export default helloWord;
