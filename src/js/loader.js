import buildToc from "./build-toc.js";

const domCheck = () => {
    const option = window._tocMakerParam || {};
    const tocId = option.id || "#toc";
    const toc = document.querySelector(tocId);
    if (toc) {
        buildToc(toc, option);
    }
};
document.addEventListener("DOMContentLoaded", domCheck, false);
