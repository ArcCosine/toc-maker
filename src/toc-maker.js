(()=>{
    const init = ()=>{
        const toc = document.getElementById("toc");
        if( toc ){
            buildToc(toc);
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
        let ul, beforelevel = 0;
        const renderer = (data, index, array) => {
            //console.log(data);
            if( data.level !== beforelevel ){
                let diff = data.level - beforelevel;
                if( diff > 0 || data.level === 1){
                    const appedLevel = (data.level === 1) ? fragment :  ul;
                    ul = appedLevel.appendChild(document.createElement("ul"));
                } else {
                    // return previous level
                    while(diff == -1){
                        ul = ul.parentNode;
                        diff--;
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
