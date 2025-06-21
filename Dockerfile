# Étape 1 : Construction de l'application Rust
FROM rust:latest as builder

WORKDIR /app

# Copier les fichiers du projet et compiler
COPY . .
RUN cargo build --release

RUN tar -czf source.tar.gz home

# Étape 2 : Image finale avec seulement l'exécutable
FROM debian:bookworm-slim

# Installer les dépendances nécessaires (OpenSSL 3.x est inclus dans Bookworm)
RUN apt-get update && apt-get install -y openssl libssl3 ca-certificates

# Copier l'exécutable depuis le builder
COPY --from=builder /app/source.tar.gz /app/
RUN tar -xzf /app/source.tar.gz && rm /app/source.tar.gz
COPY --from=builder /app/target/release/zone_2_coaching ./zone_2_coaching

# Spécifier le port exposé et la commande d'exécution
CMD ["./zone_2_coaching"]

EXPOSE 8080