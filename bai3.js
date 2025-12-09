document.getElementById("btnLogin").addEventListener("click", function () {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;
    const msg = document.getElementById("message");

    if (user == "" || pass == "") {
        msg.innerText = "Vui lòng nhập đầy đủ username và password!";
        msg.style.color = "red";
    } else {
        msg.innerText = "Đăng nhập hợp lệ! Validate thành công!";
        msg.style.color = "green";
    }
});
