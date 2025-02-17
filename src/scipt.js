// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // ป้องกันการส่งฟอร์ม

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "") {
        alert("Username is required");
        return false;
    }

    if (password === "") {
        alert("Password is required");
        return false;
    }

    // ที่นี่จะสามารถเชื่อมต่อกับฐานข้อมูลหรือส่งข้อมูลได้
    alert("Login successful!");

    // หากต้องการส่งฟอร์มจริงๆ ให้ใช้:
    // this.submit();
});
