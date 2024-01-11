 //if else là lệnh có thể so sánh kí tự còn switch case thì chỉ có thể so sánh số nếu == thì thực thi câu lệnh
 if(1==1){
    console.log("true");
 }
 let choice = +prompt("nhập số:");
 switch (choice) {
    case 1:
        console.log("bạn vừa nhập số 1");
      break;
    default:
        console.log("vui lòng nhập đúng");
  }