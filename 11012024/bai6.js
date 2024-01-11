let toan = +prompt("nhập điểm toán:");
let van = +prompt("nhập điểm văn:");
let anh = +prompt("nhập điểm anh:");
let TB = (toan+van+anh)/3;
if(TB>8&&TB<10){
    console.log("Giỏi");
} else if(TB>6.5&&TB<7.9){
    console.log("Khá");
} else if(TB>5.0&&TB<6.4){
    console.log("TB");
} else if(TB>0&&TB<5.0){
    console.log("Kém");
} else{
    console.log("ko hợp lệ");
}