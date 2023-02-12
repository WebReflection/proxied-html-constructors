'use strict';
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
 * @property {new () => HTMLBRElement} BR
 * @property {new () => HTMLBaseElement} Base
 * @property {new () => HTMLElement} Bdi
 * @property {new () => HTMLElement} Bdo
 * @property {new () => HTMLQuoteElement} BlockQuote
 * @property {new () => HTMLBodyElement} Body
 * @property {new () => HTMLButtonElement} Button
 * @property {new () => HTMLCanvasElement} Canvas
 * @property {new () => HTMLTableCaptionElement} Caption
 * @property {new () => HTMLElement} Cite
 * @property {new () => HTMLElement} Code
 * @property {new () => HTMLTableColElement} Col
 * @property {new () => HTMLTableColElement} ColGroup
 * @property {new () => HTMLElement} DD
 * @property {new () => HTMLDListElement} DL
 * @property {new () => HTMLElement} DT
 * @property {new () => HTMLDataElement} Data
 * @property {new () => HTMLDataListElement} DataList
 * @property {new () => HTMLModElement} Del
 * @property {new () => HTMLDetailsElement} Details
 * @property {new () => HTMLElement} Dfn
 * @property {new () => HTMLDialogElement} Dialog
 * @property {new () => HTMLDivElement} Div
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
 * @property {new () => HTMLHRElement} HR
 * @property {new () => HTMLHeadElement} Head
 * @property {new () => HTMLElement} Header
 * @property {new () => HTMLHtmlElement} Html
 * @property {new () => HTMLElement} I
 * @property {new () => HTMLIFrameElement} IFrame
 * @property {new () => HTMLImageElement} Img
 * @property {new () => HTMLInputElement} Input
 * @property {new () => HTMLModElement} Ins
 * @property {new () => HTMLElement} Kbd
 * @property {new () => HTMLLIElement} LI
 * @property {new () => HTMLLabelElement} Label
 * @property {new () => HTMLLegendElement} Legend
 * @property {new () => HTMLLinkElement} Link
 * @property {new () => HTMLElement} Main
 * @property {new () => HTMLMapElement} Map
 * @property {new () => HTMLElement} Mark
 * @property {new () => HTMLMenuElement} Menu
 * @property {new () => HTMLMetaElement} Meta
 * @property {new () => HTMLMeterElement} Meter
 * @property {new () => HTMLElement} Nav
 * @property {new () => HTMLElement} NoScript
 * @property {new () => HTMLOListElement} OL
 * @property {new () => HTMLObjectElement} Object
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
 * @property {new () => HTMLTableSectionElement} TBody
 * @property {new () => HTMLTableCellElement} TD
 * @property {new () => HTMLTableSectionElement} TFoot
 * @property {new () => HTMLTableCellElement} TH
 * @property {new () => HTMLTableSectionElement} THead
 * @property {new () => HTMLTableRowElement} TR
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
 */

/**
 * Given an optional global context, returns a proxy that resolves
 * all tag names into their global constructors.
 * @property {globalThis} [self=globalThis]
 * @returns {HTML}
 */
module.exports = (self = globalThis) => new Proxy(
  [
    {
      "a": 7,
      "abbr": 0,
      "address": 0,
      "article": 0,
      "aside": 0,
      "b": 0,
      "bdi": 0,
      "bdo": 0,
      "bgsound": 9,
      "big": 0,
      "blink": 9,
      "blockquote": 2,
      "caption": 11,
      "center": 0,
      "cite": 0,
      "code": 0,
      "col": 12,
      "colgroup": 12,
      "content": 9,
      "dd": 0,
      "del": 10,
      "dfn": 0,
      "dl": 3,
      "dt": 0,
      "em": 0,
      "figcaption": 0,
      "figure": 0,
      "footer": 0,
      "h1": 1,
      "h2": 1,
      "h3": 1,
      "h4": 1,
      "h5": 1,
      "h6": 1,
      "header": 0,
      "i": 0,
      "image": 9,
      "img": 8,
      "ins": 10,
      "kbd": 0,
      "keygen": 9,
      "main": 0,
      "mark": 0,
      "menuitem": 9,
      "nav": 0,
      "nobr": 0,
      "noembed": 0,
      "noframes": 0,
      "noscript": 0,
      "ol": 4,
      "p": 5,
      "plaintext": 0,
      "portal": 9,
      "q": 2,
      "rb": 0,
      "rp": 0,
      "rt": 0,
      "rtc": 0,
      "ruby": 0,
      "s": 0,
      "samp": 0,
      "section": 0,
      "shadow": 9,
      "small": 0,
      "spacer": 9,
      "strike": 0,
      "strong": 0,
      "sub": 0,
      "summary": 0,
      "sup": 0,
      "tbody": 13,
      "td": 14,
      "tfoot": 13,
      "th": 14,
      "thead": 13,
      "tr": 15,
      "tt": 0,
      "u": 0,
      "ul": 6,
      "var": 0,
      "wbr": 0
    },
    [
      "Element",
      "Heading",
      "Quote",
      "DList",
      "OList",
      "Paragraph",
      "UList",
      "Anchor",
      "Image",
      "Unknown",
      "Mod",
      "TableCaption",
      "TableCol",
      "TableSection",
      "TableCell",
      "TableRow"
    ],
  ],
  {
    get([tags, constructors], name) {
      const _ = name.toLowerCase();
      const $ = _ in tags ?
        constructors[tags[_]] :
        (name === constructors[0] ? '' : name);
      return self[`HTML${$}${constructors[0]}`];
    }
  }
);
