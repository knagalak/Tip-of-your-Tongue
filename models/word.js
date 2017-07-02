var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var WordSchema = new Schema({
	user_id: {type: String},
	similarMeaning: {type: String},
	start: {type: String},
	end: {type: String},
	soundLike: {type: String},
	rhyme: {type: String},
	startingString: {type: String},
	spelledLike: {type: String},
	relatedTo: {type: String},
	frequentFollowers: {type: String},
	frequentPredecessors: {type: String}
    });

module.exports = mongoose.model("Word", WordSchema);
