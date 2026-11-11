# Notes for AI coding assistants

Read this before editing. These choices were made on purpose; don't undo them.

## Content
- `src/content.ts` holds all site text. Project bullets, stacks, dates, contexts, skills and education are copied word for word from the resume. Never shorten, paraphrase, "clean up" or add blurbs. If a line changes, it changes on the resume (`public/resume.pdf`) too.
- Links set to `"TODO"` stay hidden (`showLink`). Currently LinkedIn and the OpenSesame and FocusLink GitHub links.
- Single page. Projects are open text separated by a 1px rule. Every bullet is always visible. No cards, dropdowns, tabs or "read more".

## Type
- One font stack for all text: `"Times New Roman", "Tinos", "Shippori Mincho B1", serif` (the `--font-serif` token). Times/Tinos draws English, Shippori Mincho B1 draws Japanese. Don't add any other font.
- Only these weights are loaded: Shippori Mincho B1 600 and 800, Tinos 400, 700 and 400 italic.
- The hero name is weight 600 with the "logo" squeeze: `display: inline-block; transform: scaleX(0.85); transform-origin: left center`. No skew.
- Romaji captions are italic with a period after each syllable and wide gaps ("has.  san.").
- Buttons use `.spaced`: uppercase, `letter-spacing: 0.3em`, outlined. Hover inverts the colours instantly. No transition.
- Bracket subtitles, large, `letter-spacing: 0.35em`: hero ［ハッサン］, then ［作品］ ［技能］ ［学歴］ ［連絡］ under the section headings.

## Look
- Flat full-width bands, hard straight edges. No gradients, textures, torn paper, noise, cards or dividers between bands.
- Tokens in `@theme` in `src/index.css`: black `#000`, paper `#f4f4f2`, red `#d8150f`, orange `#e8601c`, white `#fff`.
- Bands: Hero black, Projects paper, Skills red, Education black, Contact orange, Footer black. Text is white, except Projects (black) and Contact (black — white on this orange is under 4.5:1).
- From 768px up, each section has a vertical label on its left edge (`writing-mode: vertical-rl; text-orientation: upright; letter-spacing: 0.4em`): 作品, 技能, 学歴, 連絡. Kanji only, no English title. Hidden below 768px.
- One faint backdrop character per section, about 40vw, 5% opacity, cropped off the right edge, `aria-hidden`: Projects 物, Skills 技, Education 学, Contact 話. The band is `overflow: hidden`.
- The hero name block sits in the left 60%. Bottom-right is the `PowerLines` SVG: two straight vertical poles, one flat crossarm each, three wires sagging between the crossarms, 1.5px white strokes. Hidden below 768px. No image files.
- Keep every text pair at 4.5:1 or better. Focus is a white outline on black and red, a black outline on paper and orange.

## Motion
- Nothing eases. No transitions, no fades, no smooth scrolling. Section changes and hovers are instant.
- The only motion is the two title cards on every load (0.8s each): card 1 red, card 2 black, hard cut between them and hard cut to the page. Any click or key skips them. Skipped under `prefers-reduced-motion`. They are not remembered, so a refresh plays them again.

## No sound, no game UI
- No music, sound effects, audio files, Web Audio or `<audio>`.
- No Ace Attorney leftovers: no Ace Attorney fonts, sprites, labels, classes, credits or "Court Record"/"evidence"/"objection" wording. Search the repo before you finish.

## Before you say you're done
- `npm run build` and `npm run lint` must pass with zero warnings.
- Check at 360px wide: no horizontal scroll. Check keyboard focus is visible on every link and button.
