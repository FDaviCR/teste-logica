//Teste de lógica Aoop

const secret = "AcoDQeYjrSlByFtyzQhvjoCNVpsaLeQPtGUjQHVzbgabJuAiMHDxwfkNvCwIGmZCTInlSiKvRKxAGzJsgmPeUBAReDzmLzqgJgrXobzfoWiwvRPdFgJzIkSoJscWtVdEbuIRYhXOdHkayBdFIMHSyzIJtmGMhJTiFBaDIzrngCngdSnngUHFWpQpCwElHxunYWsiXKvFOkntcAHiXopTgIKkeovoLrBlPTtMfqTTAgnejUPgKeBsolCtAAjNtKBjf";
const sufixo = "@aoop.com.br";
let arr = [];

let prefix1 = "";
let prefix2 = "";

function fibonacci(x) {
    let a = 1;
    let b = 1;
    let f = 1;

    for (let i = 0; i < x; i++) {
        arr.push(f);
        f = a + b;
        a = b;
        b = f;
    }
}

fibonacci(10);

for (i = 0; i < 10; i++) {
    if(i <= 4){
        prefix1 = prefix1+secret[arr[i]];
    }else{
        prefix2 = prefix2+secret[arr[i]];
    }
}

let email = prefix1.concat(".",prefix2,sufixo);

console.log(email.toLowerCase());
