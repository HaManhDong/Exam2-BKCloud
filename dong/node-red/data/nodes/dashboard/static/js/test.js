let query = "";
// select mean(value) from data where "unit"='C' and time > now() - 5m and time < now() - 2m;
let range = 5; // minute
let column = 7;
for(let i = column;i>0;i--){
    query += "select mean(value) as day"+ i + " from data where \"unit\"='C' " +
			 "and time > now() - " + range * i + "m and time < now() - " + range * (i - 1) + "m;"
}
msg.payload.query = query;

// return msg;