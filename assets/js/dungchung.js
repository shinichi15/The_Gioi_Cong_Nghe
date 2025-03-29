function date_content() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);

    const dateElement = document.querySelector("#date__container");

    if (dateElement) {
        dateElement.innerText = today;
    } else {
        console.error("Không tìm thấy phần tử #date__container");
    }
}

// Thêm từ khóa tìm kiếm
function addTags(nameTag, link) {
    var new_tag = `<a href=` + link + `>` + nameTag + `</a>`;

    // Thêm <a> vừa tạo vào khung tìm kiếm
    var khung_tags = document.getElementsByClassName('tags')[0];
    khung_tags.innerHTML += new_tag;
}

function searchData() {
    const search_btn = document.getElementById("search_btn");

    search_btn.addEventListener("click", function () {
        const search_data = document.getElementById("search__box").value.trim();
        if (search_data) {
            window.location.href = `search.html?q=${encodeURIComponent(search_data)}`;
        }
});

}