	 	 	
**1. Thiết kế cơ sở dữ liệu để lưu trữ dữ liệu từ các sensors:**

**MySQL**: tên database: **iot**

**User: root - Pass: bklcoud**

Các bảng trong mysql: 

**device**

	location | device_id | type | created_at | status
	
	CREATE TABLE device (
	location 	VARCHAR(255) 	NOT NULL,
	device_id 	VARCHAR(255) 	NOT NULL,
	type		VARCHAR(255) 	NOT NULL,
	status 		VARCHAR(255) 	NOT NULL,
	created_at 	DATETIME 	NOT NULL,
	PRIMARY KEY (location)
	)


**sensor**

	location | name | unit | created_at | status
	
	CREATE TABLE sensor (
	name 		VARCHAR(255)	NOT NULL,
	location 	VARCHAR(255) 	NOT NULL,
	unit 		VARCHAR(255),
	status 		VARCHAR(255) 	NOT NULL,
	type 		VARCHAR(255) 	NOT NULL,
	created_at 	DATETIME	NOT NULL,
	PRIMARY KEY (name, location),
	CONSTRAINT fk_device FOREIGN KEY (location) REFERENCES device(location) ON DELETE CASCADE
	)
 

**InFluxDB**:  tên database: **iot**

Các measurement     

**data**

	time | location (tag)  | name (tag) | unit (field - String) | value (field - Float)
	
**2. Các topic trên MQTT**

**esp/data** từ ESP gửi lên Node-red với 2 định dạng:

	{
		location: "", 
		type: "data",
		sensorsData: [
			{name: "DHT11-t", value: 24, unit: "C"},
			{name: "DHT11-h", value: 70, unit: "%"},
		]
	}


**esp/MAC/action** gửi từ Node-red tới ESP với **2** định dạng:

	{
		type: "register", status: "OK"
	}

	{
		type: "ledAction",
		action: "ON/OFF"
	}


**esp/newDevice**

	{
		location: "",
		type: "ESP8266",
		deviceID: "team01",
		sensors:  [
			{ name: "DHT11-t", unit: "C"},
			{ name: "DHT11-h", unit: "%"}
		]
	}

