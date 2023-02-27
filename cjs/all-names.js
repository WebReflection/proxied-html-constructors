'use strict';
/*! (c) Andrea Giammarchi - ISC */

// ⚠ THIS FILE IS CREATED VIA AUTOMATION

const proxiedHTMLConstructors = (m => /* c8 ignore start */ m.__esModule ? m.default : m /* c8 ignore stop */)(require('./all.js'));

/**
 * @typedef {Object} HTML
 * @property {"HTMLAnchorElement"} A
 * @property {"HTMLElement"} Abbr
 * @property {"HTMLElement"} Acronym
 * @property {"HTMLElement"} Address
 * @property {"HTMLUnknownElement"} Applet
 * @property {"HTMLAreaElement"} Area
 * @property {"HTMLElement"} Article
 * @property {"HTMLElement"} Aside
 * @property {"HTMLAudioElement"} Audio
 * @property {"HTMLElement"} B
 * @property {"HTMLBaseElement"} Base
 * @property {"HTMLElement"} Bdi
 * @property {"HTMLElement"} Bdo
 * @property {"HTMLUnknownElement"} BGSound
 * @property {"HTMLElement"} Big
 * @property {"HTMLUnknownElement"} Blink
 * @property {"HTMLQuoteElement"} BlockQuote
 * @property {"HTMLBodyElement"} Body
 * @property {"HTMLBRElement"} BR
 * @property {"HTMLButtonElement"} Button
 * @property {"HTMLCanvasElement"} Canvas
 * @property {"HTMLTableCaptionElement"} Caption
 * @property {"HTMLElement"} Center
 * @property {"HTMLElement"} Cite
 * @property {"HTMLElement"} Code
 * @property {"HTMLTableColElement"} Col
 * @property {"HTMLTableColElement"} ColGroup
 * @property {"HTMLUnknownElement"} Content
 * @property {"HTMLDataElement"} Data
 * @property {"HTMLDataListElement"} DataList
 * @property {"HTMLElement"} DD
 * @property {"HTMLModElement"} Del
 * @property {"HTMLDetailsElement"} Details
 * @property {"HTMLElement"} Dfn
 * @property {"HTMLDialogElement"} Dialog
 * @property {"HTMLDirectoryElement"} Dir
 * @property {"HTMLDivElement"} Div
 * @property {"HTMLDListElement"} DL
 * @property {"HTMLElement"} DT
 * @property {"HTMLElement"} Element
 * @property {"HTMLElement"} Em
 * @property {"HTMLEmbedElement"} Embed
 * @property {"HTMLFieldSetElement"} FieldSet
 * @property {"HTMLElement"} FigCaption
 * @property {"HTMLElement"} Figure
 * @property {"HTMLFontElement"} Font
 * @property {"HTMLElement"} Footer
 * @property {"HTMLFormElement"} Form
 * @property {"HTMLFrameElement"} Frame
 * @property {"HTMLFrameSetElement"} FrameSet
 * @property {"HTMLHeadingElement"} H1
 * @property {"HTMLHeadingElement"} H2
 * @property {"HTMLHeadingElement"} H3
 * @property {"HTMLHeadingElement"} H4
 * @property {"HTMLHeadingElement"} H5
 * @property {"HTMLHeadingElement"} H6
 * @property {"HTMLHeadElement"} Head
 * @property {"HTMLElement"} Header
 * @property {"HTMLHRElement"} HR
 * @property {"HTMLHtmlElement"} Html
 * @property {"HTMLElement"} I
 * @property {"HTMLIFrameElement"} IFrame
 * @property {"HTMLUnknownElement"} Image
 * @property {"HTMLImageElement"} Img
 * @property {"HTMLInputElement"} Input
 * @property {"HTMLModElement"} Ins
 * @property {"HTMLElement"} Kbd
 * @property {"HTMLUnknownElement"} Keygen
 * @property {"HTMLLabelElement"} Label
 * @property {"HTMLLegendElement"} Legend
 * @property {"HTMLLIElement"} LI
 * @property {"HTMLLinkElement"} Link
 * @property {"HTMLElement"} Main
 * @property {"HTMLMapElement"} Map
 * @property {"HTMLElement"} Mark
 * @property {"HTMLMarqueeElement"} Marquee
 * @property {new () => HTMLUnknownElement} 
 * @property {"HTMLMenuElement"} Menu
 * @property {"HTMLUnknownElement"} MenuItem
 * @property {"HTMLMetaElement"} Meta
 * @property {"HTMLMeterElement"} Meter
 * @property {"HTMLElement"} Nav
 * @property {"HTMLElement"} NoBR
 * @property {"HTMLElement"} NoEmbed
 * @property {"HTMLElement"} NoFrames
 * @property {"HTMLElement"} NoScript
 * @property {"HTMLObjectElement"} Object
 * @property {"HTMLOListElement"} OL
 * @property {"HTMLOptGroupElement"} OptGroup
 * @property {"HTMLOptionElement"} Option
 * @property {"HTMLOutputElement"} Output
 * @property {"HTMLParagraphElement"} P
 * @property {"HTMLParamElement"} Param
 * @property {"HTMLPictureElement"} Picture
 * @property {"HTMLElement"} PlainText
 * @property {"HTMLUnknownElement"} Portal
 * @property {"HTMLPreElement"} Pre
 * @property {"HTMLProgressElement"} Progress
 * @property {"HTMLQuoteElement"} Q
 * @property {"HTMLElement"} RB
 * @property {"HTMLElement"} RP
 * @property {"HTMLElement"} RT
 * @property {"HTMLElement"} RTC
 * @property {"HTMLElement"} Ruby
 * @property {"HTMLElement"} S
 * @property {"HTMLElement"} Samp
 * @property {"HTMLScriptElement"} Script
 * @property {"HTMLElement"} Section
 * @property {"HTMLSelectElement"} Select
 * @property {"HTMLUnknownElement"} Shadow
 * @property {"HTMLSlotElement"} Slot
 * @property {"HTMLElement"} Small
 * @property {"HTMLSourceElement"} Source
 * @property {"HTMLUnknownElement"} Spacer
 * @property {"HTMLSpanElement"} Span
 * @property {"HTMLElement"} Strike
 * @property {"HTMLElement"} Strong
 * @property {"HTMLStyleElement"} Style
 * @property {"HTMLElement"} Sub
 * @property {"HTMLElement"} Summary
 * @property {"HTMLElement"} Sup
 * @property {new () => HTMLUnknownElement} 
 * @property {"HTMLTableElement"} Table
 * @property {"HTMLTableSectionElement"} TBody
 * @property {"HTMLTableCellElement"} TD
 * @property {"HTMLTemplateElement"} Template
 * @property {"HTMLTextAreaElement"} TextArea
 * @property {"HTMLTableSectionElement"} TFoot
 * @property {"HTMLTableCellElement"} TH
 * @property {"HTMLTableSectionElement"} THead
 * @property {"HTMLTimeElement"} Time
 * @property {"HTMLTitleElement"} Title
 * @property {"HTMLTableRowElement"} TR
 * @property {"HTMLTrackElement"} Track
 * @property {"HTMLElement"} TT
 * @property {"HTMLElement"} U
 * @property {"HTMLUListElement"} UL
 * @property {"HTMLElement"} Var
 * @property {"HTMLVideoElement"} Video
 * @property {"HTMLElement"} Wbr
 * @property {"HTMLPreElement"} XMP
 */

const handler = {get: (_, name) => name};

/** @type {HTML} */
module.exports = proxiedHTMLConstructors(new Proxy(handler, handler));
