const yargs= require("yargs") 
const   {hideBin}=require ('yargs/helpers')

let  yarg= yargs(hideBin(process.argv)).option('b',{
    alias:'n',
    demandOption:true,
    describe: 'n numeros de fibonacci',
    type:'number'
}).check(
     function(argv,options) {if(argv.b<0){ throw new Error("El número tiene que ser positivo"); return
}
if(/^\d+$/.test(argv.b)===false){throw new Error("ingrese un número");
};return true}).parseSync()

let i=0
let a=0
let resultado=0
let b=1
 
function fibonacci(n){
if(n==1){console.log(0); return 0}
if(n==2|| n==3){console.log(1); return 1};
if(n==4){console.log(3); return 3}

while(i<=n-3){resultado=a+b; a=b; b=resultado; ++i}
console.log(resultado)
}




fibonacci(yarg.b);
