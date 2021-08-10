FROM centos:7

USER root

#명령어가 실행될 경로 생성
RUN mkdir -p /app
WORKDIR /app

# 언어셋 설치
RUN yum clean all \
 && yum repolist \
 && yum -y update \
 && sed -i "s/en_US/all/" /etc/yum.conf  \
 && yum -y reinstall glibc-common

# JAVA 설치
RUN yum -y install java-1.8.0-openjdk-devel.x86_64

# Kafka 클라이언트 설치
RUN yum -y install wget \
 && wget https://archive.apache.org/dist/kafka/2.3.0/kafka_2.12-2.3.0.tgz \
 && tar xvf kafka_2.12-2.3.0.tgz && rm -r kafka_2.12-2.3.0.tgz

ENV LANG=ko_KR.utf8 TZ=Asia/Seoul

WORKDIR /app/kafka_2.12-2.3.0
# 컨테이너 실행시 실행될 명령
CMD ["/bin/bash"]