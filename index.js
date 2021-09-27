// // 1. In một bảng số từ 1-100 thỏa mãn điều kiện: 
// (gợi ý dùng 2 vòng for lồng
// nhau, để ý chỗ bước nhảy)
// • Bảng số gồm 10 hàng và 10 cột
// • Các giá trị trong hàng là liên tiếp nhau
// // • Các giá trị trong cột hơn kém nhau 10

// ======================================================

function bai1() {
    var content = "";
    var n = 1;
    for (var k = 1; k <= 10; k++) {
        for (var i = 1; i <= 10; i++) {
            if (i === 10) {
                content += n + "";

            } else {
                content += n + "-";

            }
            n++;
        }
        content += "<br>"
    }
    document.getElementById("bai1").innerHTML = content;

}
// ===============================
// 2. Viết function nhận vào tham số là 
// một mảng sốnguyên,tìm và in ra các số
// nguyên tốtrong mảng?


var numList = [];
function addNumberbai2() {
    var txtNumber = document.getElementById("txtNumber").value;
    var convertNumber = txtNumber.split(",")
    // sẽ đc hiểu chỉ lấy số và không lấy khoảng trắng
    for (var i = 0; i < convertNumber.length; i++) {
        numList.push(+convertNumber[i])
    }

}
var prime = []
function checkPrimeNumber(j) {
    var count = 0;
    for (var i = 1; i <= numList[j]; i++) {
        if (numList[j] % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        prime.push(numList[j])
        // push thêm giá trị vào mảng
        return
    }
}
function bai2() {
    for (var j = 0; j < numList.length; j++)
        checkPrimeNumber(j);
    document.getElementById("bai2").innerHTML = "các số nguyên tố : " + prime
}
// ========================================================
// 3.Viết function nhận vào tham số n, tính S=(2+3+4...+n)+2n
// ========================================================
function bai3() {
    var n = document.getElementById("txtNumber3").value;
    var sum = 0;
    for (var i = 2; i <= n; i++) {
        sum += i;
    }
    sum = sum + (2 * n);
    document.getElementById("bai3").innerHTML = "s = " + sum
}
// ============================================
// 4.Viết function nhận vào tham sốn, tính sốlượng ước sốcủa n. Vd: n = 8 => 
// Ước sốcủa 8 là : 8,4,2,1
// ===========================================
function bai4() {
    var n = document.getElementById("txtNumber4").value;
    var content = "";
    if (n == 0) {
        document.getElementById("bai4").innerHTML = "số 0 không phải là ước của bất kì số nguyên nào"

    } else {
        for (var i = n; i >= 0; i--) {
            if (n % i === 0) {
                content += i + " "
            }
        }
        document.getElementById("bai4").innerHTML = "ước số cua " + n + "là " + content
    }
}
// =============================================================
// 5.Viết chương trình tìm số đảo ngược của 1 sốnguyên dương n nhập từbàn 
// phím.Vd :1234 => 4321 (Gợi y: duyệt chuỗi giống nhưduyệt mảng)
// ==============================================================

function bai5() {
    var n = document.getElementById("txtNumber5").value;
    var a = n.split("");

    a.reverse();
    var c = a.join("");

    console.log(a);
    document.getElementById("bai5").innerHTML = "số đảo ngược của " + n + " là: " + c;
}
// =================================================
// 6.Tìm x nguyên dương lớn nhất, biết 1+2+3+...+x ≤100
// ===================================================
function bai6() {
    var x = 0;
    var sum = 0;
    while (sum <= 100) {
        x++
        sum = sum + x
       
    }
    document.getElementById("bai6").innerHTML = "số nguyên lớn nhất cần tìm là " + (x - 1);


}
// ===================================================
// 7. Viết function nhận vào sốn, in ra bảng cửu chương tương ứng với số đó. 
// Vd: n = 3 
// ====================================================

function bai7() {
    var n = document.getElementById("txtNumber7").value;
    var content = ""


    for (var i = 0; i <= 10; i++) {
        var tich = n * i;
        content = content + (n + "x" + i + "=" + tich) + "<br>"

        console.log(tich);
        document.getElementById("bai7").innerHTML = n + " là :" + "<br>" + content
    }

}
// ==========================================
// 8.Viết hàm chia bài cho 4 người chơi
// =======================================

function bai8() {
    var cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
        "AS", "7H", "9K", "10D"];
    var p1 = [];
    var p2 = [];
    var p3 = [];
    var p4 = [];
    var a = 0;
    var b = 1;
    var c = 2;
    var d = 3;
    for (var i = 1; i <= 3; i++) {
        p1.push(cards[a]);
        a += 4
        p2.push(cards[b]);
        b += 4
        p3.push(cards[c]);
        c += 4
        p4.push(cards[d]);
        d += 4
    }

    document.getElementById("bai8").innerHTML = "player 1 : [ " + p1 + " ]" + "<br>" +
        "player 1 : [ " + p2 + " ]" + "<br>" + "player 1 : [ " + p3 + " ]" + "<br>" + "player 1 : [ " + p4 + " ]"

}
// ==========================================
// 9, viết chương trình nhập vào m là tổng số chó và gà, n là tổng số
// chân, yêu cầu tìm số gà và cho
// ==========================================
function bai9() {
    var m = document.getElementById("txtNumber9M").value;
    var n = document.getElementById("txtNumber9N").value;
    var cho = 0;
    for (var ga = 0; ga <= 36; ga++) {
        if ((ga * 2) + ((m - ga) * 4) == n) {

            cho = m - ga

        }
        document.getElementById("bai9").innerHTML = "số con gà là " + (m - cho) + " và " + "số con chó là " + cho
    }

}
// -===========================================
// 10. Nhập vào số giờ và sốphút => góc lệch giữa kim giờvà kim phút. Vd 6:10
// ============================================

function bai10() {
    var h = document.getElementById("txtNumber10H").value;
    h = parseInt(h)
    var m = document.getElementById("txtNumber10M").value;
    m = parseInt(m)
    var deg = ((6 * m) - (((h * 60) + m) / 2));

    if (deg == 360) {
        deg = 360 - deg

    } else if (deg < 0) {

        deg = -deg
    } else {
        deg;
    }

    document.getElementById("bai10").innerHTML = "góc lệch giưa kim giờ và phút là " + deg + " độ"
}

