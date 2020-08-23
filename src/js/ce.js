//useful func
const ce = (node,tag,text) => {
    const elem = node.appendChild(document.createElement(tag));
    if( typeof text !== "undefined" ){
        elem.appendChild(document.createTextNode(text));
    }
    return elem;
};

export default ce;
