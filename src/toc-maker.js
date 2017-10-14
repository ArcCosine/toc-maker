(()=>{
    const init = ()=>{
        const toc = document.getElementById("toc");
        if( toc ){
            console.log("OK");
            buildToc(toc);
        }
    };
    const buildToc = (element)=> {
        const headers = document.querySelectorAll("h2");

        const fragment = document.createDocumentFragment();
        const ul = fragment.appendChild(document.createElement("ul"));
        Array.prototype.forEach.call(headers, (elem,index,array)=>{
           const li = ul.appendChild(document.createElement("li"));
           li.appendChild(document.createTextNode(elem.textContent));
        });
        element.appendChild(fragment);
    };
    const domCheck = ()=> {
        const toc = document.getElementById("toc");
        if( toc ){
            init();
            clearInterval(timer);
            return;
        }
    };

    const timer = window.setInterval(domCheck, 100 );

})();
