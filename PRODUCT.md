# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Plain static HTML/CSS, no build step. Confirmed with the owner after he asked whether to host on his
existing VPS: the site deploys to Cloudflare Pages instead, so the box running his revenue sites is
never in the path of a traffic spike, and a single static page needs no server. Cloudflare R2 was
raised and set aside — Pages serves the page and its images directly; R2 only becomes relevant for
large media the page does not yet have.

The installer is **not** served from this site. The download button points at GitHub Releases
(`github.com/aiusmarcusx/porterage`), both for bandwidth and because release download counts are the
only demand signal available before the product earns anything.

## Users

English-speaking Mac owners in Tier 1 markets who carry an Android phone and move files between the
two over a cable. They have already tried the free options — OpenMTP, Google's Android File
Transfer — and hit their failure modes: transfers that stall or wedge, folders that take a minute to
open, a connection that reports "busy or not connected" without saying why.

They are evaluating in a specific moment: phone plugged in, a folder of photos or video they need on
the Mac, and a tool that just failed them.

## Product Purpose

Porterage moves files between an Android phone and a Mac over the USB cable, and does it without the
failures that make the existing tools untrustworthy. Success is a transfer that finishes, at a known
speed, with the bytes intact — and a connection that explains itself when something is wrong.

## Positioning

Every claim on this site is a measurement taken from real hardware (a Redmi 9T on a MacBook Air M1),
recorded in the product's own NOTES.md. A competitor could copy the feature list; they could not
copy the findings, because the findings came from instrumenting the protocol rather than reading its
specification.

The mechanism behind the headline differences: Porterage implements MTP directly over libusb instead
of using libmtp, which flags every Android device as unable to use the fast listing command and
offers no way to override that.

## Operating Context

USB cable, one phone, one Mac. No Wi-Fi, no account, no cloud, no companion app on the phone. The
phone must be set to File transfer mode and unlocked for a connection to start — though not to
continue one.

## Capabilities and Constraints

Confirmed and measured:

- Two-way copying, whole folders, drag in from the Finder and drag out to it.
- Photo grid with thumbnails: 14 ms each from the phone; files with no embedded thumbnail are
  fetched and scaled on the Mac.
- Folder listing 0.56 s for 345 files, against 3.2 s the conventional way.
- Small files copy at 53 ms each and keep doing so; without draining the phone's event queue they
  decay to ~1.1 s and MTP wedges permanently after roughly 211 files.
- Interrupted copies resume byte-exact in both directions, verified with SHA-256.
- Locking the phone's screen does not interrupt a running copy; it does block starting one.
- Names differing only in case are refused, because the phone's storage would silently overwrite.
- Speeds: about 29 MB/s off the phone, 15 MB/s onto it. 324 real photos (2 GB) in 79 seconds.
- Free space is checked before a copy starts, because the phone accepts files that will not fit.
- macOS 14 or later, universal (Apple silicon and Intel), 2.8 MB, no installed dependencies.
- First listing after plugging in takes about 17 seconds while the phone builds its index.

Constraints and undecided facts:

- Not yet released; there is no GitHub repository, no tagged release, and no download to link to.
- Not yet signed with a Developer ID or notarised, so macOS currently warns on first open. The owner
  has no Apple Developer account yet.
- Dates are preserved phone → Mac only; the phone stamps its own clock on incoming files.
- The removable-storage (SD card) path is untested — the test phone has no card.
- A paid Pro tier is planned but its scope and price are undecided. **No pricing on this site.**

## Brand Commitments

- Name: **Porterage**. Domain `porterage.app`, owned.
- Open source. Repository under `github.com/aiusmarcusx/porterage` (not yet created).
- Deliberately avoids "Android", "Droid", "Mac" and "Apple" in the product name for trademark
  reasons; the body copy may name Android and macOS factually.
- English only. The product's own interface is English; there is no localisation.

## Evidence on Hand

- `~/Documents/GitHub/porterage/NOTES.md` — every measurement, with the conditions it was taken
  under. The authoritative source for any number on this site.
- `~/Documents/GitHub/porterage/README.md` — the same findings in short form.
- Two real application screenshots at 1800×1224, taken from the running app: the photo grid and the
  file list.
- **Missing:** a screenshot of a transfer in progress showing speed and time remaining. It needs a
  file picker that cannot be driven programmatically, so the owner has to trigger it.
- **Missing:** any user, review, download count, or testimonial. The product has never shipped.
  Nothing of that kind may be invented.
- Screenshots must never contain the owner's own photo library; the grid screenshot uses neutral
  images staged on the phone for the purpose.

## Product Principles

1. **Every claim is a measurement.** If a number is not in NOTES.md, it does not go on the page.
2. **Name the failure before the fix.** The audience arrived because something else broke; the page
   earns trust by describing that breakage precisely.
3. **Say what it does not do.** Not signed yet, no Wi-Fi, no SD card testing, no pricing. Omissions
   stated plainly are cheaper than discovered ones.
4. **The cable is the position, not the limitation.** No account, no cloud, no phone app.
5. **Never invent social proof.** No fake users, counts, reviews or logos, at any stage.

## Accessibility & Inclusion

No product-specific requirement established beyond ordinary standards for a public marketing page.
