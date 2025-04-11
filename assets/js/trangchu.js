window.addEventListener("load", function () {
    date_content();
    searchData();

    var tag = ["Laptop", "Samsung", "Screen", "Camera", "iPhone", "Watch", "Tablet"];
    for (var t of tag) addLinkToElement(".tags_container", t, "index.html?search=" + t);
    
    // Phone
    var phoneBrand = ["iPhone", "Samsung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing Phone", "Masstel", "Sony", "Itel"];
    for (var phoneBrands of phoneBrand) addLinkToElement(".phone-brand", phoneBrands, "index.html?search=" + phoneBrands);

    var phonePriceLevel = ["Under 2 Million", "From 2 - 4 Million", "From 4 - 7 Million", "From 7 -13 Million", "From 13 - 20 Million", "Above 20 Million"];
    for (var phonePriceLevels of phonePriceLevel) addLinkToElement(".phone-pricelevel", phonePriceLevels, "index.html?search=" + phonePriceLevels);

    var phoneHot = ["iPhone 16 Series", "iPhone 16e", "iPhone 15 Pro Max", "Galaxy S25 Ultra", "Galaxy Z Flip6", "Xiaomi 15", "Oppo Reno 13", "Redmi Note 14", "Samsung Galaxy A56", "Samsung Galaxy A36", "Nothing Phone 2A", "Tecno Camon 30S", "Samsung M55"];
    for (var phoneHots of phoneHot) addLinkToElement(".phone-hot", phoneHots, "index.html?search=" + phoneHots);

    var tabletBrand = ["iPad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem Thêm Tất Cả Tablet"];
    for (var tabletBrands of tabletBrand) addLinkToElement(".tablet-brand", tabletBrands, "index.html?search=" + tabletBrands);

    var tabletHot = ["iPad Air M3", "iPad A16", "iPad Air 2024", "iPad Pro 2024", "iPad Mini 7", "Galaxy Tab S10 Series", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 7 Pro", "Xiaomi Pad 7", "Huawei Matepad 11.5&quot;s", "Xiaomi Pad SE", "Teclast M50"];
    for (var tabletHots of tabletHot) addLinkToElement(".tablet-hot", tabletHots, "index.html?search=" + tabletHots);

    // Laptop
    var laptopBrand = ["Mac", "ASUS", "Lenovo", "Dell", "HP", "Acer", "LG", "Huawei", "MSI", "Gigabyte", "Vaio", "Masstel"];
    for (var laptopBrands of laptopBrand) addLinkToElement(".laptop-hot", laptopBrands, "index.html?search=" + laptopBrands);
    
    var latopPriceLevel = ["Under 10 Million", "From 10 - 15 Million", "From 15 - 20 Million", "From 20 - 25 Million", "From 25 - 30 Million", "Above 30 Million"];
    for (var latopPriceLevels of latopPriceLevel) addLinkToElement(".laptop-pricelevel", latopPriceLevels, "index.html?search=" + latopPriceLevels);

    var laptopDamandUser = ["Văn Phòng", "Gaming", "Mỏng Nhẹ", "Đồ Họa - Kỹ Thuật", "Sinh Viên", "Cảm Ứng", "Laptop AI", "Mac CTO - Nâng Cấp Theo Cách Của Bạn"];
    for (var laptopDamandUsers of laptopDamandUser) addLinkToElement(".laptop-demanduser", laptopDamandUsers, "index.html?search=" + laptopDamandUsers);

    var laptopChipLevel = ["Laptop Core i3", "Laptop Core i5", "Laptop Core i7", "Laptop Core i9", "Apple M1 Series", "Apple M2 Series", "Apple M3 Series", "Apple M4 Series", "AMD Ryzen", "Intel Core Ultra"];
    for (var laptopChipLevels of laptopChipLevel) addLinkToElement(".laptop-chiplevel", laptopChipLevels, "index.html?search=" + laptopChipLevels);

    var laptopScreenSize = ["Laptop 12 inch", "Laptop 13 inch", "Laptop 14 inch", "Laptop 15.6 inch", "Laptop 16 inch"];
    for (var laptopScreenSizes of laptopScreenSize) addLinkToElement(".laptop-screensize", laptopScreenSizes, "index.html?search=" + laptopScreenSizes);

    // Sound and Headphone
    var headphoneType = ["Bluetooth", "Chụp Tai", "Nhét Tai", "Có Dây", "Thể Thao", "Gaming", "Xem Tất Cả Tai Nghe"];
    for (var headphoneTypes of headphoneType) addLinkToElement(".headphone-type", headphoneTypes, "index.html?search=" + headphoneTypes);

    var headphoneBrand = ["Apple", "Sony", "JBL", "Samsung", "Marshall", "Soundpeats", "Bose", "Edifier", "Xiaomi", "Huawei", "Sennheiser", "Havit", "Beats", "Nothing"];
    for (var headphoneBrands of headphoneBrand) addLinkToElement(".headphone-brand", headphoneBrands, "index.html?search=" + headphoneBrands);

    var priceLevel = ["Under 200K", "Under 500K", "Under 1 Million", "Under 2 Million", "Under 5 Million"];
    for (var priceLevels of priceLevel) addLinkToElement(".priceLevel", priceLevels, "index.html?search=" + priceLevels);

    var soundType = ["Loa Bluetooth", "Loa Mini", "Loa Karaoke", "Loa Soundbar", "Loa Vi Tính", "Xem Tất Cả Loa"];
    for (var soundTypes of soundType) addLinkToElement(".sound-type", soundTypes, "index.html?search=" + soundTypes);

    var soundBrand = ["JBL", "Marshall", "Harman Kardon", "Acnos", "Samsung", "Sony", "Arirang", "LG", "Alpha Works", "Edifier", "Bose", "Nanomax"];
    for (var soundBrands of soundBrand) addLinkToElement(".sound-brand", soundBrands, "index.html?search=" + soundBrands);

    var soundOutstandingProduct = ["AirPods 4", "AirPods Pro 2", "Galaxy Buds 3 Pro", "JBL Tour Pro 3", "Sony WH-1000XM5", "Oppo Enco Air3i", "Redmi Buds 6 Pro", "Onyx Studio 9", "Marshall Willen II"];
    for (var soundOutstandingProducts of soundOutstandingProduct) addLinkToElement(".sound-featureproduct", soundOutstandingProducts, "index.html?search=" + soundOutstandingProducts);

    var micType = ["Micro Không Dây", "Mic Livestream", "Mic Phòng Thu, Podcast", "Mic cài áo"];
    for (var micTypes of micType) addLinkToElement(".mic-type", micTypes, "index.html?search=" + micTypes);

    // Watch and Camera
    var watchType = ["Đồng Hồ Thông Minh", "Vòng Đeo Tay Thông Minh", "Đồng Hồ Định Vị Trẻ Em", "Dây Đeo"];
    for (var watchTypes of watchType) addLinkToElement(".phone-hot", watchTypes, "index.html?search=" + watchTypes);

    var watchBrand = ["Apple Watch", "Samsung", "Xiaomi", "Huawei", "Coros", "Garmin", "Kieslect", "Amazfit", "Black Shark" ,"Mibro", "Masstel", "imoo", "Kospet", "MyKID", "KAVVO"];
    for (var watchBrands of watchBrand) addLinkToElement(".phone-hot", watchBrands, "index.html?search=" + watchBrands);

    var watchOutstandingProduct = ["Apple Watch Series 10", "Apple Watch Ultra 2", "Samsung Galaxy Watch Ultra", "Apple Watch SE", "imoo Z1", "Viettel MyKID 4G Lite", "Xiaomi Watch S4", "Xiaomi Mi Band 9 Active", "Huawei Watch D2", "Huawei Fit 3", "Garmin Instinct E", "Garmin Instinct 3"];
    for (var watchOutstandingProducts of watchOutstandingProduct) addLinkToElement(".phone-hot", watchOutstandingProducts, "index.html?search=" + watchOutstandingProducts);

    var cameraType = ["Camera An Ninh", "Camera Hành Trình", "Action Camera", "Camera AI", "Gimbal", "Tripod", "Máy Ảnh", "Flycam", "Xem Tất Cả Camera"];
    for (var cameraTypes of cameraType) addLinkToElement(".phone-hot", cameraTypes, "index.html?search=" + cameraTypes);

    var cameraOutstandingProduct = ["Camera An Ninh Imou", "Camera An Ninh Ezviz", "Camera An Ninh Xiaomi", "Camera An Ninh TP-Link", "Camera Tiandy", "Camera DJI", "Camera Insta360", "Máy Ảnh Fujifilm", "Máy Ảnh Canon", "Máy Ảnh Sony", "Gopro Hero 13", "Flycam dji", "DJI Action 5 Pro", "DJI Action 4"];
    for (var cameraOutstandingProducts of cameraOutstandingProduct) addLinkToElement(".phone-hot", cameraOutstandingProducts, "index.html?search=" + cameraOutstandingProducts);

    // // Household Appliances
    // var kitchenAppliances = ["Nồi Chiên Không Dầu", "Máy Rửa Bát", "Lò Vi Sóng", "Nỗi Cơm Điện", "Máy Xay Sinh Tố", "Máy Ép Trái Cây", "Máy Làm Sữa Hạt", "Bếp Điện", "Ấm Siêu Tốc", "Nồi Áp Suất", "Nồi Nấu Chậm", "Máy Ép Chậm"];
    // for (var kitchenAppliancess of kitchenAppliances) addLinkToElement(".phone-hot", kitchenAppliancess, "index.html?search=" + kitchenAppliancess);

    // var healthBeauty = ["Máy Đo Huyết Áp", "Máy Sấy Tóc", "Máy Massage", "Máy Cạo Râu", "Cân Sức Khỏe", "Bàn Chải Điện", "Máy Tăm Nước", "Tông Đơ Cắt Tóc", "Máy Tỉa Lông Mũi", "Máy Rửa Mặt"];
    // for (var healthBeautys of healthBeauty) addLinkToElement(".phone-hot", healthBeautys, "index.html?search=" + healthBeautys);

    // var familyDevice = ["Robot Hút Bụi", "Máy Lọc Không Khí", "Quạt", "Máy Hút Bụi Cầm Tay", "Máy Rửa Chén", "TV Box", "Máy Chiếu", "Đèn Thông Minh", "Bàn Ủi", "Chăm Sóc Thú Cưng", "Máy Hút Ẩm"];
    // for (var familyDevices of familyDevice) addLinkToElement(".phone-hot", familyDevices, "index.html?search=" + familyDevices);

    // var householdAppliancesOutstandingProduct = ["Robot Hút Bụi Dreame X40 Ultra", "Máy Chơi Game Sony PS5 Slim", "Máy Chiếu Beecube X2 Max Gen 3", "Robot Hút Bụi Ecovacs X5 Pro Omni", "Robot Hút Bụi Ecovacs N30", "Robot Hút Bụi Xiaomi S20", "Máy Lọc Không Khí Xiaomi", "Robot Hút Bụi Ecovacs", "Máy Hút Bụi Dreame"];
    // for (var householdAppliancesOutstandingProducts of householdAppliancesOutstandingProduct) addLinkToElement(".phone-hot", householdAppliancesOutstandingProducts, "index.html?search=" + householdAppliancesOutstandingProducts);

    // var householdAppliancesBrand = ["Philips", "Kangaroo", "Panasonic", "Sunhouse", "Sharp", "Gaabor", "Bear", "AQUA", "Dreame", "Kalite", "Xiaomi", "Cuckoo"];
    // for (var householdAppliancesBrands of householdAppliancesBrand) addLinkToElement(".phone-hot", householdAppliancesBrands, "index.html?search=" + householdAppliancesBrands);

    // // Accessory
    // var accessoryPhone = ["Phụ Kiện Apple", "Dán Màn Hình", "Ốp Lưng - Bao Da", "Thẻ Nhớ", "Apple Care +", "Samsung Care +", "Sim 4G", "Cáp, Sạc", "Pin Dự Phòng", "Phụ Kiện Điện Thoại"];
    // for (var accessoryPhones of accessoryPhone) addLinkToElement(".phone-hot", accessoryPhones, "index.html?search=" + accessoryPhones);

    // var accessoryLaptop = ["Chuột, Bàn Phím", "Balo Laptop | Túi Chống Sốc", "Phần Mềm", "Webcam", "Giá Đỡ", "Thảm, Lót Chuột", "Sạc Laptop", "Camera Phòng Họp"];
    // for (var accessoryLaptops of accessoryLaptop) addLinkToElement(".phone-hot", accessoryLaptops, "index.html?search=" + accessoryLaptops);

    // var internetDevice = ["Thiết Bị Phát Sóng WiFi", "Bộ Phát WiFi Di Động", "Bộ Kích Sóng WiFi", "Xem Tất Cả Thiết Bị Mạng"];
    // for (var internetDevices of internetDevice) addLinkToElement(".phone-hot", internetDevices, "index.html?search=" + internetDevices);

    // var gaminggear = ["PlayStation", "ROG Ally", "MSI Claw", "Bàn Phím Gaming", "Chuột Chơi Game", "Tai Nghe Gaming", "Tay Cầm Chơi Game", "Xem Tất Cả Gaming Gear"];
    // for (var gaminggears of gaminggear) addLinkToElement(".phone-hot", gaminggears, "index.html?search=" + gaminggears);

    // var accessoryOther = ["Dây Đeo Đồng Hồ", "Dây Đeo Airtag", "Phụ Kiện Tiện Ích", "Phụ Kiện Ô Tô", "Trạm Sạc Dự Phòng", "Thiết Bị Định Vị"];
    // for (var accessoryOthers of accessoryOther) addLinkToElement(".phone-hot", accessoryOthers, "index.html?search=" + accessoryOthers);

    // var storageDevices = ["Thẻ Nhớ", "USB", "Ổ Cứng Di Động"];
    // for (var storageDevicess of storageDevices) addLinkToElement(".phone-hot", storageDevicess, "index.html?search=" + storageDevicess);

    // var accessoryHot = ["Ốp Lưng iPhone 16", "Dám Màn Hình iPhone 16", "Ốp Lưng S25 Series", "Dán Màn Hình S25 Series", "Khăn Lau Màn Hình Apple", "Cáp Sạc iPhone 15", "Nhẫn Thông Minh 9Fit", "DJI Air 3", "Săn Deal Đồng Giá"];
    // for (var accessoryHots of accessoryHot) addLinkToElement(".phone-hot", accessoryHots, "index.html?search=" + accessoryHots);

    // // Pc and Screen and Printer
    // var pcType = ["Build PC", "Cấu Hình Sẵn", "All In One", "PC Bộ"];
    // for (var pcTypes of pcType) addLinkToElement(".phone-hot", pcTypes, "index.html?search=" + pcTypes);

    // var pcDemandUser = ["Gaming", "Đồ Họa", "Văn Phòng"];
    // for (var pcDemandUsers of pcDemandUser) addLinkToElement(".phone-hot", pcDemandUsers, "index.html?search=" + pcDemandUsers);

    // var computerComponents = ["CPU", "Main", "RAM", "Ổ Cứng", "Nguồn", "VGA", "Tản Nhiệt", "Case", "Xem Tất Cả"];
    // for (var computerComponentss of computerComponents) addLinkToElement(".phone-hot", computerComponentss, "index.html?search=" + computerComponentss);

    // var screenBrand = ["ASUS", "Samsung", "DELL", "LG", "MSI", "Acer", "Xiaomi", "ViewSonic", "Philips", "AOC", "Dahua"];
    // for (var screenBrands of screenBrand) addLinkToElement(".phone-hot", screenBrands, "index.html?search=" + screenBrands);

    // var screenDemandUser = ["Gaming", "Văn Phòng", "Đồ Họa", "Lập Trình", "Màn Hình Di Động", "Arm Màn Hình", "Xem Tất Cả"];
    // for (var screenDemandUsers of screenDemandUser) addLinkToElement(".phone-hot", screenDemandUsers, "index.html?search=" + screenDemandUsers);
    
    // var pcGamingGear = ["PlaStation", "ROG Ally", "Bàn Phím Gaming", "Chuột Chơi Game", "Tai Nghe Gaming", "Tay Cầm Chơi Game", "Xem Tất Cả"];
    // for (var pcGamingGears of pcGamingGear) addLinkToElement(".phone-hot", pcGamingGears, "index.html?search=" + pcGamingGears);

    // var officeEquipment = ["Máy In", "Phần Mềm", "Decor Bàn Làm Việc"];
    // for (var officeEquipments of officeEquipment) addLinkToElement(".phone-hot", officeEquipments, "index.html?search=" + officeEquipments);

    // // Tivi
    // var tiviBrand = ["Samsung", "LG", "Xiaomi", "Coocaa", "Sony", "Toshiba", "TCL", "Hisense", "Aqua"];
    // for (var tiviBrands of tiviBrand) addLinkToElement(".phone-hot", tiviBrands, "index.html?search=" + tiviBrands);

    // var tiviPriceLevel = ["Under 5 Million", "From 5 - 9 Million", "From 9 - 12 Million", "From 12 - 15 Million", "Above 15 Million"];
    // for (var tiviPriceLevels of tiviPriceLevel) addLinkToElement(".phone-hot", tiviPriceLevels, "index.html?search=" + tiviPriceLevels);

    // var tiviSelectByResolution = ["Tivi 4K", "Tivi 8K", "Tivi Full HD", "Tivi OLED", "Tivi QLED", "Android Tivi"];
    // for (var tiviSelectByResolutions of tiviSelectByResolution) addLinkToElement(".phone-hot", tiviSelectByResolutions, "index.html?search=" + tiviSelectByResolutions);

    // var tiviScreenSize = ["Tivi 32 inch", "Tivi 43 inch", "Tivi 50 inch", "Tivi 55 inch", "Tivi 65 inch", "Tivi 70 inch", "Tivi 85 inch"];
    // for (var tiviScreenSizes of tiviScreenSize) addLinkToElement(".phone-hot", tiviScreenSizes, "index.html?search=" + tiviScreenSizes);

    // var tiviOutstandingProduct = ["Tivi Samsung UHD 4K 55 inch", "Tivi NanoCell LG 4K 55 inch", "Tivi LG 4K 55 inch Evo Oled Pose", "Tivi Samsung QLED 4K 65 inch", "Tivi Samsung UHD 4K 65 inch 2024", "Tivi LG 43LM5750PTC FHD 43 inch", "Tivi Xiaomi A 4K 2025 55 inch", "Tivi Coocaa khung tranh QLED 4K 55 inch", "Tivi Coocaa 4K 55 inch 55Y73", "Tivi Di Động LG Standby Me 27 inch", "Giá Treo Tivi"];
    // for (var tiviOutstandingProducts of tiviOutstandingProduct) addLinkToElement(".phone-hot", tiviOutstandingProducts, "index.html?search=" + tiviOutstandingProducts);

    // // Used Goods
    // var productUsedGoods = ["Điện Thoại Cũ", "Máy Tính Bảng Cũ", "Mac Cũ", "Laptop Cũ", "Tai Nghe Cũ", "Laptop Cũ", "Đồng Hồ Thông Minh Cũ", "Đồ Gia Dụng Cũ", "Màn Hình Cũ", "Phụ Kiện Cũ", "Tivi Cũ"];
    // for (var productUsedGoodss of productUsedGoods) addLinkToElement(".phone-hot", productUsedGoodss, "index.html?search=" + productUsedGoodss);

    // var iPhoneUsedGoods = ["iPhone 16 Series Cũ", "iPhone 15 Series Cũ", "iPhone 14 Series Cũ", "iPhone 13 Series Cũ", "iPhone 12 Series Cũ", "iPhone 11 Series Cũ", "Xem Tất Cả iPhone Cũ"];
    // for (var iPhoneUsedGoodss of iPhoneUsedGoods) addLinkToElement(".phone-hot", iPhoneUsedGoodss, "index.html?search=" + iPhoneUsedGoodss);

    // var androidPhoneUsedGoods = ["Samsung Cũ", "Xiaomi Cũ", "Oppo Cũ", "Nokia Cũ", "Realme Cũ", "Vivo Cũ", "ASUS Cũ", "TCL Cũ", "Infinix Cũ"];
    // for (var androidPhoneUsedGoodss of androidPhoneUsedGoods) addLinkToElement(".phone-hot", androidPhoneUsedGoodss, "index.html?search=" + androidPhoneUsedGoodss);

    // var laptopUsedGoods = ["Laptop Dell Cũ", "Laptop ASUS Cũ", "Laptop Acer Cũ", "Laptop HP Cũ", "Laptop Surface Cũ"];
    // for (var laptopUsedGoodss of laptopUsedGoods) addLinkToElement(".phone-hot", laptopUsedGoodss, "index.html?search=" + laptopUsedGoodss);

    // var usedGoodsOutstandingProduct = ["iPhone 16 Pro Max - Cũ Đẹp", "iPhone 15 Pro Max - Cũ Đẹp", "iPhone 14 Pro Max - Cũ Đẹp", "iPhone 13 Pro Max - Cũ Đẹp", "Apple Watch Se 44mm 4G - Cũ Đẹp", "Galaxy Z Fold 5 - Cũ Đẹp", "Galaxy Z Flip 4 - Cũ Đẹp", "Oppo Reno 10 5G - Cũ Đẹp"];
    // for (var usedGoodsOutstandingProducts of usedGoodsOutstandingProduct) addLinkToElement(".phone-hot", usedGoodsOutstandingProducts, "index.html?search=" + usedGoodsOutstandingProducts);
    
    // var appleProductsUsedGoods = ["Apple Watch Cũ", "iPad Cũ"];
    // for (var appleProductsUsedGoodss of appleProductsUsedGoods) addLinkToElement(".phone-hot", appleProductsUsedGoodss, "index.html?search=" + appleProductsUsedGoodss);

    // var tiviUsedGood = ["Tivi Cũ"];
    // for (var tiviUsedGoods of tiviUsedGood) addLinkToElement(".phone-hot", tiviUsedGoods, "index.html?search=" + tiviUsedGoods);
});