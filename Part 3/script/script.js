/* Step 1 */
var favoriteMovies = ["Interstellar", "The Shawshank Redemption", "Coco", "Predestination", "Limitless"];
window.console.log(favoriteMovies[1]);

/* Step 2 */
var movies = new Array(5);
movies[0] = "Interstellar";
movies[1] = "The Shawshank Redemption";
movies[2] = "Coco";
movies[3] = "Predestination";
movies[4] = "Limitless";
window.console.log(movies[0]);

/* Step 3 */
var movies1 = new Array(5);
movies1[0] = "Interstellar";
movies1[1] = "The Shawshank Redemption";
movies1[2] = "Coco";
movies1[3] = "Predestination";
movies1[4] = "Limitless";
movies1.splice(2, 0, "Titanic");
window.console.log(movies1.length);

/* Step 4 */
var movies2 = [];
movies2[0] = "Interstellar";
movies2[1] = "The Shawshank Redemption";
movies2[2] = "Coco";
movies2[3] = "Predestination";
movies2[4] = "Limitless";
delete movies2[0];

window.console.log(movies2);

/* Step 5 */
var movies5 = [];
movies5[0] = "Interstellar";
movies5[1] = "The Shawshank Redemption";
movies5[2] = "Coco";
movies5[3] = "Predestination";
movies5[4] = "Limitless";
movies5[5] = "The Pursuit of Happyness";
movies5[6] =  "Dr. Strange"

for (var i = 0; i < movies5.length; i++) {
    window.console.log(movies5[i]);
}

/* Step 6 */
var movies6 = [];
movies6[0] = "Interstellar";
movies6[1] = "The Shawshank Redemption";
movies6[2] = "Coco";
movies6[3] = "Predestination";
movies6[4] = "Limitless";
movies6[5] = "The Pursuit of Happyness";
movies6[6] =  "Dr. Strange"

for (index in movies6) {
    if (movies6.hasOwnProperty(index)) {
        window.console.log(movies6[index]);
    }
}

/* Step 7 */
var movies7 = [];
movies7[0] = "Interstellar";
movies7[1] = "The Shawshank Redemption";
movies7[2] = "Coco";
movies7[3] = "Predestination";
movies7[4] = "Limitless";
movies7[5] = "The Pursuit of Happyness";
movies7[6] =  "Dr. Strange"

movies7.sort();
for (index in movies7) {
    if (movies7.hasOwnProperty(index)) {
        window.console.log(movies7[index]);
    }
}

/* Step 8 */
var movies8 = [];
movies8[0] = "Interstellar";
movies8[1] = "The Shawshank Redemption";
movies8[2] = "Coco";
movies8[3] = "Predestination";
movies8[4] = "Limitless";
movies8[5] = "The Pursuit of Happyness";
movies8[6] =  "Dr. Strange"

var leastFavoriteMovies = [];
leastFavoriteMovies[0] = "Hostel";
leastFavoriteMovies[1] = "300";
leastFavoriteMovies[2] = "Serious Men";

window.console.log("Movies I like:\n\n");
for (var i = 0; i < movies8.length; i++) {
    window.console.log(movies8[i]);
}

window.console.log("\nMovies I regret watching:\n\n");
for (var i = 0; i < leastFavoriteMovies.length; i++) {
    window.console.log(leastFavoriteMovies[i]);
}
window.console.log("\n");

/* Step 9 */
var movies9 = [];
movies9[0] = "Interstellar";
movies9[1] = "The Shawshank Redemption";
movies9[2] = "Coco";
movies9[3] = "Predestination";
movies9[4] = "Limitless";
movies9[5] = "The Pursuit of Happyness";
movies9[6] =  "Dr. Strange"

var leastFavoriteMovies1 = [];
leastFavoriteMovies1[0] = "Hostel";
leastFavoriteMovies1[1] = "300";
leastFavoriteMovies1[2] = "Serious Men";

var allMovies = movies9.concat(leastFavoriteMovies1);
allMovies.reverse();
for (var i = 0; i < allMovies.length; i++) {
    window.console.log(allMovies[i]);
}

/* Step 10 */
var movies10 = [];
movies10[0] = "Interstellar";
movies10[1] = "The Shawshank Redemption";
movies10[2] = "Coco";
movies10[3] = "Predestination";
movies10[4] = "Limitless";
movies10[5] = "The Pursuit of Happyness";
movies10[6] =  "Dr. Strange"

var leastFavoriteMovies2 = [];
leastFavoriteMovies2[0] = "Hostel";
leastFavoriteMovies2[1] = "300";
leastFavoriteMovies2[2] = "Serious Men";

var allMovies1 = movies10.concat(leastFavoriteMovies2);
window.console.log(allMovies1.pop());
