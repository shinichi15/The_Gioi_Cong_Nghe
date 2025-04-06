window.addEventListener("load", function () {
    date_content();
    searchData();

    var tags = ["Laptop", "Samsung", "Screen", "Camera", "iPhone", "Watch", "Tablet"];
	for (var t of tags) addTags(t, "index.html?search=" + t);
});