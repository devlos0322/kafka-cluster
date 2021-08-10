const mqtt = require('mqtt')

async function main() {
    // const url = 'mqtt://localhost:1883'
    const url = 'mqtt://broker.emqx.io:1883'
    const  clinet = await mqtt.connect(url, {
    clientId: 'emqx_client_id',
    username: '',
    password: '',
    })
    client.on('connect', () => {
        client.subscribe('presence', (err) => {
            if (!err) {
            setInterval(() => {
                client.publish('presence', 'Hello EMQ X')
            }, 1000)
            }
        })
    })
    client.on('message', (topic, message) => {
    // message is Buffer
    console.log('received from', topic, message.toString())
    })
}
main()