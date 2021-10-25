// This script executes the replicaset initialization until it succeeds

var rsConfig = {
  _id: "rs0",
  members: [
    { _id: 0, host: "mongodb1:27017" },
    { _id: 1, host: "mongodb2:27017" },
    { _id: 2, host: "mongodb3:27017" }
  ]
};

while (rs.initiate(rsConfig).ok === 0) {
  sleep(100);
}
