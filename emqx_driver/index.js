//https://github.com/emqx/emqx-tutorial/blob/master/en/client_dev/javascript.md
//docker run -d --name emqx -p 18083:18083 -p 1883:1883 emqx/emqx:latest
const mqtt = require('mqtt')

// connect options
const options = {
      connectTimeout: 4000,

      // Authentication
      clientId: 'mqttjs_3b039063b5',
      //username: 'tester1',
      //password: 'test123@',

      keepalive: 60,
      clean: true,
}

const TCP_URL = 'mqtt://localhost:1883'

const client = mqtt.connect(TCP_URL, options)

client.on('connect', () => {
    client.subscribe({'hello-mqtt-kafka': {qos: 1}}, function (err) {
        if (!err) {
        }
    })
    let flag = 0;
    setInterval(function(){
        /*
       
        */
        client.publish('hello-mqtt-kafka', 'Hello mqtt', options);
        console.log('Publish', 'hello-mqtt-kafka', 'Hello mqtt');
    },5000)
})

client.on('message', (topic, message, packet) => {
    console.log('Cousume', topic, message.toString());
});

client.on('reconnect', (error) => {
    console.log('reconnecting:', error)
})

client.on('error', (error) => {
    console.log('Connect Error:', error)
})