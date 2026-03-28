---
id: dty-bnppam
title: "Système de recommandation pour la gestion d'actifs"
company: "BNP Paribas Asset Management"
company_url: "https://www.bnpparibas-am.fr/"
company_description: "BNP Paribas Asset Management est l'activité dédiée et autonome de gestion d'actifs du Groupe BNP Paribas."
image: "bnppam.jpg"
tags: ["AI", "NLP", "Python", "PyTorch", "Transformers", "Machine Learning", "Flask"]
links: []
date: "2021-01-01"
featured: false
---

## Vue d'ensemble

Pour **BNP Paribas Asset Management**, j'ai développé un système de recommandation intelligent capable de trouver les articles de blog et ressources internes les plus pertinents pour un produit financier donné.

## Problématique

Les équipes commerciales de BNPP AM avaient du mal à identifier rapidement les contenus marketing et les analyses pertinentes parmi un vaste corpus de documents internes, ralentissant leur préparation aux rendez-vous clients.

## Solution

### Moteur de Recommandation

Système basé sur la similarité sémantique utilisant des modèles de transformers :
- **DistilBERT** pour une inférence rapide
- **finBERT** spécialisé dans le domaine financier
- **Longformer** pour les documents longs (jusqu'à 4096 tokens)

### Résumé Automatique

Génération automatique de résumés des articles pour permettre aux équipes commerciales de rapidement évaluer leur pertinence sans lire l'intégralité des documents.

### Interface API

**Backend Flask** exposant une API REST permettant d'intégrer le système de recommandation dans les outils existants de l'équipe.

## Impact

Réduction significative du temps de préparation des présentations commerciales, avec des équipes capables de trouver et synthétiser les contenus pertinents en quelques minutes plutôt qu'en plusieurs heures.
