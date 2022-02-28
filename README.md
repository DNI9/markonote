<div align="center">
	<img src=".assets/app-icon.png" alt="Hoppscotch Logo" height="100" />
	<br />
	<p>
	<h3>
		<b>
			MarkoNote
		</b>
	</h3>
	</p>
	<p>
		<b>
			Share notes with Markdown
		</b>
	</p>
	<p>
</div>
<p align="center">
	<img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
		alt="react" />
	<img src="https://img.shields.io/badge/chakra-%234ED1C5.svg?style=for-the-badge&logo=chakraui&logoColor=white"
		alt="chakra ui" />
	<img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
		alt="express.js" />
	<img src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
		alt="mongodb" />
</p>

---

## Setup / Installation

Clone this repo and cd into it

```sh
git clone https://github.com/DNI9/markdown-note.git
```

Install dependencies

```sh
npm i && npm i --prefix frontend
```

## Run locally

Rename `.env.example > .env` and write your configs

then simply run

```sh
npm run dev
# or
yarn dev
```

Only start server in dev mode

```sh
npm run server
```

## Deployment

Download and install the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line) and login to your heroku account.

```sh
heroku login
```

Create an heroku application in [heroku dashboard](https://dashboard.heroku.com) and add heroku remote

```sh
heroku git:remote -a <heroku-app-name>
```

Commit and deploy

```sh
git add .
git commit -am "your commit message"
git push heroku master
```
