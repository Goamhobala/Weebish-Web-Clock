const { exec } = require("child_process");
const args = process.argv;
args.splice(0, 2);
const str = args.join(" ");

exec("git add .", cbadd);

function cbadd(err, strout, sdtin) {
  if (err) {
    console.log(err);
    return;
  }

  exec(`git commit -m "${str}"`, cbcommit);
}

function cbcommit(err, strout, sdtin) {
  if (err) {
    console.log(err);
    return;
  }
  //it worked
  console.log("done");
}
