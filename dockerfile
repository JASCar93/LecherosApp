FROM openjdk:21-jdk
COPY target/LecherosAppBackend-1.0.jar java-app.jar
ENTRYPOINT ["java", "-jar", "java-app.jar"]