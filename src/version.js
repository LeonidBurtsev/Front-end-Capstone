/* App info. */
const app_name = "Front-end Capstone"
const author = "Leonid B."

/* Setting up symVer. */
const major_version = 0
const minor_version = 1
const patch_version = 0

export default function return_version() {
   let string = major_version.toString() + "." 
    + minor_version.toString() + "." 
    + patch_version.toString()
    return string;
}