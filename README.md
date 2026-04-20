# LA Enforcer – Web Interface

## Présentation

Cette interface web permet d’afficher le classement des scores du jeu rétro DOS *LA Enforcer*, elle est consultable [ici](https://julien-correard.github.io/LA-enforcer-web/).

## Fonctionnalités

- Récupération des scores depuis une API REST
- Affichage d’un leaderboard trié
- Interface simple et légère en HTML / CSS / JavaScript
- Mise en cache des scores via localStorage pour affichage immédiat
- Indication de l’état de connexion (serveur en cours de réveil, indisponible, etc.)

## Détails techniques

Le frontend interroge une API Spring Boot via des requêtes HTTP (fetch API) et affiche dynamiquement les scores.

## Ecosystème du projet

Ce projet complète un système global comprenant :
- un [jeu en C](https://github.com/julien-correard/LA-enforcer-game) (génération des scores)
- un [client en Go](https://github.com/julien-correard/LA-enforcer-client) (envoi des scores)
- un [serveur Spring Boot](https://github.com/julien-correard/LA-enforcer-server) (stockage des scores)
- une [interface web en JavaScript](https://github.com/julien-correard/LA-enforcer-web) (consultation des scores, disponible [ici](https://julien-correard.github.io/LA-enforcer-web/))

## Technologies utilisées

- HTML
- CSS
- JavaScript (Vanilla)

## Auteur

Julien CORREARD

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE.
