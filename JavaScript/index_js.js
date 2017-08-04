$("#s-juqing").click(()=> {
    $.get(`/movie_class?class_name=剧情`, (movies) => {
        displayInfo(movies, 1);
    });
});
$("#s-aiqing").click(()=>{
    $.get(`/movie_class?class_name=爱情`, (movies)=>{
        displayInfo(movies, 2);
    });
});
$("#s-xiju").click(()=>{
    $.get(`/movie_class?class_name=喜剧`, (movies)=>{
        displayInfo(movies, 3);
    });
});
$("#s-kehuan").click(()=>{
    $.get(`/movie_class?class_name=科幻`, (movies)=>{
        displayInfo(movies, 4);
    });
});
$("#s-dongzuo").click(()=>{
    $.get(`/movie_class?class_name=动作`, (movies)=>{
        displayInfo(movies, 5);
    });
});
$("#s-xuanyi").click(()=>{
    $.get(`/movie_class?class_name=悬疑`, (movies)=>{
        displayInfo(movies, 6);
    });
});
$("#s-kongbu").click(()=>{
    $.get(`/movie_class?class_name=恐怖`, (movies)=>{
        displayInfo(movies, 7);
    });
});
$("#s-qingchun").click(()=>{
    $.get(`/movie_class?class_name=青春`, (movies)=>{
        displayInfo(movies, 8);
    });
});
$("#s-lizhi").click(()=>{
    $.get(`/movie_class?class_name=励志`, (movies)=>{
        displayInfo(movies, 9);
    });
$("#s-zhanzheng").click(()=>{
    $.get(`/movie_class?class_name=战争`, (movies)=>{
        displayInfo(movies, 10);
    });
});
function displayInfo(movies, num) {
    let len = movies.length, trLen = parseInt(len / 4) + 1;
    let table = document.getElementsByTagName("table")[num];
    table.innerHTML = "";
    for (let i = 0; i < trLen; i++) {
        let tr = document.createElement("tr");
        let count = 0;
        while (count < len - i * 4 && count < 4) {
            let td = document.createElement("td"),
                a = document.createElement("a"),
                img = document.createElement("img"),
                div = document.createElement("div"),
                span = document.createElement("span");
            img.setAttribute("src", movies[i * 4 + count].ImgUrl);
            div.setAttribute("class", "name");
            span.setAttribute("class", "score");
            div.innerHTML = movies[i * 4 + count].MovieName;
            span.innerHTML = "豆瓣评分:" + movies[i * 4 + count].MovieGrade + "   ";
            a.appendChild(img);
            a.style.cursor = "pointer";
            img.onmouseover = ()=> {
                this.style.width = "170px";
                this.style.height = "230px";
            };
            td.appendChild(a);
            td.appendChild(div);
            td.appendChild(span);
            let scores = parseInt(movies[i * 4 + count].MovieGrade / 2);
            for (let j = 0; j < scores; j++) {
                let star = document.createElement("span");
                star.setAttribute("class", "glyphicon glyphicon-star");
                td.appendChild(star);
            }
            if (movies[i * 4 + count].MovieGrade - scores * 2 >= 1) {
                let star = document.createElement("span");
                star.setAttribute("class", "glyphicon glyphicon-star-empty");
                td.appendChild(star);
            }
            tr.appendChild(td);
            count++;
        }
        table.appendChild(tr);
    }
}


