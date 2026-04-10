# LA Enforcer – Web Interface

## Présentation

Cette interface web permet d’afficher le classement des scores du jeu rétro DOS *LA Enforcer*.

## Fonctionnalités

- Récupération des scores depuis une API REST
- Affichage d’un leaderboard trié
- Interface simple et légère en HTML / CSS / JavaScript

## Détails techniques

Le frontend interroge une API Spring Boot via des requêtes HTTP (fetch API) et affiche dynamiquement les scores.

Ce projet complète un système global comprenant :
- un jeu en C (génération des scores)
- un client en Go (envoi des scores)
- un serveur Spring Boot (stockage des scores)

## Technologies utilisées

- HTML
- CSS
- JavaScript (Vanilla)

## Auteur

Julien CORREARD

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE.
