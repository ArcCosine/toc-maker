import "../less/toc-maker.less";
import renderToc from "./render-toc.js";

//build table of contents
const buildToc = (element, option) => {

    const baseNode = typeof option.baseNode !== "undefined" ? document.querySelector(option.baseNode) : document;
    const headers = baseNode.querySelectorAll("h1,h2,h3,h4,h5,h6");

    const createArray = (elem, index) => {
        if( !elem.id ){
            elem.setAttribute("id","toc-maker-"+index);
        }
        return {
            level: parseInt(elem.tagName.replace(/h/i,""),10),
            text: elem.textContent,
            link: "#" + elem.id
        }
    };
    const tocDatas = Array.prototype.map.call(headers,createArray);
    element.appendChild(renderToc(tocDatas, option));
};

export default buildToc;
