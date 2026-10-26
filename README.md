# ██████╗ ███████╗███╗   ███╗███████╗███╗   ███╗██████╗ ███████╗██████╗     ███╗   ███╗███████╗
# ██╔══██╗██╔════╝████╗ ████║██╔════╝████╗ ████║██╔══██╗██╔════╝██╔══██╗    ████╗ ████║██╔════╝
# ██████╔╝█████╗  ██╔████╔██║█████╗  ██╔████╔██║██████╔╝█████╗  ██████╔╝    ██╔████╔██║█████╗
# ██╔══██╗██╔══╝  ██║╚██╔╝██║██╔══╝  ██║╚██╔╝██║██╔══██╗██╔══╝  ██╔══██╗    ██║╚██╔╝██║██╔══╝
# ██║  ██║███████╗██║ ╚═╝ ██║███████╗██║ ╚═╝ ██║██████╔╝███████╗██║  ██║    ██║ ╚═╝ ██║███████╗
# ╚═╝  ╚═╝╚══════╝╚═╝     ╚═╝╚══════╝╚═╝     ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝    ╚═╝     ╚═╝╚══════╝

> `MEMORY TRAINING SYSTEM // READY PLAYER 01`

**Remember Me (จำจนวันตาย)** is an interactive memory-training project made for Physical Computing 2026 at IT KMITL. Players watch a sequence, remember it, then repeat it to improve their concentration and short-term memory.

The experience is designed to be simple, tactile, and accessible—including as a light memory exercise for older adults.

---

## ◼ PROJECT MODULES

| Module | Purpose |
| :--- | :--- |
| `REMEMBER_ME_OG/` | Arduino game logic for the physical memory game |
| `web-scoreboard/` | Live web scoreboard and player progress display |
| `apps-script/` | Google Apps Script connection for score storage |

---

## ◼ PIXEL BLACK & WHITE DESIGN SYSTEM

The web interface follows a strict retro 1-bit style inspired by 8-bit arcade hardware.

```text
PALETTE        █ BLACK  #000000     □ WHITE  #FFFFFF
TYPEFACE       PRESS START 2P + SPACE MONO
SHAPES         SQUARE ONLY — NO ROUNDED CORNERS
BORDERS        2–6PX SOLID BLACK
DEPTH          HARD PIXEL SHADOWS (NO BLUR)
TEXTURE        GRID LINES • BLOCK DIVIDERS • PIXEL MOTIFS
```

### Interface rules

- Every panel, button, tile, and score row uses sharp 90° corners.
- Buttons invert between black and white on interaction and press into their hard shadow.
- Important game states are communicated with high-contrast text, borders, and block indicators—not colour alone.
- The responsive layout moves from a side-by-side arcade dashboard on desktop to a focused vertical flow on mobile.

```text
┌──────────────────────────────────────────────────────────┐
│  REMEMBER ME                         SOUND: ON            │
├──────────────────────────────────────────────────────────┤
│  TRAIN YOUR MEMORY.          ┌─────────────────────────┐ │
│  [ START GAME → ]             │ MEMORY MODULE // LIVE  │ │
│                               │  ┌─────┐ ┌─────┐        │ │
│                               │  └─────┘ └─────┘        │ │
│                               │  ┌─────┐ ┌─────┐        │ │
│                               │  └─────┘ └─────┘        │ │
│                               └─────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

---

## ◼ HOW THE GAME WORKS

```text
01 // WATCH      A pattern appears on the tiles.
02 // REMEMBER   Hold the sequence in your mind.
03 // REPEAT     Press each tile back in the right order.
04 // LEVEL UP   Every round adds another challenge.
```

One incorrect move ends the run. High scores are recorded so players can track improvement over time.

---

## ◼ HARDWARE

- Arduino UNO R4 WiFi
- LCD display
- 4 LED lights
- 4 push buttons
- Breadboard and 4 resistors
- Enclosure / case

### Arduino libraries

- `WiFiS3.h`
- `Wire.h`
- `LiquidCrystal_I2C.h`

---

## ◼ WEB STACK

- React + Vite
- Tailwind CSS
- Node.js + npm
- Google Sheets + Google Apps Script

### Run the scoreboard

```bash
cd web-scoreboard
npm install
npm run dev
```

---

## ◼ CONTRIBUTORS

| Name | Student ID |
| :--- | :--- |
| นายพงศภัค บุญสนธิ | 68070111 |
| นายปิยวัฒน์ ศุภพรฐากร | 68070106 |
| นายภูรินท์ ลือประเสริฐ | 68070145 |
| ทีม Remember Me | 68070204 |

---

<p align="center"><code>FOCUS • MEMORIZE • RECALL • LEVEL UP</code></p>
