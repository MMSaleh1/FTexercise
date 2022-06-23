A simple package that retrieves data from a list of URLS

requirements:

nodejs: v16+
npm: v8+

Installations :

1- unzip this package in the root directory of you project

2- In your project's package.json file add
    
    {
        "exercise" : "file:<path-to-exercise-lib>"
    }
    
    note : we use <path-to-exercise-lib> since the package is not available on the npm's registry
    
   
3-  run npm i to add the package and it's dependencies to node_module
    
4-  you can now use the Package like this  `const {requestMultipleUrls} = require('exercise')`
