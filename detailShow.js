/**
 * Created by xxx on 17-8-3.
 */
$(document).read(function () {
    let movieID;
   $.get(`/movies/${movieID}`,function (movie) {
       $("#movieName").value=movie.name;
       $("#idInfo").value=movie.image;
       $("#director").value=movie.director;
       $("#mainActor").value=movie.actor;
       $("#maker").value=movie.nation;
       $("#language").value=movie.language;
       $("#showTime").value=movie.releaseDate;
       $("#filmTime").value=movie.runningTime;
       $("#movieIntro").value=movie.description;
       $("#comment").value=movie.review;
   });

});