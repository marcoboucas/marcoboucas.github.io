---
id: dty-flashbrand
title: "Reconnaissance d'émotions dans les vidéos"
company: "Flashbrand"
company_url: "https://home.flashbrand.me/"
company_description: "Flashbrand est une startup innovante qui vise à révolutionner les retours d'information et les méthodes RH en utilisant l'IA et une approche centrée sur l'employé."
image: "flashbrand.jpg"
tags: ["AI", "Javascript", "Typescript", "NodeJS", "VueJS", "Python", "Transformers", "Web", "NLP"]
links: []
date: "2021-01-01"
featured: false
---

## Vue d'ensemble

Pour **Flashbrand**, j'ai développé une application multimodale d'analyse de conversations vidéo en temps réel, combinant traitement de la parole, de l'image et du texte pour une analyse émotionnelle complète.

## Contexte

Flashbrand cherchait à enrichir ses outils RH avec des capacités d'analyse émotionnelle, permettant de mieux comprendre les présentations et entretiens de candidats dans un contexte de recrutement ou de formation.

## Architecture Multimodale

### Analyse Textuelle (NLP)

Transcription automatique de la parole et analyse de sentiment sur le texte, utilisant des modèles **Transformers** pré-entraînés pour détecter les émotions exprimées.

### Analyse Visuelle

Détection des expressions faciales et des émotions à partir du flux vidéo en temps réel, en utilisant des techniques de vision par ordinateur.

### Analyse Audio

Extraction de caractéristiques vocales (ton, rythme, intensité) pour inférer l'état émotionnel du locuteur.

### Bot Coach

Intégration d'un assistant virtuel qui fournit des retours en temps réel pendant une présentation, aidant l'utilisateur à améliorer sa communication.

## Stack Technique

- **Frontend** : VueJS + TypeScript
- **Backend** : NodeJS
- **Traitement IA** : Python avec les bibliothèques Transformers
- **Communication temps réel** : WebSockets
