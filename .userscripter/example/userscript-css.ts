import { StylesheetModule } from "lib/stylesheet-manager";
import CSS_MAIN_STYLESHEET from "css/stylesheet";
import CSS_FOOBARS from "css/foobars";
import * as SITE from "globals-site";
import * as CONFIG from "globals-config";

const ALWAYS: boolean = true;

/*
******** README ********

CSS modules to be inserted conditionally are declared in this file.

In practice, "conditionally" could mean e.g. that a certain preference is set. ALWAYS can also be used as a condition.

Every item must be an object with the following structure:
{
    condition : a boolean indicating whether this module should be inserted
    css       : the CSS code to insert
}
*/

const STYLESHEET_MODULES: StylesheetModule[] = [
    // Main stylesheet:
    {
        condition: ALWAYS,
        css: CSS_MAIN_STYLESHEET,
    },

    // Foobars:
    {
        condition: ALWAYS,
        css: CSS_FOOBARS,
    },
];

export default STYLESHEET_MODULES;
