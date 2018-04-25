Starter kit built with gulp :
- serve the project on localhost:8080
- watch and reload html / scss / js files
- offering html / js templating
- auto generated styleguide base on style (/styleguide)

Init project :
- npm install
- gulp serve

(@todo: edit config.json & package.json if you use different path)

Atlas-guide (https://github.com/dimanech/atlas-guide) :
  Config option :
  {
      "guideSrc": "path/to/components/directory/",
      "guideDest": "path/where/atlas/will/be/placed/",
      "cssSrc": "path/to/css/",
      "scssSrc": "path/to/scss/",
      "scssAdditionalImportsArray": "",
      "componentPrefixes": ["b-", "l-"],
      "excludedCssFiles": "dev_",
      "excludedSassFiles": "dev_",
      "excludedDirs": "dev_",
      "copyInternalAssets": true,
      "templates": {
          "about": "",
          "bundle": "",
          "component": "",
          "guide": "",
          "insights": "",
          "styleguide": ""
      },
      "includes": {
          "aside": "",
          "assetsfooter": "",
          "assetshead": "",
          "componentstataside": "",
          "componentstatfooter": "",
          "componentstatstructure": "",
          "copyright": "",
          "footer": "",
          "header": "",
          "logo": "",
          "navigation": "",
          "toc": "",
          "welcome": ""
      },
      "projectConstants": {
          "constantsSrc": "path/to/project-settings.scss",
          "colorPrefix": "color",
          "fontPrefix": "font",
          "scalePrefix": "scale",
          "spacePrefix": "space",
          "motionPrefix": "motion",
          "depthPrefix": "depth",
          "breakpointPrefix": "break"
      }
  }

  Code Documentation :
    /*md
      # Heading level 1

      ## Heading level 2

      ## Heading level 3

      Regular paragraph with **bold**, _italic_ and `inline code`.

      * list item
      * list item
      * list item

      1. ordered list item
      2. ordered list item
      3. ordered list item

      etc.

      ```html
      <h1>heading 1</h1>
      ```

      ```scss
      .some { maring: 0; }
      ```

      {{#inline}}assets/src/images/icons.svg{{/inline}}
    */