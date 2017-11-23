import { ce  } from "./ce.js";

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
            toggleLink.textContent = container.classList.contains("__toc__open") ?  closeLabel : openLabel;
        };
        const toggle = ce(fragment,"span");
        const toggleLink = ce(toggle,"span", option.toggleOpen ? closeLabel : openLabel);
        toggleLink.addEventListener("click", toggleEvent, false);
        toggleLink.classList.add("__toc__toggle");
    }
    let ul = ce(fragment,"ul");
    ul.classList.add("__toc__ul");
    if( option.toggleOpen ){
        ul.classList.add("__toc__open");
    }
    let beforelevel = option.startLevel || 1;
    const renderer = (data) => {
        if( data.level !== beforelevel ){
            const diff = data.level - beforelevel;
            if( diff > 0 ){
                // next level
                // TODO: more good design
                ul = ce(ul,"ul");
            } else {
                // same level or previous level
                // If same level doesn't move previous level.
                // TODO: more good design
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

export { renderTocElement };
