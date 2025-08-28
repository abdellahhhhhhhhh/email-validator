# Email Validator

## Auteur
- Nom : EL haddaoui
- Prénom : Abdellah
- Email Vinci : abdellah.elhaddaoui@student.vinci.be

## Lien du projet

URL GitHub du dépôtc:  https://github.com/abdellahhhhhhhhh/email-validator


## Explication du code
Projet Node.js réalisé en **TDD** avec **Jest**. Il expose une fonction `emailValidator(email: string): boolean` qui retourne `true` uniquement si **toutes** les règles suivantes sont respectées :  
- l’adresse contient **exactement un `@`** ;  
- il y a du **texte avant** et **après** `@` (parties locale et domaine non vides) ;  
- le **domaine contient au moins un `.`** et **ne se termine pas** par `.` ;  
- l’adresse ne contient **aucun espace**.  
Les tests sont dans `tests/emailValidator.test.js`, l’implémentation dans `src/emailValidator.js`. Une **GitHub Action** (fichier `.github/workflows/ci.yml`) lance automatiquement les tests sur chaque **Pull Request vers `main`** et sur les **push** sur `main`.

## Commande pour exécuter les tests
```bash
npm ci && npm test
```

## Informations utiles
- **Node** : 20.x (CI configurée pour Node 20)  
- **Structure** : `src/emailValidator.js`, `tests/emailValidator.test.js`, `.github/workflows/ci.yml`  


