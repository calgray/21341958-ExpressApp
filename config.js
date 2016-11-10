

var mongoaddress = "mongodb://<dbuser>:<dbpassword>@ds161295.mlab.com:61295/nodered-samples";

var mongodb = {
	dbuser: "admin",
	dbpassword: "admin",
	dbaddress: "ds161295.mlab.com",
	dbport: 61295,
	dbname: "nodered-samples"
};

mongodb.connectionString = "mongodb://" +
                            mongodb.dbuser + ":" +
                            mongodb.dbpassword + "@" +
                            mongodb.dbaddress + ":" +
                            mongodb.dbport + "/" +
                            mongodb.dbname;

exports.mongodb = mongodb;
