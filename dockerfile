FROM docker.io/centos:7.4.1708

USER root

# 언어셋 설치
RUN yum clean all \
 && yum repolist \
 && yum -y update \
 && sed -i "s/en_US/all/" /etc/yum.conf  \
 && yum -y reinstall glibc-common

RUN yum -y install wget
RUN wget https://archive.apache.org/dist/kafka/2.3.0/kafka_2.12-2.3.0.tgz 
RUN tar xvf kafka_2.12-2.3.0.tgz

 
ENV LANG=ko_KR.utf8 TZ=Asia/Seoul



# 컨테이너 실행시 실행될 명령
CMD ["/bin/bash"]