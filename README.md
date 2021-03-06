# Usage 

## English Version

    <script src="https://pathologist-leonard-26086.netlify.app/tocm.js" charset="UTF-8"></script>
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


## Japanese Version

    <script src="https://pathologist-leonard-26086.netlify.app/tocm.js" charset="UTF-8"></script>
    <script type="text/javascript">
    window._tocMakerParam = {
      baseNode: "body",
      startLevel: 1,
      id: "#toc2",
      title: true,
      titleLabel: "目次",
      toggle: true,
      toggleOpen: true,
      toggleLabelOpen: "[開く]",
      toggleLabelClose: "[閉じる]"
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

# 
