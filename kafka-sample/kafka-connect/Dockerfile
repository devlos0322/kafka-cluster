FROM 1ambda/kafka-connect:latest

COPY mqtt.properties ${KAFKA_HOME}/config/
COPY kafka-connect-mqtt-1.2.1.jar ${KAFKA_HOME}/libs/
COPY org.eclipse.paho.client.mqttv3-1.0.2.jar ${KAFKA_HOME}/libs/

# Set env

#ENV JMX_PORT=9999 \
#    CONNECT_PORT=8083

#EXPOSE ${JMX_PORT}
#EXPOSE ${CONNECT_PORT}

# Run

#WORKDIR $KAFKA_HOME
#COPY start-connect.sh $KAFKA_HOME/start-connect.sh
#COPY docker-entrypoint.sh /
#ENTRYPOINT ["/docker-entrypoint.sh"]

#CMD ["./start-connect.sh"]

