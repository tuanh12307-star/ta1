// Hàm cập nhật hình ảnh lớn và văn bản
function upDate(previewPic) {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

// Hàm khôi phục lại trạng thái ban đầu
function unDo() {
    let imageDiv = document.getElementById('image');
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Di chuột hoặc dùng phím Tab qua một hình ảnh dưới đây để hiển thị.";
}

// Hàm được gọi qua sự kiện onload của thẻ body
function initializeGallery() {
    console.log("Sự kiện onload đã kích hoạt: Bắt đầu thiết lập tính năng trợ năng (accessibility).");
    
    // Lấy tất cả các hình ảnh có class "preview"
    let images = document.querySelectorAll('.preview');
    
    // Vòng lặp for để lặp qua từng hình ảnh và thêm thuộc tính tabindex
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
        console.log("Đã thêm tabindex='0' cho hình ảnh số " + (i + 1));
    }
}