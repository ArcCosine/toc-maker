import { buildTocData } from "./build-toc.js";

const loader = () => {
    // TODO: more good loader:)
    const domCheck = ()=> {
        const option = window._tocMakerParam || {};
        const tocId = option.id || "#toc";
        const toc = document.querySelector(tocId);
        if( toc ){
            buildTocData(toc,option);
            return;
        }
        window.setTimeout(domCheck, 160 );
    };
    document.addEventListener("DOMContentLoaded", domCheck, false );
};

loader();
