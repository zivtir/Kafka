const { Kafka } = require("kafkajs");

run();

async function run(){
    try {

        const kafka = new Kafka({
            "clientid":"myapp",
            "brokers":["LP3613:9092"]
        });
        const admin =  kafka.admin();
        console.log("Connecting...");
        await admin.connect();
        console.log("Connected");
        await admin.createTopics({
            "topics":[{
                "topic":"users",
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully ")
        await admin.disconnect();

    } catch (ex) {
        console.error('error happened: ' +  ex);
    }

}