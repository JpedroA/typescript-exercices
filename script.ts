// let num : number = 312;
// let str : string = "joao pedro";
// let bool : boolean = true;
// let list : string[] = ["joao", "maria", "carla", "fabio"];
// let list2 : Array<number> = [20,17,24];
// let obj = { nome: "joao", estado: "RJ", idade: 23};
const listAlunos : any[] = [{nome: "jessica", idade:22}, {nome:"pedro", idade: 24},{nome:"tirion", idade: 45}];

function media(num1: number, num2: number): number {
    return (num1 + num2)/2;
}

let soma = (numb1: number, numb2: number): number => numb1+numb2;
// console.log(num);
// console.log(str);
// console.log(bool);
// console.log(list);
// console.log(list2);
// console.log(obj);
// console.log(obj.estado);
// console.log(obj.idade);
let somar = soma(29,1);
let result = media(20, 30);
console.log(somar);
console.log(result);
console.log(listAlunos);
console.log(listAlunos[1]);