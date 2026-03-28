---
id: cs-project-health-challenge
title: "DataChallenge : NLP Santé"
company: "CentraleSupélec"
company_url: "https://www.centralesupelec.fr/"
company_description: "Projet académique CentraleSupélec"
image: "project-challenge-health.jpg"
tags: ["AI", "Python", "Machine Learning", "NER", "Question Answering", "NLP"]
links: []
date: "2022-04-01"
featured: true
---

## Vue d'ensemble

Dans le cadre d'un challenge académique à **CentraleSupélec**, j'ai développé des solutions NLP pour l'analyse de données de santé, en me concentrant sur deux tâches principales : la reconnaissance d'entités nommées (NER) et les systèmes de questions-réponses sur documents médicaux.

## Objectifs

- Extraire des entités médicales (médicaments, diagnostics, symptômes) à partir de documents cliniques en français
- Construire un système de Q&A permettant d'interroger des rapports médicaux en langage naturel
- Évaluer les performances de différentes architectures de modèles transformers

## Approche Technique

### Reconnaissance d'Entités Nommées

Utilisation de modèles **CamemBERT** et **BioBERT** finement ajustés sur des corpus médicaux annotés. L'approche BIO (Beginning, Inside, Outside) a permis d'identifier précisément les entités cliniques dans les textes.

### Question Answering

Implémentation d'un pipeline de Q&A extractif basé sur des modèles de type BERT, permettant de localiser et extraire des passages pertinents dans les documents médicaux.

## Résultats

Les modèles entraînés ont atteint des scores F1 compétitifs sur les jeux de données de validation, démontrant la faisabilité de l'IA pour l'assistance aux professionnels de santé.
