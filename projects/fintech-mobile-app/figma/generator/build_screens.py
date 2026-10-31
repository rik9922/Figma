#!/usr/bin/env python3
"""
Fintech Mobile — "Quiet Precision" screen generator.

Produces structured SVG boards that Figma's SVG importer (MCP upload_assets)
turns into native frames (nested <svg>), named layers (id=), and editable text.
Run:  python3 build_screens.py  -> writes ../exports/raw/*.svg
Then: node finalize.mjs         -> resolves text alignment + renders previews
"""
import os, re, html

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", "..", "..", ".."))
ICON_DIR = os.path.join(ROOT, "node_modules", "lucide-static", "icons")
OUT = os.path.join(HERE, "..", "exports", "raw")
os.makedirs(OUT, exist_ok=True)

# ----------------------------------------------------------------- tokens
C = dict(
    ink="#0F1115", ink2="#1B1E24", ink3="#2A2E36",
    paper="#F6F4EF", surface="#FFFFFF", surface2="#EFECE4", skel="#E6E2D8",
    hair="#E4E0D6", hair2="#D6D1C5",
    text="#0F1115", text2="#5E636E", text3="#6B707A",
    citrine="#D9F26B", citrineDeep="#4A5C00",
    pos="#1F7A4D", posBg="#E3F2E9",
    err="#C8372D", errBg="#FBE7E5",
    warn="#8A4B00", warnBg="#FFF1D6",
    onInk="#FFFFFF", onInk2="#B8BCC6", disabled="#DDD9CF", onDisabled="#7A7F89",
)
SERIF = "Instrument Serif"
SANS = "Inter"

IOS = dict(name="iOS", w=393, h=852, top=59, bottom=34, m=20, btn_r=16, sys="Inter")
AND = dict(name="Android", w=412, h=915, top=40, bottom=24, m=16, btn_r=28, sys="Roboto")

_ids = {}
def uid(base):
    """Unique, readable layer ids (Figma uses them as layer names)."""
    n = _ids.get(base, 0); _ids[base] = n + 1
    return base if n == 0 else f"{base} {n+1}"

def esc(s): return html.escape(str(s), quote=True)

# ---------------------------------------------------------------- primitives
def R(x, y, w, h, fill, rx=0, id=None, stroke=None, sw=1, op=None, dash=None):
    a = f' id="{esc(uid(id))}"' if id else ""
    s = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ""
    o = f' fill-opacity="{op}"' if op is not None else ""
    d = f' stroke-dasharray="{dash}"' if dash else ""
    return f'<rect{a} x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}"{o}{s}{d}/>'

def CIRC(cx, cy, r, fill, id=None, stroke=None, sw=1, op=None):
    a = f' id="{esc(uid(id))}"' if id else ""
    s = f' stroke="{stroke}" stroke-width="{sw}"' if stroke else ""
    o = f' fill-opacity="{op}"' if op is not None else ""
    return f'<circle{a} cx="{cx}" cy="{cy}" r="{r}" fill="{fill}"{o}{s}/>'

def T(x, y, s, size=16, w=400, fill=None, fam=SANS, anchor="start", id=None, ls=None, op=None):
    fill = fill or C["text"]
    a = f' id="{esc(uid(id or str(s)[:40]))}"'
    an = f' text-anchor="{anchor}"' if anchor != "start" else ""
    l = f' letter-spacing="{ls}"' if ls is not None else ""
    o = f' fill-opacity="{op}"' if op is not None else ""
    return (f'<text{a} x="{x}" y="{y}" font-family="{fam}" font-size="{size}" '
            f'font-weight="{w}" fill="{fill}"{an}{l}{o}>{esc(s)}</text>')

def FRAME(id, x, y, w, h, body, clip=True):
    return (f'<svg id="{esc(uid(id))}" x="{x}" y="{y}" width="{w}" height="{h}" '
            f'viewBox="0 0 {w} {h}">{"".join(body)}</svg>')

_icon_cache = {}
def ICON(name, x, y, size=24, color=None, sw=2, id=None):
    color = color or C["text"]
    if name not in _icon_cache:
        raw = open(os.path.join(ICON_DIR, f"{name}.svg")).read()
        body = raw.split(">", 2)[2] if raw.startswith("<!--") else raw.split(">", 1)[1]
        body = body.rsplit("</svg>", 1)[0]
        _icon_cache[name] = re.findall(r"<(path|circle|rect|line|polyline|polygon|ellipse)\b([^>]*?)/?>", body)
    els = "".join(
        f'<{tag}{attrs.rstrip("/ ")} fill="none" stroke="{color}" stroke-width="{sw}" '
        f'stroke-linecap="round" stroke-linejoin="round"/>' for tag, attrs in _icon_cache[name])
    return (f'<svg id="{esc(uid(id or "Icon / " + name))}" x="{x}" y="{y}" width="{size}" '
            f'height="{size}" viewBox="0 0 24 24">{els}</svg>')

# ------------------------------------------------------------ system chrome
def status_bar(P, dark=False):
    c = C["onInk"] if dark else C["ink"]
    W = P["w"]
    if P is IOS:
        b = [T(54, 37, "9:41", 17, 600, c, SANS, "middle", "Time"),
             R((W - 126) / 2, 11, 126, 37, "#000000", 18.5, "Dynamic Island")]
        for i in range(4):
            b.append(R(W - 104 + i * 5, 34 - (i + 1) * 3, 3, (i + 1) * 3, c, 1, "Signal"))
        b.append(ICON("wifi", W - 78, 23, 17, c, 2.4, "Wi-Fi"))
        b += [R(W - 55, 24, 25, 12, "none", 3.5, "Battery", c, 1, None),
              R(W - 53, 26, 18, 8, c, 2, "Battery Level"),
              R(W - 29, 28, 1.5, 4, c, 0.75, "Battery Cap")]
        return FRAME("Status Bar / iOS", 0, 0, W, 54, b)
    b = [T(24, 26, "9:41", 14, 500, c, "Roboto", id="Time"),
         CIRC(W / 2, 20, 6, "#000000", "Camera Cutout")]
    b.append(ICON("wifi", W - 78, 12, 16, c, 2.4, "Wi-Fi"))
    for i in range(4):
        b.append(R(W - 58 + i * 4, 26 - (i + 1) * 3, 3, (i + 1) * 3, c, 0.5, "Signal"))
    b += [R(W - 34, 13, 8, 14, c, 2, "Battery")]
    return FRAME("Status Bar / Android", 0, 0, W, P["top"], b)

def home_indicator(P, dark=False):
    c = C["onInk"] if dark else C["ink"]
    if P is IOS:
        return R((P["w"] - 134) / 2, P["h"] - 13, 134, 5, c, 2.5, "Home Indicator")
    return R((P["w"] - 108) / 2, P["h"] - 14, 108, 4, c, 2, "Gesture Handle", op=0.85)

# --------------------------------------------------------------- components
def button(P, x, y, w, label, kind="primary", icon=None, h=56, id=None, state="default"):
    r = P["btn_r"] if h >= 48 else h / 2
    fam = SANS
    size = 17 if P is IOS else 16
    if state == "disabled":
        bg, fg, st = C["disabled"], C["onDisabled"], None
    elif kind == "primary":
        bg, fg, st = C["ink"], C["onInk"], None
    elif kind == "accent":
        bg, fg, st = C["citrine"], C["ink"], None
    elif kind == "outline":
        bg, fg, st = "none", C["ink"], C["hair2"]
    elif kind == "tonal":
        bg, fg, st = C["surface2"], C["ink"], None
    else:  # text / ghost
        bg, fg, st = "none", C["ink"], None
    b = [R(0, 0, w, h, bg if bg != "none" else C["paper"], r, "Container",
           st, 1, 0 if bg == "none" and not st else None)]
    if icon:
        b.append(ICON(icon, w / 2 - 12 - len(label) * 4.4, (h - 22) / 2, 22, fg, 2))
        b.append(T(w / 2 + 14, h / 2 + 6, label, size, 600, fg, fam, "middle", "Label"))
    else:
        b.append(T(w / 2, h / 2 + 6, label, size, 600, fg, fam, "middle", "Label"))
    name = id or f"Button / {kind.title()}{' / Disabled' if state == 'disabled' else ''}"
    return FRAME(name, x, y, w, h, b)

def avatar(x, y, d, initials, bg=None, fg=None, id="Avatar"):
    bg = bg or C["surface2"]; fg = fg or C["ink"]
    return FRAME(id, x, y, d, d, [CIRC(d / 2, d / 2, d / 2, bg, "Fill"),
                                   T(d / 2, d / 2 + d * 0.13, initials, round(d * 0.36), 600, fg, SANS, "middle", "Initials")])

def card_visual(x, y, w, h, frozen=False, id="Virtual Card", masked=True, big=True):
    g = "cardFrozen" if frozen else "cardGrad"
    b = [R(0, 0, w, h, f"url(#{g})", 22 if big else 16, "Card Surface")]
    if not frozen:
        b += [CIRC(w * 0.92, h * 0.05, h * 0.9, C["citrine"], "Light Sweep", op=0.14),
              CIRC(w * 0.98, -h * 0.1, h * 0.55, C["citrine"], "Light Core", op=0.12)]
    else:
        b += [R(0, 0, w, h, "#FFFFFF", 22 if big else 16, "Frost Overlay", op=0.10)]
    b.append(R(0.5, 0.5, w - 1, h - 1, "none", 22 if big else 16, "Edge Highlight", "#FFFFFF", 1, None).replace('fill="none"', 'fill="none" stroke-opacity="0.14"'))
    s = 1 if big else 0.72
    fg = C["onInk"]
    b += [T(22 * s, 38 * s, "Fintech", 20 * s, 400, fg, SERIF, id="Wordmark"),
          R(22 * s, h * 0.42, 40 * s, 30 * s, "#C9C2AE" if not frozen else "#9AA0AA", 6 * s, "EMV Chip", op=0.9),
          T(22 * s, h - 28 * s, "•••• 4821" if masked else "4532 8810 2934 4821", 17 * s, 500, fg, SANS, id="Card Number", ls=1),
          T(w - 22 * s, h - 28 * s, "VISA", 18 * s, 800, fg, SANS, "end", "Network", ls=1)]
    if frozen:
        b += [FRAME("Chip / Frozen", w - 112 * s, 18 * s, 92 * s, 28 * s,
                    [R(0, 0, 92 * s, 28 * s, "#FFFFFF", 14 * s, "Fill", op=0.92),
                     ICON("snowflake", 10 * s, 6 * s, 16 * s, C["ink"], 2),
                     T(32 * s, 19 * s, "Frozen", 13 * s, 600, C["ink"], SANS, id="Label")])]
    return FRAME(id, x, y, w, h, b)

def list_row(P, x, y, w, icon, title, meta, amount, incoming=False, divider=True, id="Row / Transaction"):
    h = 68 if P is IOS else 72
    tile = 40
    b = [R(0, 0, w, h, C["surface"], 0, "Hit Area")]
    if icon.startswith("@"):
        b.append(avatar(16, (h - tile) / 2, tile, icon[1:], C["citrine"], C["ink"]))
    else:
        b.append(FRAME("Leading Tile", 16, (h - tile) / 2, tile, tile,
                       [R(0, 0, tile, tile, C["surface2"], 12, "Fill"), ICON(icon, 9, 9, 22, C["ink"], 1.8)]))
    b += [T(68, h / 2 - 3, title, 16, 500, C["text"], SANS, id="Title"),
          T(68, h / 2 + 17, meta, 13, 400, C["text2"], SANS, id="Meta")]
    col = C["pos"] if incoming else C["text"]
    b.append(T(w - 16, h / 2 + 6, amount, 16, 600, col, SANS, "end", "Amount"))
    if divider:
        b.append(R(68, h - 1, w - 68, 1, C["hair"], 0, "Divider"))
    return FRAME(id, x, y, w, h, b), h

def chip(x, y, label, icon=None, bg=None, fg=None, id="Chip", stroke=None, h=32):
    bg = bg or C["surface2"]; fg = fg or C["ink"]
    w = 24 + len(label) * 7.4 + (22 if icon else 0)
    b = [R(0, 0, w, h, bg, h / 2 if h < 34 else 8, "Fill", stroke)]
    tx = 12
    if icon:
        b.append(ICON(icon, 10, (h - 16) / 2, 16, fg, 2)); tx = 32
    b.append(T(tx, h / 2 + 5, label, 13, 600, fg, SANS, id="Label"))
    return FRAME(id, x, y, w, h, b), w

def switch(P, x, y, on=True, id="Switch"):
    if P is IOS:
        b = [R(0, 0, 51, 31, C["pos"] if on else "#E3E1DB", 15.5, "Track"),
             CIRC(35.5 if on else 15.5, 15.5, 13.5, "#FFFFFF", "Thumb", "#00000014", 0.5)]
        return FRAME(id + " / iOS", x, y, 51, 31, b)
    b = [R(0, 0, 52, 32, C["ink"] if on else C["surface2"], 16, "Track",
           None if on else C["text3"], 2)]
    if on:
        b += [CIRC(36, 16, 12, C["citrine"], "Handle"), ICON("check", 29, 9, 14, C["ink"], 3)]
    else:
        b += [CIRC(16, 16, 8, C["text3"], "Handle")]
    return FRAME(id + " / M3", x, y, 52, 32, b)

def banner(x, y, w, kind, title, body, icon, id=None):
    bg, fg = {"warn": (C["warnBg"], C["warn"]), "err": (C["errBg"], C["err"]),
              "info": (C["surface2"], C["ink"])}[kind]
    lines = wrap(body, int((w - 64) / 7.3))
    h = 44 + 19 * len(lines)
    b = [R(0, 0, w, h, bg, 16, "Fill"), ICON(icon, 16, 16, 20, fg, 2),
         T(48, 31, title, 15, 600, C["ink"], SANS, id="Title")]
    for i, l in enumerate(lines):
        b.append(T(48, 52 + i * 19, l, 14, 400, C["text2"] if kind == "info" else C["ink"], SANS, id="Body"))
    return FRAME(id or f"Banner / {kind.title()}", x, y, w, h, b), h

def wrap(s, n):
    out, cur = [], ""
    for word in s.split():
        if len(cur) + len(word) + 1 > n and cur:
            out.append(cur); cur = word
        else:
            cur = (cur + " " + word).strip()
    if cur: out.append(cur)
    return out

def para(x, y, s, n, size=16, lh=24, fill=None, w=400, fam=SANS, anchor="start", id="Body"):
    return "".join(T(x, y + i * lh, l, size, w, fill or C["text2"], fam, anchor, id)
                   for i, l in enumerate(wrap(s, n))), len(wrap(s, n)) * lh

def tab_bar(P, active):
    W, H = P["w"], P["h"]
    items = [("house", "Home"), ("credit-card", "Cards"), ("list", "Activity")]
    if P is IOS:
        h = 83; y = H - h
        b = [R(0, 0, W, h, C["paper"], 0, "Material", op=0.96), R(0, 0, W, 0.5, C["hair2"], 0, "Top Hairline")]
        cw = W / 3
        for i, (ic, lab) in enumerate(items):
            col = C["ink"] if lab == active else C["text3"]
            b.append(FRAME(f"Tab / {lab}", i * cw, 0, cw, 49,
                           [R(0, 0, cw, 49, C["paper"], 0, "Hit Area", op=0),
                            ICON(ic, cw / 2 - 12, 6, 24, col, 2.2 if lab == active else 1.8),
                            T(cw / 2, 43, lab, 10, 600 if lab == active else 500, col, SANS, "middle", "Label")]))
        return FRAME("Tab Bar / iOS", 0, y, W, h, b)
    h = 80 + P["bottom"]; y = H - h
    b = [R(0, 0, W, h, C["surface2"], 0, "Container")]
    cw = W / 3
    for i, (ic, lab) in enumerate(items):
        on = lab == active
        kids = [R(0, 0, cw, 80, C["surface2"], 0, "Hit Area", op=0)]
        if on:
            kids.append(R(cw / 2 - 32, 12, 64, 32, C["citrine"], 16, "Active Indicator"))
        kids += [ICON(ic, cw / 2 - 12, 16, 24, C["ink"], 2.2 if on else 1.8),
                 T(cw / 2, 64, lab, 12, 700 if on else 500, C["ink"] if on else C["text2"], SANS, "middle", "Label")]
        b.append(FRAME(f"Destination / {lab}", i * cw, 0, cw, 80, kids))
    return FRAME("Navigation Bar / M3", 0, y, W, h, b)

def ios_nav(P, title=None, back="Back", right=None, large=None):
    W = P["w"]; y = P["top"]
    b = [R(0, 0, W, 44, C["paper"], 0, "Bar", op=0)]
    if back:
        b += [FRAME("Back Button", 8, 0, 90, 44, [R(0, 0, 90, 44, C["paper"], 0, "Hit Area", op=0),
              ICON("chevron-left", 0, 10, 24, C["ink"], 2.4), T(24, 28, back, 17, 400, C["ink"], SANS, id="Label")])]
    if title:
        b.append(T(W / 2, 28, title, 17, 600, C["ink"], SANS, "middle", "Title"))
    if right:
        b.append(T(W - 16, 28, right, 17, 600, C["ink"], SANS, "end", "Trailing Action"))
    out = FRAME("Navigation Bar / iOS", 0, y, W, 44, b)
    if large:
        out += T(P["m"], y + 44 + 40, large, 36, 400, C["ink"], SERIF, id="Large Title")
    return out

def m3_topbar(P, title, medium=False, actions=(), back=True):
    W = P["w"]; y = P["top"]; h = 112 if medium else 64
    b = [R(0, 0, W, h, C["paper"], 0, "Container")]
    if back:
        b.append(FRAME("Navigation Icon", 4, 8, 48, 48, [R(0, 0, 48, 48, C["paper"], 24, "State Layer", op=0),
                                                         ICON("arrow-left", 12, 12, 24, C["ink"], 2)]))
    for i, a in enumerate(actions):
        b.append(FRAME(f"Action / {a}", W - 52 - i * 48, 8, 48, 48,
                       [R(0, 0, 48, 48, C["paper"], 24, "State Layer", op=0), ICON(a, 12, 12, 24, C["ink"], 2)]))
    if medium:
        b.append(T(16, 96, title, 30, 400, C["ink"], SERIF, id="Headline"))
    else:
        b.append(T(56 if back else 16, 40, title, 22, 400 if not back else 500, C["ink"], SANS, id="Title"))
    return FRAME("Top App Bar / M3" + (" Medium" if medium else ""), 0, y, W, h, b)

def keyboard_numeric(P):
    W, H = P["w"], P["h"]
    if P is IOS:
        h = 291; y = H - h
        b = [R(0, 0, W, h, "#D1D4DA", 0, "Keyboard BG")]
        keys = [("1", ""), ("2", "ABC"), ("3", "DEF"), ("4", "GHI"), ("5", "JKL"), ("6", "MNO"),
                ("7", "PQRS"), ("8", "TUV"), ("9", "WXYZ"), ("", ""), ("0", ""), ("del", "")]
        kw = (W - 6 * 2 - 6 * 2) / 3
        for i, (k, s) in enumerate(keys):
            cx = 6 + (i % 3) * (kw + 6); cy = 6 + (i // 3) * 53
            if k == "": continue
            if k == "del":
                b.append(ICON("delete", cx + kw / 2 - 13, cy + 11, 26, C["ink"], 1.8)); continue
            b.append(FRAME(f"Key {k}", cx, cy, kw, 47,
                           [R(0, 0, kw, 47, "#FFFFFF", 6, "Keycap"),
                            T(kw / 2, 30 if s else 32, k, 25, 400, "#000000", SANS, "middle", "Digit"),
                            T(kw / 2, 41, s, 9, 600, "#000000", SANS, "middle", "Letters", ls=1.5) if s else ""]))
        return FRAME("Keyboard / iOS Number Pad", 0, y, W, h, b)
    h = 268 + P["bottom"]; y = H - h
    b = [R(0, 0, W, h, "#E8EAED", 0, "Keyboard BG")]
    keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ",", "0", "del"]
    kw = (W - 8 * 4) / 3
    for i, k in enumerate(keys):
        cx = 8 + (i % 3) * (kw + 8); cy = 10 + (i // 3) * 62
        if k == "del":
            b.append(FRAME("Key Delete", cx, cy, kw, 54, [R(0, 0, kw, 54, "#D3D6DC", 27, "Keycap"),
                                                          ICON("delete", kw / 2 - 12, 15, 24, C["ink"], 1.8)]))
        else:
            b.append(FRAME(f"Key {k}", cx, cy, kw, 54, [R(0, 0, kw, 54, "#FFFFFF", 27, "Keycap"),
                                                        T(kw / 2, 35, k, 24, 400, "#1F1F1F", "Roboto", "middle", "Digit")]))
    return FRAME("Keyboard / Gboard Numeric", 0, y, W, h, b)

def scrim(P, op=0.42):
    return R(0, 0, P["w"], P["h"], C["ink"], 0, "Scrim", op=op)

def sheet(P, y, body, title=None, leading=None, trailing=None, id="Sheet"):
    W, H = P["w"], P["h"]
    h = H - y
    r = 12 if P is IOS else 28
    b = [R(0, 0, W, h + r, C["paper"], r, "Sheet Surface")]
    if P is IOS:
        b.append(R((W - 36) / 2, 6, 36, 5, C["hair2"], 2.5, "Grabber"))
        if leading: b.append(T(16, 40, leading, 17, 400, C["ink"], SANS, id="Leading Action"))
        if title: b.append(T(W / 2, 40, title, 17, 600, C["ink"], SANS, "middle", "Sheet Title"))
        if trailing: b.append(T(W - 16, 40, trailing, 17, 600, C["ink"], SANS, "end", "Trailing Action"))
    else:
        b.append(R((W - 32) / 2, 22, 32, 4, C["text3"], 2, "Drag Handle", op=0.6))
        if title: b.append(T(24, 70, title, 24, 400, C["ink"], SERIF, id="Sheet Title"))
    b += body
    return FRAME(id + (" / iOS Large Detent" if P is IOS else " / M3 Modal Bottom Sheet"), 0, y, W, h, b)

def amount_keypad(P, x, y, w):
    keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "del"]
    kw = w / 3; kh = 60
    b = []
    for i, k in enumerate(keys):
        cx = (i % 3) * kw; cy = (i // 3) * kh
        kids = [R(0, 0, kw, kh, C["paper"], 0, "Hit Area", op=0)]
        if k == "del":
            kids.append(ICON("delete", kw / 2 - 13, kh / 2 - 13, 26, C["ink"], 1.8))
        else:
            kids.append(T(kw / 2, kh / 2 + 10, k, 28, 500, C["ink"], SANS, "middle", "Digit"))
        b.append(FRAME(f"Key {k}", cx, cy, kw, kh, kids))
    return FRAME("Amount Keypad", x, y, w, kh * 4, b), kh * 4

def defs():
    return ('<defs>'
            '<linearGradient id="cardGrad" x1="0" y1="0" x2="1" y2="1">'
            '<stop offset="0" stop-color="#2B2F37"/><stop offset="0.55" stop-color="#16181D"/>'
            '<stop offset="1" stop-color="#0B0C0F"/></linearGradient>'
            '<linearGradient id="cardFrozen" x1="0" y1="0" x2="1" y2="1">'
            '<stop offset="0" stop-color="#8E959F"/><stop offset="1" stop-color="#5D636C"/></linearGradient>'
            '<linearGradient id="skelGrad" x1="0" y1="0" x2="1" y2="0">'
            '<stop offset="0" stop-color="#E6E2D8"/><stop offset="0.5" stop-color="#F0EDE6"/>'
            '<stop offset="1" stop-color="#E6E2D8"/></linearGradient>'
            '<linearGradient id="inkFade" x1="0" y1="0" x2="0" y2="1">'
            '<stop offset="0" stop-color="#0F1115"/><stop offset="1" stop-color="#1B1E24"/></linearGradient>'
            '</defs>')

# =================================================================== SCREENS
def scr_splash(P):
    W, H = P["w"], P["h"]
    b = [R(0, 0, W, H, "url(#inkFade)", 0, "Background"),
         CIRC(W * 0.9, H * 0.12, 260, C["citrine"], "Ambient Light", op=0.07),
         FRAME("Logo Lockup", W / 2 - 80, H / 2 - 64, 160, 128,
               [R(48, 0, 64, 64, C["citrine"], 18, "Logomark"),
                T(80, 46, "f", 44, 400, C["ink"], SERIF, "middle", "Logomark Glyph"),
                T(80, 112, "Fintech", 34, 400, C["onInk"], SERIF, "middle", "Wordmark")]),
         T(W / 2, H - P["bottom"] - 40, "Secured with bank-grade encryption", 13, 500, C["onInk2"], SANS, "middle", "Trust Line"),
         status_bar(P, True), home_indicator(P, True)]
    return b

def hero_illustration(x, y, w):
    """Vector hero: the card as the single dimensional object + multi-currency stack."""
    h = w * 0.86
    b = [CIRC(w * 0.5, h * 0.52, w * 0.46, C["surface2"], "Halo"),
         CIRC(w * 0.5, h * 0.52, w * 0.33, C["citrine"], "Halo Core", op=0.35)]
    cw, ch = w * 0.62, w * 0.39
    b.append(f'<g id="{uid("Back Card")}" transform="rotate(-12 {w*0.5} {h*0.5})">'
             + R(w * 0.24, h * 0.24, cw, ch, "#C9C2AE", 18, "Back Card Surface") + '</g>')
    b.append(f'<g id="{uid("Mid Card")}" transform="rotate(-5 {w*0.5} {h*0.5})">'
             + R(w * 0.21, h * 0.33, cw, ch, C["surface"], 18, "Mid Card Surface", C["hair2"]) + '</g>')
    b.append(card_visual(w * 0.17, h * 0.43, cw, ch, id="Front Card", big=False))
    for i, (cur, val, cx, cy) in enumerate([("EUR", "€4,980", 0.02, 0.12), ("GBP", "£1,247", 0.66, 0.06), ("USD", "$18,420", 0.70, 0.83)]):
        bw = 104
        b.append(FRAME(f"Currency Pill / {cur}", w * cx, h * cy, bw, 40,
                       [R(0, 0, bw, 40, C["surface"], 20, "Fill", C["hair"]),
                        CIRC(20, 20, 12, C["ink"], "Badge"), T(20, 24, cur[0], 11, 700, C["citrine"], SANS, "middle", "Badge Glyph"),
                        T(40, 25, val, 14, 600, C["ink"], SANS, id="Value")]))
    return FRAME("Hero Illustration / Card Stack (Vector)", x, y, w, h, b), h

def scr_onboarding(P):
    W, H, m = P["w"], P["h"], P["m"]
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    ill, ih = hero_illustration(m, P["top"] + 24, W - 2 * m)
    b.append(ill)
    y = P["top"] + 24 + ih + 28
    b.append(T(m, y + 34, "Money, held", 42, 400, C["ink"], SERIF, id="Headline L1"))
    b.append(T(m, y + 80, "with precision.", 42, 400, C["ink"], SERIF, id="Headline L2"))
    p, ph = para(m, y + 116, "Hold USD, EUR and GBP, spend with a virtual card, and send money in seconds — every step secured by " + ("Face ID." if P is IOS else "biometrics."), 46 if P is IOS else 48)
    b.append(p)
    by = H - P["bottom"] - 16 - 56 - 8 - 56
    b.append(button(P, m, by, W - 2 * m, "Create account", "primary", id="Button / Primary / Create Account"))
    b.append(button(P, m, by + 64, W - 2 * m, "I already have an account", "text" if P is IOS else "outline",
                    id="Button / Secondary / Sign In"))
    b.append(home_indicator(P))
    return b

def phone_header(P, title, sub):
    m = P["m"]
    if P is IOS:
        y0 = P["top"] + 44
        return [ios_nav(P, back="Back"), T(m, y0 + 44, title, 34, 400, C["ink"], SERIF, id="Title"),
                para(m, y0 + 76, sub, 44)[0]], y0 + 76 + 24 * len(wrap(sub, 44))
    y0 = P["top"] + 64
    return [m3_topbar(P, ""), T(m, y0 + 40, title, 32, 400, C["ink"], SERIF, id="Headline"),
            para(m, y0 + 72, sub, 46)[0]], y0 + 72 + 24 * len(wrap(sub, 46))

def text_field(P, x, y, w, label, value, state="filled", lead=None, helper=None, id="Text Field"):
    h = 56
    col = {"focus": C["ink"], "error": C["err"], "filled": C["hair2"], "idle": C["hair2"], "disabled": C["hair"]}[state]
    sw = 2 if state in ("focus", "error") else 1
    b = []
    if P is IOS:
        b += [T(0, 14, label, 13, 600, C["text2"], SANS, id="Label"),
              R(0, 24, w, h, C["surface"], 14, "Field", col, sw)]
        ty = 24 + h / 2 + 6
    else:  # M3 outlined text field: floating label on outline
        b += [R(0, 8, w, h, C["paper"], 4 if False else 12, "Outline", col, sw),
              R(12, 0, len(label) * 7 + 10, 16, C["paper"], 0, "Label Cutout"),
              T(17, 13, label, 12, 500, col if state != "filled" else C["text2"], SANS, id="Floating Label")]
        ty = 8 + h / 2 + 6
    tx = 16
    if lead:
        b.append(FRAME("Country Selector", 8, ty - 26 + 2, 76, 36,
                       [R(0, 0, 76, 36, C["surface2"], 10, "Fill"), T(12, 23, lead, 15, 600, C["ink"], SANS, id="Code"),
                        ICON("chevron-down", 50, 8, 18, C["ink"], 2)]))
        tx = 96
    b.append(T(tx, ty, value, 17, 500 if value else 400, C["ink"] if value else C["text3"], SANS, id="Value"))
    if state == "focus":
        b.append(R(tx + len(value) * 9.6 + 2, ty - 18, 2, 22, C["ink"], 1, "Caret"))
    total = (24 if P is IOS else 8) + h
    if helper:
        hc = C["err"] if state == "error" else C["text2"]
        if state == "error":
            b.append(ICON("circle-alert", 0, total + 8, 16, C["err"], 2))
        b.append(T(22 if state == "error" else (0 if P is IOS else 16), total + 21, helper, 13, 500 if state == "error" else 400, hc, SANS, id="Supporting Text"))
        total += 30
    return FRAME(id, x, y, w, total, b), total

def scr_phone(P):
    W, H, m = P["w"], P["h"], P["m"]
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    hd, y = phone_header(P, "What's your number?", "We'll text you a 6-digit code to confirm it's you.")
    b += hd
    f, fh = text_field(P, m, y + 16, W - 2 * m, "Mobile number", "(415) 555-0132", "focus", "+1",
                       "Standard message rates may apply.", "Text Field / Phone / Focused")
    b.append(f)
    kb_top = H - (291 if P is IOS else 292)
    b.append(button(P, m, kb_top - 16 - 56, W - 2 * m, "Send code", "primary", id="Button / Primary / Send Code"))
    b.append(keyboard_numeric(P))
    b.append(home_indicator(P))
    return b

def otp_boxes(P, x, y, w, digits, focus_idx=None, error=False):
    n = 6; gap = 8; bw = (w - gap * (n - 1)) / n; bh = 60
    b = []
    for i in range(n):
        d = digits[i] if i < len(digits) else ""
        col = C["err"] if error else (C["ink"] if i == focus_idx else C["hair2"])
        sw = 2 if (error or i == focus_idx) else 1
        bg = C["errBg"] if error else C["surface"]
        kids = [R(0, 0, bw, bh, bg, 14 if P is IOS else 12, "Box", col, sw)]
        if d: kids.append(T(bw / 2, bh / 2 + 10, d, 28, 600, C["err"] if error else C["ink"], SANS, "middle", "Digit"))
        if i == focus_idx and not d: kids.append(R(bw / 2 - 1, 18, 2, 24, C["ink"], 1, "Caret"))
        b.append(FRAME(f"OTP Cell {i+1}", i * (bw + gap), 0, bw, bh, kids))
    return FRAME("OTP Input" + (" / Error" if error else ""), x, y, w, bh, b)

def scr_otp(P, error=False):
    W, H, m = P["w"], P["h"], P["m"]
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    hd, y = phone_header(P, "Enter the code", "Sent to +1 (415) 555-0132.")
    b += hd
    y += 4
    b.append(FRAME("Edit Number Link", m - 4, y - 18, 140, 44, [R(0, 0, 140, 44, C["paper"], 0, "Hit Area", op=0),
             T(4, 26, "Change number", 15, 600, C["ink"], SANS, id="Label"), R(4, 30, 112, 1.5, C["ink"], 0, "Underline")]))
    y += 40
    if error:
        b.append(otp_boxes(P, m, y, W - 2 * m, "482931", None, True))
        bn, bh = banner(m, y + 76, W - 2 * m, "err", "That code doesn't match",
                        "Check the latest message and try again. 2 attempts left before a 15-minute pause.", "circle-alert",
                        "Banner / Error / OTP")
        b.append(bn)
        b.append(button(P, m, y + 76 + bh + 16, W - 2 * m, "Resend code", "outline", icon=None, id="Button / Outline / Resend Code"))
    else:
        b.append(otp_boxes(P, m, y, W - 2 * m, "4829", 4))
        b.append(FRAME("Resend Timer", m, y + 76, W - 2 * m, 24,
                       [ICON("clock", 0, 2, 18, C["text2"], 2), T(26, 17, "Resend code in 0:45", 14, 500, C["text2"], SANS, id="Label")]))
    kb_top = H - (291 if P is IOS else 292)
    if not error:
        if P is IOS:
            b.append(FRAME("Keyboard Suggestion / From Messages", 0, kb_top - 44, W, 44,
                           [R(0, 0, W, 44, "#D1D4DA", 0, "Bar"), T(W / 2, 18, "From Messages", 11, 500, "#3C3C43", SANS, "middle", "Caption"),
                            T(W / 2, 36, "482 913", 17, 600, "#000000", SANS, "middle", "Code")]))
        else:
            c, cw = chip(m, kb_top - 48, "Autofill code 482913 from SMS", "message-square", C["surface2"], C["ink"], "Chip / SMS Autofill")
            b.append(c)
    b.append(keyboard_numeric(P))
    b.append(home_indicator(P))
    return b

def scr_biometric(P):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    b.append(ios_nav(P, back="Back") if ios else m3_topbar(P, ""))
    cy = P["top"] + 200
    b += [CIRC(W / 2, cy, 92, C["surface2"], "Glyph Halo"), CIRC(W / 2, cy, 64, C["ink"], "Glyph Plate"),
          ICON("scan-face" if ios else "fingerprint", W / 2 - 30, cy - 30, 60, C["citrine"], 1.6, "Biometric Glyph")]
    y = cy + 140
    title = "Unlock with Face ID" if ios else "Use biometric unlock"
    b.append(T(W / 2, y, title, 34, 400, C["ink"], SERIF, "middle", "Title"))
    p, ph = para(W / 2, y + 36, "Sign in and approve payments with a glance instead of a passcode. Your biometric data never leaves this " + ("iPhone." if ios else "phone."), 42, anchor="middle")
    b.append(p)
    ly = y + 36 + ph + 16
    for i, (ic, txt) in enumerate([("shield-check", "Required to approve every transfer"), ("lock", "Passcode stays available as a fallback")]):
        b.append(FRAME(f"Benefit {i+1}", m + 12, ly + i * 44, W - 2 * m - 24, 36,
                       [R(0, 0, 36, 36, C["surface2"], 10, "Tile"), ICON(ic, 8, 8, 20, C["ink"], 2),
                        T(50, 23, txt, 15, 500, C["ink"], SANS, id="Label")]))
    by = H - P["bottom"] - 16 - 56 - 8 - 56
    b.append(button(P, m, by, W - 2 * m, "Enable Face ID" if ios else "Turn on biometric unlock", "primary",
                    id="Button / Primary / Enable Biometrics"))
    b.append(button(P, m, by + 64, W - 2 * m, "Set up later in Settings" if ios else "Not now", "text",
                    id="Button / Text / Later"))
    b.append(home_indicator(P))
    return b

TXNS = [
    ("coffee", "Blue Bottle Coffee", "Food & drink · 8:42 AM", "−$6.40", False),
    ("@NW", "Northwind Ltd", "Salary · Yesterday", "+$4,200.00", True),
    ("car", "Uber", "Transport · Yesterday", "−$18.20", False),
    ("music", "Spotify", "Subscriptions · Oct 29", "−$11.99", False),
    ("shopping-basket", "Whole Foods Market", "Groceries · Oct 28", "−$84.17", False),
]

def home_header(P, y):
    W, m = P["w"], P["m"]
    return [T(m, y + 20, "Good morning,", 15, 500, C["text2"], SANS, id="Greeting"),
            T(m, y + 52, "Alex", 32, 400, C["ink"], SERIF, id="Name"),
            FRAME("Notifications Button", W - m - 44 - 52, y + 8, 44, 44,
                  [R(0, 0, 44, 44, C["surface"], 22, "Fill", C["hair"]), ICON("bell", 11, 11, 22, C["ink"], 1.8)]),
            FRAME("Profile Button", W - m - 44, y + 8, 44, 44, [avatar(0, 0, 44, "AM", C["ink"], C["citrine"])])]

def balance_card(P, x, y, w, state="default"):
    h = 196
    b = [R(0, 0, w, h, "url(#cardGrad)", 24, "Surface"),
         CIRC(w * 0.95, 0, 170, C["citrine"], "Light Sweep", op=0.12),
         CIRC(w * 1.02, -30, 90, C["citrine"], "Light Core", op=0.12)]
    if state == "loading":
        b += [R(24, 28, 96, 12, C["ink3"], 6, "Skeleton / Label"), R(24, 58, 210, 36, C["ink3"], 10, "Skeleton / Balance"),
              R(24, 136, 104, 32, C["ink3"], 16, "Skeleton / Pill"), R(136, 136, 104, 32, C["ink3"], 16, "Skeleton / Pill")]
        return FRAME("Balance Card / Loading", x, y, w, h, b)
    b += [T(24, 38, "Total balance", 14, 500, C["onInk2"], SANS, id="Label"),
          FRAME("Hide Balance Button", w - 56, 14, 44, 44, [R(0, 0, 44, 44, "#FFFFFF", 22, "Fill", op=0.08),
                                                         ICON("eye", 11, 11, 22, C["onInk"], 1.8)]),
          T(24, 92, "$24,850.40", 44, 600, C["onInk"], SANS, id="Balance", ls=-1.2)]
    px = 24
    for cur, val in [("USD", "18,420.00"), ("EUR", "4,980.10"), ("GBP", "1,247.30")]:
        pw = 24 + len(cur + " " + val) * 7.2
        b.append(FRAME(f"Currency Pill / {cur}", px, 128, pw, 32,
                       [R(0, 0, pw, 32, "#FFFFFF", 16, "Fill", op=0.1), T(12, 21, cur, 13, 700, C["citrine"], SANS, id="Code"),
                        T(46, 21, val, 13, 500, C["onInk"], SANS, id="Value")]))
        px += pw + 8
    stamp = "Last updated 9:36 AM · 5 min ago" if state == "offline" else "Updated just now"
    b.append(T(24, 184, stamp, 12, 500, C["onInk2"], SANS, id="Freshness"))
    return FRAME("Balance Card" + (" / Offline" if state == "offline" else ""), x, y, w, h, b)

def quick_actions(P, x, y, w, disabled=False):
    ios = P is IOS
    acts = [("arrow-up-right", "Send"), ("plus", "Top up"), ("credit-card", "Card")] if ios else \
           [("plus", "Top up"), ("credit-card", "Card"), ("receipt", "Statements")]
    gap = 8; bw = (w - 2 * gap) / 3; h = 56
    b = []
    for i, (ic, lab) in enumerate(acts):
        primary = (lab == "Send")
        dis = disabled and lab in ("Send", "Top up")
        if dis: bg, fg, st = C["disabled"], C["onDisabled"], None
        elif primary: bg, fg, st = C["ink"], C["onInk"], None
        else: bg, fg, st = (C["surface"], C["ink"], C["hair"]) if ios else (C["surface2"], C["ink"], None)
        r = 16 if ios else 28
        b.append(FRAME(f"Quick Action / {lab}" + (" / Disabled" if dis else ""), i * (bw + gap), 0, bw, h,
                       [R(0, 0, bw, h, bg, r, "Container", st), ICON("lock" if dis else ic, 16, 17, 22, C["citrine"] if primary and not dis else fg, 2),
                        T(46, 34, lab, 15, 600, fg, SANS, id="Label")]))
    return FRAME("Quick Actions", x, y, w, h, b)

def section_title(P, x, y, w, title, action=None):
    b = [T(0, 22, title, 20, 600, C["ink"], SANS, id="Title")]
    if action:
        b.append(FRAME("See All Link", w - 70, 0, 70, 44, [R(0, 0, 70, 44, C["paper"], 0, "Hit Area", op=0),
                 T(70, 22, action, 15, 600, C["ink"], SANS, "end", "Label")]))
    return FRAME("Section Header / " + title, x, y, w, 32, b)

def txn_list(P, x, y, w, rows, maxh):
    b = []; cy = 0
    for i, (ic, t, meta, amt, inc) in enumerate(rows):
        r, h = list_row(P, 0, cy, w, ic, t, meta, amt, inc, i < len(rows) - 1, f"Row / {t}")
        if cy + h > maxh: break
        b.append(r); cy += h
    rr = 20 if P is IOS else 24
    return FRAME("Transaction List", x, y, w, cy, [R(0, 0, w, cy, C["surface"], rr, "Container", C["hair"])] + b)

def scr_home(P, state="default"):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    y = P["top"] + 4
    b += home_header(P, y)
    y += 72
    if state == "offline":
        bn, bh = banner(m, y, W - 2 * m, "warn", "You're offline",
                        "Showing your last synced balance. Sending and top-ups are paused until you reconnect.", "wifi-off",
                        "Banner / Offline")
        b.append(bn); y += bh + 12
    b.append(balance_card(P, m, y, W - 2 * m, state))
    y += 196 + 16
    if state == "loading":
        b += [R(m + i * ((W - 2 * m - 16) / 3 + 8), y, (W - 2 * m - 16) / 3, 56, "url(#skelGrad)", 16 if ios else 28, "Skeleton / Action") for i in range(3)]
        y += 56 + 28
        b.append(R(m, y, 150, 18, C["skel"], 9, "Skeleton / Section Title"))
        y += 36
        rows = []
        for i in range(5):
            ry = y + i * 68
            rows += [CIRC(m + 36, ry + 34, 20, C["skel"], "Skeleton / Avatar"), R(m + 68, ry + 20, 150, 12, C["skel"], 6, "Skeleton / Title"),
                     R(m + 68, ry + 40, 96, 10, C["skel"], 5, "Skeleton / Meta"), R(W - m - 84, ry + 26, 68, 12, C["skel"], 6, "Skeleton / Amount")]
        b.append(FRAME("Transaction List / Skeleton", 0, 0, W, H, rows))
    else:
        b.append(quick_actions(P, m, y, W - 2 * m, disabled=(state == "offline")))
        y += 56 + 24
        b.append(section_title(P, m, y, W - 2 * m, "Recent activity", "See all"))
        y += 44
        bottom_limit = H - (83 if ios else 104) - (8 if ios else 88)
        b.append(txn_list(P, m, y, W - 2 * m, TXNS, bottom_limit - y))
    if not ios and state != "loading":
        dis = state == "offline"
        b.append(FRAME("Extended FAB / Send" + (" / Disabled" if dis else ""), W - 16 - 132, H - 104 - 16 - 56, 132, 56,
                       [R(0, 0, 132, 56, C["disabled"] if dis else C["citrine"], 16, "Container"),
                        ICON("lock" if dis else "arrow-up-right", 18, 16, 24, C["onDisabled"] if dis else C["ink"], 2),
                        T(52, 34, "Send", 16, 600, C["onDisabled"] if dis else C["ink"], SANS, id="Label")]))
    b.append(tab_bar(P, "Home"))
    b.append(home_indicator(P))
    return b

def card_row(P, x, y, w, icon, title, sub=None, trailing="chevron", on=True, divider=True, id=None, danger=False):
    h = 64 if sub is None else 72
    b = [R(0, 0, w, h, C["surface"], 0, "Hit Area"),
         FRAME("Leading Icon", 16, (h - 36) / 2, 36, 36, [R(0, 0, 36, 36, C["surface2"], 10, "Tile"), ICON(icon, 8, 8, 20, C["err"] if danger else C["ink"], 1.9)])]
    if sub:
        b += [T(66, h / 2 - 3, title, 16, 500, C["err"] if danger else C["ink"], SANS, id="Title"),
              T(66, h / 2 + 17, sub, 13, 400, C["text2"], SANS, id="Supporting Text")]
    else:
        b.append(T(66, h / 2 + 6, title, 16, 500, C["err"] if danger else C["ink"], SANS, id="Title"))
    if trailing == "chevron":
        b.append(ICON("chevron-right", w - 40, (h - 22) / 2, 22, C["text3"], 2))
    elif trailing == "switch":
        b.append(switch(P, w - 16 - (51 if P is IOS else 52), (h - 32) / 2, on))
    elif trailing:
        b.append(T(w - 16, h / 2 + 5, trailing, 15, 500, C["text2"], SANS, "end", "Trailing Text"))
    if divider:
        b.append(R(66, h - 1, w - 66, 1, C["hair"], 0, "Divider"))
    return FRAME(id or f"Row / {title}", x, y, w, h, b), h

def grouped(P, x, y, w, rows, id="List Group"):
    kids = []; cy = 0
    for i, r in enumerate(rows):
        f, h = card_row(P, 0, cy, w, *r[:2], **dict(r[2]) if len(r) > 2 else {}, divider=i < len(rows) - 1)
        kids.append(f); cy += h
    return FRAME(id, x, y, w, cy, [R(0, 0, w, cy, C["surface"], 20 if P is IOS else 24, "Container", C["hair"])] + kids), cy

def page_title(P, title, actions=()):
    if P is IOS:
        W, m = P["w"], P["m"]
        out = T(m, P["top"] + 46, title, 36, 400, C["ink"], SERIF, id="Large Title")
        for i, a in enumerate(actions):
            out += FRAME(f"Toolbar / {a}", W - m - 44 - i * 52, P["top"] + 10, 44, 44,
                         [R(0, 0, 44, 44, C["surface"], 22, "Fill", C["hair"]), ICON(a, 11, 11, 22, C["ink"], 1.8)])
        return out, P["top"] + 66
    return m3_topbar(P, title, medium=True, actions=actions, back=False), P["top"] + 112

def scr_wallet(P, state="default"):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    t, y = page_title(P, "Cards", ("plus",))
    b.append(t); y += 16
    cw = W - 2 * m; ch = cw * 0.63
    if state == "empty":
        b.append(FRAME("Empty Card Placeholder", m, y, cw, ch,
                       [R(1, 1, cw - 2, ch - 2, C["paper"], 22, "Dashed Outline", C["hair2"], 2, dash="8 8"),
                        CIRC(cw / 2, ch / 2 - 10, 34, C["surface2"], "Plus Plate"),
                        ICON("plus", cw / 2 - 16, ch / 2 - 26, 32, C["ink"], 2)]))
        y += ch + 32
        b.append(T(W / 2, y, "Create your first virtual card", 28, 400, C["ink"], SERIF, "middle", "Title"))
        p, ph = para(W / 2, y + 32, "Get a card number instantly for online payments. Freeze it any time with one tap.", 44, anchor="middle")
        b.append(p)
        b.append(button(P, m, y + 32 + ph + 16, cw, "Request virtual card", "primary", "plus", id="Button / Primary / Request Card"))
        b.append(tab_bar(P, "Cards")); b.append(home_indicator(P))
        return b
    frozen = state == "frozen"
    b.append(card_visual(m, y, cw, ch, frozen=frozen))
    y += ch + 12
    b.append(FRAME("Card Meta", m, y, cw, 24, [T(0, 17, "Virtual debit · USD", 14, 500, C["text2"], SANS, id="Type"),
                                               T(cw, 17, "Spent this month $1,284.30", 14, 500, C["text2"], SANS, "end", "Spend")]))
    y += 36
    if frozen:
        bn, bh = banner(m, y, cw, "info", "Card frozen",
                        "New payments and withdrawals are blocked. Subscriptions will be declined until you unfreeze.", "snowflake",
                        "Banner / Card Frozen")
        b.append(bn); y += bh + 12
    rows = [("eye", "Show card details", {"sub": "Number, expiry and CVV"}),
            ("copy", "Copy card number", {"trailing": None}),
            ("snowflake", "Freeze card", {"trailing": "switch", "on": frozen, "sub": "Unfreeze at any time" if frozen else "Instantly block new payments"})]
    g, gh = grouped(P, m, y, cw, rows, "Card Controls")
    b.append(g)
    if not ios:
        b.append(FRAME("Snackbar", 16, H - 104 - 16 - 48, W - 32, 48,
                       [R(0, 0, W - 32, 48, "#2E3036", 4, "Container"),
                        T(16, 29, "Card frozen" if frozen else "Card number copied", 14, 400, "#F1F1F1", "Roboto", id="Message"),
                        T(W - 48, 29, "Undo" if frozen else "OK", 14, 600, C["citrine"], "Roboto", "end", "Action")]))
    b.append(tab_bar(P, "Cards")); b.append(home_indicator(P))
    return b

def scr_activity(P):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    t, y = page_title(P, "Activity", ())
    b.append(t); y += 12
    b.append(FRAME("Search Field", m, y, W - 2 * m, 44 if ios else 56,
                   [R(0, 0, W - 2 * m, 44 if ios else 56, C["surface2"], 12 if ios else 28, "Fill"),
                    ICON("search", 14 if ios else 18, 11 if ios else 16, 22 if ios else 24, C["text2"], 2),
                    T(44 if ios else 56, 28 if ios else 34, "Search payments", 16, 400, C["text3"], SANS, id="Placeholder")]))
    y += (44 if ios else 56) + 12
    x = m
    for i, lab in enumerate(["All", "Money in", "Money out", "Card"]):
        c, cw = chip(x, y, lab, "check" if i == 0 else None, C["ink"] if i == 0 else C["paper"],
                     C["onInk"] if i == 0 else C["ink"], f"Filter Chip / {lab}", None if i == 0 else C["hair2"], 36 if ios else 32)
        b.append(c); x += cw + 8
    y += 52
    b.append(FRAME("Monthly Summary", m, y, W - 2 * m, 72,
                   [R(0, 0, W - 2 * m, 72, C["surface"], 20 if ios else 24, "Container", C["hair"]),
                    T(16, 28, "October so far", 13, 500, C["text2"], SANS, id="Label"),
                    T(16, 56, "−$1,284.30", 24, 600, C["ink"], SANS, id="Out", ls=-0.5),
                    T(W - 2 * m - 16, 28, "In", 13, 500, C["text2"], SANS, "end", "In Label"),
                    T(W - 2 * m - 16, 56, "+$4,320.00", 18, 600, C["pos"], SANS, "end", "In")]))
    y += 88
    groups = [("Today", TXNS[:1]), ("Yesterday", TXNS[1:3]), ("This week", TXNS[3:5] + [("@MC", "Maya Chen", "Transfer in · Oct 27", "+$120.00", True)])]
    limit = H - (83 if ios else 104) - 8
    for gname, rows in groups:
        if y + 30 > limit: break
        b.append(T(m + 4, y + 16, gname.upper(), 12, 600, C["text2"], SANS, id=f"Group Header / {gname}", ls=0.8))
        y += 26
        lst = txn_list(P, m, y, W - 2 * m, rows, limit - y)
        b.append(lst)
        y += sum(68 if ios else 72 for _ in rows) + 16
    b.append(tab_bar(P, "Activity")); b.append(home_indicator(P))
    return b

def scr_settings(P):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    if ios:
        b.append(ios_nav(P, back="Home")); y = P["top"] + 52
    else:
        b.append(m3_topbar(P, "Profile & security")); y = P["top"] + 72
    b += [avatar(m, y, 64, "AM", C["ink"], C["citrine"], "Profile Avatar"),
          T(m + 80, y + 28, "Alex Morgan", 24, 400, C["ink"], SERIF, id="Name"),
          T(m + 80, y + 52, "+1 ••• ••• 0132 · Verified", 14, 500, C["text2"], SANS, id="Phone")]
    y += 88
    b.append(T(m + 4, y + 14, "SECURITY", 12, 600, C["text2"], SANS, id="Section / Security", ls=0.8)); y += 24
    bio = "Face ID" if ios else "Biometric unlock"
    g, gh = grouped(P, m, y, W - 2 * m, [
        ("scan-face" if ios else "fingerprint", f"{bio} for sign-in", {"trailing": "switch", "on": True}),
        ("shield-check", f"{bio} for payments", {"trailing": "switch", "on": True}),
        ("eye-off", "Hide balance in app switcher", {"trailing": "switch", "on": True}),
        ("lock", "Change passcode", {}),
        ("smartphone", "Trusted devices", {"sub": ("iPhone 16 Pro" if ios else "Pixel 9") + " · This device"}),
    ], "Security Group")
    b.append(g); y += gh + 24
    b.append(T(m + 4, y + 14, "ACCOUNT", 12, 600, C["text2"], SANS, id="Section / Account", ls=0.8)); y += 24
    g, gh = grouped(P, m, y, W - 2 * m, [("bell", "Notifications", {}), ("info", "Help & support", {}),
                                         ("log-out", "Sign out", {"trailing": None, "danger": True})], "Account Group")
    b.append(g)
    b.append(home_indicator(P))
    return b

def home_backdrop(P):
    """Simplified dimmed Home behind sheets (context preservation)."""
    W, H, m = P["w"], P["h"], P["m"]
    return FRAME("Backdrop / Home (dimmed)", 0, 0, W, H,
                 [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P),
                  balance_card(P, m, P["top"] + 76, W - 2 * m), scrim(P)])

def recipients(P, x, y, w, selected="Maya"):
    people = [("MC", "Maya"), ("JW", "Jonas"), ("PN", "Priya"), ("LM", "Leo"), ("+", "New")]
    cw = w / 5
    b = []
    for i, (ini, name) in enumerate(people):
        sel = name == selected
        kids = [R(0, 0, cw, 84, C["paper"], 0, "Hit Area", op=0)]
        if ini == "+":
            kids += [CIRC(cw / 2, 28, 26, C["paper"], "Outline", C["hair2"], 1.5), ICON("plus", cw / 2 - 11, 17, 22, C["ink"], 2)]
        else:
            if sel: kids.append(CIRC(cw / 2, 28, 29, C["paper"], "Selection Ring", C["ink"], 2))
            kids += [CIRC(cw / 2, 28, 25, C["citrine"] if sel else C["surface2"], "Avatar Fill"),
                     T(cw / 2, 34, ini, 15, 600, C["ink"], SANS, "middle", "Initials")]
        kids.append(T(cw / 2, 76, name, 13, 600 if sel else 500, C["ink"] if sel else C["text2"], SANS, "middle", "Name"))
        b.append(FRAME(f"Recipient / {name}" + (" / Selected" if sel else ""), i * cw, 0, cw, 84, kids))
    return FRAME("Recipient Picker", x, y, w, 84, b)

def scr_send(P, insufficient=False):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    top = P["top"] + (12 if ios else 24)
    body = []
    by = 60 if ios else 92
    body.append(recipients(P, m, by, W - 2 * m)); by += 96
    amt = "$26,000" if insufficient else "$250"
    body.append(T(W / 2, by + 56, amt, 64, 600, C["err"] if insufficient else C["ink"], SANS, "middle", "Amount Display", ls=-2))
    by += 76
    if insufficient:
        bn, bh = banner(m, by, W - 2 * m, "err", "More than your available balance",
                        "You have $24,850.40. Top up $1,149.60 or lower the amount.", "circle-alert", "Banner / Insufficient Funds")
        body.append(bn); by += bh + 8
    else:
        body.append(FRAME("Conversion Line", m, by, W - 2 * m, 52,
                          [T((W - 2 * m) / 2, 18, "Maya receives €231.12", 15, 600, C["ink"], SANS, "middle", "Recipient Amount"),
                           T((W - 2 * m) / 2, 42, "1 USD = 0.9245 EUR · No fee · Available $24,850.40", 13, 400, C["text2"], SANS, "middle", "Rate Line")]))
        by += 64
    kp, kh = amount_keypad(P, m, by, W - 2 * m)
    body.append(kp)
    sheet_h = H - top
    bty = sheet_h - P["bottom"] - 8 - 56
    if insufficient:
        body.append(button(P, m, bty, (W - 2 * m - 8) / 2, "Top up", "outline", id="Button / Outline / Top Up"))
        body.append(button(P, m + (W - 2 * m + 8) / 2, bty, (W - 2 * m - 8) / 2, "Review", "primary", state="disabled", id="Button / Primary / Review / Disabled"))
    else:
        body.append(button(P, m, bty, W - 2 * m, "Review transfer", "primary", id="Button / Primary / Review Transfer"))
    return [home_backdrop(P), status_bar(P, True),
            sheet(P, top, body, "Send money", "Cancel" if ios else None, None, "Send Sheet"), home_indicator(P)]

def summary_rows(P, x, y, w, rows):
    b = []; cy = 0
    for i, (k, v, strong) in enumerate(rows):
        b += [T(16, cy + 30, k, 15, 400, C["text2"], SANS, id=f"Key / {k}"),
              T(w - 16, cy + 30, v, 15 if not strong else 17, 600, C["ink"], SANS, "end", f"Value / {k}")]
        if i < len(rows) - 1: b.append(R(16, cy + 48, w - 32, 1, C["hair"], 0, "Divider"))
        cy += 48
    return FRAME("Summary", x, y, w, cy, [R(0, 0, w, cy, C["surface"], 20 if P is IOS else 24, "Container", C["hair"])] + b), cy

def scr_review(P, failed=False):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    top = P["top"] + (12 if ios else 24)
    body = []
    by = 60 if ios else 96
    if ios:
        body.append(FRAME("Back In Sheet", 8, 18, 90, 44, [ICON("chevron-left", 0, 10, 24, C["ink"], 2.4), T(24, 28, "Amount", 17, 400, C["ink"], SANS, id="Label")]))
    body += [avatar(W / 2 - 32, by, 64, "MC", C["citrine"], C["ink"], "Recipient Avatar"),
             T(W / 2, by + 96, "$250.00", 40, 600, C["ink"], SANS, "middle", "Send Amount", ls=-1),
             T(W / 2, by + 124, "to Maya Chen · IBAN DE89 •••• 3000", 14, 500, C["text2"], SANS, "middle", "Recipient Line")]
    by += 148
    s, sh = summary_rows(P, m, by, W - 2 * m, [("You send", "$250.00", False), ("Fee", "$0.00", False),
                                                ("Exchange rate", "1 USD = 0.9245 EUR", False), ("Maya receives", "€231.12", True),
                                                ("Arrives", "In seconds", False), ("Paying with", "Virtual debit •• 4821", False)])
    body.append(s)
    sheet_h = H - top
    bty = sheet_h - P["bottom"] - 8 - 56
    body.append(T(W / 2, bty - 16, "Rate locked for 30 seconds", 13, 500, C["text2"], SANS, "middle", "Rate Lock Note"))
    body.append(button(P, m, bty, W - 2 * m, "Confirm with Face ID" if ios else "Confirm and send", "primary",
                       "scan-face" if ios else "fingerprint", id="Button / Primary / Confirm Biometric"))
    out = [home_backdrop(P), status_bar(P, True),
           sheet(P, top, body, "Review transfer", None, None, "Review Sheet"), home_indicator(P)]
    if failed:
        out.append(scrim(P, 0.35))
        if ios:
            aw = 270; ah = 200; ax = (W - aw) / 2; ay = (H - ah) / 2
            out.append(FRAME("Alert / iOS / Transfer Failed", ax, ay, aw, ah,
                             [R(0, 0, aw, ah, "#F2F2F2", 14, "Material", op=0.98),
                              T(aw / 2, 36, "Transfer didn't go through", 17, 600, "#000000", SANS, "middle", "Title"),
                              para(aw / 2, 60, "The connection timed out. You haven't been charged.", 34, 13, 18, "#000000", anchor="middle")[0],
                              R(0, 112, aw, 0.5, "#3C3C434A", 0, "Separator"),
                              T(aw / 2, 141, "Try again", 17, 600, "#0F1115", SANS, "middle", "Action / Try Again"),
                              R(0, 156, aw, 0.5, "#3C3C434A", 0, "Separator"),
                              T(aw / 2, 185, "Top up account", 17, 400, "#0F1115", SANS, "middle", "Action / Top Up")]))
        else:
            dw = 312; dh = 236; dx = (W - dw) / 2; dy = (H - dh) / 2
            out.append(FRAME("Dialog / M3 / Transfer Failed", dx, dy, dw, dh,
                             [R(0, 0, dw, dh, "#F3EFE7", 28, "Container"),
                              ICON("circle-alert", dw / 2 - 12, 24, 24, C["err"], 2),
                              T(dw / 2, 84, "Transfer didn't go through", 22, 400, C["ink"], SANS, "middle", "Headline"),
                              para(24, 116, "The connection timed out. You haven't been charged. Try again or top up your account.", 38, 14, 20, C["text2"])[0],
                              T(dw - 24, 210, "Try again", 14, 600, C["ink"], SANS, "end", "Action / Try Again"),
                              T(dw - 120, 210, "Top up", 14, 600, C["ink"], SANS, "end", "Action / Top Up")]))
    return out

def scr_success(P):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    cy = P["top"] + 170
    b += [CIRC(W / 2, cy, 84, C["citrine"], "Success Halo", op=0.35), CIRC(W / 2, cy, 56, C["ink"], "Success Plate"),
          ICON("check", W / 2 - 28, cy - 28, 56, C["citrine"], 2.6, "Checkmark")]
    y = cy + 120
    b += [T(W / 2, y, "$250.00 sent", 40, 400, C["ink"], SERIF, "middle", "Title"),
          T(W / 2, y + 34, "Maya received €231.12", 16, 500, C["text2"], SANS, "middle", "Subtitle")]
    s, sh = summary_rows(P, m, y + 64, W - 2 * m, [("Status", "Completed", False), ("Date", "Oct 31, 2026 · 9:41 AM", False),
                                                    ("Reference", "TX-8F42-1931", False)])
    b.append(s)
    by = H - P["bottom"] - 16 - 56 - 8 - 56
    b.append(button(P, m, by, W - 2 * m, "Done", "primary", id="Button / Primary / Done"))
    b.append(button(P, m, by + 64, W - 2 * m, "Share receipt", "text" if ios else "outline", "share", id="Button / Secondary / Share Receipt"))
    b.append(home_indicator(P))
    return b

def scr_txn_detail(P):
    W, H, m = P["w"], P["h"], P["m"]
    ios = P is IOS
    b = [R(0, 0, W, H, C["paper"], 0, "Background"), status_bar(P)]
    if ios:
        b.append(ios_nav(P, title="Payment", back="Activity")); y = P["top"] + 64
    else:
        b.append(m3_topbar(P, "Payment", actions=("share",))); y = P["top"] + 80
    b += [FRAME("Merchant Tile", W / 2 - 32, y, 64, 64, [R(0, 0, 64, 64, C["surface2"], 18, "Fill"), ICON("coffee", 18, 18, 28, C["ink"], 1.8)]),
          T(W / 2, y + 96, "−$6.40", 44, 600, C["ink"], SANS, "middle", "Amount", ls=-1),
          T(W / 2, y + 124, "Blue Bottle Coffee", 17, 500, C["ink"], SANS, "middle", "Merchant")]
    c, cw = chip(0, 0, "Completed", "check", C["posBg"], C["pos"], "Status Chip / Completed")
    b.append(c.replace('x="0" y="0"', f'x="{W/2 - cw/2}" y="{y + 140}"', 1))
    y += 192
    s, sh = summary_rows(P, m, y, W - 2 * m, [("Date", "Oct 31, 2026 · 8:42 AM", False), ("Category", "Food & drink", False),
                                               ("Card", "Virtual debit •• 4821", False), ("Original amount", "$6.40 USD", False),
                                               ("Reference", "POS-55A1-0092", False)])
    b.append(s); y += sh + 16
    g, gh = grouped(P, m, y, W - 2 * m, [("receipt", "Download receipt", {}), ("circle-alert", "Report a problem", {})], "Detail Actions")
    b.append(g)
    b.append(home_indicator(P))
    return b

SCREENS = [
    # board, id, name, fn
    ("Onboarding & Authentication", "ONB-01", "Splash", scr_splash),
    ("Onboarding & Authentication", "ONB-02", "Welcome", scr_onboarding),
    ("Onboarding & Authentication", "AUTH-01", "Phone number", scr_phone),
    ("Onboarding & Authentication", "AUTH-01-OTP", "Verification code", lambda P: scr_otp(P)),
    ("Onboarding & Authentication", "AUTH-01-ERROR", "Code error", lambda P: scr_otp(P, True)),
    ("Onboarding & Authentication", "AUTH-02", "Biometric setup", scr_biometric),
    ("Home, Cards & Account", "HOME-01", "Home", scr_home),
    ("Home, Cards & Account", "HOME-01-LOADING", "Home loading", lambda P: scr_home(P, "loading")),
    ("Home, Cards & Account", "HOME-01-OFFLINE", "Home offline", lambda P: scr_home(P, "offline")),
    ("Home, Cards & Account", "WALLET-01", "Cards", scr_wallet),
    ("Home, Cards & Account", "WALLET-01-FROZEN", "Card frozen", lambda P: scr_wallet(P, "frozen")),
    ("Home, Cards & Account", "WALLET-01-EMPTY", "No cards yet", lambda P: scr_wallet(P, "empty")),
    ("Home, Cards & Account", "ACT-01", "Activity", scr_activity),
    ("Home, Cards & Account", "SET-01", "Profile & security", scr_settings),
    ("Payments", "TXN-01", "Send money", scr_send),
    ("Payments", "TXN-01-INSUFFICIENT", "Over balance", lambda P: scr_send(P, True)),
    ("Payments", "TXN-02", "Review transfer", scr_review),
    ("Payments", "TXN-02-FAILED", "Transfer failed", lambda P: scr_review(P, True)),
    ("Payments", "TXN-03", "Transfer sent", scr_success),
    ("Payments", "TXN-04", "Payment detail", scr_txn_detail),
]
NEW_IDS = {"AUTH-01-OTP", "HOME-01-OFFLINE", "WALLET-01-FROZEN", "ACT-01", "SET-01", "TXN-01-INSUFFICIENT", "TXN-04"}

def board(P, bname, idx):
    _ids.clear()
    items = [s for s in SCREENS if s[0] == bname]
    gap = 96; pad = 120; head = 260
    W = pad * 2 + len(items) * P["w"] + (len(items) - 1) * gap
    H = head + P["h"] + pad + 40
    kids = [R(0, 0, W, H, "#EAE6DD", 0, "Board Background"),
            T(pad, 120, f"{P['name']} · {bname}", 64, 400, C["ink"], SERIF, id="Board Title"),
            T(pad, 164, f"Fintech Mobile · Quiet Precision · {P['w']}×{P['h']} {'pt' if P is IOS else 'dp'} · "
                        f"{'Apple HIG' if P is IOS else 'Material 3, edge-to-edge'} · Native SVG layers (editable text & vectors)",
              18, 500, C["text2"], SANS, id="Board Subtitle")]
    for i, (_, sid, name, fn) in enumerate(items):
        x = pad + i * (P["w"] + gap)
        tag = "  · NEW (pending Gate 2)" if sid in NEW_IDS else ""
        kids.append(T(x, head - 24, f"{sid}  {name}{tag}", 18, 600, C["ink"], SANS, id=f"Label / {sid}"))
        kids.append(FRAME(f"{sid} · {name} · {P['name']}", x, head, P["w"], P["h"], fn(P)))
    svg = (f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}">'
           + defs() + "".join(kids) + "</svg>")
    slug = f"{idx:02d}-{P['name'].lower()}-{bname.lower().replace(' & ', '-').replace(', ', '-').replace(' ', '-')}"
    open(os.path.join(OUT, slug + ".svg"), "w").write(svg)
    return slug

if __name__ == "__main__":
    import sys
    only = sys.argv[1:] or None
    n = 3
    for P in (IOS, AND):
        for bname in ["Onboarding & Authentication", "Home, Cards & Account", "Payments"]:
            slug = board(P, bname, n); n += 1
            print("wrote", slug)

