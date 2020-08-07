<img src="https://github.com/lorenasg1/nlw-proffy/blob/master/.github/screenshot_landing.png" alt="Proffy landing page screenshot" width="80%" />

<h1 align="center">Proffy</h1>
<p align="center">A platform to connect students and teachers.<br />
Project developed during the <a href="https://rocketseat.com.br">Rockeset</a> <strong>Next Level Week #02</strong>.<br>
Try the <a href="https://proffy-lsg.vercel.app/">live demo</a>.
  </p>

<p align="center"><a href="#technologies">Technologies</a> | <a href="#features">Features</a> | <a href="how-to">How to use</a></p>

<p align="center">🚧 Under development 🚧</p>

## Technologies

- <a href="https://github.com/facebook/react">react</a>
- <a href="https://github.com/facebook/react-native">react-native</a>
- <a href="https://github.com/microsoft/TypeScript">typescript</a>
- <a href="https://github.com/expressjs/express">express</a>
- <a href="https://github.com/expo/expo">expo</a>
- <a href="https://github.com/knex/knex">knex</a>
- <a href="https://github.com/sqlite/sqlite">sqlite</a>

## Features

Teachers can schedule their time by subject.

Students can find teachers based on subject and schedule, then get in touch through WhastApp.

### Connenctions

- [x] Create connections;
- [x] List connections;

### Classes

- [x] Create classes;
- [x] List classes;
  - [x] Filter by subject, week day and time.
- [x] Use WhatsApp click to chat

## How to use

### Run API

To run the project locally or through the live demo, run the server api as follows:

```shell
# Clone the repositorie
$ git clone https://github.com/lorenasg1/nlw-proffy-server.git

# Go to the server folder
$ cd proffy/server/

# If you want a fresh start delete the database file
$ rm server/src/database.sqlite

# Install dependencies
$ yarn

# Optional: recreate the database
$ yarn knex:migrate

# Start the server
$ yarn start
```

To test the api use http://localhost:3333

### Run web version

```shell
# Go to the web folder
$ cd proffy/web/

# Install dependencies
$ yarn

# Start the server
$ yarn start
```

Access http://localhost:3000

### Run mobile version

```shell
# Go to the mobile folder
$ cd proffy/mobile/

# Install dependencies
$ yarn

# Start the server
$ expo start
```

First, go to your app store, download and install the expo app, then scan the QRCode to access the mobile version of **Proffy**.
