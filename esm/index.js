/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

/**
 * @typedef {Object} HTML
 * @property {new () => HTMLAnchorElement} A
 * @property {new () => HTMLElement} Abbr
 * @property {new () => HTMLElement} Address
 * @property {new () => HTMLAreaElement} Area
 * @property {new () => HTMLElement} Article
 * @property {new () => HTMLElement} Aside
 * @property {new () => HTMLAudioElement} Audio
 * @property {new () => HTMLElement} B
 * @property {new () => HTMLBaseElement} Base
 * @property {new () => HTMLElement} Bdi
 * @property {new () => HTMLElement} Bdo
 * @property {new () => HTMLQuoteElement} BlockQuote
 * @property {new () => HTMLBodyElement} Body
 * @property {new () => HTMLBRElement} BR
 * @property {new () => HTMLButtonElement} Button
 * @property {new () => HTMLCanvasElement} Canvas
 * @property {new () => HTMLTableCaptionElement} Caption
 * @property {new () => HTMLElement} Cite
 * @property {new () => HTMLElement} Code
 * @property {new () => HTMLTableColElement} Col
 * @property {new () => HTMLTableColElement} ColGroup
 * @property {new () => HTMLDataElement} Data
 * @property {new () => HTMLDataListElement} DataList
 * @property {new () => HTMLElement} DD
 * @property {new () => HTMLModElement} Del
 * @property {new () => HTMLDetailsElement} Details
 * @property {new () => HTMLElement} Dfn
 * @property {new () => HTMLDialogElement} Dialog
 * @property {new () => HTMLDivElement} Div
 * @property {new () => HTMLDListElement} DL
 * @property {new () => HTMLElement} DT
 * @property {new () => HTMLElement} Em
 * @property {new () => HTMLEmbedElement} Embed
 * @property {new () => HTMLFieldSetElement} FieldSet
 * @property {new () => HTMLElement} FigCaption
 * @property {new () => HTMLElement} Figure
 * @property {new () => HTMLElement} Footer
 * @property {new () => HTMLFormElement} Form
 * @property {new () => HTMLHeadingElement} H1
 * @property {new () => HTMLHeadingElement} H2
 * @property {new () => HTMLHeadingElement} H3
 * @property {new () => HTMLHeadingElement} H4
 * @property {new () => HTMLHeadingElement} H5
 * @property {new () => HTMLHeadingElement} H6
 * @property {new () => HTMLHeadElement} Head
 * @property {new () => HTMLElement} Header
 * @property {new () => HTMLHRElement} HR
 * @property {new () => HTMLHtmlElement} Html
 * @property {new () => HTMLElement} I
 * @property {new () => HTMLIFrameElement} IFrame
 * @property {new () => HTMLImageElement} Img
 * @property {new () => HTMLInputElement} Input
 * @property {new () => HTMLModElement} Ins
 * @property {new () => HTMLElement} Kbd
 * @property {new () => HTMLLabelElement} Label
 * @property {new () => HTMLLegendElement} Legend
 * @property {new () => HTMLLIElement} LI
 * @property {new () => HTMLLinkElement} Link
 * @property {new () => HTMLElement} Main
 * @property {new () => HTMLMapElement} Map
 * @property {new () => HTMLElement} Mark
 * @property {new () => HTMLMenuElement} Menu
 * @property {new () => HTMLMetaElement} Meta
 * @property {new () => HTMLMeterElement} Meter
 * @property {new () => HTMLElement} Nav
 * @property {new () => HTMLElement} NoScript
 * @property {new () => HTMLObjectElement} Object
 * @property {new () => HTMLOListElement} OL
 * @property {new () => HTMLOptGroupElement} OptGroup
 * @property {new () => HTMLOptionElement} Option
 * @property {new () => HTMLOutputElement} Output
 * @property {new () => HTMLParagraphElement} P
 * @property {new () => HTMLPictureElement} Picture
 * @property {new () => HTMLUnknownElement} Portal
 * @property {new () => HTMLPreElement} Pre
 * @property {new () => HTMLProgressElement} Progress
 * @property {new () => HTMLQuoteElement} Q
 * @property {new () => HTMLElement} RP
 * @property {new () => HTMLElement} RT
 * @property {new () => HTMLElement} Ruby
 * @property {new () => HTMLElement} S
 * @property {new () => HTMLElement} Samp
 * @property {new () => HTMLScriptElement} Script
 * @property {new () => HTMLElement} Section
 * @property {new () => HTMLSelectElement} Select
 * @property {new () => HTMLSlotElement} Slot
 * @property {new () => HTMLElement} Small
 * @property {new () => HTMLSourceElement} Source
 * @property {new () => HTMLSpanElement} Span
 * @property {new () => HTMLElement} Strong
 * @property {new () => HTMLStyleElement} Style
 * @property {new () => HTMLElement} Sub
 * @property {new () => HTMLElement} Summary
 * @property {new () => HTMLElement} Sup
 * @property {new () => HTMLTableElement} Table
 * @property {new () => HTMLTableSectionElement} TBody
 * @property {new () => HTMLTableCellElement} TD
 * @property {new () => HTMLTemplateElement} Template
 * @property {new () => HTMLTextAreaElement} TextArea
 * @property {new () => HTMLTableSectionElement} TFoot
 * @property {new () => HTMLTableCellElement} TH
 * @property {new () => HTMLTableSectionElement} THead
 * @property {new () => HTMLTimeElement} Time
 * @property {new () => HTMLTitleElement} Title
 * @property {new () => HTMLTableRowElement} TR
 * @property {new () => HTMLTrackElement} Track
 * @property {new () => HTMLElement} U
 * @property {new () => HTMLUListElement} UL
 * @property {new () => HTMLElement} Var
 * @property {new () => HTMLVideoElement} Video
 * @property {new () => HTMLElement} Wbr
 */

const Anchor = "Anchor";
const Element = "Element";
const Quote = "Quote";
const TableCaption = "TableCaption";
const TableCol = "TableCol";
const Mod = "Mod";
const DList = "DList";
const Heading = "Heading";
const Image = "Image";
const OList = "OList";
const Paragraph = "Paragraph";
const Unknown = "Unknown";
const TableSection = "TableSection";
const TableCell = "TableCell";
const TableRow = "TableRow";
const UList = "UList";

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 * @returns {HTML}
 */
export default (self = globalThis) => new Proxy(
  new Map([
    ["a", Anchor],
    ["abbr", Element],
    ["address", Element],
    ["article", Element],
    ["aside", Element],
    ["b", Element],
    ["bdi", Element],
    ["bdo", Element],
    ["blockquote", Quote],
    ["caption", TableCaption],
    ["cite", Element],
    ["code", Element],
    ["col", TableCol],
    ["colgroup", TableCol],
    ["dd", Element],
    ["del", Mod],
    ["dfn", Element],
    ["dl", DList],
    ["dt", Element],
    ["em", Element],
    ["figcaption", Element],
    ["figure", Element],
    ["footer", Element],
    ["h1", Heading],
    ["h2", Heading],
    ["h3", Heading],
    ["h4", Heading],
    ["h5", Heading],
    ["h6", Heading],
    ["header", Element],
    ["i", Element],
    ["img", Image],
    ["ins", Mod],
    ["kbd", Element],
    ["main", Element],
    ["mark", Element],
    ["nav", Element],
    ["noscript", Element],
    ["ol", OList],
    ["p", Paragraph],
    ["portal", Unknown],
    ["q", Quote],
    ["rp", Element],
    ["rt", Element],
    ["ruby", Element],
    ["s", Element],
    ["samp", Element],
    ["section", Element],
    ["small", Element],
    ["strong", Element],
    ["sub", Element],
    ["summary", Element],
    ["sup", Element],
    ["tbody", TableSection],
    ["td", TableCell],
    ["tfoot", TableSection],
    ["th", TableCell],
    ["thead", TableSection],
    ["tr", TableRow],
    ["u", Element],
    ["ul", UList],
    ["var", Element],
    ["wbr", Element]
  ]),
  {
    get(tags, name) {
      const Class = tags.get(name.toLowerCase()) || (name === Element ? '' : name);
      return self['HTML' + Class + Element];
    }
  }
);
