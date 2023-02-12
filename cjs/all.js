'use strict';
/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

/**
 * @typedef {Object} HTML
 * @property {new () => HTMLAnchorElement} A
 * @property {new () => HTMLElement} Abbr
 * @property {new () => HTMLElement} Acronym
 * @property {new () => HTMLElement} Address
 * @property {new () => HTMLUnknownElement} Applet
 * @property {new () => HTMLAreaElement} Area
 * @property {new () => HTMLElement} Article
 * @property {new () => HTMLElement} Aside
 * @property {new () => HTMLAudioElement} Audio
 * @property {new () => HTMLElement} B
 * @property {new () => HTMLUnknownElement} BGSound
 * @property {new () => HTMLBRElement} BR
 * @property {new () => HTMLBaseElement} Base
 * @property {new () => HTMLElement} Bdi
 * @property {new () => HTMLElement} Bdo
 * @property {new () => HTMLElement} Big
 * @property {new () => HTMLUnknownElement} Blink
 * @property {new () => HTMLQuoteElement} BlockQuote
 * @property {new () => HTMLBodyElement} Body
 * @property {new () => HTMLButtonElement} Button
 * @property {new () => HTMLCanvasElement} Canvas
 * @property {new () => HTMLTableCaptionElement} Caption
 * @property {new () => HTMLElement} Center
 * @property {new () => HTMLElement} Cite
 * @property {new () => HTMLElement} Code
 * @property {new () => HTMLTableColElement} Col
 * @property {new () => HTMLTableColElement} ColGroup
 * @property {new () => HTMLUnknownElement} Content
 * @property {new () => HTMLElement} DD
 * @property {new () => HTMLDListElement} DL
 * @property {new () => HTMLElement} DT
 * @property {new () => HTMLDataElement} Data
 * @property {new () => HTMLDataListElement} DataList
 * @property {new () => HTMLModElement} Del
 * @property {new () => HTMLDetailsElement} Details
 * @property {new () => HTMLElement} Dfn
 * @property {new () => HTMLDialogElement} Dialog
 * @property {new () => HTMLDirectoryElement} Dir
 * @property {new () => HTMLDivElement} Div
 * @property {new () => HTMLElement} Em
 * @property {new () => HTMLEmbedElement} Embed
 * @property {new () => HTMLFieldSetElement} FieldSet
 * @property {new () => HTMLElement} FigCaption
 * @property {new () => HTMLElement} Figure
 * @property {new () => HTMLFontElement} Font
 * @property {new () => HTMLElement} Footer
 * @property {new () => HTMLFormElement} Form
 * @property {new () => HTMLFrameElement} Frame
 * @property {new () => HTMLFrameSetElement} FrameSet
 * @property {new () => HTMLHeadingElement} H1
 * @property {new () => HTMLHeadingElement} H2
 * @property {new () => HTMLHeadingElement} H3
 * @property {new () => HTMLHeadingElement} H4
 * @property {new () => HTMLHeadingElement} H5
 * @property {new () => HTMLHeadingElement} H6
 * @property {new () => HTMLHRElement} HR
 * @property {new () => HTMLHeadElement} Head
 * @property {new () => HTMLElement} Header
 * @property {new () => HTMLHtmlElement} Html
 * @property {new () => HTMLElement} I
 * @property {new () => HTMLIFrameElement} IFrame
 * @property {new () => HTMLUnknownElement} Image
 * @property {new () => HTMLImageElement} Img
 * @property {new () => HTMLInputElement} Input
 * @property {new () => HTMLModElement} Ins
 * @property {new () => HTMLElement} Kbd
 * @property {new () => HTMLUnknownElement} Keygen
 * @property {new () => HTMLLIElement} LI
 * @property {new () => HTMLLabelElement} Label
 * @property {new () => HTMLLegendElement} Legend
 * @property {new () => HTMLLinkElement} Link
 * @property {new () => HTMLElement} Main
 * @property {new () => HTMLMapElement} Map
 * @property {new () => HTMLElement} Mark
 * @property {new () => HTMLMarqueeElement} Marquee
 * @property {new () => HTMLMenuElement} Menu
 * @property {new () => HTMLUnknownElement} MenuItem
 * @property {new () => HTMLMetaElement} Meta
 * @property {new () => HTMLMeterElement} Meter
 * @property {new () => HTMLElement} Nav
 * @property {new () => HTMLElement} NoBR
 * @property {new () => HTMLElement} NoEmbed
 * @property {new () => HTMLElement} NoFrames
 * @property {new () => HTMLElement} NoScript
 * @property {new () => HTMLOListElement} OL
 * @property {new () => HTMLObjectElement} Object
 * @property {new () => HTMLOptGroupElement} OptGroup
 * @property {new () => HTMLOptionElement} Option
 * @property {new () => HTMLOutputElement} Output
 * @property {new () => HTMLParagraphElement} P
 * @property {new () => HTMLParamElement} Param
 * @property {new () => HTMLPictureElement} Picture
 * @property {new () => HTMLElement} PlainText
 * @property {new () => HTMLUnknownElement} Portal
 * @property {new () => HTMLPreElement} Pre
 * @property {new () => HTMLProgressElement} Progress
 * @property {new () => HTMLQuoteElement} Q
 * @property {new () => HTMLElement} RB
 * @property {new () => HTMLElement} RP
 * @property {new () => HTMLElement} RT
 * @property {new () => HTMLElement} RTC
 * @property {new () => HTMLElement} Ruby
 * @property {new () => HTMLElement} S
 * @property {new () => HTMLElement} Samp
 * @property {new () => HTMLScriptElement} Script
 * @property {new () => HTMLElement} Section
 * @property {new () => HTMLSelectElement} Select
 * @property {new () => HTMLUnknownElement} Shadow
 * @property {new () => HTMLSlotElement} Slot
 * @property {new () => HTMLElement} Small
 * @property {new () => HTMLSourceElement} Source
 * @property {new () => HTMLUnknownElement} Spacer
 * @property {new () => HTMLSpanElement} Span
 * @property {new () => HTMLElement} Strike
 * @property {new () => HTMLElement} Strong
 * @property {new () => HTMLStyleElement} Style
 * @property {new () => HTMLElement} Sub
 * @property {new () => HTMLElement} Summary
 * @property {new () => HTMLElement} Sup
 * @property {new () => HTMLTableSectionElement} TBody
 * @property {new () => HTMLTableCellElement} TD
 * @property {new () => HTMLTableSectionElement} TFoot
 * @property {new () => HTMLTableCellElement} TH
 * @property {new () => HTMLTableSectionElement} THead
 * @property {new () => HTMLTableRowElement} TR
 * @property {new () => HTMLElement} TT
 * @property {new () => HTMLTableElement} Table
 * @property {new () => HTMLTemplateElement} Template
 * @property {new () => HTMLTextAreaElement} TextArea
 * @property {new () => HTMLTimeElement} Time
 * @property {new () => HTMLTitleElement} Title
 * @property {new () => HTMLTrackElement} Track
 * @property {new () => HTMLElement} U
 * @property {new () => HTMLUListElement} UL
 * @property {new () => HTMLElement} Var
 * @property {new () => HTMLVideoElement} Video
 * @property {new () => HTMLElement} Wbr
 * @property {new () => HTMLPreElement} XMP
 */

const Element = "Element";
const Heading = "Heading";
const Quote = "Quote";
const DList = "DList";
const OList = "OList";
const Paragraph = "Paragraph";
const UList = "UList";
const Anchor = "Anchor";
const Image = "Image";
const Unknown = "Unknown";
const Mod = "Mod";
const TableCaption = "TableCaption";
const TableCol = "TableCol";
const TableSection = "TableSection";
const TableCell = "TableCell";
const TableRow = "TableRow";
const Directory = "Directory";
const Pre = "Pre";

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 * @returns {HTML}
 */
module.exports = (self = globalThis) => new Proxy(
  new Map([
    ["a", Anchor],
    ["abbr", Element],
    ["acronym", Element],
    ["address", Element],
    ["applet", Unknown],
    ["article", Element],
    ["aside", Element],
    ["b", Element],
    ["bdi", Element],
    ["bdo", Element],
    ["bgsound", Unknown],
    ["big", Element],
    ["blink", Unknown],
    ["blockquote", Quote],
    ["caption", TableCaption],
    ["center", Element],
    ["cite", Element],
    ["code", Element],
    ["col", TableCol],
    ["colgroup", TableCol],
    ["content", Unknown],
    ["dd", Element],
    ["del", Mod],
    ["dfn", Element],
    ["dir", Directory],
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
    ["image", Unknown],
    ["img", Image],
    ["ins", Mod],
    ["kbd", Element],
    ["keygen", Unknown],
    ["main", Element],
    ["mark", Element],
    ["menuitem", Unknown],
    ["nav", Element],
    ["nobr", Element],
    ["noembed", Element],
    ["noframes", Element],
    ["noscript", Element],
    ["ol", OList],
    ["p", Paragraph],
    ["plaintext", Element],
    ["portal", Unknown],
    ["q", Quote],
    ["rb", Element],
    ["rp", Element],
    ["rt", Element],
    ["rtc", Element],
    ["ruby", Element],
    ["s", Element],
    ["samp", Element],
    ["section", Element],
    ["shadow", Unknown],
    ["small", Element],
    ["spacer", Unknown],
    ["strike", Element],
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
    ["tt", Element],
    ["u", Element],
    ["ul", UList],
    ["var", Element],
    ["wbr", Element],
    ["xmp", Pre]
  ]),
  {
    get(tags, name) {
      const $ = tags.get(name.toLowerCase()) || (name === Element ? '' : name);
      return self[`HTML${$}${Element}`];
    }
  }
);
