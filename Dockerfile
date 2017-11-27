FROM docker.io/node

# 指定工作目录
RUN mkdir -p /app
WORKDIR /app

# 将当前目录下的所有文件拷贝到工作目录下
COPY . /app/

# 声明运行时容器提供服务端口
EXPOSE 80

RUN npm install && \
    npm run build && \
    cp -r ./dist/* /var/www/html && \
    rm -rf /app

CMD [ "nginx", "-g", "daemon off;" ]
