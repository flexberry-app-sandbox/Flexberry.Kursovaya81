docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya8-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursovaya8-java/app ../../..
