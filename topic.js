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
        const result = await admin.createTopics({
            "topics":[{
                "topic":"myusers",
                "numPartitions": 2
            }]
        })
        console.log("Created Successfully " + JSON.stringify(result))
        await admin.disconnect();

    } catch (ex) {
        console.error('error happened: ' +  ex);
    }

}