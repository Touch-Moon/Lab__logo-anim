import { useState } from 'react'
import { motion } from 'framer-motion'

const EASE_OUT = [0.22, 0.61, 0.36, 1]

// ── Line logo (single path, stroke)
const LINE_PATH =
  "M409.33 169.828C412.126 165.036 419.052 165.036 421.848 169.828L460.865 236.706C466.889 247.032 459.44 260 447.483 260H383.695C371.739 260 364.29 247.032 370.313 236.706L409.33 169.828ZM312.428 5.50488C315.86 -0.443598 324.437 -0.443609 327.869 5.50488L401.455 133.032C388.948 123.981 370.134 126.834 361.612 141.602L302.529 243.992C296.817 253.891 286.256 259.99 274.826 259.99H181.031C174.169 259.99 169.876 252.549 173.312 246.596L312.428 5.50488ZM141.327 5.46094C144.76 -0.487135 153.335 -0.487001 156.768 5.46094L230.355 132.99C217.849 123.938 199.033 126.79 190.512 141.558L131.429 243.949C125.717 253.848 115.156 259.947 103.726 259.947H9.93066C3.0679 259.947 -1.2244 252.506 2.21094 246.553L141.327 5.46094ZM234.594 1.04297C252.03 1.04309 266.165 15.1767 266.165 32.6104C266.165 50.0439 252.03 64.1766 234.594 64.1768C217.158 64.1768 203.023 50.044 203.022 32.6104C203.022 15.1766 217.157 1.04297 234.594 1.04297Z"

// ── Fill logo (4 paths)
const FILL_PATHS = [
  // circle (top)
  "M234.594 0.0432818C252.582 0.0433226 267.165 14.624 267.165 32.6101C267.165 50.5962 252.582 65.177 234.594 65.177C216.605 65.177 202.023 50.5962 202.023 32.6101C202.023 14.624 216.605 0.0432818 234.594 0.0432818Z",
  // left triangle
  "M140.461 4.96156C144.279 -1.65384 153.817 -1.65387 157.634 4.96156L234.594 138.334C223.206 124.519 200.782 125.76 191.378 142.058L132.295 244.449C126.404 254.658 115.513 260.947 103.726 260.947H9.93073C2.29608 260.947 -2.47441 252.671 1.34469 246.053L140.461 4.96156Z",
  // center triangle
  "M311.562 5.00464C315.379 -1.61076 324.918 -1.61079 328.735 5.00464L405.694 138.377C394.307 124.562 371.883 125.803 362.478 142.101L303.396 244.492C297.505 254.701 286.614 260.99 274.827 260.99H181.032C173.397 260.99 168.626 252.714 172.446 246.096L311.562 5.00464Z",
  // right small triangle
  "M408.467 169.324C411.648 163.87 419.53 163.87 422.712 169.324L461.729 236.202C468.142 247.195 460.212 261 447.484 261H383.695C370.967 261 363.037 247.195 369.45 236.202L408.467 169.324Z",
]

// ── 1. Path Draw (line logo)
function PathDrawDemo() {
  const [key, setKey] = useState(0)
  return (
    <div style={styles.card}>
      <p style={styles.label}>① Path Draw</p>
      <p style={styles.desc}>선이 그려지듯 로고 등장</p>
      <div style={styles.svgWrap}>
        <svg
          key={key}
          viewBox="0 0 464 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 280, height: 'auto' }}
        >
          <motion.path
            d={LINE_PATH}
            fill="none"
            stroke="white"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { duration: 2.0, ease: EASE_OUT },
              opacity: { duration: 0.3 },
            }}
          />
        </svg>
      </div>
      <button style={styles.btn} onClick={() => setKey(k => k + 1)}>Replay</button>
    </div>
  )
}

// ── 2. Stagger Reveal (fill logo, 4 shapes)
function StaggerDemo() {
  const [key, setKey] = useState(0)
  // circle first, then left→center→right
  const ORDER = [0, 1, 2, 3]
  return (
    <div style={styles.card}>
      <p style={styles.label}>② Stagger Reveal</p>
      <p style={styles.desc}>● → ◁ → △ → ▷ 순서로 등장</p>
      <div style={styles.svgWrap}>
        <motion.svg
          key={key}
          viewBox="0 0 464 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 280, height: 'auto' }}
        >
          {ORDER.map((i) => (
            <motion.path
              key={i}
              d={FILL_PATHS[i]}
              fill="white"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: EASE_OUT,
                delay: i * 0.15,
              }}
            />
          ))}
        </motion.svg>
      </div>
      <button style={styles.btn} onClick={() => setKey(k => k + 1)}>Replay</button>
    </div>
  )
}

// ── 3. Scale + Fade (fill logo)
function ScaleFadeDemo() {
  const [key, setKey] = useState(0)
  return (
    <div style={styles.card}>
      <p style={styles.label}>③ Scale + Fade</p>
      <p style={styles.desc}>작은 크기에서 확대되며 페이드인</p>
      <div style={styles.svgWrap}>
        <motion.svg
          key={key}
          viewBox="0 0 464 261"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 280, height: 'auto', transformOrigin: 'center' }}
          initial={{ opacity: 0, scale: 0.82 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, ease: EASE_OUT, delay: 0.1 }}
        >
          {FILL_PATHS.map((d, i) => (
            <path key={i} d={d} fill="white" />
          ))}
        </motion.svg>
      </div>
      <button style={styles.btn} onClick={() => setKey(k => k + 1)}>Replay</button>
    </div>
  )
}

// ── styles
const styles = {
  page: {
    minHeight: '100vh',
    background: '#111',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '60px 24px',
    gap: 40,
    fontFamily: 'sans-serif',
  },
  title: {
    color: 'rgba(255,255,255,0.3)',
    fontSize: 11,
    letterSpacing: '0.15em',
    textTransform: 'uppercase',
    marginBottom: 8,
  },
  row: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'center',
  },
  card: {
    background: '#1a1a1a',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: 12,
    padding: '32px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
    minWidth: 320,
  },
  label: {
    color: '#C9973E',
    fontSize: 12,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    margin: 0,
  },
  desc: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 12,
    margin: 0,
    textAlign: 'center',
    lineHeight: 1.6,
  },
  svgWrap: {
    padding: '24px 0',
  },
  btn: {
    background: 'transparent',
    border: '1px solid rgba(255,255,255,0.2)',
    color: 'rgba(255,255,255,0.5)',
    fontSize: 11,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    padding: '8px 20px',
    borderRadius: 4,
    cursor: 'pointer',
  },
}

export default function LogoAnimDemo() {
  return (
    <div style={styles.page}>
      <p style={styles.title}>Logo Animation — Demo</p>
      <div style={styles.row}>
        <PathDrawDemo />
        <StaggerDemo />
        <ScaleFadeDemo />
      </div>
    </div>
  )
}
