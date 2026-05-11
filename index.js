// Ẩn message lúc đầu
document.getElementById("showme").style.display = "none";

// Lấy form
const form = document.getElementById("loginForm");

// Khi submit form
form.addEventListener("submit", function(event){

    event.preventDefault();

    // Lấy dữ liệu nhập
    const userName = document.getElementById("userName").value;

    const pwd = document.getElementById("pwd").value;

    // Tài khoản đúng
    if(userName === "anhdangiu" && pwd === "2505"){

        // Hiện message
        document.getElementById("showme").style.display = "block";

        // Hiện footer
        document.querySelector("footer").style.display = "block";

        // Cuộn xuống message
        document.getElementById("showme")
        .scrollIntoView({ behavior: "smooth" });

    }

    // Sai tài khoản
    else{

        alert("Sai tên hoặc mật khẩu!");

    }

});


// ================= EFFECT =================

function createElement(type, emoji){

    const element = document.createElement("div");

    element.classList.add(type);

    element.innerHTML = emoji;

    element.style.left = Math.random() * 100 + "vw";

    element.style.animationDuration =
    Math.random() * 3 + 2 + "s";

    document.body.appendChild(element);

    setTimeout(() => {
        element.remove();
    }, 5000);

}

// Tim
function hearts(){
    createElement("hearts", "❤️");
}

// Sao
function stars(){
    createElement("stars", "⭐");
}

// Bướm
function butterfly(){
    createElement("butterfly", "🦋");
}

// Chạy effect
setInterval(hearts, 1000);

setInterval(stars, 1200);

setInterval(butterfly, 1500);