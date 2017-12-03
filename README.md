	 	 	
**1. Thiết kế cơ sở dữ liệu để lưu trữ dữ liệu từ các sensors:**

**MySQL**: tên database: **devices_sensors_info**

**User: root - Pass: bklcoud**

Các bảng trong mysql: 

**device**

	macAdrr | type | created_at | status
	
	CREATE TABLE device (
	macAddr 	VARCHAR 	NOT NULL,
	type		VARCHAR 	NOT NULL,
	status 		VARCHAR 	NOT NULL,
	created_at 	DATETIME 		NOT NULL,
	PRIMARY KEY (macAddr)
	)


**sensor**

	macAddr | name | unit | created_at | status 
	
	CREATE TABLE sensor (
	name 		VARCHAR	NOT NULL,
	macAddr 	VARCHAR 	NOT NULL,
	unit 		VARCHAR,
	status 		VARCHAR 	NOT NULL,
	created_at 	DATETIME	NOT NULL,
	PRIMARY KEY (name, macAddr),
	CONSTRAINT fk_device FOREIGN KEY (macAddr) REFERENCES device(macAddr) ON DELETE CASCADE
	)


InFluxDB:  tên database: icse_iot
logs:
time | macAddr (tag) | name (tag) | status (field - String)

data:
time | macAddr (tag)  | name (tag) | unit (field - Float) | value (field - Float)

