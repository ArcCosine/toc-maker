# Usage 

    <script src="https://pathologist-leonard-26086.netlify.com/tocm.js" charset="UTF-8"></script>
    <script type="text/javascript">
    window._tocMakerParam = {
      baseNode: "body",
      id: "#toc2",
      title: true,
      titleLabel: "Table of Contents",
      toggle: true,
      toggleOpen: true,
      toggleLabelOpen: "[Open]",
      toggleLabelClose: "[Close]"
    };
    </script>


# Option


|Option name|Detail|Type|Remarks|
|-----------|------|----|-------|
|baseNode|Contents area node|String|default:"document.body". See:[document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)|
|id|Insert toc contents node's Id|String|default:"document.body". See:[document.querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)|
|title|Show title flag|Boolean|default:true|
|titleLabel|Title label|String|default:"title"|
|toggle|Show toggle button|Boolean|default:true|
|toggleOpen|Opend table of contents.|Boolean|default:true|
|toggleLabelOpen|Open label name|String|default:"[open]"|
|toggleLabelClose|Close label name|String|default:"[close]"|



# Install

    npm install

# Build(use webpack)

    npm run build

# develop(use webpack server)

    npm run dev 

and access to [http://localhost:8080/debug.html](http://localhost:8080/debug.html)


