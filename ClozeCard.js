
// Constructor function for creating cloze-deletion flashcards

function ClozeCard(text, cloze) {
this.fullText = text;
this.cloze = cloze;
this.partial = text.replace(this.cloze, "_____");
}


}




module.exports = ClozeCard;
