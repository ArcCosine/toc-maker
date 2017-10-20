import { ce  } from "./ce.js";

// append css
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

export { appendCSS };
