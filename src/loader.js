import { appendCSS } from "./append-css.js";
import { buildTocData } from "./build-toc.js";

const loader = () => {
    // TODO: more good design:)
    const domCheck = ()=> {
        const option = window._tocMakerParam || {};
        const tocId = option.id || "#toc";
        const toc = document.querySelector(tocId);
        if( toc ){
            appendCSS();    //TODO don't use javascript.
            buildTocData(toc,option);
            return;
        }
        window.setTimeout(domCheck, 160 );
    };
    document.addEventListener("DOMContentLoaded", domCheck, false );
};

loader();
