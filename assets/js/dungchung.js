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

function searchData() {
    const search_btn = document.getElementById("search_btn");
    search_btn.addEventListener("click", function () {
        const search_data = document.getElementById("search__box").value.trim();
        if (search_data) {
            window.location.href = `search.html?q=${encodeURIComponent(search_data)}`;
        }
    });
}

function addLinkToElement(className, nameTag, link) {
    var new_tag =`
        <li>
            <a href="${encodeURIComponent(link)}">${nameTag}</a>
        </li>`;

    var elements = document.querySelectorAll(className);
    if (elements.length > 0) {
        elements.forEach(item => {
            item.innerHTML += new_tag;
        });
    } else {
        console.log(`Không tìm thấy phần tử với class: ${className}`);
    }
}