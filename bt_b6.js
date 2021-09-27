// bài 1: tìm số nguyên dương nhỏ nhất sao cho :
// 1+2+3+....n > 1000
// =============================================
function bai1() {

    var x = 1;
    var sum = 0;
    while (sum < 1000) {

        sum = sum + x
        x++

    }
    document.getElementById("bai1").innerHTML = "số nguyên dương nhỏ nhất cần tìm là " + x;
}
// =============================================
// bài 2: viết chương trình nhập vào hai số x, n
// tính tổng S(n) = x+ x^2 + x^3 +.... + x^n 
// ===========================================
function bai2() {
    var x = document.getElementById("txtNumber2x").value;
    x = parseInt(x)
    var n = document.getElementById("txtNumber2n").value;
    n = parseInt(n)
    var s = 0;
    for (var i = 1; i <= n; i++) {
        s = s + x ** i
    }
    document.getElementById("bai2").innerHTML = "S( " + n + " ) = " + s
}
// =============================================
// bài 3 : Nhập vào n , và tính giai thừa 1*2 * ...n
// ===========================================
function bai3() {
    var n = document.getElementById("txtNumber3").value;
    n = parseInt(n)
    var gt = 1;
    for (var i = 1; i <= n; i++) {
        gt = gt * i
    }
    document.getElementById("bai3").innerHTML = "Giai thừa của " + n + " là: " + gt;
}
// ============================================
// bài 4: Hãy viết chương trình khi click vào button sẽ
// in ra 10 thẻ div. vị trí div chẵn thì sẽ cho background
// màu đỏ . vị trí lẻ thì background màu xanh
// =============================================
function bai4() {
    var div = document.getElementsByClassName("h");
    console.log(div);
    for (var i = 0; i < div.length; i++) {
        if ((i + 1) % 2 == 0){
            div[i].style.background = "red";
        }else{
            div[i].style.background = "green";
        }
       document.getElementById("bai41").style.display = "block"
    }
    
    
}


