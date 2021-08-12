const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "test2",   
    brokers: ["localhost:9094"]
});
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {
  // Producing
  await producer.connect();
  await producer.send({
    topic: "test-topic",
    messages: [{ value: "Hello KafkaJS user!" }],
  });

 // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
};

run().catch(console.error);

//테스트
/**
 *  consumer
    bin/kafka-console-consumer.sh –bootstrap-server localhost:9092 –topic tmp-topic –from-beginning
    producer
    bin/kafka-console-producer.sh –broker-list localhost:9092 –topic tmp-topic
 */
// 