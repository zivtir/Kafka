Running Zookeeper locally (1st command window):
c:\Kafka\kafka_2.13-3.7.0\bin\windows>zookeeper-server-start.bat ..\..\config\zookeeper.properties

Running Kafka (2nd command window):
c:\Kafka\kafka_2.13-3.7.0\bin\windows>kafka-server-start.bat ..\..\config\server.properties

(Optionally)Running Kafka consumer (3rd command window):
C:\Kafka\kafka_2.13-3.7.0\bin\windows>kafka-console-consumer.bat --bootstrap-server LP3613:9092 --topic myusers --from-beginnig
