'use strict';
/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

const proxiedHTMLConstructors = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('./index.js'));

/**
 * @typedef {Object} HTML
 * @property {"HTMLAnchorElement"} A
 * @property {"HTMLElement"} Abbr
 * @property {"HTMLElement"} Address
 * @property {"HTMLAreaElement"} Area
 * @property {"HTMLElement"} Article
 * @property {"HTMLElement"} Aside
 * @property {"HTMLAudioElement"} Audio
 * @property {"HTMLElement"} B
 * @property {"HTMLBRElement"} BR
 * @property {"HTMLBaseElement"} Base
 * @property {"HTMLElement"} Bdi
 * @property {"HTMLElement"} Bdo
 * @property {"HTMLQuoteElement"} BlockQuote
 * @property {"HTMLBodyElement"} Body
 * @property {"HTMLButtonElement"} Button
 * @property {"HTMLCanvasElement"} Canvas
 * @property {"HTMLTableCaptionElement"} Caption
 * @property {"HTMLElement"} Cite
 * @property {"HTMLElement"} Code
 * @property {"HTMLTableColElement"} Col
 * @property {"HTMLTableColElement"} ColGroup
 * @property {"HTMLElement"} DD
 * @property {"HTMLDListElement"} DL
 * @property {"HTMLElement"} DT
 * @property {"HTMLDataElement"} Data
 * @property {"HTMLDataListElement"} DataList
 * @property {"HTMLModElement"} Del
 * @property {"HTMLDetailsElement"} Details
 * @property {"HTMLElement"} Dfn
 * @property {"HTMLDialogElement"} Dialog
 * @property {"HTMLDivElement"} Div
 * @property {"HTMLElement"} Em
 * @property {"HTMLEmbedElement"} Embed
 * @property {"HTMLFieldSetElement"} FieldSet
 * @property {"HTMLElement"} FigCaption
 * @property {"HTMLElement"} Figure
 * @property {"HTMLElement"} Footer
 * @property {"HTMLFormElement"} Form
 * @property {"HTMLHeadingElement"} H1
 * @property {"HTMLHeadingElement"} H2
 * @property {"HTMLHeadingElement"} H3
 * @property {"HTMLHeadingElement"} H4
 * @property {"HTMLHeadingElement"} H5
 * @property {"HTMLHeadingElement"} H6
 * @property {"HTMLHRElement"} HR
 * @property {"HTMLHeadElement"} Head
 * @property {"HTMLElement"} Header
 * @property {"HTMLHtmlElement"} Html
 * @property {"HTMLElement"} I
 * @property {"HTMLIFrameElement"} IFrame
 * @property {"HTMLImageElement"} Img
 * @property {"HTMLInputElement"} Input
 * @property {"HTMLModElement"} Ins
 * @property {"HTMLElement"} Kbd
 * @property {"HTMLLIElement"} LI
 * @property {"HTMLLabelElement"} Label
 * @property {"HTMLLegendElement"} Legend
 * @property {"HTMLLinkElement"} Link
 * @property {"HTMLElement"} Main
 * @property {"HTMLMapElement"} Map
 * @property {"HTMLElement"} Mark
 * @property {"HTMLMenuElement"} Menu
 * @property {"HTMLMetaElement"} Meta
 * @property {"HTMLMeterElement"} Meter
 * @property {"HTMLElement"} Nav
 * @property {"HTMLElement"} NoScript
 * @property {"HTMLOListElement"} OL
 * @property {"HTMLObjectElement"} Object
 * @property {"HTMLOptGroupElement"} OptGroup
 * @property {"HTMLOptionElement"} Option
 * @property {"HTMLOutputElement"} Output
 * @property {"HTMLParagraphElement"} P
 * @property {"HTMLPictureElement"} Picture
 * @property {"HTMLUnknownElement"} Portal
 * @property {"HTMLPreElement"} Pre
 * @property {"HTMLProgressElement"} Progress
 * @property {"HTMLQuoteElement"} Q
 * @property {"HTMLElement"} RP
 * @property {"HTMLElement"} RT
 * @property {"HTMLElement"} Ruby
 * @property {"HTMLElement"} S
 * @property {"HTMLElement"} Samp
 * @property {"HTMLScriptElement"} Script
 * @property {"HTMLElement"} Section
 * @property {"HTMLSelectElement"} Select
 * @property {"HTMLSlotElement"} Slot
 * @property {"HTMLElement"} Small
 * @property {"HTMLSourceElement"} Source
 * @property {"HTMLSpanElement"} Span
 * @property {"HTMLElement"} Strong
 * @property {"HTMLStyleElement"} Style
 * @property {"HTMLElement"} Sub
 * @property {"HTMLElement"} Summary
 * @property {"HTMLElement"} Sup
 * @property {"HTMLTableSectionElement"} TBody
 * @property {"HTMLTableCellElement"} TD
 * @property {"HTMLTableSectionElement"} TFoot
 * @property {"HTMLTableCellElement"} TH
 * @property {"HTMLTableSectionElement"} THead
 * @property {"HTMLTableRowElement"} TR
 * @property {"HTMLTableElement"} Table
 * @property {"HTMLTemplateElement"} Template
 * @property {"HTMLTextAreaElement"} TextArea
 * @property {"HTMLTimeElement"} Time
 * @property {"HTMLTitleElement"} Title
 * @property {"HTMLTrackElement"} Track
 * @property {"HTMLElement"} U
 * @property {"HTMLUListElement"} UL
 * @property {"HTMLElement"} Var
 * @property {"HTMLVideoElement"} Video
 * @property {"HTMLElement"} Wbr
 */

const handler = {get: (_, name) => name};

/** @type {HTML} */
module.exports = proxiedHTMLConstructors(new Proxy(handler, handler));
