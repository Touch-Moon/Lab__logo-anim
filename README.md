# Lab — Logo Animation

SVG logo animation explorations using [Framer Motion](https://www.framer.com/motion/).

**Live demo:** [stackblitz.com/~/github.com/Touch-Moon/Lab__logo-anim](https://stackblitz.com/~/github.com/Touch-Moon/Lab__logo-anim)

---

## Animations

### ① Path Draw
Stroke animation on the line-style logo. Each shape draws in reverse direction (end → start), sequentially from left to right. The circle at the top center appears last.

**Technique:** `pathLength` and `pathOffset` animate together at the same rate — the tail of the stroke stays fixed at the path end while the head grows backward.

### ② Stagger Reveal
Fill-style logo with each shape fading in with a vertical offset. Order: circle → left triangle → center triangle → right triangle.

**Technique:** Per-path `opacity` + `y` with incrementing `delay`.

### ③ Scale + Fade
Full logo scales up from 82% while fading in as a single unit.

**Technique:** `scale` + `opacity` on the SVG element.

---

## Stack

- React 18
- Framer Motion 11
- Create React App (react-scripts 5)

## Run locally

```bash
npm install
npm start
```
