# Tài liệu hướng dẫn nạp code cho Board ESP8266 IoT WiFi Uno

1. Sở đồ lắp mạch
    ![https://raw.githubusercontent.com/HaManhDong/Exam2-BKCloud/master/thao/images/exam3_bb.png](https://raw.githubusercontent.com/HaManhDong/Exam2-BKCloud/master/thao/images/exam3_bb.png)
1. Cài đặt Arduino IDE

    1. Download IDE tại
    [https://www.arduino.cc/en/Main/OldSoftwareReleases#previous](https://www.arduino.cc/en/Main/OldSoftwareReleases#previous)
    1. Mở chương trình Arduino chọn File sau đó chọn  Preferences. Nhập `http://arduino.esp8266.com/stable/package_esp8266com_index.json` vào Additional Board Manager URLs
    ![https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/ide.png](https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/ide.png)
1. Kết nối USB với Board mạch IoT WiFi Uno
1. Sau khi kết nối và cài đặt xong, sẽ xuất hiện cổng COM ảo trên máy tính thường có dạng `/dev/ttyUSB0`.
1. Sử dụng Arduino IDE mở file `olp.ino` và vào Tools để  cấu hình như dưới.
    1. Board: NodeMCU 1.0(ESP-12E Module)
    1. Flash Size: 4M (3M SPIFFS)
    1. Port: chọn cổng khi gắn thiết bị vào sẽ thấy xuất hiện(nếu khi chạy có lỗi `error: cannot access /dev/ttyUSB0` mở terminal lên và gõ lệnh `sudo chmod a+rw /dev/ttyUSB0` thay giá trị `/dev/ttyUSB0` bằng port tương ứng)
    1. Upload speed: Chọn cao nhất, nếu nạp không được chọn thấp dần
    `http://arduino.esp8266.com/stable/package_esp8266com_index.json` vào Additional Board Manager URLs
    ![https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/config.png](https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/config.png)
1. Cài đặt thư viện
    1. Mở Sketch -> Include Library -> Manage Libraries
    1. Nhập tên thư viện cần cài đặt
    1. Chọn phiên bản thư viện cần cài đặt
    1. Nhấn install
1. Ấn `Ctrl+Shift+M` để mở `Serial Monitor`
1. Ấn `Ctrl+U` để nạp code.
1. Sử dụng điện thoại chọn Wifi được phát ra bởi board(OLP_BKCLOUD) sau đó cấu hình wifi + mqtt server + mqtt port cho module như trong hình
    1. ![https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_1.png](https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_1.png)
    1. ![https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_2.png](https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_2.png)
    1. Tại bước này có thể tùy chỉnh tham số mqtt server và port
    1. ![https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_3.png](https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_3.png)
    1. ![https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_4.png](https://raw.githubusercontent.com/NTT-TNN/ESP_OLP/master/docs/images/smartwifi_4.png)
1. Ấn save.
