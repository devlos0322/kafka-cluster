const { Kafka } = require("kafkajs");

const kafka = new Kafka({
    clientId: "test2",   
    brokers: ["localhost:9092"]
});
const producer = kafka.producer();
const consumer = kafka.consumer({ groupId: "test-group" });

const run = async () => {5
  // Producing
  await producer.connect();
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },200);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic2",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },300);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic3",
      messages: [{ value: "Hello KafkaJS user"+Date.now()}],
    });
  },400);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic4",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },500);
  setInterval(async function(){
    await producer.send({
      topic: "test-topic4",
      messages: [{ value: "Hello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS userHello KafkaJS user"+Date.now()}],
    });
  },500);
 // Consuming
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });

  setInterval(async function(){
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log({
        partition,
        offset: message.offset,
        value: message.value.toString(),
      });
    },
  });
  },2000);
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