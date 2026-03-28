---
id: viarezo-treasurehunt
title: "Chasse au Trésor"
company: "ViaRézo"
company_url: "https://viarezo.fr"
company_description: "ViaRézo est une association étudiante qui fournit Internet à tous les étudiants des résidences de CentraleSupélec (plus de 3000 étudiants)."
image: "treasurehunt.jpg"
tags: ["Python", "Django", "Web"]
links: []
date: "2019-09-01"
featured: false
---

## Vue d'ensemble

Pour **ViaRézo**, j'ai développé une plateforme web de Chasse au Trésor pour faciliter l'intégration des nouveaux étudiants de CentraleSupélec, gérant environ 250 participants répartis en équipes.

## Contexte

Chaque année, ViaRézo organise une Chasse au Trésor sur le campus lors de la semaine d'intégration. Cet événement permet aux nouveaux étudiants de découvrir les bâtiments et lieux clés du campus de manière ludique.

## Fonctionnalités

### Gestion des Équipes

Système de gestion de toutes les équipes participantes (~250 étudiants) avec :
- Création et attribution automatique des équipes
- Suivi de la progression en temps réel
- Classement dynamique

### Parcours Intelligent

Algorithme d'attribution des étapes pour éviter les embouteillages : chaque équipe reçoit sa prochaine activité en tenant compte de la localisation des autres équipes, répartissant les groupes sur l'ensemble du campus.

### Interface Organisateurs

Tableau de bord pour le personnel de ViaRézo permettant de :
- Suivre la progression de toutes les équipes simultanément
- Débloquer manuellement des équipes en difficulté
- Visualiser les statistiques de l'événement en direct

## Technologies

- **Python / Django** pour le backend
- Interface web responsive pour l'accès mobile des étudiants
- Base de données pour la gestion d'état en temps réel
