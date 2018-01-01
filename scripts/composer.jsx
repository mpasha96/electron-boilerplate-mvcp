const fs = require("fs");

var basePath = "./fragments/";
var outPathHTML = "index.html";
var outPathCSS = "styles/style.css";

var outHTML = "";
var outCSS = "";

var fragments = [
    "header",
    "footer"
];

fragmentsHTML = fragments.map((v,i,a) => (basePath + v + ".html"));
fragmentsCSS = fragments.map((v,i,a) => (basePath + v + ".css"));

for (i in fragmentsHTML) {
    fragHTML = fragmentsHTML[i];
    fragCSS = fragmentsCSS[i];
    try {
        outHTML += fs.readFileSync(fragHTML, "utf8");
    } catch(e) {
        console.log(e);
    }
    try {
        outCSS += fs.readFileSync(fragCSS, "utf8");
    } catch(e) {
        console.log(e);
    }
}

try {
     fs.writeFileSync(outPathHTML,outHTML,"utf8");
} catch (e) {
    console.log(e);
}

try {
    fs.writeFileSync(outPathCSS,outCSS,"utf8");
} catch (e) {
   console.log(e);
}