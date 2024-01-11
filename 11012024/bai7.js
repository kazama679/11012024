let a = +prompt("nhập số a:");
let b = +prompt("nhập số b:");
let c = +prompt("nhập số c:");
if(a>b&&a>c){
    console.log("a lớn nhất");
} else if(b>c&&b>a){
    console.log("b lớn nhất");
} else if(c>a&&c>b){
    console.log("c lớn nhất");
} else{
    console.log("ko hợp lệ");
}