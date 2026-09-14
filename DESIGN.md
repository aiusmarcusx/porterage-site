---
name: Porterage
description: An anodized graphite equipment faceplate — every claim shown as a reading on an instrument, under stated conditions.
colors:
  panel: "#17181a"
  panel-high: "#1f2124"
  panel-low: "#101113"
  recess: "#0b0c0d"
  edge: "#34373b"
  edge-soft: "#26292c"
  text-bright: "#f2f4f6"
  text: "#d7dbe0"
  label: "#9aa0a8"
  label-dim: "#888d95"
  signal: "#ffa51f"
  signal-deep: "#c97a05"
  signal-ghost: "rgba(255, 165, 31, 0.14)"
  ok: "#5cc47d"
  alarm: "#e4544a"
  key-face: "#14161a"
typography:
  display:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(52px, 9vw, 104px)"
    fontWeight: 700
    lineHeight: 0.92
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(30px, 4.2vw, 46px)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(20px, 2.3vw, 25px)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.018em"
  reading:
    fontFamily: "'Azeret Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "32px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'Azeret Mono', ui-monospace, 'SF Mono', Menlo, monospace"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.5
    letterSpacing: "0.16em"
rounded:
  segment: "1px"
  control: "2px"
  instrument: "3px"
  lamp: "50%"
spacing:
  hairline: "1px"
  cell-gap: "3px"
  tight: "10px"
  gap: "14px"
  instrument: "22px"
  card: "clamp(24px, 3vw, 34px)"
  panel: "clamp(56px, 8vw, 104px)"
  gutter: "clamp(20px, 5vw, 64px)"
components:
  btn-plate:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.key-face}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  btn-plate-hover:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.key-face}"
  btn-plate-active:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.key-face}"
  btn-plate-sm:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.key-face}"
    rounded: "{rounded.control}"
    padding: "12px 18px"
  btn-ghost:
    backgroundColor: "{colors.panel-high}"
    textColor: "{colors.text}"
    rounded: "{rounded.control}"
    padding: "15px 22px"
  btn-ghost-hover:
    backgroundColor: "{colors.panel-high}"
    textColor: "{colors.text-bright}"
  btn-ghost-active:
    backgroundColor: "{colors.recess}"
    textColor: "{colors.text-bright}"
  gauge:
    backgroundColor: "{colors.recess}"
    textColor: "{colors.signal}"
    rounded: "{rounded.instrument}"
    padding: "22px 22px 18px"
  ladder:
    backgroundColor: "{colors.signal-ghost}"
    rounded: "{rounded.segment}"
    height: "46px"
  ladder-cell-lit:
    backgroundColor: "{colors.signal}"
    rounded: "{rounded.segment}"
  readout:
    backgroundColor: "{colors.recess}"
    textColor: "{colors.text-bright}"
    rounded: "{rounded.instrument}"
    padding: "20px"
  bar:
    backgroundColor: "{colors.signal-ghost}"
    rounded: "{rounded.segment}"
    height: "12px"
  bar-fill-alarm:
    backgroundColor: "{colors.alarm}"
    rounded: "{rounded.segment}"
    height: "12px"
  lamp:
    backgroundColor: "{colors.recess}"
    textColor: "{colors.label}"
    typography: "{typography.label}"
    rounded: "{rounded.instrument}"
    padding: "14px 16px"
  card:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.label}"
    padding: "{spacing.card}"
  spec:
    backgroundColor: "{colors.panel-low}"
    textColor: "{colors.text-bright}"
    padding: "26px 0 26px 24px"
  plate-frame:
    backgroundColor: "{colors.panel-high}"
    rounded: "{rounded.instrument}"
    padding: "clamp(12px, 2vw, 22px)"
---

# Design System: Porterage

## Overview

**Creative North Star: "The Anodized Faceplate"**

This is not a page with instruments drawn on it. It is a faceplate: a single machined graphite
panel, screen-printed and engraved, that happens to be scrollable. Nothing floats above it and
nothing sits on a card hovering in space — every element is set *on* the panel, *into* a milled
recess, or *beside* an engraved rule. The whole surface carries a brushed-metal treatment (a 1-in-3px
vertical grain at 1.4% white, under a slow 100° light gradient that runs from #141517 through #1a1c1f
and back), so the ground itself has a direction and a light source before any component lands on it.

The system's argument is that a transfer tool earns trust the way measurement hardware does — by
displaying what it measured, under stated conditions. Every number is therefore staged as a reading
on an instrument rather than as a marketing figure: a segment ladder with a labelled full-scale, a
pair of comparison bars on a shared axis, a key/value cell grid. Where a value is bad news, the same
instrument shows it in alarm red at the same scale. This is why the visual density is high and the
decoration count is zero: there is no illustration, no gradient blob, no glyph icon, no
floating-screenshot-on-gradient hero. The two screenshots that ship are mounted as registered plates
with corner marks and a Plate number, the way a lab figure is mounted.

Both were shot against a Vietnamese-language phone and localised afterwards, pixel by pixel: the
storage name the phone reports, and the decimal comma the Mac's region produces. Both of those are
device-language output, so substituting them shows what the page's own audience would see. The dates
were deliberately **not** touched — the app pins `dd/MM/yyyy HH:mm` in code, so that is what every
user gets, and editing them would have put a claim on the page that the software does not honour.
That line is the rule: localise what the device decides, never what the code decides.

Restraint is enforced by materials, not by taste. Two typefaces. Three neutral grounds plus a recess.
One accent (amber) that means "this is a reading or the primary control", one alarm red that means
"this is a stated failure", one green that answers it. Corners are 1–3px, which reads as machined
rather than soft. Motion exists only as state change: lamps and meters ignite, panels never move.

**Key Characteristics:**
- Full-bleed panels stacked against one continuous vertical rail; no floating cards
- Every measured number set in mono at reading scale, with its unit and its conditions attached
- Amber signal reserved for readings and the one primary control; red reserved for named faults
- Recessed instrument wells (inset shadow) and emissive lamps (zero-offset glow) as the only depth
- Machined corners (1px / 2px / 3px), hairline `#26292c` rules, no shadow used to lift anything

## Colors

A dark anodized grey family under a single amber signal, with a two-lamp status pair held in reserve.

### Primary
- **Signal Amber** (`signal`): The lit state. It carries measured values (`.gauge__read`,
  `.minispec dd`), the index and key labels that point at a measurement (`.fault__no`, `.card__k`,
  `.plate__id`), the lit ladder segments and bar fills, the primary Download plate, the focus ring,
  text selection and list markers. It is the only colour on the page that means "on".
- **Signal Deep** (`signal-deep`): The bottom stop of the Download plate's 180° gradient, giving the
  key its cylindrical face. Not used as a text or fill colour on its own.
- **Signal Ghost** (`signal-ghost`): The *unlit* state of anything amber can light — ladder cells and
  the empty portion of every comparison bar. It is amber at 14% so an unreached cell reads as
  remaining scale rather than as an empty slot.

### Secondary
- **Status Green** (`ok`): Used only as a 7px lamp and a 28%-opacity lamp border, to mark the
  behaviour that replaces a fault. Never a background, never body text.
- **Alarm Red** (`alarm`): Used only where a real failure is being stated — the pre-release caveat
  dot, the losing bar in a comparison readout, the "silently overwritten" lamp. One alarm colour,
  used sparingly enough that it still reads as an alarm.

### Neutral
- **Panel** (`panel`): The default ground. The body carries it plus the brushed-metal grain and light
  gradient; `.card` faces repeat it flat.
- **Panel High** (`panel-high`): The lightest ground in the system — the top stop of ghost-button and
  plate-frame gradients. Nothing is lighter than this.
- **Panel Low** (`panel-low`): The alternate panel ground, used to band a section away from its
  neighbours (`.specrow`, `.panel--plate`, `.panel--split`, `.panel--limits`).
- **Recess** (`recess`): The milled well. Every instrument interior — gauge, readout, lamp, inline
  `<code>` — sits on this with an inset shadow, so it reads as cut into the panel.
- **Edge** (`edge`): The strongest 1px line: the continuous rail and the ghost-button border.
- **Edge Soft** (`edge-soft`): Every other 1px line. Section rules, instrument borders, card
  hairlines, the cell grid — all of them are this one value via `--rule`.
- **Text Bright** (`text-bright`): Headings, brand, and the measured value itself.
- **Text** (`text`): Body prose and the lede.
- **Label** (`label`): Secondary prose, unit suffixes, note lines under a reading.
- **Label Dim** (`label-dim`): Screen-printed key labels and scale-end legends. The quietest tone in
  the system, and still AA.

### Named Rules
**The Amber Is A Reading Rule.** Signal amber marks a measurement, the control that gets you the
product, or the focus ring. It never appears on body prose, a heading, or a decorative divider. If a
new element wants amber, ask what it measured; if the answer is nothing, it gets `--label`.

**The One Alarm Rule.** Red states a failure that the product actually names — nothing else. Green
exists only to answer a red in the same component. Neither colour is available for emphasis,
categorisation, or variety.

**The Ground Ceiling Rule.** No surface in this system is lighter than `panel-high` (#1f2124). The
two label tones were raised specifically to clear WCAG AA 4.5:1 against every ground here, including
the body gradient's lightest pixel (#1a1c1f) — they measure ≈5.2:1 at worst and ≈7:1 on the default
panel. Introducing a lighter ground breaks both label tokens at once, and darkening the labels for
"subtlety" breaks them directly. Neither move is available.

**The Parent-In-Selector Rule.** An accent-carrying label that lives inside a prose container must
name its parent in the selector — `.card .card__k`, `.fault .fault__no`. Without the parent,
`.card p` and `.fault p` win on specificity and silently strip the amber back to `--label`. This has
already regressed once; any new key/value label inside a prose block inherits the same hazard.

## Typography

**Display / Body Font:** Archivo (with -apple-system, BlinkMacSystemFont, Helvetica Neue, Arial)
**Label / Mono Font:** Azeret Mono (with ui-monospace, SF Mono, Menlo)

**Character:** A tight industrial grotesque against a squared mono. Archivo does everything
structural — brand, headings, prose — always with negative tracking (-0.018em to -0.035em), which is
what keeps a 104px wordmark reading as an engraved nameplate rather than as a hero headline. Azeret
Mono does everything measured and everything labelled; its squared terminals are why a 32px figure
sits on a faceplate instead of in a pitch deck.

### Hierarchy
- **Display** (Archivo 700, `clamp(52px, 9vw, 104px)`, 0.92 line-height, -0.035em): The wordmark
  only — once at full scale in the header, once at 28px/-0.02em in the footer. Carries a two-sided
  engraving shadow: `0 1px 0 rgba(0,0,0,0.8)` cut above, `0 -1px 0 rgba(255,255,255,0.07)` lit below.
- **Headline** (Archivo 600, `clamp(30px, 4.2vw, 46px)`, 1.08): Section heads, capped at 62ch, each
  followed by a 16.5px `--label` subhead that states the conditions. A split section steps this down
  to `clamp(26px, 3.4vw, 38px)`.
- **Title** (Archivo 600, `clamp(20px, 2.3vw, 25px)`, 1.22): Fault and card headings. Cards run
  fractionally smaller (`clamp(19px, 2.1vw, 23px)`) because four sit in a grid.
- **Reading** (Azeret Mono 500, -0.03em, line-height 1): The measured value. 46px in the gauge, 32px
  in a spec cell, 14px in a readout row. The unit always follows as a separate non-italic `em` at
  13–14px in `--label`, never inside the figure.
- **Body** (Archivo 400, 17px / 1.6; 16px below 900px): Prose. The lede runs
  `clamp(18px, 2vw, 21px)` / 1.55 at 46ch; fault and card prose run 15.5–16px at `--label`; notes and
  captions run 13–15px.
- **Label** (Azeret Mono 500, 11.5–12px, 0.10em–0.18em, uppercase, `--label-dim`): Every key in every
  key/value pair — spec keys, gauge label, readout keys, condition terms, minispec terms, scale ends.

### Named Rules
**The Two Families Rule.** Archivo and Azeret Mono. There is no third family, no icon font, and no
system display face. A new surface that needs a "different feel" changes weight, tracking or ground —
not family.

**The Measured Value Rule.** Any number that came from a measurement is set in Azeret Mono with
-0.03em tracking at reading scale, with its unit demoted beside it and its conditions stated within
the same component. A number set in Archivo is, by definition, not a measurement in this system.

**The Screen-Print Rule.** Labels are tracked uppercase mono at 11.5–12px in `--label-dim`. This
tracked-uppercase-mono voice is the panel's screen printing — a mechanical audit will flag it as an
anti-pattern, and it stays, because it is the material. It is licensed for *keys*: a label may sit
above a heading only when it names the real key of a key/value pair (`.card__k` names the failure
condition the card answers; `.fault__no` is an index). It is not licensed as a decorative kicker or
eyebrow over arbitrary prose.

## Layout

One column of full-bleed panels, each `border-bottom: 1px solid var(--edge-soft)` and padded
`clamp(56px, 8vw, 104px)` vertically. Horizontal inset is never applied to the panel: it lives on the
inner `.wrap` (max 1160px, `padding-inline: clamp(20px, 5vw, 64px)`, auto margins) and on `.card`.
That separation is what lets a ground colour, a rule, or a specrow band span the viewport while its
content stays aligned to the same 1160px column as everything else.

A fixed 1px rail runs the full document height at
`left: max(14px, calc((100vw - 1160px) / 2 - 26px))`, fading in and out over the top and bottom 8%.
It sits at `z-index: 0` under the panels (`z-index: 1`) and is `pointer-events: none`. Below 900px it
is hidden outright rather than re-placed.

Grids in use, all of them key/value or measurement structures:
- Header: `minmax(0, 1.35fr) / minmax(280px, 0.85fr)` — identity left, instrument right, top-aligned.
- Spec row: 4 equal columns divided by left borders with `margin-left: -1px`, first cell flush.
- Fault: `64px / 1fr / 1fr` — index, prose, readout — separated by top rules rather than gaps.
- Cards: 2×2 with `gap: 1px` over an `edge-soft` ground, so the gap *is* the hairline.
- Split: `0.9fr / 1.1fr`, centre-aligned, prose and inventory left, Plate II right.
- Chain: 3 equal columns under one continuous hairline path, tapped by a lamp per step.
- Conditions: 2 columns of 128px-term definition rows, with a 40px gutter and a centre rule above
  860px.

**Responsive.** One breakpoint does most of the work at 900px: the rail disappears, the header
collapses to one column, the spec row folds to 2×2 (borders re-computed so odd cells lose their left
rule and rows 2+ gain a top rule), faults drop to a 34px index column with readout and lamps pushed
into column 2, and cards and conditions go single-column. The chain turns its horizontal path
vertical: the connecting line is dropped, each step gains a top rule and 26px of left inset, and the
lamp becomes a margin marker. The split collapses to one column and the inventory drops its left
rule. A second breakpoint at 560px linearises readout rows, stacks the two header buttons
full-width, and lets the Download plate wrap.

### Named Rules
**The Full-Bleed Panel Rule.** `.panel` never receives horizontal padding. Inset belongs to `.wrap`
and `.card`. A panel that needs to look inset gets a ground colour, not a margin.

**The One Rule Rule.** Every divider in the document is the same 1px `--edge-soft` line, applied via
the `--rule` token. Cells that share a border overlap by `margin-left: -1px` (or `-1px` top) so the
shared edge stays exactly 1px. There is no second divider weight, colour, or style.

**The Continuous Rail Rule.** The rail is one line for the whole document, not a per-section
ornament. It is never duplicated, never segmented per panel, and never shown below 900px.

## Elevation & Depth

Nothing in this system is lifted. There is no ambient drop shadow, no elevation ramp, and no surface
that casts onto another. Depth is entirely material: things are either *cut into* the panel or
*emitting light from* it.

Two shadow families, and they are not interchangeable:

**Recess (inset).** An instrument interior is a milled well — a dark gradient ground plus an inset
shadow at the top edge. Gauge and readout use `inset 0 2px 6px rgba(0,0,0,0.6–0.75)`; the ghost
button and plate frame use a 1px inset white highlight (`inset 0 1px 0 rgba(255,255,255,0.05)`) to
read as a raised machined face instead.

**Emission (zero-offset glow).** Lamps and lit meter segments glow. Every `box-shadow` with a 0/0
offset in this stylesheet is light coming off an LED or a lit segment: the button lamp
(`0 0 8px rgba(255,240,200,0.8)`), the status dots, the lit ladder cells
(`0 0 10px rgba(255,165,31,0.45)`), the bar fills, and the Download plate's hover halo. A mechanical
audit flags roughly ten of these as decorative; they are the material of this world and they stay.

The single hard outward shadow in the system is the Download plate's `0 2px 0 #000` — a key sitting
2px proud of the panel, which collapses to `0 0 0 #000` with a 2px translate on `:active` so the key
physically travels. That is the only place an element moves.

### Shadow Vocabulary
- **Instrument well** (`box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.75)`): gauge interiors.
- **Readout well** (`box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.6)`): readout panels; lamps use the
  same ground without the shadow.
- **Machined face** (`box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05)`): ghost button; the
  Download plate uses a stronger `inset 0 1px 0 rgba(255,255,255,0.45)` top highlight.
- **Key travel** (`box-shadow: inset 0 1px 0 rgba(255,255,255,0.45), 0 2px 0 #000`): Download plate at
  rest. Hover adds `0 0 22px rgba(255,165,31,0.28)`; active drops both the highlight and the travel.
- **Segment emission** (`box-shadow: 0 0 10px rgba(255, 165, 31, 0.45)`): lit ladder cells and amber
  bar fills. The alarm variant is `0 0 10px rgba(228, 84, 74, 0.35)`.
- **Lamp emission** (`box-shadow: 0 0 8px rgba(<lamp tone>, 0.5–0.8)`): 7–8px round indicators.

### Named Rules
**The No-Float Rule.** No element casts a shadow to appear above the panel. If depth is needed,
recess it or light it. A soft outward drop shadow is out of world.

**The Glow-Is-Material Rule.** A zero-offset glow is emission from something that is lit, so it is
allowed only on an element whose *state* is "on": a lamp, a lit segment, a filled bar, the primary
key on hover. It is not available as a general highlight, and it is never applied to text, panels, or
borders.

## Shapes

Machined, not softened. The radius ladder is short and literal: 1px on segments (ladder cells, bar
tracks and fills), 2px on controls and mounted images (buttons, inline `code`, the screenshot's own
black frame), 3px on instrument housings (gauge, readout, lamp, plate frame, card grid), and 50% on
lamps only. Nothing in the system is larger than 3px, so a corner reads as a broken edge on metal
rather than as a rounded card.

Borders carry the structure. Instruments are a 1px `edge-soft` outline over a dark gradient ground;
the ghost button takes the brighter `edge` at 1px; the mounted screenshot takes a hard `1px solid
#000` inside its frame so the image sits in an aperture. Status lamps tint their own border to their
own colour at 28% opacity — the only place a border is not a neutral.

Two recurring silhouettes define the form language. The **registration mark**: a 13px crosshair at
55% opacity built from two 1px pseudo-element strokes, set 5px inside each corner of a mounted plate,
so a screenshot is registered rather than floated. The **tick**: a 12px × 1px amber stroke at the
left of each limits item, replacing a bullet with something that looks scored into the panel.

### Named Rules
**The 3px Ceiling Rule.** 1px segments, 2px controls, 3px housings, 50% lamps. No other radius
exists; a pill, a 8px card, or a fully rounded control is out of world.

**The Mounted Image Rule.** A screenshot is never placed directly on a panel. It goes inside a
`.plate__frame` (gradient face, 1px `edge-soft`, 3px radius, `clamp(12px, 2vw, 22px)` padding), gets
four registration marks, a black 1px aperture border, and a caption carrying a Plate number in amber,
a description, and — when staged — a provenance note.

## Components

### Buttons
- **Shape:** Machined key, 2px radius, 1px border.
- **Primary ("plate"):** A 180° amber gradient (`signal` → `signal-deep`) with a `#8f5a04` border and
  a near-black face (`#14161a`) at Archivo 700/-0.01em. Padding `15px 22px`, small variant
  `12px 18px` at 15px. It always carries an 8px lamp glyph to its left — a radial gradient
  (`#fff6df` → `#ffcf72` → `#b77300`) with an inset dark ring and an outward warm glow.
- **Hover / Active:** Hover brightens the inset highlight and adds a 22px amber halo. Active drops
  the key 2px and removes the travel shadow, over `transform`/`box-shadow` at `0.08s linear`.
- **Ghost:** A raised machined face — `panel-high` → `panel-low` gradient, 1px `edge` border, 1px
  white inset highlight, Archivo 500 in `--text`. Hover raises the border to `label-dim` and the text
  to `text-bright`; active sinks it to `recess` with an inset shadow.
- **Focus:** No per-button treatment. One global rule serves every interactive element:
  `outline: 2px solid var(--signal); outline-offset: 3px` on `:focus-visible`.

### Gauge (signature component)
The page's thesis in one object. A recessed well (`recess` → `#0e0f11`, 1px `edge-soft`, 3px radius,
inset shadow) containing, in order: a screen-printed label, a 24-cell segment ladder 46px tall on a
3px grid gap, a scale line reading `0` to `40 MiB/s full scale`, the reading itself (46px mono amber
with a demoted unit), and a footer note above a hairline stating the opposite-direction number and
what the limit actually is.

Unlit cells are `signal-ghost`, lit cells are a `#ffd487` → `signal` gradient with a 10px emission.
**Unlit cells are drawn, never omitted** — they are the rest of a stated scale, which is also why the
scale-end labels are mandatory. The whole well carries `role="img"` with an `aria-label` spelling out
the reading and the hardware it came from.

### Readout (signature component)
A comparison instrument: a recessed well holding rows of `116px / 1fr / auto` — a screen-printed key,
a 12px bar, and a mono value with its own demoted sub-unit. Bars are `signal-ghost` tracks with an
amber gradient fill; a `--bad` row switches the fill to `#f08078` → `alarm`. Below the rows, a
hairline and a 13px note stating what was held constant.

Fill width is `--w` set inline. **Every bar in the document shares one scale**, and each `--w` is the
real ratio: 4.8% is 53ms against 1100ms, 17.5% is 0.56s against 3.2s. A percentage chosen for
appearance falsifies the instrument.

### Lamps
A 7px dot (amber/green/red, `50%`, with a matching 8px glow) beside 12.5px mono text, inside a 3px
recessed strip whose border is tinted to the lamp's own colour at 28%. Used as the qualitative
alternative to a readout, where the comparison is behavioural rather than numeric. Dots also appear
inline in the caveat line, where the dot is the only alarm marker in the header.

### Cards / Containers
- **Corner Style:** 3px on the grid container; individual cards have no radius of their own.
- **Background:** `panel` faces over an `edge-soft` grid ground, with `gap: 1px` producing the
  dividing hairlines — there are no per-card borders.
- **Shadow Strategy:** None. See The No-Float Rule.
- **Internal Padding:** `clamp(24px, 3vw, 34px)`.
- **Structure:** amber key (the condition) → title (the behaviour) → prose → a hairline-topped mono
  reading line where the measured figures are lifted to `text-bright`.

### Spec cell
Four across, on a `panel-low` band directly under the header, divided by left borders with -1px
overlap. Screen-printed key, 32px mono value with a 14px demoted unit, and a 13px note carrying the
sample size or the comparison. This is the compressed form of the gauge and readout, and the pattern
any new "four facts" row should take.

### Definition rows (conditions / minispec)
Two densities of the same idea. `conditions` is a two-column `dl` of `128px` terms with 15.5px
`--text` definitions, hairline-topped, centre-ruled above 860px. `minispec` is the inline form:
hairline-topped rows with the term left and an amber mono value right, used inside prose.

### Chain
A fallback order drawn as the signal path it is. One hairline runs the full width of `.chain`, fading
from `signal-deep` to `edge` as it goes, and each step taps it with a 9px lamp. The lamps dim along
the chain — `signal`, `signal-deep`, `edge` — because that is the truth about how often each route
answers: route 1 serves most files, route 3 about a seventh. The third step's label drops to
`label-dim` for the same reason. Every step closes with a hairline-topped mono reading whose figure
is amber at 14px, so the three readings sit on one baseline across the row.

Never use this for a set of peers — the cards grid is for those. The chain is only correct when the
steps are tried in order and later ones are rarer.

### Plates
See The Mounted Image Rule under Shapes. The caption
grid is `88px / 1fr`: amber Plate number, 68ch description, and an optional mono provenance note on
the second column. Below 900px the caption stacks to one column and the note joins it.

### Inventory column
`.feats` sits under the prose in a split's text column: an amber mono heading over hairline rows, each
led by an 11px `signal-deep` tick. It answers "and what else" after the prose has made one claim, and
it carries no numbers — anything measurable belongs in a readout, not here.

### Guide pages (`/android-to-mac/`)
A Read surface inside the same world. Prose runs at 68ch in `--text` (brighter than the homepage's
`--label` card copy, because it is read for minutes, not scanned); every measurement still arrives
inside a recessed housing, so reading and reading-off stay visibly different acts.

- **Top bar.** A `panel-low` strip with the brand as a link at 22px and the small Download plate. The
  homepage has no bar because its wordmark is the hero; a guide needs a way home.
- **Signal path.** The hero's table of contents, drawn as the connection: five tap points on one
  vertical hairline inside a gauge-style recess, each a link carrying a mono stage number, an 18px
  name and one line of what fails there. The lamps start at `signal-ghost` and come up in order once
  on load (150ms apart), then hold — the ladder's ignite-and-hold, not a reveal. Content is visible
  before the lamps light.
- **Stage rail.** At 1100px and up, a 170px sticky column of mono stage names beside the body. The
  lamp of the stage crossing a band at 35–45% of the viewport turns amber via `aria-current="step"`.
  Below 1100px it is hidden; the signal path above is the table of contents.
- **Stage heading.** The stage number sits inside the `h2`, in mono at half the heading size, amber.
  It is sequence — the order hands meet the hardware — which is the only reason a number may lead a
  heading.
- **Measured callout.** A recessed box headed by a lit lamp and the word MEASURED. Only text that
  comes from NOTES.md goes in one; general instructions are never dressed as measurement.
- **Guide tables.** `panel-low` body, recessed mono header row, row headers in `text-bright`.
  Capability cells read Yes in `--ok` and No in `label-dim`, both mono. Below 640px a table whose last
  column is the answer stacks: each row becomes a block and every value cell prints its column name
  from `data-label`, so the answer is never behind a sideways scroll.
- **Steps.** An ordered procedure as hairline rows, each numbered by a 26px recessed key in mono amber.
  Two procedures on one page each get a lead-in line saying whose steps they are.

### Named Rules
**The Ignite-Don't-Slide Rule.** Motion in this system is state change on instruments; panels,
sections and images never move, fade in, or parallax. The ladder is the only animation: on first
intersection at 0.4 threshold it lights one cell at a time at 34ms, slowing to 90ms for the final
four so it reads as a needle settling, then unobserves itself and holds. `prefers-reduced-motion`
lights the same cells instantly, and the global reduced-motion rule collapses every transition to
0.001ms. Anything new either changes state in place or does not move.

**The Shared Track Rule.** Bars inside one readout must have identical track lengths. An `auto`
value column lets a longer caption shorten its own bar, which silently breaks "both bars share one
scale" — found in review on the guide and fixed with a fixed 132px value column above 560px. Any
readout whose captions differ in length gets a fixed value column.

**The Conditions-Attached Rule.** A measurement never appears alone. Every instrument carries, inside
its own borders, what was measured against what — the gauge's full-scale and opposite direction, the
readout's "same phone, same 400 files", the spec cell's sample size, the card's reading line. A
figure without its conditions is not finished.

## Do's and Don'ts

### Do:
- **Do** stage every number as a reading on an instrument — gauge, readout, spec cell, or minispec —
  with its unit demoted and its conditions inside the same component.
- **Do** draw the unreached part of any scale in `signal-ghost` and label the scale ends, so headroom
  reads as headroom.
- **Do** compute every bar's `--w` from the real ratio, and keep all bars in the document on one
  scale.
- **Do** let panels run full-bleed and put horizontal inset on `.wrap` and `.card` only.
- **Do** use the `--rule` hairline for every divider, and overlap shared borders by -1px.
- **Do** name the parent in selectors for accent-carrying labels (`.card .card__k`,
  `.fault .fault__no`), or the amber will be stripped by `.card p` / `.fault p`.
- **Do** keep zero-offset glows for things that are actually lit — lamps, lit segments, filled bars,
  the primary key on hover.
- **Do** mount every screenshot in a plate frame with four registration marks, a Plate number, and a
  provenance note when the contents were staged.
- **Do** ship a screenshot only in the language of the page. A localised phone in the breadcrumb, or
  a decimal comma in the free-space readout, tells a Tier 1 visitor the tool was not built for them.
- **Do** rely on the single global `:focus-visible` ring (2px `--signal`, 3px offset) rather than
  per-component focus styling.

- **Do** stack a table on phones when its final column is the answer; a sideways scroll hides exactly the
  part the reader came for.

### Don't:
- **Don't** introduce a third typeface, an icon font, or a glyph/emoji used as UI. Lamps, ticks and
  registration marks are the icon vocabulary.
- **Don't** darken `--label` or `--label-dim`, and don't add a ground lighter than `panel-high`
  (#1f2124) — both moves break the AA floor these tones were raised to clear.
- **Don't** use amber on prose or headings, or red and green for anything but a stated failure and
  its answer.
- **Don't** add a soft outward drop shadow, an elevation ramp, or any treatment that makes an element
  look lifted off the panel.
- **Don't** animate position: no slides, fades, parallax, or reveal-on-scroll. Instruments change
  state; panels hold still.
- **Don't** exceed a 3px radius (lamps at 50% excepted), or add a pill-shaped control.
- **Don't** place a tracked-uppercase mono label above a heading unless it names the real key of a
  key/value pair — that voice is a panel legend, not a decorative kicker.
- **Don't** reach for `!important` to win a specificity fight with `.card p` or `.fault p`; add the
  parent to the selector instead. The existing `!important` declarations on `.readout__note`,
  `.card__read` and `.lamp` are a debt in this build, not a pattern to copy.
- **Don't** omit unlit ladder cells, drop the scale-end labels, or present a figure without the
  conditions it was taken under.
