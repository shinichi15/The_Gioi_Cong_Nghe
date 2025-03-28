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