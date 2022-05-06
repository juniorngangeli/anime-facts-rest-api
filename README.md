# anime-facts-rest-api 🐱‍🚀

An API in Node.js that will return anime facts.

# Usage :

> Note: This project is being hosted on Heroku with free dyno; so, there can/will be a delay for the first time you make a request, subsequent requests will be faster.

### Home Route

Get all the available anime's list : `https://kd-anime-facts.herokuapp.com/api/v1`
_returns_ :

```
{
	success:true,
	data: [
		{
			anime_id: 1,
			anime_name: "bleach",
			anime_img: "https://eaxmpleimage.com/"
		},
		{
			anime_id: 2,
			anime_name: "black_clover",
			anime_img: "https://eaxmpleimage2.com/"
		},
		...
	]
}
```

### Anime Facts Route

Get all facts related to an Anime : `https://kd-anime-facts.herokuapp.com/api/v1/:anime_name`

> Provide an anime name (from the available option) in place of `:anime_name`

**_Example_** :
`https://kd-anime-facts.herokuapp.com/api/v1/fma_brotherhood`
_returns_ :

```
{
	success:true,
	total_facts: 8,
	anime_img:"https://eaxmpleimage.com/",
	data: [
		{
			fact_id: 1,
			fact: "Ishvalans And Ametris Conflict Is Based On Hokkaido s Ainu People"
		},
		{
			fact_id: 2,
			fact: "Arakawa Actually Bought Military Prop Guns For Drawing References"
		},
		...
	]
}
```

### Specific Fact Route

Get all facts related to an Anime : `https://kd-anime-facts.herokuapp.com/api/v1/:anime_name/:fact_id`

> Provide an anime name & fact id (from the available option) in place of `:anime_name & :fact_id`

**_Example_** :
`https://kd-anime-facts.herokuapp.com/api/v1/fma_brotherhood/2`
_returns_ :

```
{
	success:true,
	data: {
			fact_id: 2,
			fact: "Arakawa Actually Bought Military Prop Guns For Drawing References"
	}

}
```

# [Rebuild project](https://www.youtube.com/watch?v=PDl5CP9XZwo) :

- Clone the repo : `git clone https://github.com/chandan-02/anime-facts-rest-api.git`

- Install necessary dependencies : `cd anime-facts-rest-api` & `npm install`

- Create a database and tables in postgreSQL & add data in them ( use data.sql ).

- Create an .env file and fill the required **postgres connection** details.

- Run : `npm run dev`
