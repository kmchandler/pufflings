FROM postgres

WORKDIR /app

COPY . /app
    
EXPOSE 5432

ENV POSTGRES_PASSWORD mysecretpassword
ENV POSTGRES_USER local_dev
ENV POSTGRES_DB pufflings
