const fse = require("fs-extra");

var destination = "./gist"

var configPath = "./gistconfig.json";
var configData = "";

try {
    configData = fse.readFileSync(configPath,"utf8");
}
catch(e) {
    console.error(e);
}

var components = JSON.parse(configData)

var exclude = [
    /(\.js)$/,
    /(\.js.map)$/];

components.files.forEach((file) => {
    try {
        fse.copySync(file,destination + "/" + file);
    }
    catch(e) {
        console.error(e);
    }
});

components.directories.forEach((directory) => {
    try {
        fse.copySync(
            directory,
            destination + "/" + directory,
            {
                filter : (src) => {
                    for ( i in exclude) {
                        if (exclude[i].test(src))
                            return false;
                    }
                    return true;
                }
            });
    }
    catch(e) {
        console.error(e);
    }
});
