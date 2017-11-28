FROM docker.io/node

# 指定工作目录
RUN mkdir -p /home/Service
WORKDIR /home/Service

# 将当前目录下的所有文件拷贝到工作目录下
COPY . /home/Service

# 声明运行时容器提供服务端口
EXPOSE 3000

RUN yarn install

CMD [ "npm", "start" ]
