---
id: cs-project-deep-learning
title: "Détection de prix dans les photos de supermarché"
company: "CentraleSupélec"
company_url: "https://www.centralesupelec.fr/"
company_description: "Projet deep learning CentraleSupélec"
image: "deep-learning-project.jpg"
tags: ["AI", "Python", "Machine Learning", "Computer Vision", "Object Detection"]
links:
  - text: "Vidéo"
    url: "https://www.youtube.com/watch?v=08rauwKUgjE"
  - text: "Dépôt Github"
    url: "https://github.com/magalimorin18/price_detection_deep_learning"
  - text: "Rapport"
    url: "/assets/projects/price_is_all_you_need.pdf"
date: "2022-01-01"
featured: true
---

## Vue d'ensemble

Développement d'un système de vision par ordinateur utilisant le deep learning pour détecter et extraire automatiquement les informations de prix à partir de photos prises en supermarché.

## Problématique

Les grandes surfaces et les comparateurs de prix ont besoin d'outils capables d'analyser automatiquement les étiquettes de produits. Le projet **"The Price is All You Need"** répond à ce besoin avec une approche entièrement basée sur le deep learning.

## Architecture

### Détection d'Objets

Utilisation de **YOLO** (You Only Look Once) et de **Faster R-CNN** pour localiser les étiquettes de prix dans les images. Comparaison des deux architectures en termes de précision et de vitesse d'inférence.

### Reconnaissance de Texte (OCR)

Pipeline OCR personnalisé pour extraire les chiffres et caractères des étiquettes détectées, basé sur des réseaux de neurones convolutifs.

## Entraînement & Données

- Dataset annoté manuellement avec des centaines d'images de supermarchés
- Data augmentation pour améliorer la robustesse du modèle
- Fine-tuning de modèles pré-entraînés sur ImageNet

## Résultats

Le système a démontré une précision satisfaisante pour la détection et l'extraction des prix, avec des temps d'inférence compatibles avec une utilisation en temps réel.
