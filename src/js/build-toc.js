import "../less/toc-maker.less";
import { renderTocElement } from "./render-toc.js";

//build table of contents
const buildTocData = (element, option) => {

    const baseNode = typeof option.baseNode !== "undefined" ? document.querySelector(option.baseNode) : document;   //TODO
    const headers = baseNode.querySelectorAll("h1,h2,h3,h4,h5,h6"); //TODO

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

    return element.appendChild(tocElem);
};

export { buildTocData };
