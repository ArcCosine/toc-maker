(()=>{
<<<<<<< HEAD
    const init = ()=>{
        const toc = document.getElementById("toc");
        if( toc ){
            buildToc(toc);
=======

    //useful func
    const ce = (node,tag,text) => {
        const elem = node.appendChild(document.createElement(tag));
        if( typeof text !== "undefined" ){
            elem.appendChild(document.createTextNode(text));
        }
        return elem;
    };


    // append css
    const appendCSS = () => {
        const cssText = `
        .__toc__ul {
            max-height:0;
            overflow: hidden;
            transition: max-height .8s linear;
>>>>>>> 907ea67... Update.
        }
    };
    const buildToc = (element)=> {
        const headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
        let tocDatas = [];
        let id = 0;

        const createArray = (elem, index, array) => {
            if( !elem.getAttribute("id") ){
                elem.setAttribute("id","toc-maker-"+id);
            }
            tocDatas.push({
                level: parseInt(elem.tagName.replace(/h/i,""),10),
                text: elem.textContent,
                link: "#" + elem.id
            });
            id++;
        };
        Array.prototype.forEach.call( headers, createArray);

        const fragment = document.createDocumentFragment();
        let ul = fragment.appendChild(document.createElement("ul")), beforelevel = 1;
        const renderer = (data, index, array) => {
            if( data.level !== beforelevel ){
                const diff = data.level - beforelevel;
                if( diff > 0 ){
                    // next level
                    ul = ul.appendChild(document.createElement("ul"));
                } else {
                    // previous level
                    for( let i=diff; i < 0; i++){
                        ul = ul.parentNode;
                    }
                }
            }
            const li = ul.appendChild(document.createElement("li"));
            const aTag = li.appendChild(document.createElement("a"));
            aTag.appendChild(document.createTextNode(data.text));
            aTag.setAttribute("href", data.link);
            beforelevel = data.level;
        };
        Array.prototype.forEach.call(tocDatas, renderer);
        element.appendChild(fragment);
    };

    let timer;

    const domCheck = ()=> {
        const toc = document.getElementById("toc");
        if( toc ){
            init();
            clearInterval(timer);
            return;
        }
    };

    const load = ()=> {
        timer = window.setInterval(domCheck, 100 );
    };

    document.addEventListener("DOMContentLoaded", load, false );

})();
