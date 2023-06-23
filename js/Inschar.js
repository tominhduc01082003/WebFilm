
// Lấy tham chiếu đến phần tử input tên đăng nhập
var usernameInput = document.getElementById("username");

// Thêm sự kiện lắng nghe khi người dùng thay đổi giá trị trong input
usernameInput.addEventListener("input", function () {
    // Lấy giá trị nhập vào trong input
    var username = usernameInput.value;

    // Kiểm tra độ dài tên đăng nhập (phải từ 6 ký tự trở lên)
    if (username.length < 6) {
        console.log("Tên đăng nhập phải có ít nhất 6 ký tự.");
    }

    // Kiểm tra xem tên đăng nhập có chứa ký tự "@" hay không
    if (!username.includes("@.gmail.com")) {
        console.log("Tên đăng nhập phải chứa ký tự '@gmail.com'.");
    }
});
