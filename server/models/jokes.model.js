const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
{
	setup: {
		type: String,
		required: [true,"Vamos, animate con un chiste :D"],
		minlength:[10,"Tu chiste debe tener al menos 10 caracteres"]
	},
	punchline:{
		type: String,
		required: [true,"Debes ingresar un remate"],
		minlength:[3,"El remate debe tener al menos 3 caracteres"]
	}
}
);

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;