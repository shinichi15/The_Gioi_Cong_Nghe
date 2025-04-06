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

// const categories = {
//     tags: ["Samsung", "iPhone", "Huawei", "Oppo", "Mobi"],

//     // Phone And Tablet
//     phoneBrand: ["iPhone", "Samsung", "Xiaomi", "Oppo", "Realme", "Techno", "Vivo", "Infinix", "Nokia", "Nubia", "Nothing Phone", "Masstel", "Sony", "Itel"],
//     phonePriceLevel: ["Under 2 Million", "From 2 - 4 Million", "From 4 - 7 Million", "From 7 -13 Million", "From 13 - 20 Million", "Above 20 Million"],
//     phoneHot: ["iPhone 16 Series", "iPhone 16e", "iPhone 15 Pro Max", "Galaxy S25 Ultra", "Galaxy Z Flip6", "Xiaomi 15", "Oppo Reno 13", "Redmi Note 14", "Samsung Galaxy A56", "Samsung Galaxy A36", "Nothing Phone 2A", "Tecno Camon 30S", "Samsung M55"],
//     tabletBrand: ["iPad", "Samsung", "Xiaomi", "Huawei", "Lenovo", "Nokia", "Teclast", "Máy đọc sách", "Kindle", "Boox", "Xem Thêm Tất Cả Tablet"],
//     tabletHot: ["iPad Air M3", "iPad A16", "iPad Air 2024", "iPad Pro 2024", "iPad Mini 7", "Galaxy Tab S10 Series", "Galaxy Tab S9 FE 5G", "Xiaomi Pad 7 Pro", "Xiaomi Pad 7", "Huawei Matepad 11.5&quot;s", "Xiaomi Pad SE", "Teclast M50"],

//     //Laptop
//     laptopBrand: ["Mac", "ASUS", "Lenovo", "Dell", "HP", "Acer", "LG", "Huawei", "MSI", "Gigabyte", "Vaio", "Masstel"],
//     latopPriceLevel: ["Under 10 Million", "From 10 - 15 Million", "From 15 - 20 Million", "From 20 - 25 Million", "From 25 - 30 Million", "Above 30 Million"],
//     laptopDamandUser: ["Văn Phòng", "Gaming", "Mỏng Nhẹ", "Đồ Họa - Kỹ Thuật", "Sinh Viên", "Cảm Ứng", "Laptop AI", "Mac CTO - Nâng Cấp Theo Cách Của Bạn"],
//     laptopChipLevel: ["Laptop Core i3", "Laptop Core i5", "Laptop Core i7", "Laptop Core i9", "Apple M1 Series", "Apple M2 Series", "Apple M3 Series", "Apple M4 Series", "AMD Ryzen", "Intel Core Ultra"],
//     laptopScreenSize: ["Laptop 12 inch", "Laptop 13 inch", "Laptop 14 inch", "Laptop 15.6 inch", "Laptop 16 inch"],

//     //Sound and Headphone
//     headphoneType: ["Bluetooth", "Chụp Tai", "Nhét Tai", "Có Dây", "Thể Thao", "Gaming", "Xem Tất Cả Tai Nghe"],
//     headphoneBrand: ["Apple", "Sony", "JBL", "Samsung", "Marshall", "Soundpeats", "Bose", "Edifier", "Xiaomi", "Huawei", "Sennheiser", "Havit", "Beats", "Nothing"],
//     headphonePriceLevel: ["Headphone Under 200K", "Headphone Under 500K", "Headphone Under 1 Million", "Headphone Under 2 Million", "Headphone Under 5 Million"],
//     soundType: ["Loa Bluetooth", "Loa Mini", "Loa Karaoke", "Loa Soundbar", "Loa Vi Tính", "Xem Tất Cả Loa"],
//     soundBrand: ["JBL", "Marshall", "Harman Kardon", "Acnos", "Samsung", "Sony", "Arirang", "LG", "Alpha Works", "Edifier", "Bose", "Nanomax"],
//     soundOutstandingProduct: ["AirPods 4", "AirPods Pro 2", "Galaxy Buds 3 Pro", "JBL Tour Pro 3", "Sony WH-1000XM5", "Oppo Enco Air3i", "Redmi Buds 6 Pro", "Onyx Studio 9", "Marshall Willen II"],
//     micType: ["Micro Không Dây", "Mic Thu Âm"],

//     // Watch and Camera
//     watchType: ["Đồng Hồ Thông Minh", "Vòng Đeo Tay Thông Minh", "Đồng Hồ Định Vị Trẻ Em", "Dây Đeo"],
//     watchBrand: ["Apple Watch", "Samsung", "Xiaomi", "Huawei", "Coros", "Garmin", "Kieslect", "Amazfit", "Black Shark" ,"Mibro", "Masstel", "imoo", "Kospet", "MyKID", "KAVVO"],
//     watchOutstandingProduct: ["Apple Watch Series 10", "Apple Watch Ultra 2", "Samsung Galaxy Watch Ultra", "Apple Watch SE", "imoo Z1", "Viettel MyKID 4G Lite", "Xiaomi Watch S4", "Xiaomi Mi Band 9 Active", "Huawei Watch D2", "Huawei Fit 3", "Garmin Instinct E", "Garmin Instinct 3"],
//     cameraType: ["Camera An Ninh", "Camera Hành Trình", "Action Camera", "Camera AI", "Gimbal", "Tripod", "Máy Ảnh", "Flycam", "Xem Tất Cả Camera"],
//     cameraOutstandingProduct: ["Camera An Ninh Imou", "Camera An Ninh Ezviz", "Camera An Ninh Xiaomi", "Camera An Ninh TP-Link", "Camera Tiandy", "Camera DJI", "Camera Insta360", "Máy Ảnh Fujifilm", "Máy Ảnh Canon", "Máy Ảnh Sony", "Gopro Hero 13", "Flycam dji", "DJI Action 5 Pro", "DJI Action 4"],

//     //Household Appliances
//     kitchenAppliances: ["Nồi Chiên Không Dầu", "Máy Rửa Bát", "Lò Vi Sóng", "Nỗi Cơm Điện", "Máy Xay Sinh Tố", "Máy Ép Trái Cây", "Máy Làm Sữa Hạt", "Bếp Điện", "Ấm Siêu Tốc", "Nồi Áp Suất", "Nồi Nấu Chậm", "Máy Ép Chậm"],
//     healthBeauty: ["Máy Đo Huyết Áp", "Máy Sấy Tóc", "Máy Massage", "Máy Cạo Râu", "Cân Sức Khỏe", "Bàn Chải Điện", "Máy Tăm Nước", "Tông Đơ Cắt Tóc", "Máy Tỉa Lông Mũi", "Máy Rửa Mặt"],
//     familyDevice: ["Robot Hút Bụi", "Máy Lọc Không Khí", "Quạt", "Máy Hút Bụi Cầm Tay", "Máy Rửa Chén", "TV Box", "Máy Chiếu", "Đèn Thông Minh", "Bàn Ủi", "Chăm Sóc Thú Cưng", "Máy Hút Ẩm"],
//     householdAppliancesOutstandingProduct: ["Robot Hút Bụi Dreame X40 Ultra", "Máy Chơi Game Sony PS5 Slim", "Máy Chiếu Beecube X2 Max Gen 3", "Robot Hút Bụi Ecovacs X5 Pro Omni", "Robot Hút Bụi Ecovacs N30", "Robot Hút Bụi Xiaomi S20", "Máy Lọc Không Khí Xiaomi", "Robot Hút Bụi Ecovacs", "Máy Hút Bụi Dreame"],
//     householdAppliancesBrand: ["Philips", "Kangaroo", "Panasonic", "Sunhouse", "Sharp", "Gaabor", "Bear", "AQUA", "Dreame", "Kalite", "Xiaomi", "Cuckoo"],

//     //Accessory
//     accessoryPhone: ["Phụ Kiện Apple", "Dán Màn Hình", "Ốp Lưng - Bao Da", "Thẻ Nhớ", "Apple Care +", "Samsung Care +", "Sim 4G", "Cáp, Sạc", "Pin Dự Phòng", "Phụ Kiện Điện Thoại"],
//     accessoryLaptop: ["Chuột, Bàn Phím", "Balo Laptop | Túi Chống Sốc", "Phần Mềm", "Webcam", "Giá Đỡ", "Thảm, Lót Chuột", "Sạc Laptop", "Camera Phòng Họp"],
//     internetDevice: ["Thiết Bị Phát Sóng WiFi", "Bộ Phát WiFi Di Động", "Bộ Kích Sóng WiFi", "Xem Tất Cả Thiết Bị Mạng"],
//     gaminggear: ["PlayStation", "ROG Ally", "MSI Claw", "Bàn Phím Gaming", "Chuột Chơi Game", "Tai Nghe Gaming", "Tay Cầm Chơi Game", "Xem Tất Cả Gaming Gear"],
//     accessoryOther: ["Dây Đeo Đồng Hồ", "Dây Đeo Airtag", "Phụ Kiện Tiện Ích", "Phụ Kiện Ô Tô", "Trạm Sạc Dự Phòng", "Thiết Bị Định Vị"],
//     storageDevices: ["Thẻ Nhớ", "USB", "Ổ Cứng Di Động"],
//     accessoryHot: ["Ốp Lưng iPhone 16", "Dám Màn Hình iPhone 16", "Ốp Lưng S25 Series", "Dán Màn Hình S25 Series", "Khăn Lau Màn Hình Apple", "Cáp Sạc iPhone 15", "Nhẫn Thông Minh 9Fit", "DJI Air 3", "Săn Deal Đồng Giá"],

//     //Pc and Screen and Printer
//     pcType: ["Build PC", "Cấu Hình Sẵn", "All In One", "PC Bộ"],
//     pcDemandUser: ["Gaming", "Đồ Họa", "Văn Phòng"],
//     computerComponents: ["CPU", "Main", "RAM", "Ổ Cứng", "Nguồn", "VGA", "Tản Nhiệt", "Case", "Xem Tất Cả"],
//     screenBrand: ["ASUS", "Samsung", "DELL", "LG", "MSI", "Acer", "Xiaomi", "ViewSonic", "Philips", "AOC", "Dahua"],
//     screenDemandUser: ["Gaming", "Văn Phòng", "Đồ Họa", "Lập Trình", "Màn Hình Di Động", "Arm Màn Hình", "Xem Tất Cả"],
//     pcGamingGear: ["PlaStation", "ROG Ally", "Bàn Phím Gaming", "Chuột Chơi Game", "Tai Nghe Gaming", "Tay Cầm Chơi Game", "Xem Tất Cả"],
//     officeEquipment: ["Máy In", "Phần Mềm", "Decor Bàn Làm Việc"],

//     //Tivi
//     tiviBrand: ["Samsung", "LG", "Xiaomi", "Coocaa", "Sony", "Toshiba", "TCL", "Hisense", "Aqua"],
//     tiviPriceLevel: ["Under 5 Million", "From 5 - 9 Million", "From 9 - 12 Million", "From 12 - 15 Million", "Above 15 Million"],
//     tiviSelectByResolution: ["Tivi 4K", "Tivi 8K", "Tivi Full HD", "Tivi OLED", "Tivi QLED", "Android Tivi"],
//     tiviScreenSize: ["Tivi 32 inch", "Tivi 43 inch", "Tivi 50 inch", "Tivi 55 inch", "Tivi 65 inch", "Tivi 70 inch", "Tivi 85 inch"],
//     tiviOutstandingProduct: ["Tivi Samsung UHD 4K 55 inch", "Tivi NanoCell LG 4K 55 inch", "Tivi LG 4K 55 inch Evo Oled Pose", "Tivi Samsung QLED 4K 65 inch", "Tivi Samsung UHD 4K 65 inch 2024", "Tivi LG 43LM5750PTC FHD 43 inch", "Tivi Xiaomi A 4K 2025 55 inch", "Tivi Coocaa khung tranh QLED 4K 55 inch", "Tivi Coocaa 4K 55 inch 55Y73", "Tivi Di Động LG Standby Me 27 inch", "Giá Treo Tivi"],

//     //Used Goods
//     productUsedGoods: ["Điện Thoại Cũ", "Máy Tính Bảng Cũ", "Mac Cũ", "Laptop Cũ", "Tai Nghe Cũ", "Laptop Cũ", "Đồng Hồ Thông Minh Cũ", "Đồ Gia Dụng Cũ", "Màn Hình Cũ", "Phụ Kiện Cũ", "Tivi Cũ"],
//     iPhoneUsedGoods: ["iPhone 16 Series Cũ", "iPhone 15 Series Cũ", "iPhone 14 Series Cũ", "iPhone 13 Series Cũ", "iPhone 12 Series Cũ", "iPhone 11 Series Cũ", "Xem Tất Cả iPhone Cũ"],
//     androidPhoneUsedGoods: ["Samsung Cũ", "Xiaomi Cũ", "Oppo Cũ", "Nokia Cũ", "Realme Cũ", "Vivo Cũ", "ASUS Cũ", "TCL Cũ", "Infinix Cũ"],
//     laptopUsedGoods: ["Laptop Dell Cũ", "Laptop ASUS Cũ", "Laptop Acer Cũ", "Laptop HP Cũ", "Laptop Surface Cũ"],
//     usedGoodsOutstandingProduct: ["iPhone 16 Pro Max - Cũ Đẹp", "iPhone 15 Pro Max - Cũ Đẹp", "iPhone 14 Pro Max - Cũ Đẹp", "iPhone 13 Pro Max - Cũ Đẹp", "Apple Watch Se 44mm 4G - Cũ Đẹp", "Galaxy Z Fold 5 - Cũ Đẹp", "Galaxy Z Flip 4 - Cũ Đẹp", "Oppo Reno 10 5G - Cũ Đẹp"],
//     appleProductsUsedGoods: ["Apple Watch Cũ", "iPad Cũ"],
//     tiviUsedGoods: ["Tivi Cũ"],
// }

// const addFunctions = {
//     tags: addTags,

//     Phone And Tablet
//     phoneBrand: addPhoneBrand,
//     phonePriceLevel: addPhonePriceLevel,
//     phoneHot: addPhoneHot,
//     tabletBrand: addTabletBrand,
//     tabletHot: addTabletHot,

//     //Laptop
//     laptopBrand: addLaptopBrand,
//     latopPriceLevel: addLatopPriceLevel,
//     laptopDamandUser: addLaptopDamandUser,
//     laptopChipLevel: addLaptopChipLevel,
//     laptopScreenSize: addLaptopScreenSize,

//     //Sound and Headphone
//     headphoneType: addHeadphoneType,
//     headphoneBrand: addHeadphoneBrand,
//     headphonePriceLevel: addHeadphonePriceLevel,
//     soundType: addSoundType,
//     soundBrand: addSoundBrand,
//     soundOutstandingProduct: addSoundOutstandingProduct,
//     micType: addMicType,

//     // Watch and Camera
//     watchType: addWatchType,
//     watchBrand: addWatchBrand,
//     watchOutstandingProduct: addWatchOutstandingProduct,
//     cameraType: addCameraType,
//     cameraOutstandingProduct: addCameraOutstandingProduct,

//     //Household Appliances
//     kitchenAppliances: addKitchenAppliances,
//     healthBeauty: addHealthBeauty,
//     familyDevice: addFamilyDevice,
//     householdAppliancesOutstandingProduct: addHouseholdAppliancesOutstandingProduct,
//     householdAppliancesBrand: addHouseholdAppliancesBrand,

//     //Accessory
//     accessoryPhone: addAccessoryPhone,
//     accessoryLaptop: addAccessoryLaptop,
//     internetDevice: addInternetDevice,
//     gaminggear: addGaminggear,
//     accessoryOther: addAccessoryOther,
//     storageDevices: addStorageDevices,
//     accessoryHot: addAccessoryHot,

//     //Pc and Screen and Printer
//     pcType: addPcType,
//     pcDemandUser: addPcDemandUser,
//     computerComponents: addComputerComponents,
//     screenBrand: addScreenBrand,
//     screenDemandUser: addScreenDemandUser,
//     pcGamingGear: addPcGamingGear,
//     officeEquipment: addOfficeEquipment,

//     //Tivi
//     tiviBrand: addtiviBrand,
//     tiviPriceLevel: addtiviPriceLevel,
//     tiviSelectByResolution: addtiviSelectByResolution,
//     tiviScreenSize: addtiviScreenSize,
//     tiviOutstandingProduct: addtiviOutstandingProduct,

//     //Used Goods
//     productUsedGoods: addProductUsedGoods,
//     iPhoneUsedGoods: addIPhoneUsedGoods,
//     androidPhoneUsedGoods: addAndroidPhoneUsedGoods,
//     laptopUsedGoods: addLaptopUsedGoods,
//     usedGoodsOutstandingProduct: addUsedGoodsOutstandingProduct,
//     appleProductsUsedGoods: addAppleProductsUsedGoods,
//     tiviUsedGoods: addTiviUsedGoods,

//     //Pc and Screen and Printer
//     pcType: addPcType,
//     pcDemandUser: addPcDemandUser,
//     computerComponents: addComputerComponents,
//     screenBrand: addScreenBrand,
//     screenDemandUser: addScreenDemandUser,
//     pcGamingGear: addPcGamingGear,
//     officeEquipment: addOfficeEquipment,

//     //Tivi
//     tiviBrand: addTiviBrand,
//     tiviPriceLevel: addTiviPriceLevel,
//     tiviSelectByResolution: addTiviSelectByResolution,
//     tiviScreenSize: addTiviScreenSize,
//     tiviOutstandingProduct: addTiviOutstandingProduct,

//     //Used Goods
//     productUsedGoods: addProductUsedGoods,
//     iPhoneUsedGoods: addIPhoneUsedGoods,
//     androidPhoneUsedGoods: addAndroidPhoneUsedGoods,
//     laptopUsedGoods: addLaptopUsedGoods,
//     usedGoodsOutstandingProduct: addUsedGoodsOutstandingProduct,
//     appleProductsUsedGoods: addAppleProductsUsedGoods,
//     tiviUsedGoods: addTiviUsedGoods,
// }

function addTags(nameTag, link) {
    var new_tag = `<a href=` + link + `>` + nameTag + `</a>`;

    // Thêm <a> vừa tạo vào khung tìm kiếm
    var khung_tags = document.getElementsByClassName('tags')[0];
    khung_tags.innerHTML += new_tag;
}