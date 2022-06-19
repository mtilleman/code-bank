import { HTML } from "./Components/html-component"
import { CSS } from "./Components/css-component";
import { JavaScript } from "./Components/javascript-componenet"

function App() {

  let cssProperties = [
    {
      id: 1,
      property: "align-content",
      definition: "Aligns items in a flex container along flex lines."
    },
    {
      id: 2,
      property: "align-items",
      definition: "Aligns evenly spaced items in a flex container."
    },
    {
      id: 3,
      property: "align-self",
      definition: "Aligns an item inside a flex container."
    },
    {
      id: 4,
      property: "all",
      definition: "Resets all element properties to its default or inherited values."
    },
    {
      id: 5,
      property: "animation",
      definition: "Creates an animating element."
    },
    {
      id: 6,
      property: "animation-delay",
      definition: "Sets a delay before an animation begins."
    },
    {
      id: 7,
      property: "animation-direction",
      definition: "Sets how, in which direction, an animation is played."
    },
    {
      id: 8,
      property: "animation-duration",
      definition: "Defines the duration of an animation cycle."
    },
    {
      id: 9,
      property: "animation-fill-mode",
      definition: "Defines how styles are applied before and after animation."
    },
    {
      id: 10,
      property: "animation-iteration-count",
      definition: "animation-iteration-count	Sets the number of times an animation is played."
    },
    {
      id: 11,
      property: "animation-name",
      definition: "Defines a name for the animation."
    },
    {
      id: 12,
      property: "animation-play-state",
      definition: "Sets the animation play state to running or paused."
    },
    {
      id: 13,
      property: "animation-timing-function",
      definition: "Specifies the animation speed curve."
    },
    {
      id: 14,
      property: "backface-visibility",
      definition: "Shows or hides the backface visibility of an element."
    },
    {
      id: 15,
      property: "background",
      definition: "Sets the background of an element."
    },
    {
      id: 16,
      property: "background-attachment",
      definition: "Defines how the background is attached to an element."
    },
    {
      id: 17,
      property: "background-blend-mode",
      definition: "Defines the background layer blending mode."
    },
    {
      id: 18,
      property: "background-clip",
      definition: "Defines how background extends beyond the element."
    },
    {
      id: 19,
      property: "background-color",
      definition: "Sets the background color of the element."
    },
    {
      id: 20,
      property: "background-image",
      definition: "Specifies a background image for an element."
    },
    {
      id: 21,
      property: "background-origin",
      definition: "Specifies the background image origin position."
    },
    {
      id: 22,
      property: "background-position",
      definition: "Sets the position of a background image."
    },
    {
      id: 23,
      property: "background-repeat",
      definition: "Specifies how the background image is repeated."
    },
    {
      id: 24,
      property: "background-size",
      definition: "Sets the size of the background image."
    },
    {
      id: 25,
      property: "border",
      definition: "Specifies a border for an element."
    },
    {
      id: 26,
      property: "border-bottom",
      definition: "Specifies a bottom border for an element."
    },
    {
      id: 27,
      property: "border-bottom-color",
      definition: "Sets the color of a bottom border."
    },
    {
      id: 28,
      property: "border-bottom-left-radius",
      definition: "Sets the border radius of the bottom left corner."
    },
    {
      id: 29,
      property: "border-bottom-right-radius",
      definition: "Sets the border radius of the bottom right corner."
    },
    {
      id: 30,
      property: "border-bottom-style",
      definition: "Sets the style of the bottom border."
    },
    {
      id: 31,
      property: "border-bottom-width",
      definition: "Sets the width of the bottom border."
    },
    {
      id: 32,
      property: "border-collapse",
      definition: "Sets table borders to single collapsed line or separated."
    },
    {
      id: 33,
      property: "border-color",
      definition: "Sets the color of the border."
    },
    {
      id: 34,
      property: "border-image",
      definition: "Defines an image as border, instead of a color."
    },
    {
      id: 35,
      property: "border-image-outset",
      definition: "Sets how far a border image extends beyond the border."
    },
    {
      id: 36,
      property: "border-image-repeat",
      definition: "Defines if and how the border image is repeated."
    },
    {
      id: 37,
      property: "border-image-slice",
      definition: "Defines how the border image will be sliced."
    },
    {
      id: 38,
      property: "border-image-source",
      definition: "Specifies the url of the border image file."
    },
    {
      id: 39,
      property: "border-image-width",
      definition: "Sets the width of the image border."
    },
    {
      id: 40,
      property: "border-left",
      definition: "Sets the left border of the element."
    },
    {
      id: 41,
      property: "border-left-color",
      definition: "Sets the color of the left border."
    },
    {
      id: 42,
      property: "border-left-style",
      definition: "Sets the style of the left border."
    },
    {
      id: 43,
      property: "border-left-width",
      definition: "Sets the width of the left border."
    },
    {
      id: 44,
      property: "border-radius",
      definition: "Sets the radius of the border."
    },
    {
      id: 45,
      property: "border-right",
      definition: "Sets the right border of the element."
    },
    {
      id: 46,
      property: "border-right-color",
      definition: "Sets the color of the right border."
    },
    {
      id: 47,
      property: "border-right-style",
      definition: "Sets the style of the right border."
    },
    {
      id: 48,
      property: "border-right-width",
      definition: "Sets the width of the right border."
    },
    {
      id: 49,
      property: "border-spacing",
      definition: "Sets the adjacent table cell distance."
    },
    {
      id: 50,
      property: "border-style",
      definition: "Defines the style of the border."
    },
    {
      id: 51,
      property: "border-top",
      definition: "Sets the top border of the element."
    },
    {
      id: 52,
      property: "border-top-color",
      definition: "Sets the color of the top border."
    },
    {
      id: 53,
      property: "border-top-left-radius",
      definition: "Sets the border radius of the top left corner."
    },
    {
      id: 54,
      property: "border-top-right-radius",
      definition: "Sets the border radius of the top right corner."
    },
    {
      id: 55,
      property: "border-top-style",
      definition: "Sets the style of the top border."
    },
    {
      id: 56,
      property: "border-top-width",
      definition: "Sets the width of the top border."
    },
    {
      id: 57,
      property: "border-width",
      definition: "Sets the border width of the element."
    },
    {
      id: 58,
      property: "bottom",
      definition: "Positions the element from the bottom of the relative container."
    },
    {
      id: 59,
      property: "box-shadow",
      definition: "Adds a shadow effect to an element."
    },
    {
      id: 60,
      property: "box-sizing",
      definition: "Sets how element height and width are calculated."
    },
    {
      id: 61,
      property: "caption-side",
      definition: "Defines on which side of the table a caption is placed."
    },
    {
      id: 62,
      property: "caret-color",
      definition: "Sets the color of the blinking mouse caret."
    },
    {
      id: 63,
      property: "@charset",
      definition: "Specifies the character encoding of the stylesheet."
    },
    {
      id: 64,
      property: "clear",
      definition: "Sets the element side that does not allow floating elements."
    },
    {
      id: 65,
      property: "clip",
      definition: "Sets how an image is cropped or clipped inside a container."
    },
    {
      id: 66,
      property: "clip-path",
      definition: "Clips an element inside a specific shape or SVG."
    },
    {
      id: 67,
      property: "color",
      definition: "Specifies the color of text in an element."
    },
    {
      id: 68,
      property: "column-count",
      definition: "Divides an element into the specified number of columns."
    },
    {
      id: 69,
      property: "column-fill",
      definition: "Specifies how divided columns are filled."
    },
    {
      id: 70,
      property: "column-gap",
      definition: "Specifies the space between divided columns."
    },
    {
      id: 71,
      property: "column-rule",
      definition: "Sets the style, width, and color of a column divider."
    },
    {
      id: 72,
      property: "column-rule-color",
      definition: "Sets the color of a column divider."
    },
    {
      id: 73,
      property: "column-rule-style",
      definition: "Sets the style of a column divider."
    },
    {
      id: 74,
      property: "column-rule-width",
      definition: "Sets the width of a column divider."
    },
    {
      id: 75,
      property: "column-span",
      definition: "Sets number of divided columns an element should span."
    },
    {
      id: 76,
      property: "column-width",
      definition: "Specifies the width of a divided column."
    },
    {
      id: 77,
      property: "columns",
      definition: "Divide an element into columns of a certain width."
    },
    {
      id: 78,
      property: "content",
      definition: "Used to insert content before or after an element."
    },
    {
      id: 79,
      property: "counter-increment",
      definition: "Increase or decrease a CSS counter."
    },
    {
      id: 80,
      property: "counter-reset",
      definition: "Initialize or reset CSS counter."
    },
    {
      id: 81,
      property: "cursor",
      definition: "Specifies the shape of the mouse cursor."
    },
    {
      id: 82,
      property: "direction",
      definition: "Specifies the text writing direction of a block-level element."
    },
    {
      id: 83,
      property: "display",
      definition: "Specify an element's display behavior."
    },
    {
      id: 84,
      property: "empty-cells",
      definition: "Specifies whether empty table cell borders will be displayed."
    },
    {
      id: 85,
      property: "filter",
      definition: "Adds an image enhancing effect to an image."
    },
    {
      id: 86,
      property: "flex",
      definition: "Specifies the width of the flexible items."
    },
    {
      id: 87,
      property: "flex-basis",
      definition: "Specifies the initial width of a flex item."
    },
    {
      id: 88,
      property: "flex-direction",
      definition: "Specifies the direction for the flex item to align."
    },
    {
      id: 89,
      property: "flex-flow",
      definition: "Controls the direction and wrapping of flexible items."
    },
    {
      id: 90,
      property: "flex-grow",
      definition: "Specifies how a flex item can grow inside the container."
    },
    {
      id: 91,
      property: "flex-shrink",
      definition: "Specifies how a flex item can shrink inside the container."
    },
    {
      id: 92,
      property: "flex-wrap",
      definition: "Specifies how flexible items wrap inside the container."
    },
    {
      id: 93,
      property: "float",
      definition: "Sets how an element is positioned relative to other elements."
    },
    {
      id: 94,
      property: "font",
      definition: "Sets font family, variant, weight, height, and size for an element."
    },
    {
      id: 95,
      property: "@font-face",
      definition: "Embeds a custom font inside a web page."
    },
    {
      id: 96,
      property: "font-family",
      definition: "Sets the font family for an element."
    },
    {
      id: 97,
      property: "font-kerning",
      definition: "Sets the spacing between the font's characters."
    },
    {
      id: 98,
      property: "font-size",
      definition: "Sets the size of the font for an element."
    },
    {
      id: 99,
      property: "font-size-adjust",
      definition: "Specifies a fall-back font size."
    },
    {
      id: 50,
      property: "font-stretch",
      definition: "Sets the text characters to a wider or narrower variant."
    },
    {
      id: 101,
      property: "font-style",
      definition: "Set the font style to normal, italic, or oblique."
    },
    {
      id: 102,
      property: "font-variant",
      definition: "Specifies that text is displayed in a small-caps font."
    },
    {
      id: 103,
      property: "font-weight",
      definition: "Sets the weight or thickness of the font."
    },
    {
      id: 104,
      property: "grid",
      definition: "Defines a grid layout with responsive rows and columns."
    },
    {
      id: 105,
      property: "grid-area",
      definition: "Sets the size and location of grid items in a grid container."
    },
    {
      id: 106,
      property: "grid-auto-columns",
      definition: "Specifies the size of the columns in a grid container."
    },
    {
      id: 107,
      property: "grid-auto-flow",
      definition: "Specifies the initial placement of items in a grid container."
    },
    {
      id: 108,
      property: "grid-auto-rows",
      definition: "Specifies the initial size of the items in a grid container."
    },
    {
      id: 109,
      property: "grid-column",
      definition: "Specifies the size and location of a grid item in a grid container."
    },
    {
      id: 110,
      property: "grid-column-end",
      definition: "Specifies in which column-line the grid item will end."
    },
    {
      id: 111,
      property: "grid-column-gap",
      definition: "Specifies the gap size between columns in a grid container."
    },
    {
      id: 112,
      property: "grid-column-start",
      definition: "Specifies in which column line the grid item will start."
    },
    {
      id: 113,
      property: "grid-gap",
      definition: "Specifies the gap size between grid rows and columns."
    },
    {
      id: 114,
      property: "grid-row",
      definition: "Specifies the grid item size and location in a grid container."
    },
    {
      id: 115,
      property: "grid-row-end",
      definition: "Specifies in which row-line the grid item will end."
    },
    {
      id: 116,
      property: "grid-row-gap",
      definition: "116	grid-row-gap	Specifies the gap size between rows in a grid container.																								"
    },
    {
      id: 117,
      property: "grid-row-start",
      definition: "Specifies in which row line the grid item will start."
    },
    {
      id: 118,
      property: "grid-template",
      definition: "Divides a page into sections with a size, position, and layer."
    },
    {
      id: 119,
      property: "grid-template-areas",
      definition: "Specifies area in a grid container."
    },
    {
      id: 120,
      property: "grid-template-columns",
      definition: "Sets the number and width of columns in a grid container."
    },
    {
      id: 121,
      property: "grid-template-rows",
      definition: "Sets the number and height of rows in a grid container."
    },
    {
      id: 122,
      property: "height",
      definition: "Sets the height of an element."
    },
    {
      id: 123,
      property: "hyphens",
      definition: "Specifies hyphenation with wrap opportunities in a line of text."
    },
    {
      id: 124,
      property: "@import",
      definition: "Imports a style sheet inside another style sheet."
    },
    {
      id: 125,
      property: "justify-content",
      definition: "Defines the alignment of items in a flex container."
    },
    {
      id: 126,
      property: "@keyframes",
      definition: "Defines the CSS style to animate."
    },
    {
      id: 127,
      property: "left",
      definition: "Positions the element from the left of the relative container."
    },
    {
      id: 128,
      property: "letter-spacing",
      definition: "Sets the spacing between characters."
    },
    {
      id: 129,
      property: "line-height",
      definition: "Sets the vertical spacing between lines of text."
    },
    {
      id: 130,
      property: "list-style",
      definition: "Defines the markers (bullet points) for items in a list."
    },
    {
      id: 131,
      property: "list-style-image",
      definition: "Defines an image markers (bullet points) for items in a list."
    },
    {
      id: 132,
      property: "list-style-image",
      definition: "Sets the marker (bullet point) positions for items in a list."
    },
    {
      id: 133,
      property: "list-style-type",
      definition: "Defines the marker types (bullet points) for items in a list."
    },
    {
      id: 134,
      property: "margin",
      definition: "Sets the margin (outside spacing) for an element."
    },
    {
      id: 135,
      property: "margin-bottom",
      definition: "Sets the bottom margin (outside spacing) for an element."
    },
    {
      id: 136,
      property: "margin-left",
      definition: "Sets the left margin (outside spacing) for an element."
    },
    {
      id: 137,
      property: "margin-right",
      definition: "Sets the right margin (outside spacing) for an element."
    },
    {
      id: 138,
      property: "margin-top",
      definition: "Sets the top margin (outside spacing) for an element."
    },
    {
      id: 139,
      property: "max-height",
      definition: "Sets the maximumn height for an element."
    },
    {
      id: 140,
      property: "max-width",
      definition: "Sets the maximum width for an element."
    },
    {
      id: 141,
      property: "@media",
      definition: "Applies media queries to a page."
    },
    {
      id: 142,
      property: "min-height",
      definition: "Sets the minimum height for an element."
    },
    {
      id: 143,
      property: "min-width",
      definition: "Sets the minimum width for an element."
    },
    {
      id: 144,
      property: "object-fit",
      definition: "Specifies how an image or video fits inside a container."
    },
    {
      id: 145,
      property: "object-position",
      definition: "Specifies the image or video position inside a container."
    },
    {
      id: 146,
      property: "opacity",
      definition: "Sets the opacity (transparency) of the element."
    },
    {
      id: 147,
      property: "order",
      definition: "Specifies the order of an item in a flex container."
    },
    {
      id: 148,
      property: "outline",
      definition: "Adds an outline (highlighted border) to an element."
    },
    {
      id: 149,
      property: "outline-color",
      definition: "Sets the color of an outline."
    },
    {
      id: 150,
      property: "outline-offset",
      definition: "Sets the space between the outline and border."
    },
    {
      id: 151,
      property: "outline-style",
      definition: "Sets the style of an outline."
    },
    {
      id: 152,
      property: "outline-width",
      definition: "Sets the width of an outline."
    },
    {
      id: 153,
      property: "overflow",
      definition: "Specifies the flow of content that exceeds the container."
    },
    {
      id: 154,
      property: "overflow-x",
      definition: "Specifies the flow of content that exceeds the container width."
    },
    {
      id: 155,
      property: "overflow-y",
      definition: "Specifies the flow of content that exceeds the container height."
    },
    {
      id: 156,
      property: "padding",
      definition: "Sets the spacing between content and element border."
    },
    {
      id: 157,
      property: "padding-bottom",
      definition: "Sets the spacing between content and bottom element border."
    },
    {
      id: 158,
      property: "padding-left",
      definition: "Sets the spacing between content and left element border."
    },
    {
      id: 159,
      property: "padding-right",
      definition: "Sets the spacing between content and right element border."
    },
    {
      id: 160,
      property: "padding-top",
      definition: "Sets the spacing between content and top element border."
    },
    {
      id: 161,
      property: "page-break-after",
      definition: "Adds a print page-break after an element."
    },
    {
      id: 162,
      property: "page-break-before",
      definition: "Adds a print page-break before an element."
    },
    {
      id: 163,
      property: "page-break-inside",
      definition: "Specifies if print page-break is allowed inside an element."
    },
    {
      id: 164,
      property: "perspective",
      definition: "Adds perspective to a 3D-positioned element."
    },
    {
      id: 165,
      property: "perspective-origin",
      definition: "Sets the origin of the perspective for a 3D-positioned element."
    },
    {
      id: 166,
      property: "pointer-events",
      definition: "Specifies whether element reacts to pointer events or not."
    },
    {
      id: 167,
      property: "position",
      definition: "Sets the element's positioning method."
    },
    {
      id: 168,
      property: "quotes",
      definition: "Defines the quotation marks to be used on text."
    },
    {
      id: 169,
      property: "right",
      definition: "Positions the element from the right of the relative container."
    },
    {
      id: 170,
      property: "scroll-behavior",
      definition: "Specifies the scrolling behavior of an element."
    },
    {
      id: 171,
      property: "table-layout",
      definition: "Aligns elements according to a table with rows and columns."
    },
    {
      id: 172,
      property: "text-align",
      definition: "Sets the alignment of text inside an element."
    },
    {
      id: 173,
      property: "text-align-last",
      definition: "Sets the alignment for the last line of text."
    },
    {
      id: 174,
      property: "text-decoration",
      definition: "Defines the style and color of underlined text."
    },
    {
      id: 175,
      property: "text-decoration-color",
      definition: "Defines the color of underlined text."
    },
    {
      id: 176,
      property: "text-decoration-line",
      definition: "Defines the kind of line to use with text."
    },
    {
      id: 177,
      property: "text-decoration-style",
      definition: "Defines the style of underlined text."
    },
    {
      id: 178,
      property: "text-indent",
      definition: "Sets the indentation to the beginning of text."
    },
    {
      id: 179,
      property: "text-justify",
      definition: "Defines the text justification inside a container."
    },
    {
      id: 180,
      property: "text-overflow",
      definition: "Sets the display behavior of text that overflows a container."
    },
    {
      id: 181,
      property: "text-shadow",
      definition: "Adds a shadow effect to text."
    },
    {
      id: 182,
      property: "text-transform",
      definition: "Defines text capitalization or casing."
    },
    {
      id: 183,
      property: "top",
      definition: "Positions the element from the top of the relative container."
    },
    {
      id: 184,
      property: "transform",
      definition: "Applies a 2D or 3D transformation to an element."
    },
    {
      id: 185,
      property: "transform-origin",
      definition: "Sets the origin for the transformation of the element."
    },
    {
      id: 186,
      property: "transform-style",
      definition: "Specifies the display behavior of 3D space nested elements."
    },
    {
      id: 187,
      property: "transition",
      definition: "Creates transitions from one property value to another."
    },
    {
      id: 188,
      property: "transition-delay",
      definition: "Creates a delay before the transition effect starts."
    },
    {
      id: 189,
      property: "transition-duration",
      definition: "Specifies the time the transition will take."
    },
    {
      id: 190,
      property: "transition-property",
      definition: "Specifies the CSS property that will transition."
    },
    {
      id: 191,
      property: "transition-timing-function",
      definition: "Defines the speed curve function of the transition."
    },
    {
      id: 192,
      property: "user-select",
      definition: "Specifies how text can be selected (highlighted)."
    },
    {
      id: 193,
      property: "vertical-align",
      definition: "Specifies vertical alignment of an element."
    },
    {
      id: 194,
      property: "visibility",
      definition: "Specifies the visibility of an element."
    },
    {
      id: 195,
      property: "white-space",
      definition: "Specifies how white-space is handled inside an element."
    },
    {
      id: 196,
      property: "width",
      definition: "Sets the width of an element."
    },
    {
      id: 197,
      property: "word-break",
      definition: "Specifies how line breaks take place."
    },
    {
      id: 198,
      property: "word-spacing",
      definition: "Sets the spacing between words."
    },
    {
      id: 199,
      property: "word-wrap",
      definition: "Specifies how long words can be wrapped."
    },
    {
      id: 200,
      property: "writing-mode",
      definition: "Sets the text reading orientation: top to bottom, etc."
    },
    {
      id: 201,
      property: "z-index",
      definition: "Sets the vertical stacking order relative to other elements."
    },
  ];


  return (
  <>
    <div className="relative flex min-w-screen min-h-screen flex-col justify-center overflow-hidden text-center bg-gray-50 py-6 sm:py-12">
      <h1 className="pb-6 text-5xl font-bold">
        Code Bank
      </h1>
      <div className="flex flex-row justify-center">
        <button className="btn w-1/5 h-12 m-2 p-2 bg-sky-100 text-xl font-bold hover:text-sky-600">HTML</button>
        <button className="btn w-1/5 h-12 m-2 p-2 bg-sky-100 text-xl font-bold hover:text-sky-600">CSS</button>
        <button className="btn w-1/5  h-12 m-2 p-2 bg-sky-100 text-xl font-bold hover:text-sky-600">JavaScript</button>
      </div>
    </div>
    <HTML />
    <CSS />
    <div className="min-w-screen min-h-auto flex-col overflow-hidden text-center bg-sky-100 py-6 sm:py-12">
      { 
        Object.keys(cssProperties).map((item, i) => (
            <li className="flex flex-row justify-right place-content-center" key={i}>
                <span className="p-2 text-sky-600 hover:text-sky-300">{ cssProperties[item].property }</span>
                <span className="p-2">{ cssProperties[item].definition }</span>
            </li>
        ))
      }  
    </div>
    <JavaScript />
  </>
  );
}

export default App;
 