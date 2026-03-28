---
id: viarezo-palaborne
title: "Palaborne"
company: "ViaRézo"
company_url: "https://viarezo.fr"
company_description: "ViaRézo est une association étudiante qui fournit Internet à tous les étudiants des résidences de CentraleSupélec (plus de 3000 étudiants)."
image: "viarezo.jpg"
tags: ["Javascript", "DataViz", "Python", "Web", "Data Science"]
links: []
date: "2020-01-01"
featured: false
---

## Vue d'ensemble

En tant que membre de **ViaRézo**, l'association qui fournit Internet aux 3000 étudiants des résidences de CentraleSupélec, j'ai développé **Palaborne** : une application de visualisation 3D de l'infrastructure réseau.

## Contexte

ViaRézo gère une infrastructure réseau complexe comprenant environ 300 bornes WiFi réparties sur le campus. Diagnostiquer les problèmes géographiques (zones de faible couverture, pannes localisées) nécessitait une visualisation claire de l'ensemble du réseau.

## Solution : Visualisation 3D

### Représentation Spatiale

Palaborne affiche toutes les bornes WiFi du campus en trois dimensions, avec leur position exacte dans les bâtiments, permettant de visualiser immédiatement la distribution géographique de l'infrastructure.

### Monitoring en Temps Réel

Intégration des données de statut des équipements pour afficher en temps réel quelles bornes sont actives, en erreur ou hors ligne, avec un code couleur intuitif.

### Détection de Problèmes Géographiques

La visualisation 3D permet d'identifier rapidement les zones de concentration d'incidents et de détecter des patterns géographiques difficiles à percevoir dans un tableau de bord classique.

## Technologies

- **JavaScript** pour le moteur de visualisation 3D (WebGL)
- **Python** pour le backend et l'agrégation des données réseau
- Interface web responsive pour un accès depuis tout appareil
