//import default_foo, { default_bar } from "../export/default-exporting";
//import { default_bar, default_foo } from "../export/default-exporting";
import defaultModule, { default_bar } from "../export/default-exporting";

defaultModule();
console.log(default_bar);