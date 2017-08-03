class movie {
    constructor(id, name, actors, language, summa, year, type, area, pic, comments, daoyan) {
        this.id = id;
        this.name = name;
        this.actors = actors;
        this.language = language;
        this.summa = summa;
        this.year = year;
        this.type = type;
        this.area = area;
        this.pic = pic;
        this.comments = comments;
        this.daoyan = daoyan;
    }
} ///movie对象


function renderDetail(data) { /// by ajax getDetail
    let mp = $('#abstract').children();
    mp[0].childNodes[1].innerHTML = data.name;
    mp[1].childNodes[1].innerHTML = data.daoyan;
    mp[2].childNodes[1].innerHTML = data.actors;
    mp[3].childNodes[1].innerHTML = data.language;
    mp[4].childNodes[1].innerHTML = data.year;
    mp[5].childNodes[1].innerHTML = data.area;
    mp[6].childNodes[1].innerHTML = data.type;

}