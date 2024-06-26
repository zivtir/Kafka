const { Kafka } = require("kafkajs");
msg  = process.argv[2]

run();

async function run(){
    try {

        const kafka = new Kafka({
            "clientid":"myapp",
            "brokers":["LP3613:9092"]
        });
        const producer =  kafka.producer();
        console.log("Connecting...");
        await producer.connect();
        console.log("Connected!");
        const partition = msg[0] < "N" ? 0 : 1
        console.log('partition ' + partition )
        const result = await producer.send({
            "topic": "myusers",
            "messages": [{
                "value" : msg,
                "partition": partition
            }]
        })
        console.log("Send Successfully " + JSON.stringify(result))
        await producer.disconnect();

    } catch (ex) {
        console.error("error happened: " + ex);
    }
    finally{
        process.exit(0);
    }

}