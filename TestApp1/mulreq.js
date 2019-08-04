setTimeout(function(){
    console.log("Saya ditampilkan dengan jeda 3 detik");
},3000);

console.log("");
function Order(idOrder){
    console.log("ID Order " +idOrder);
    ProcessOrder(idOrder);
}

function ProcessOrder(idOrder){
    setTimeout(function(){
        console.log("ID Order "+idOrder+" Processed"); 
    },3000)
}

Order(101);
Order(102);
Order(103);

console.log("");


function Order1(idOrder,timeOut){
    console.log("ID Order " +idOrder);
    ProcessOrder1(idOrder,timeOut);
}

function ProcessOrder1(idOrder,timeOut){
    setTimeout(function(){
        console.log("ID Order "+idOrder+" Processed"); 
    },timeOut)
}

Order1(201,5000);
Order1(202,1000);
Order1(203,3000);