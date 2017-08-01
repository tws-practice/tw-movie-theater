"use strict";
define(function (require, exports, module) {
    let masterPage = {
        html:{
            btnLeft:$('.btnLeft'),
            btnRight:$('.btnRight'),
            content:$('.content')
        },
        render:{
            init:function(){
                let data = {};
                data.title = 'Main';
                let html = template('tplMain',data);
                masterPage.html.content.html(html);
            }
        },
        control:{
            init:function () {
                masterPage.html.btnLeft.on('click',function () {
                    let data = {};
                    data.title = 'Main';
                    let html = template('tplMain',data);
                    masterPage.html.content.html(html);
                });

                masterPage.html.btnRight.on('click',function () {
                    let data = {};
                    data.title = 'Right';
                    let html = template('tplDetail',data);
                    masterPage.html.content.html(html);
                });
            }
        },
        init:function(){
            masterPage.render.init();
            masterPage.control.init();
        }
    };
    masterPage.init()
});