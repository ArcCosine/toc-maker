import buildToc from "./build-toc.js";
import "../style/toc-maker.scss";

const init = () => {
    const option = window._tocMakerParam || {};
    const tocId = option.id || "#toc";
    const toc = document.querySelector(tocId);
    if (toc) {
        buildToc(toc, option);
    }
};
document.addEventListener("DOMContentLoaded", init, false);
