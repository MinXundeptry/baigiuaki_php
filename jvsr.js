function showAlert() {
    alert("Xin chào! Đây là thông báo từ JavaScript.");
}
function showAlert2() {
    alert("Bạn đã nhấn vào nút mua hàng!");
}
function changeText() {
    document.getElementById("demoBox").innerText = "Nội dung đã được thay đổi!";
}

function changeColor() {
    document.getElementById("demoBox").style.background = "yellow";
}

function updateClock() {
    const now = new Date();
    document.getElementById("clock").innerText =
        now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
