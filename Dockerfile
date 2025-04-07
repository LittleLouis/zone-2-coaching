# Étape 1 : Construction de l'application Rust
FROM rust:1.78.0-buster as builder

WORKDIR /app

# Copier les fichiers du projet et compiler
COPY . .
RUN cargo build --release

RUN tar -czf source.tar.gz home

# Étape 2 : Image finale avec seulement l'exécutable
FROM debian:bullseye-slim

# Installer les dépendances nécessaires
RUN apt-get update && apt-get install -y libpq-dev && rm -rf /var/lib/apt/lists/*

# Copier l'exécutable depuis le builder
# Copier le projet compilé
COPY --from=builder /app/source.tar.gz /app/
RUN tar -xzf /app/source.tar.gz && rm /app/source.tar.gz
COPY --from=builder /app/target/release/zone_2_coaching ./zone_2_coaching

# Spécifier le port exposé et la commande d'exécution
CMD ["./zone_2_coaching"]

EXPOSE 8080