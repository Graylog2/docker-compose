nginx0:
    image: "nginx:stable"
    hostname: "nginx"
    volumes:
        - type: bind
          source: "./nginx"
          target: "/etc/nginx/conf.d"
    depends_on:
      - "graylog1"
      - "graylog2"
      - "graylog3"
    ports: 
      - "80:80"
      - "443:443"