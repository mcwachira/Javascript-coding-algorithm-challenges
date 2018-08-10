function harmlessRansomNote(noteText, margazineText) {
    var noteArr =   noteText.split(" ");
    var margazineArr    =   margazineText.split(' ');
    var margazineObj    =   {};

    margazineArr.forEach(word => {
        if(!margazineObj[word]) margazineObj[word]= 0;
        margazineObj[word]++;
    });
    var noteIsPossible  =   true;
    noteArr.forEach(word    =>  {
        if(margazineObj[word]) {
            margazineObj[word]--;
            if(margazineObj[word] < 0)  noteIsPossible = false;
        }
        else noteIsPossible = false;
    });
    return noteIsPossible;
    
}

harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locatoins that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');