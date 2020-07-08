This is a little script to pass an SVG through RoughJS to get that hand drawn look.

Set up dependencies with `npm install`

Then add your svg to the `pics` folder. Ensure it has the extension `.svg`. By default, SVG's will
just be roughened but there are some options you can set. [See the roughjs docs](https://github.com/rough-stuff/rough/wiki).

To enable a specific set of options for a given image create a file in the pics folder named the same as
the SVG but with the extension `.json`. Those options will be used for that image.

Run `node .` to process the images in the pics folder and create a roughened image in the `roughened` folder.

If you have the command `entr` on your system just run `./start.sh` which will watch and process images
on change (though it falls over when you added a new image...)
