//https://github.com/emqx/emqx-tutorial/blob/master/en/client_dev/javascript.md
//docker run -d --name emqx -p 18083:18083 -p 1883:1883 emqx/emqx:latest
const mqtt = require('mqtt')

// connect options
const options = {
      connectTimeout: 4000,

      // Authentication
      clientId: 'mqttjs_3b039063b5',
      username: 'tester1',
      password: 'test123@',

      keepalive: 60,
      clean: true,
}

const TCP_URL = 'mqtt://localhost:1883'

const client = mqtt.connect(TCP_URL, options)

client.on('connect', () => {
    client.subscribe({'test1': {qos: 1}}, function (err) {
        if (!err) {
        }
    })
    let flag = 0;
    setInterval(function(){
        /*
       
        */
        if(flag) {
            var options = {
                retain:true,
                qos:1
            };
            client.publish('test1', 'Hello mqtt', options);
            console.log('Publish', 'topic', 'Hello mqtt');
            flag = 0;
        } else {
            client.publish('test2', 'Hello mqtt');
            console.log('Publish', 'test1', 'Hello mqtt');
            flag = 1;
        }
    },1000)
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