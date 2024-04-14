const { Kafka } = require("kafkajs");
//msg  = process.argv[2]

run();

async function run(){
    try {

        const kafka = new Kafka({
            "clientid":"myapp",
            "brokers":["LP3613:9092"]
        });
        const consumer =  kafka.consumer({"groupId": "firstgroup"});
        console.log("Connecting...");
        await consumer.connect();
        console.log("Connected!");
        await consumer.subscribe({
            "topic": "myusers",
            "fromBeginning" : true
        })

        await consumer.run({
            "eachMessage" : async msg => {
                console.log('message: ' + msg.message.value + ' partition:' + msg.partition)
            }
        })

    } catch (ex) {
        console.error("error happened: " + ex);
    }

}