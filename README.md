	 	 	
**1. Thiết kế cơ sở dữ liệu để lưu trữ dữ liệu từ các sensors:**

**MySQL**: tên database: **iot**

**User: root - Pass: bklcoud**

Các bảng trong mysql: 

**device**

	location_id | location_name | device_id | type | created_at | status
	
	CREATE TABLE device (
	location_id 	VARCHAR(255) 	NOT NULL,
	location_name 	VARCHAR(255) 	NOT NULL,
	device_id 	VARCHAR(255) 	NOT NULL,
	type		VARCHAR(255) 	NOT NULL,
	status 		VARCHAR(255) 	NOT NULL,
	created_at 	DATETIME 	NOT NULL,
	PRIMARY KEY (location_id)
	)


**sensor**

	location_id | name | unit | created_at | status
	
	CREATE TABLE sensor (
	name 		VARCHAR(255)	NOT NULL,
	location_id 	VARCHAR(255) 	NOT NULL,
	unit 		VARCHAR(255),
	status 		VARCHAR(255) 	NOT NULL,
	type 		VARCHAR(255) 	NOT NULL,
	created_at 	DATETIME	NOT NULL,
	PRIMARY KEY (name, location_id),
	CONSTRAINT fk_device FOREIGN KEY (location_id) REFERENCES device(location_id) ON DELETE CASCADE
	)
 

**InFluxDB**:  tên database: **iot**

Các measurement     

**data**

	time | location_id (tag)  | name (tag) | unit (field - String) | value (field - Float)
	
**2. Các topic trên MQTT**

**esp/data** từ ESP gửi lên Node-red với 2 định dạng:

	{
		location_id: "", 
		type: "data",
		sensorsData: [
			{name: "DHT11-t", value: 24, unit: "C"},
			{name: "DHT11-h", value: 70, unit: "%"},
		]
	}

**esp/newDevice**

	{
		location_id: "HN",
		location_name: "Ha Noi",
		type: "ESP8266",
		deviceID: "team01",
		sensors:  [
			{ name: "DHT11-t", unit: "C"},
			{ name: "DHT11-h", unit: "%"}
		]
	}

