var str = "https://gamersgatep.imgix.net/c/4/a/e199de90178bb7da5151503e289839708951ea4c.jpg?auto=format";
var newString = str.slice(-11);
console.log(newString)

if (newString == "auto=format") {
    console.log("maak nieuwe array")
}