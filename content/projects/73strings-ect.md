---
id: 73strings-ect
title: "Analyse de transcriptions de conférences financières"
company: "73 Strings"
company_url: "https://www.73strings.com/"
company_description: "73 Strings a été créé pour fusionner le meilleur de la technologie avec une compréhension approfondie des informations critiques afin de rendre le capital plus efficace."
image: "73strings-ect.jpg"
tags: ["AI", "Machine Learning", "Transformers", "GPT2", "GPT3", "Bert", "T5", "PEGASUS", "PyTorch", "Scikit-Learn", "Pandas", "DataViz"]
links: []
date: "2021-09-01"
featured: false
---

## Vue d'ensemble

Pour **73 Strings**, j'ai développé des algorithmes et modèles NLP spécialisés dans l'analyse des transcriptions de conférences financières, permettant d'extraire des insights de valeur à partir de discours d'entreprises.

## Contexte

Les conférences de résultats (*earnings calls*) sont des sources d'information précieuses pour les investisseurs. L'extraction automatique d'informations pertinentes à partir de ces transcriptions longues représente un défi technique significatif.

## Approche Multi-Modèle

### Topic Modeling

Identification des thèmes principaux abordés dans chaque conférence, permettant de suivre l'évolution des priorités stratégiques d'une entreprise au fil du temps.

### Analyse de Sentiment

Utilisation de modèles **finBERT** spécialisés dans le domaine financier pour évaluer le ton des dirigeants et détecter les signaux positifs ou négatifs.

### Résumé Automatique

Comparaison de plusieurs architectures de résumé abstractif :
- **T5** (Text-to-Text Transfer Transformer)
- **PEGASUS** (pré-entraîné sur des résumés)
- **GPT-2 / GPT-3** pour la génération de texte

### Classification

Systèmes de classification pour catégoriser automatiquement les extraits selon leur pertinence pour différents types d'analystes.

## Technologies

Stack ML complète : **PyTorch**, **Transformers (HuggingFace)**, **Scikit-Learn**, **Pandas**, avec des visualisations de données pour présenter les résultats.
