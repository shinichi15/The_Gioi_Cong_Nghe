window.addEventListener("load", function () {
    date_content();
    searchData();

    var tags = ["Mobile", "Laptop", "Camera", "Tablet", "Computer", "Tivi", "Printer", "PC"];
    for(var t of tags) addTags(t, "index.html?search=" + t)
});