(()=>{

    //useful func
    const ce = (node,tag,text) => {
        const elem = node.appendChild(document.createElement(tag));
        if( typeof text !== "undefined" ){
            elem.appendChild(document.createTextNode(text));
        }
        return elem;
    };

    const appendCSS = () => {
        const cssText = `
        .__toc__ul {
            max-height:0;
            overflow: hidden;
            transition: max-height .8s linear;
        }
        .__toc__open {
            max-height: 50em;
            height: auto;
        }`;
        const header = document.querySelector("head");
        const style = ce(header,"style",cssText);
        style.setAttribute("type", "text/css");

    };

    //build table of contents
    const buildTocData = (element, option) => {
        const headers = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
        let tocDatas = [];
        let id = 0;

        const createArray = (elem) => {
            if( !elem.id ){
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
        const tocElem = renderTocElement(tocDatas, option);

        element.appendChild(tocElem);
    };


    // render TOC
    const renderTocElement = (datas, option)=> {
        option.toggleOpen = option.toggleOpen || false;
        const fragment = document.createDocumentFragment();

        //add header
        if( option.title ){
            ce(fragment,"span",option.titleLabel || "title");
        }
        if( option.toggle ){
            const openLabel = option.toggleLabelOpen || "[open]";
            const closeLabel = option.toggleLabelClose || "[close]";

            const toggleEvent = () => {
                const container = toggle.parentNode.querySelector("ul");
                container.classList.toggle("__toc__open");
                setTimeout( () => {
                    toggleLink.textContent = container.classList.contains("__toc__open") ?  closeLabel : openLabel;
                }, 800 );
            };
            const toggle = ce(fragment,"span");
            const toggleLink = ce(toggle,"a", option.toggleOpen ? closeLabel : openLabel);
            toggleLink.href = "#";
            toggleLink.addEventListener("click", toggleEvent, false);
        }
        let ul = ce(fragment,"ul");
        ul.classList.add("__toc__ul");
        if( option.toggleOpen ){
            ul.classList.add("__toc__open");
        }
        let beforelevel = 1;
        const renderer = (data) => {
            if( data.level !== beforelevel ){
                const diff = data.level - beforelevel;
                if( diff > 0 ){
                    // next level
                    ul = ce(ul,"ul");
                } else {
                    // same level or previous level
                    // If same level doesn't move previous level.
                    for( let i=diff; i < 0; i++){
                        ul = ul.parentNode;
                    }
                }
            }
            const li = ce(ul,"li");
            const aTag = ce( li, "a", data.text);
            aTag.setAttribute("href", data.link);
            beforelevel = data.level;
        };
        datas.forEach(renderer);
        return fragment;
    };

    let timer;
    const domCheck = ()=> {
        if( timer ){
            clearTimeout(timer);
        }
        const option = window._tocMakerParam || {};
        const tocId = option.id || "#toc";
        const toc = document.querySelector(tocId);
        if( toc ){
            appendCSS();
            buildTocData(toc,option);
            return;
        }
        window.setTimeout(domCheck, 160 );
    };

    document.addEventListener("DOMContentLoaded", domCheck, false );

})();
