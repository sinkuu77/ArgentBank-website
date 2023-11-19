# ArgentBank (une banque en ligne)

<p>J'ai implémenté les fonctionnalités de connexion et de modification de pseudo en utilisant React et Redux, dans le cadre du onzième projet de ma formation en tant qu'intégrateur web chez OpenClassrooms.</p>
<p>Voici les informations nécessaires pour exécuter ce projet 👇 </p>

* **Prerequisites**

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

* **Pour exécuter ce projet**
<p>Cloner le repo en local</p>

```bash
# Se placer dans le dossier d'argentbank
cd argentbank

# Exécuter ce projet
npm run start
```

* **Instructions**
1. Clone the repo onto your computer
2. Open a terminal window in the cloned project
3. Run the following commands:

```bash

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

* **Populated Database Data**
<p>Once you run the `populate-db` script, you should have two users in your database:</p>

### Tony Stark

- First Name: `Tony`
- Last Name: `Stark`
- Email: `tony@stark.com`
- Password: `password123`

### Steve Rogers

- First Name: `Steve`,
- Last Name: `Rogers`,
- Email: `steve@rogers.com`,
- Password: `password456`

* **API Documentation**
<p>To learn more about how the API works, once you have started your local environment, you can visit: http://localhost:3001/api-docs</p>

## le délai de production du site


## Stack utilisé
React, Redux

## Point


## Problème en réalisant ce projet
<p>En implémentant la fonctionnalité de modification du pseudo de l'utilisateur, j'ai rencontré un problème où, lors de la soumission d'un formulaire, la page se rafraîchissait, et les valeurs récupérées via l'état disparaissaient. </p>
<p>Après des recherches, j'ai découvert que je pouvais résoudre ce problème en utilisant Redux Persist pour stocker ces valeurs dans le localStorage. </p>
<p>Grâce à la documentation officielle de Redux Persist, j'ai appris comment appliquer la persistance et configurer cela, ce qui m'a permis de maintenir l'état même lorsque la page se rafraîchit.</p>
