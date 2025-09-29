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

// 0+1=1+1=2+1=3+2=5+3=8+5=13+8=21
// para i=0 resultado 1, para i=1 resultado 2, para i=2 resultado 4, para i=3 resultado 7, para i=4 resultado 11, para i=5 resultado 16, para i=6 resultado 22

fibonacci(yarg.b);