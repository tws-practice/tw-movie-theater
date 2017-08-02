"use strict";
define(function (require, exports, module) {
    let masterPage = {
        html:{
            content:$('.content')
        },
        render:{
            listContent:function(data){
                let tplData = data || {};
                let html = template('tplMain',tplData);
                masterPage.html.content.html(html);
            },
            detailContent:function (data) {
                let tplData = data || {};
                let html = template('tplDetail',tplData);
                masterPage.html.content.html(html);
            }

        },
        control:{
            init:function () {
                $(document).on('click','.movieItem',function (e) {
                    let elem = $(e.target);
                    let data = {};
                    data.title = 'detail';
                     masterPage.render.detailContent(data);
                })
            }
        },
        init:function(){
            masterPage.render.listContent();
            masterPage.control.init();
        }
    };
    masterPage.init()
});