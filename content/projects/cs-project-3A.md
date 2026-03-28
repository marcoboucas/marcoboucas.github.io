---
id: cs-project-3A
title: "Résumé de documents médicaux français"
company: "CentraleSupélec"
company_url: "https://www.centralesupelec.fr/"
company_description: "Projet de dernière année CentraleSupélec"
image: "project-3a.jpg"
tags: ["AI", "Python", "Machine Learning", "NLP", "Summarization", "BioBert"]
links: []
date: "2022-06-01"
featured: false
---

## Vue d'ensemble

Dans le cadre de mon projet de troisième année à CentraleSupélec, j'ai créé un système de résumé automatique alimenté par l'IA pour les documents médicaux français, en utilisant BioBERT et des techniques NLP avancées.

## Contexte

Les professionnels de santé sont confrontés à des volumes croissants de documentation médicale. L'objectif était de développer un outil capable de synthétiser automatiquement des rapports médicaux et des notes cliniques, permettant d'extraire rapidement les informations essentielles.

## Approche

### Modèle de Base : BioBERT

Utilisation de **BioBERT**, un modèle BERT pré-entraîné sur des corpus biomédicaux (PubMed, PubMed Central), comme encodeur de texte médical.

### Résumé Abstractif vs. Extractif

Comparaison de deux approches :
- **Extractif** : sélection des phrases les plus importantes du document original
- **Abstractif** : génération de nouvelles phrases résumant le contenu, basé sur des architectures seq2seq

### Adaptation au Français

Utilisation de **CamemBERT** pour le traitement spécifique des documents médicaux en langue française, avec un fine-tuning sur des données cliniques annotées.

## Résultats

Le système a montré des performances prometteuses sur des métriques ROUGE, validant la faisabilité d'une telle approche pour assister les professionnels de santé dans leur pratique quotidienne.
