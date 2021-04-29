# image-compressor

An image compression program built for the purpose of automating a task I didn't want to do manually (would you?)
for a large set of photos.

This app uses Sharp for image compression. An options object can be passed in as an argument to the compress function.
The options object takes a size property, a path to the directory to read from, and a path to the directory to write to.
The values used in the following example are the default values used.

<code>{ size: 1080, readPath: "./assets", writePath: "./processed" }</code>
