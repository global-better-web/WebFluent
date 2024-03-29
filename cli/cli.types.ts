enum StyleMode {
  css,
  tailwind,
}

enum StylePlace {
  inTag,
  file,
}

type StyleConfig = {
  mode: StyleMode;
  place: StylePlace;
};

export type ConfigFileType = {
port: number;
mode: unknown;
  name?: string;
  auther?: string;
  version?: string;
  style?: StyleConfig;
};

export enum Commands {
  generate = "generate",
  g = "g",
  init = "init",
  build = "build",
  help = "help",
  h = "h",
  debug = "debug",
  serve= "serve"
}

export enum GenerateSubs {
  component = "component",
  c = "c",
  page = "page",
  p = "p",
  style = "style",
  s = "s",
}

// deno-lint-ignore no-inferrable-types
export const cliInfo: string = `Usage: webfluent [options] [command]

  A command-line interface for managing your WebFluent application.
  
  Options:
    -h, --help          Show this help message and exit.
  
  Commands:
    generate [options]  Generate a new file or component for your application.
      Options:
        c, component  Generate a new component.
        p, page       Generate a new page.
        s, style      Generate a new style file.
    init              Initialize a new WebFluent project.
    build             Build the WebFluent application.
    serve             serve any page with a provided path to http server with 8080 port
    
  Run 'webfluent [command] --help' for more information on a specific command.`;

export const ClasslessDe = `/* Classless.css v1.0

Table of Contents:
 1. Theme Settings
 2. Reset
 3. Base Style
 4. Extras  (remove unwanted)
 5. Classes  (remove unwanted)
*/

/* 1. Theme Settings ––––––––––––––––––––-–––––––––––––– */


:root, html[data-theme='light'] {
	--rem: 12pt;
	--width: 50rem;
	--navpos: absolute;  /* fixed | absolute */
	--font-p: 1em/1.7  'Open Sans', 'DejaVu Sans', FreeSans, Helvetica, sans-serif;
	--font-h: .9em/1.5 'Open Sans', 'DejaVu Sans', FreeSans, Helvetica, sans-serif;
	--font-c: .9em/1.4 'DejaVu Sans Mono', monospace;
	--border: 1px solid var(--cmed);
	--ornament: "‹‹‹ ›››";
	/* foreground   | background color */
	--cfg:   #433;    --cbg:    #fff;
	--cdark: #888;    --clight: #f5f6f7;
	--cmed:  #d1d1d1;
	--clink: #07c;
	--cemph: #088;    --cemphbg: #0881;
}


/* 2. Reset –––––––––––––––––––––––––––––––––––––––––––– */

/* reset block elements  */
* { box-sizing: border-box; border-spacing: 0; margin: 0; padding: 0;}
header, footer, figure, table, video, details, blockquote,
ul, ol, dl, fieldset, pre, pre > code, caption {
	display: block;
	margin: 0.5rem 0rem 1rem;
	width: 100%;
	overflow: auto hidden;
	text-align: left;
}
video, summary, input, select { outline:none; }

/* reset clickable things  (FF Bug: select:hover prevents usage) */
a, button, select, summary { color: var(--clink); cursor: pointer; }


/* 3. Base Style ––––––––––––––––––––––––––––––––––––––– */
html { font-size: var(--rem); background: var(--cbg); }
body {
	position: relative;
	margin: auto;
	max-width: var(--width);
	font: var(--font-p);
	color: var(--cfg);
	padding: 3.0rem 0.6rem 0;
	overflow-x: hidden;
}
body > footer { margin: 10rem 0rem 0rem; font-size: 90%; }
p { margin: .6em 0; }

/* links */
a[href]{ text-decoration: underline solid var(--cmed); text-underline-position: under; }
a[href^="#"] {text-decoration: none; }
a:hover, button:not([disabled]):hover, summary:hover {
	filter: brightness(92%); color: var(--cemph); border-color: var(--cemph);
}

/* lists */
ul, ol, dl { margin: 1rem 0; padding: 0 0 0 2em; }
li:not(:last-child), dd:not(:last-child) { margin-bottom: 0.5rem; }
dt { font-weight: bold; }

/* headings */
h1, h2, h3, h4, h5 { margin: 1.5em 0 .5rem; font: var(--font-h); line-height: 1.2em; clear: both; }
h1+h2, h2+h3, h3+h4, h4+h5 { margin-top: .5em; padding-top: 0; }  /* non-clashing headings */
h1 { font-size: 2.2em; font-weight: 300; }
h2 { font-size: 2.0em; font-weight: 300; font-variant: small-caps; }
h3 { font-size: 1.5em; font-weight: 400; }
h4 { font-size: 1.1em; font-weight: 700; }
h5 { font-size: 1.2em; font-weight: 400; color: var(--cfg); }
h6 { font-size: 1.0em; font-weight: 700; font-style: italic; display: inline; }
h6 + p { display: inline; }

/* tables */
td, th {
  padding: 0.5em 0.8em;
  text-align: right;
  border-bottom: 0.1rem solid var(--cmed);
  white-space: nowrap;
  font-size: 95%;
}
thead th[colspan] { padding: .2em 0.8em; text-align: center; }
thead tr:not(:only-child) td { padding: .2em 0.8em; }
thead+tbody tr:first-child td { border-top: 0.1rem  solid var(--cdark);  }
td:first-child, th:first-child { text-align: left; }
tr:hover{ background-color: var(--clight); }
table img { display: block; }

/* figures */
img, svg { max-width: 100%; vertical-align: text-top; object-fit: cover; }
p>img:not(:only-child) { float: right; margin: 0 0 .5em .5em; }
figure > img { display: inline-block; width: auto; }
figure > img:only-of-type, figure > svg:only-of-type { max-width: 100%; display: block; margin: 0 auto 0.4em; }
figcaption, caption { font: var(--font-h); color: var(--cdark); width: 100%; }
figcaption > *:first-child, caption > *:first-child { display: inline-block; margin: 0; }
figure > *:not(:last-child) { margin-bottom: 0.4rem; }

/* code */
pre > code {
  margin: 0;
  position: relative;
  padding: 0.8em;
  border-left: .4rem solid var(--cemph);
}
code, kbd, samp {
	padding: 0.2em;
	font: var(--font-c);
	background: var(--clight);
	border-radius: 4px;
}
kbd { border: 1px solid var(--cmed); }

/* misc */
blockquote { border-left: 0.4rem solid var(--cmed); padding: 0 0 0 1rem;  }
time{ color: var(--cdark); }
hr { border: 0; border-top: 0.1rem solid var(--cmed); }
nav { width: 100%; background-color: var(--clight); }
::selection, mark { background: var(--clink); color: var(--cbg); }


/* 4. Extra Style –––––––––––––––––––––––––––––––––––––– */

/* Auto Numbering: figure/tables/headings/cite */
article { counter-reset: h2 0 h3 0 tab 0 fig 0 lst 0 ref 0 eq 0; }
article figure figcaption:before {
	color: var(--cemph);
	counter-increment: fig;
	content: "Figure " counter(fig) ": ";
}

/* subfigures */
figure { counter-reset: subfig 0 }
article figure figure { counter-reset: none; }
article figure > figure { display: inline-grid; width: auto; }
figure > figure:not(:last-of-type) { padding-right: 1rem; }
article figure figure figcaption:before {
	counter-increment: subfig 1;
	content: counter(subfig, lower-alpha) ": ";
}

/* listings */
article figure pre + figcaption:before {
	counter-increment: lst 1;
	content: "Listing " counter(lst) ": ";
}

/* tables */
figure > table:only-of-type { display: table; margin: 0.5em auto !important; width: fit-content; }
article figure > table caption { display: table-caption; caption-side: bottom; }
article figure > table + figcaption:before,
article table caption:before {
	color: var(--cemph);
	counter-increment: tab 1;
	content: "Table " counter(tab) ": ";
}

/* headings */
article h2, h3 { position: relative; }
article h2:before,
article h3:before {
	display: inline-block;
	position: relative;
	font-size: 0.6em;
	text-align: right;
	vertical-align: baseline;
	left: -1rem;
	width: 2.5em;
	margin-left: -2.5em;
}
article h1 { counter-set: h2; }
article h2:before { counter-increment: h2; content: counter(h2) ". "; counter-set: h3; }
article h3:before { counter-increment: h3; content: counter(h2) "." counter(h3) ". ";}
@media (max-width: 60rem) { h2:before, h3:before { display: none; } }

/* tooltip + citation */
article p>cite:before {
	padding: 0 .5em 0 0;
	counter-increment: ref; content: " [" counter(ref) "] ";
	vertical-align: super; font-size: .6em;
}
article p>cite > *:only-child { display: none; }
article p>cite:hover > *:only-child,
[data-tooltip]:hover:before {
	display: inline-block; z-index: 40;
	white-space: pre-wrap;
	position: absolute; left: 1rem; right: 1rem;
	padding: 1em 2em;
	text-align: center;
	transform:translateY( calc(-100%) );
	content: attr(data-tooltip);
	color: var(--cbg);
	background-color: var(--cemph);
	box-shadow: 0 2px 10px 0 black;
}
[data-tooltip], article p>cite:before { 
	color: var(--clink);
	border: .8rem solid transparent; margin: -.8rem;
}
abbr[title], [data-tooltip] { cursor: help; }

/* navbar */
nav+* { margin-top: 3rem; }
body>nav, header nav {
	position: var(--navpos);
	top: 0; left: 0; right: 0;
	z-index: 41;
	box-shadow: 0vw -50vw 0 50vw var(--clight), 0 calc(-50vw + 2px) 4px 50vw var(--cdark);
}
nav ul { list-style-type: none; }
nav ul:first-child { margin: 0; padding: 0; overflow: visible; }
nav ul:first-child > li {
	display: inline-block;
	margin: 0;
	padding: 0.8rem .6rem;
}
nav ul > li > ul {
	display: none;
	width: auto;
	position: absolute;
	margin: 0.5rem 0;
	padding: 1rem 2rem;
	background-color: var(--clight);
	border: var(--border);
	border-radius: 4px;
	z-index: 42;
}
nav ul > li > ul > li { white-space: nowrap; }
nav ul > li:hover > ul { display: block; }
@media (max-width: 40rem) {
	nav ul:first-child > li:first-child:after { content: "[>correct<]25BE"; }
	nav ul:first-child > li:not(:first-child):not(.sticky) { display: none; }
	nav ul:first-child:hover > li:not(:first-child):not(.sticky) { display: block; float: none !important; }
}

/* details/cards */
summary>* { display: inline; }
.card, details {
	display: block;
	margin: 0.5rem 0rem 1rem;
	padding: 0 .6rem;
	border-radius: 4px;
	overflow: hidden;
}
.card, details[open] { outline: 1px solid var(--cmed); }
.card>img:first-child { margin: -3px -.6rem; max-width: calc(100% + 1.2rem); }
summary:hover, details[open] summary, .card>p:first-child {
	box-shadow: inset 0 0 0 2em var(--clight), 0 -.8rem 0 .8rem var(--clight); 
}
.hint { --cmed: var(--cemph); --clight: var(--cemphbg); background-color: var(--clight); }
.warn { --cmed: #c11; --clight: #e221; background-color: var(--clight); }

/* big first letter */
article > section:first-of-type > h2:first-of-type + p:first-letter,
article > h2:first-of-type + p:first-letter, .lettrine {
	float: left;
	font-size: 3.5em;
	padding: 0.1em 0.1em 0 0;
	line-height: 0.68em;
	color: var(--cemph);
}

/* ornaments */
section:after {
	display: block;
	margin: 1em 0;
	color: var(--cmed);
	text-align: center;
	font-size: 1.5em;
	content: var(--ornament);
}

/* side menu (aside is not intended for use in a paragraph!) */
main aside {
	position: absolute;
	width: 8rem;      right: -8.6rem;
	font-size: 0.8em; line-height: 1.4em;
}
@media (max-width: 70rem) { main aside { display: none; } }

/* forms and inputs  */
textarea, input:not([type=range]), button, select {
	font: var(--font-h);
	border-radius: 4px;
	border: 1.5px solid var(--cmed);
	padding: 0.4em 0.8em;
}
fieldset select, input:not([type=checkbox]):not([type=radio]) {
	display: block;
	width: 100%;
	margin: 0 0 1rem;
}
button, select {
	font-weight: bold;
	background-color: var(--clight);
	margin: .5em;
	border: 1.5px solid var(--clink);
}
button { padding: 0.4em 1em; font-size: 85%; letter-spacing: 0.1em; }
button[disabled]{ color: var(--cdark); border-color: var(--cmed); }
fieldset { border-radius: 4px; border: var(--border); padding: .5em 1em;}
textarea:hover, input:not([type=checkbox]):not([type*='ra']):hover, select:hover{
  border: 1.5px solid var(--cemph);
}
textarea:focus, input:not([type=checkbox]):not([type*='ra']):focus{
	border: 1.5px solid var(--clink);
	box-shadow: 0 0 5px var(--clink);
}
p>button { padding: 0 .5em; margin: 0 .5em; }
p>select { padding: 0;      margin: 0 .5em; }


/* 5. Bootstrap-compatible classes ––––––––––––––––––––– */

/* grid */
.row { display: flex; margin:  0.5rem -0.6rem; align-items: stretch; }
.row [class*="col"] { padding: 0  0.6rem; }
.row .col   { flex: 1 1 100%; }
.row .col-2 { flex: 0 0 16.66%; max-width: 16.66%;}
.row .col-3 { flex: 0 0 25%; max-width: 25%;}
.row .col-4 { flex: 0 0 33.33%; max-width: 33.33%; }
.row .col-5 { flex: 0 0 41.66%; max-width: 41.66%; }
.row .col-6 { flex: 0 0 50%; max-width: 50%; }
@media (max-width: 40rem) { .row { flex-direction: column; } }

/* align */
.text-left   { text-align: left; }
.text-right  { text-align: right; }
.text-center { text-align: center; }
.float-left  { float: left !important; }
.float-right { float: right !important; }
.clearfix    { clear: both; }

/* colors */
.text-black    { color: #000; }
.text-white    { color: #fff; }
.text-primary  { color: var(--cemph); }
.text-secondary{ color: var(--cdark); }
.bg-white    { background-color: #fff; }
.bg-light    { background-color: var(--clight); }
.bg-primary  { background-color: var(--cemph); }
.bg-secondary{ background-color: var(--cmed); }

/* margins */
.mx-auto { margin-left: auto; margin-right: auto; }
.m-0 { margin: 0 !important; }
.m-1, .mx-1, .mr-1 { margin-right:  1.0rem !important; }
.m-1, .mx-1, .ml-1 { margin-left:   1.0rem !important; }
.m-1, .my-1, .mt-1 { margin-top:    1.0rem !important; }
.m-1, .my-1, .mb-1 { margin-bottom: 1.0rem !important; }

/* pading */
.p-0 { padding: 0 !important; }
.p-1, .px-1, .pr-1 { padding-right:  1.0rem !important; }
.p-1, .px-1, .pl-1 { padding-left:   1.0rem !important; }
.p-1, .py-1, .pt-1 { padding-top:    1.0rem !important; }
.p-1, .py-1, .pb-1 { padding-bottom: 1.0rem !important; }

/* be print-friendly */
@media print { 
	@page { margin: 1.5cm 2cm; } 
	html {font-size: 9pt!important; } 
	body { max-width: 27cm; }
	p { orphans: 2; widows: 2; }
	caption, figcaption { page-break-before: avoid; }
	h2, h3, h4, h5 { page-break-after: avoid;}
	.noprint, body>nav, section:after { display: none; }
	.row { flex-direction: row; }
}`

export const TabBox = `.tabs {
  display: flex;
  flex-wrap: wrap; 
  background: linear-gradient(0deg, var(--cbg) 1rem, var(--clight) 0%);
  border: var(--border); border-radius: 5px;
  padding-bottom: 0.5em;
}
.tabs label {
  order: 1; /*Put the labels first*/
  display: block;
  cursor: pointer;
  padding: .5rem .8rem;
  margin: .5rem 0 -1px;
  border-radius: 5px 5px 0 0;
  color: var(--clink); 
  background: var(--clight);
}
.tabs label:first-of-type{ margin-left: 1rem; }
.tabs .tab {
  order: 99; /*Put the tabs last*/
  flex-grow: 1;
  width: 100%;
  display: none;
  z-index: 10;
  padding: 0 1rem;
  background: var(--cbg);
  border-top: var(--border);
}
.tabs input[type="radio"]:not(:checked) + label:hover { filter: brightness(90%); }
.tabs input[type="radio"] { display: none; }
.tabs input[type="radio"]:checked + label {   
  border: var(--border); border-bottom: 0px;  
  background: var(--cbg); z-index: 11; 
}
.tabs input[type="radio"]:checked + label + .tab { display: block; }

@media (max-width: 45em) {
  .tabs .tab, .tabs label { order: initial; }
  .tabs label { width: 100%; margin: 0 0 -1px !important; }
}
@media print { .tabs label + .tab { display: block; } .tabs label { display: none; } } `

export const Themes = `
/*@import url('https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap');*/
/* for medium */
@import url('https://fonts.googleapis.com/css2?family=Lora&family=Archivo&display=swap');

/* for milligram */
@import url('https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic');

/* for Sepia */
@import url('https://fonts.cdnfonts.com/css/libertinus-serif');
@import url('https://fonts.cdnfonts.com/css/libertinus-sans');

html[data-theme='dark'] {
	/* foreground   | background color */
	--cfg:   #cecbc4; --cbg:    #252220;
	--cdark: #999;    --clight: #333;
	--cmed:  #566;
	--clink: #1ad;
	--cemph: #0b9;    --cemphbg: #0b91;
}

@media (prefers-color-scheme: dark) {
	html[data-theme='light'] {
		/* foreground   | background color */
		--cfg:   #cecbc4; --cbg:    #252220;
		--cdark: #999;    --clight: #333;
		--cmed:  #566;
		--clink: #1ad;
		--cemph: #0b9;    --cemphbg: #0b91;
	}	
}



html[data-theme='sepia']{
	--rem: 14pt;
	--width: 48rem;
	--font-p: 1em/1.6 'Libertinus Serif', Times, serif;
	--font-h: 1em/1.6 'Libertinus Sans', Helvetica, sans;
	--font-c: 85%/1.4 monospace;
	--ornament: "∞ ∞ ∞"; 
	/*--ornament: "❦ ❦ ❦"; "☙ ❧";*/
	/* foreground   | background color */
	--cfg:    #433;   --cbg: #fefbf4;
	--cdark: #6c605c; --clight: #f3efea;
	--cmed: #a8928e;
	--clink: #bd0000;
	--cemph: #a35403; --cemphbg:  #a3540310;
}



html[data-theme='milligram']{
	--navpos: fixed;
	--rem: 11pt;
	--width: 800px;
	--font-p: 300 1em/1.6 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	--font-h: 300 1em/1.3 'Roboto', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
	--font-c: 86%/1.4 monospace;
	--ornament: "‹‹‹ ›››";
	--border: 1px solid var(--cmed);
	/* foreground   | background color */
	--cfg:   #606c76; --cbg: #fff;
	--cdark: #6c605c; --clight: #f4f5f6;
	--cmed: #d1d1d1;
	--clink: #9b4dca;
	--cemph: #9b4dca; --cemphbg: #9b4dca10;
}

html[data-theme='pure']{
	--navpos: absolute;
	--width: 768px;
	--rem: 18px;
	--font-p: 1em/1.6 Helvetica,Arial,sans-serif;
	--font-h: 1em/1.6 Helvetica,Arial,sans-serif;
	--font-c: 86%/1.4 monospace;
	--ornament: "‹‹‹ ›››";
	--border: 1px solid var(--cmed);
	/* foreground   | background color */
	--cfg:   #777;    --cbg: #fff;
	--cdark: #777;    --clight: #f8f8ff;
	--cmed: #e6e6e6;
	--clink: #3b8bba;
	--cemph: #1f8dd6; --cemphbg: #1f8dd610;
}

html[data-theme='sakura']{
	--navpos: absolute;
	--width: 684px;
	--rem:  18px;
	--font-p: 1em/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
	--font-h: 1em/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;
	--font-c: .8em/1.4 monospace;
	--ornament: "";
	--border: 1px solid var(--cmed);
	/* foreground   | background color */
	--cfg:   #4a4a4a; --cbg: #f9f9f9;
	--cdark: #4a4a4a; --clight: #f1f1f1;
	--cmed: #d1d1d1;
	--clink: #1d7484;
	--cemph: #982c61; --cemphbg: #982c6110;
}

html[data-theme='skeleton']{
	--navpos: absolute;
	--rem: 15px;
	--width: 800px;
	--font-p: 1em/1.6 "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	--font-h: 1em/1.6 "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	--font-c: .9em/1.4 monospace;
	--ornament: "───────";
	--border: 1px solid var(--cmed);
	/* foreground   | background color */
	--cfg:   #222;    --cbg:    #fff;
	--cdark: #4a4a4a; --clight: #f1f1f1;
	--cmed: #e1e1e1;
	--clink: #1eaedb;
	--cemph: #0fa0ce; --cemphbg: #0fa0ce10;
}

html[data-theme='bootstrap']{
	--rem: 16px;
	--navpos: absolute;
	--width: 960px;
	--font-p: 1em/1.6 system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
	--font-h: 1em/1.6 "Raleway", "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	--font-c: .9em/1.4 SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
	--ornament: "";
	--border: 1px solid var(--cmed);
	/* foreground   | background color */
	--cfg:  #212529;    --cbg:    #fff;
	--cdark: #343a40; --clight: #f8f9fa;
	--cmed: #6c757d;
	--clink: #0d6efd;
	--cemph: #7952b3; --cemphbg: #7952b310;
}



html[data-theme='medium']{
	--rem: 19px;
	--navpos: absolute;
	--width: 720px;
	--font-p: 1em/1.6 'Lora', serif;
	--font-h: .9em/1.4 'Archivo', sans !important;
	--font-c: .9em/1.4 Consolas,"Liberation Mono","Courier New",monospace;
	--ornament: "";
	--border: 1px solid var(--cmed);
	/* foreground   | background color */
	--cfg:  #292929;    --cbg:    #fff;
	--cdark: #343a40; --clight: #fafafa;
	--cmed: #757575;
	--clink: #1a8917;
	--cemph: #1a8917; --cemphbg: #1a891710;
}


html[data-theme='tufte']{
	--rem: 15px;
	--navpos: absolute;
	--width: 800px;
	--font-p: 1.4em/2 et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
	--font-h: 1.4em/1.5 et-book, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif;
	--font-c: .9em/1.4 Consolas,"Liberation Mono","Courier New",monospace;
	--ornament: "";
	--border: 1px solid var(--cmed);
	/* foreground   | background color */
	--cfg:   #111;    --cbg:    #fffff8;
	--cdark: #111;    --clight: #fffff8;
	--cmed: #b4d5fe;
	--clink: #111;
	--cemph: #111;
}`;