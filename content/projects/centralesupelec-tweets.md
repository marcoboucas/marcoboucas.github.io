---
id: centralesupelec-tweets
title: "Analyse de Tweets"
company: "CentraleSupélec"
company_url: "https://www.centralesupelec.fr/"
company_description: "Durant ma première année à CentraleSupélec, pour le cours sur la Recherche d'Information"
image: "twitter.jpg"
tags: ["Python", "Keras", "NLP", "Machine Learning", "Scikit-Learn"]
links: []
date: "2020-04-01"
featured: false
---

## Vue d'ensemble

Dans le cadre du cours de **Recherche d'Information** à CentraleSupélec, j'ai développé un système pour évaluer la popularité d'un film à partir des tweets le mentionnant.

## Concept

L'idée centrale : peut-on prédire la réception d'un film auprès du public en analysant les tweets qui en parlent ? En utilisant différentes techniques de vectorisation et de modélisation, nous avons tenté de créer un indicateur de popularité basé sur les données des réseaux sociaux.

## Approche

### Collecte de Données

Utilisation de l'API Twitter pour collecter et filtrer les tweets mentionnant un film spécifique (le film *Godzilla* a servi de cas de démonstration).

### Techniques de Vectorisation

Comparaison de plusieurs approches :
- **TF-IDF** (Term Frequency-Inverse Document Frequency) comme baseline
- **Word2Vec** pour des embeddings de mots
- **Modèles LSTM** (Long Short-Term Memory) pour capturer le contexte séquentiel

### Calcul du Score de Popularité

Agrégation des scores individuels des tweets pour produire une métrique de popularité globale du film, comparée au score Rotten Tomatoes comme référence.

## Résultats

Les résultats obtenus pour *Godzilla* étaient très proches du score Rotten Tomatoes, validant la pertinence de l'approche. Cela suggère que les réseaux sociaux peuvent constituer un baromètre fiable de l'opinion publique sur les films.
