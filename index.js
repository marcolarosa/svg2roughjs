const {
    ensureDir,
    readdir,
    writeFile,
    readFile,
    readJSON,
} = require("fs-extra");
const coarse = require("coarse");
const path = require("path");

(async () => {
    const svgPath = path.join(__dirname, "pics");
    const outputPath = path.join(__dirname, "roughened");
    await ensureDir(outputPath);

    let files = await readdir(svgPath);
    files = files.filter((f) => f.match(".svg"));

    for (let file of files) {
        let options = {
            roughness: 1,
        };
        try {
            options = await readJSON(
                path.join(svgPath, file.replace(".svg", ".json"))
            );
        } catch (error) {
            // ignore and use defautl options
        }
        console.log(`Roughing up: ${file}`);
        let svg = await readFile(path.join(svgPath, file));
        let roughened = coarse(svg, options);
        await writeFile(path.join(outputPath, file), roughened);
    }
})();
