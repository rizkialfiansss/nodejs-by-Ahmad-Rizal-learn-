var satu = 10;
var dua = 20;
var tiga = satu + dua;
console.log("Penjumlahan antara variable "+satu+" dan variable "+dua+" adalah " +tiga);

var nim = "1302140037";
if(nim == "1302140037"){
    console.log("NIM match dengan nama mahasiswa Rizki Alfian");
}else{
    console.log("NIM tidak match");
}

console.log("");
switch(nim){
    case "1302140038" :
        console.log("Chuyongsss");
        break;
    case "1303140039" :
        console.log("Alay");
        break;
    case "1302140037" :
        console.log("Rizki Alfian");
        break; //perbedaan menggunakan break atau tidak : jika pakai, maka switch akan berhenti di situ, 
        //jika tidak, maka switch akan berlanjut meskipun case sudah terpenuhi dan tetap di tampilkan yang tidak sesuai 
    default :
        console.log("Bukan siapa-siapa");
}

console.log("");
var n = 10;
for(var i =0;i <n;i++){
    console.log("Perulangan for ke "+i);
}

console.log("");
var i = 0;
while(i < n){
    console.log("Perulangan while ke "+i);
    i++;
}

console.log("");
do{
    console.log("Perulangan do ke"+i);
}while(i < n);

console.log("");
var arr = [10,20,30,40];
console.log(arr);

for(var i = 0;i < arr.length;i++){
    console.log(arr[i]);
}

var json = [
    {
        name : "Rizki Alfian",
        age : 23
    },
    {
        name : "Chuyongsss",
        age  : 22
    }
];

console.log("");
for(var i = 0; i < json.length; i++){
    console.log(json[i].name +" memiliki umur "+json[i].age);
}

console.log("");
for(var i = 0; i < json.length; i++){
    if(json[i].name == "Rizki Alfian"){
    console.log(json[i]);
    }else{
        console.log("Berbeda User");
    }
}

console.log("");
function MyFunction(){
    console.log("I'm a Function");
}
MyFunction();

console.log("");
function MyFunction2(){
    return "I'm a Function2 with return value";
}
console.log(MyFunction2());
