	 	 	
**1. Thiết kế cơ sở dữ liệu để lưu trữ dữ liệu từ các sensors:**

**MySQL**: tên database: **iot**

**User: root - Pass: bklcoud**

Các bảng trong mysql: 

**device**

	macAdrr | type | created_at | status
	
	CREATE TABLE device (
	macAddr 	VARCHAR 	NOT NULL,
	type		VARCHAR 	NOT NULL,
	status 		VARCHAR 	NOT NULL,
	created_at 	DATETIME 	NOT NULL,
	PRIMARY KEY (macAddr)
	)


**sensor**

	macAddr | name | unit | created_at | status 
	
	CREATE TABLE sensor (
	name 		VARCHAR		NOT NULL,
	macAddr 	VARCHAR 	NOT NULL,
	unit 		VARCHAR,
	status 		VARCHAR 	NOT NULL,
	created_at 	DATETIME	NOT NULL,
	PRIMARY KEY (name, macAddr),
	CONSTRAINT fk_device FOREIGN KEY (macAddr) REFERENCES device(macAddr) ON DELETE CASCADE
	)


**InFluxDB**:  tên database: **iot**

Các measurement     
 
**logs**

	time | macAddr (tag) | name (tag) | status (field - String)

**data**

	time | macAddr (tag)  | name (tag) | unit (field - Float) | value (field - Float)
	
**Các topic trên MQTT**

**bkcloud/data** từ ESP gửi lên Node-red với 2 định dạng:

	{
		macAddr: "", 
		type: "data",
		sensorsData: [
			{name: "DHT11-t", value: 24, unit: "C"},
			{name: "BH1750", value: 6000, unit: "Lux"},
		]
	}
	
	{
		macAddr: "", 
		type: "motion",
	}


**bkcloud/MAC/action** gửi từ Node-red tới ESP với **3** định dạng:

	{
		type: "register", status: "OK"
	}

	{
		type: "ledAction",
		action: "ON/OFF"
	}
	
	{
		type: "servoAction",
		action: "ON/OFF"
	}


**bkcloud/newDevice**

	{
		macAddr: "5C:3B:1A:16:2A",
		type: "ESP8266",
		sensors:  [
			{ name: "DHT11-t", unit: "C"},
			{ name: "BH1750", unit: "Lux"},
			{ name: "HC-SR501", unit: ""}
		]
	}

