(function () {
  var W = 800,
    H = 500,
    PW = 12,
    PH = 96,
    BR = 8,
    MARGIN = 24,
    WIN = 7;
  var START_SPEED = 380,
    MAX_SPEED = 920,
    PADDLE_SPEED = 540;
  var CPU = { easy: 230, normal: 340, hard: 460 };

  var cv = document.getElementById("court");
  var ctx = cv.getContext("2d");
  var root = getComputedStyle(document.documentElement);
  function tok(n, fb) {
    var v = root.getPropertyValue(n).trim();
    return v || fb;
  }

  function fit() {
    var d = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.round(W * d);
    cv.height = Math.round(H * d);
    ctx.setTransform(d, 0, 0, d, 0, 0);
  }
  fit();

  var s = {
    mode: "cpu",
    diff: "normal",
    phase: "ready",
    L: { y: H / 2, score: 0 },
    R: { y: H / 2, score: 0 },
    ball: { x: W / 2, y: H / 2, vx: 0, vy: 0, speed: START_SPEED },
    serveT: 0,
    serveDir: 1,
    winner: null,
    aim: 0,
    aimT: 0,
  };
  var keys = { w: false, s: false, up: false, down: false };
  var ptr = { L: null, R: null };

  /* ---------- sound ---------- */
  var actx = null,
    muted = false;
  function beep(freq, dur, type) {
    if (muted) return;
    try {
      if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)();
      if (actx.state === "suspended") actx.resume();
      var o = actx.createOscillator(),
        g = actx.createGain();
      o.type = type || "square";
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.06, actx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
      o.connect(g);
      g.connect(actx.destination);
      o.start();
      o.stop(actx.currentTime + dur);
    } catch (e) {}
  }

  /* ---------- game flow ---------- */
  function resetBall(dir) {
    s.ball.x = W / 2;
    s.ball.y = H / 2;
    s.ball.vx = 0;
    s.ball.vy = 0;
    s.ball.speed = START_SPEED;
    s.serveDir = dir;
    s.serveT = 0.9;
    s.phase = "serve";
  }
  function newGame() {
    s.L.score = 0;
    s.R.score = 0;
    s.winner = null;
    s.L.y = H / 2;
    s.R.y = H / 2;
    resetBall(Math.random() < 0.5 ? 1 : -1);
    syncButtons();
  }
  function launch() {
    var a = Math.random() * 0.7 - 0.35;
    s.ball.vx = Math.cos(a) * s.ball.speed * s.serveDir;
    s.ball.vy = Math.sin(a) * s.ball.speed;
    s.phase = "play";
  }
  function togglePause() {
    if (s.phase === "play" || s.phase === "serve") {
      s.prev = s.phase;
      s.phase = "paused";
    } else if (s.phase === "paused") {
      s.phase = s.prev || "play";
    }
    syncButtons();
  }
  function primary() {
    if (s.phase === "ready" || s.phase === "over") newGame();
    else togglePause();
    syncButtons();
  }

  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }
  function paddleBounds(y) {
    return clamp(y, PH / 2, H - PH / 2);
  }

  function hitPaddle(p, x, dirSign) {
    var b = s.ball;
    var edge = dirSign > 0 ? x + PW : x;
    if (dirSign > 0 ? b.vx >= 0 : b.vx <= 0) return false;
    var near = dirSign > 0 ? b.x - BR <= edge && b.x + BR >= x : b.x + BR >= edge && b.x - BR <= x + PW;
    if (!near) return false;
    if (Math.abs(b.y - p.y) > PH / 2 + BR) return false;
    var off = clamp((b.y - p.y) / (PH / 2), -1, 1);
    var ang = off * 0.9;
    b.speed = Math.min(b.speed * 1.06, MAX_SPEED);
    b.vx = Math.cos(ang) * b.speed * dirSign;
    b.vy = Math.sin(ang) * b.speed;
    b.x = dirSign > 0 ? x + PW + BR : x - BR;
    beep(dirSign > 0 ? 440 : 520, 0.07);
    return true;
  }

  function update(dt) {
    var ly = 0,
      ry = 0;
    if (keys.w) ly -= 1;
    if (keys.s) ly += 1;
    if (s.mode === "cpu") {
      if (keys.up) ly -= 1;
      if (keys.down) ly += 1;
    } else {
      if (keys.up) ry -= 1;
      if (keys.down) ry += 1;
    }
    if (ly) {
      ptr.L = null;
      s.L.y += ly * PADDLE_SPEED * dt;
    }
    if (ry) {
      ptr.R = null;
      s.R.y += ry * PADDLE_SPEED * dt;
    }
    if (ptr.L != null) s.L.y = ptr.L;
    if (ptr.R != null && s.mode === "two") s.R.y = ptr.R;

    if (s.mode === "cpu") {
      s.aimT -= dt;
      if (s.aimT <= 0) {
        s.aimT = 0.35;
        s.aim = (Math.random() - 0.5) * PH * (s.diff === "hard" ? 0.3 : s.diff === "easy" ? 1.0 : 0.6);
      }
      var target = s.ball.vx > 0 ? s.ball.y + s.aim : H / 2;
      var diff = target - s.R.y;
      var step = CPU[s.diff] * dt;
      if (Math.abs(diff) > 6) s.R.y += clamp(diff, -step, step);
    }
    s.L.y = paddleBounds(s.L.y);
    s.R.y = paddleBounds(s.R.y);

    var b = s.ball;
    if (s.phase === "serve") {
      s.serveT -= dt;
      if (s.serveT <= 0) launch();
      return;
    }
    if (s.phase !== "play") return;

    b.x += b.vx * dt;
    b.y += b.vy * dt;
    if (b.y < BR) {
      b.y = BR;
      b.vy = Math.abs(b.vy);
      beep(300, 0.05);
    }
    if (b.y > H - BR) {
      b.y = H - BR;
      b.vy = -Math.abs(b.vy);
      beep(300, 0.05);
    }

    hitPaddle(s.L, MARGIN, 1);
    hitPaddle(s.R, W - MARGIN - PW, -1);

    if (b.x < -BR * 2) score("R");
    else if (b.x > W + BR * 2) score("L");
  }

  function score(who) {
    s[who].score++;
    beep(150, 0.25, "sawtooth");
    if (s[who].score >= WIN) {
      s.phase = "over";
      s.winner = who;
      s.ball.vx = 0;
      s.ball.vy = 0;
      syncButtons();
    } else {
      resetBall(who === "L" ? -1 : 1);
    }
  }

  /* ---------- drawing ---------- */
  function draw() {
    var court = tok("--court", "#0d1524"),
      line = tok("--court-line", "#33415c"),
      ink = tok("--court-ink", "#eef2f8"),
      ball = tok("--ball", "#ff6a2b");
    ctx.fillStyle = court;
    ctx.fillRect(0, 0, W, H);

    ctx.fillStyle = line;
    for (var y = 8; y < H; y += 28) ctx.fillRect(W / 2 - 2, y, 4, 14);
    ctx.fillRect(0, 0, W, 3);
    ctx.fillRect(0, H - 3, W, 3);

    ctx.fillStyle = ink;
    ctx.font = '700 64px Silkscreen, "Courier New", monospace';
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.globalAlpha = 0.9;
    ctx.fillText(String(s.L.score), W / 2 - 90, 28);
    ctx.fillText(String(s.R.score), W / 2 + 90, 28);
    ctx.globalAlpha = 1;

    ctx.fillStyle = ink;
    ctx.fillRect(MARGIN, s.L.y - PH / 2, PW, PH);
    ctx.fillRect(W - MARGIN - PW, s.R.y - PH / 2, PW, PH);

    ctx.fillStyle = ball;
    ctx.fillRect(s.ball.x - BR, s.ball.y - BR, BR * 2, BR * 2);

    ctx.font = '400 14px Silkscreen, "Courier New", monospace';
    ctx.fillStyle = line;
    ctx.textBaseline = "bottom";
    ctx.fillText(s.mode === "cpu" ? "YOU" : "P1", MARGIN + 40, H - 14);
    ctx.fillText(s.mode === "cpu" ? "CPU" : "P2", W - MARGIN - 40, H - 14);

    if (s.phase === "ready" || s.phase === "paused" || s.phase === "over") {
      ctx.fillStyle = "rgba(6,10,18,0.72)";
      ctx.fillRect(0, H / 2 - 78, W, 156);
      ctx.textBaseline = "middle";
      ctx.fillStyle = ink;
      ctx.font = '700 38px Silkscreen, "Courier New", monospace';
      var head =
        s.phase === "ready"
          ? "PONG"
          : s.phase === "paused"
            ? "PAUSED"
            : s.winner === "L"
              ? s.mode === "cpu"
                ? "YOU WIN"
                : "P1 WINS"
              : s.mode === "cpu"
                ? "CPU WINS"
                : "P2 WINS";
      ctx.fillText(head, W / 2, H / 2 - 20);
      ctx.fillStyle = ball;
      ctx.font = '400 16px Silkscreen, "Courier New", monospace';
      ctx.fillText(
        s.phase === "paused" ? "SPACE TO RESUME" : s.phase === "over" ? "SPACE FOR A REMATCH" : "SPACE OR TAP TO START",
        W / 2,
        H / 2 + 28,
      );
    }
  }

  /* ---------- loop ---------- */
  var last = 0;
  function frame(t) {
    var dt = Math.min((t - last) / 1000 || 0, 0.033);
    last = t;
    update(dt);
    draw();
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
  if (document.fonts && document.fonts.load) {
    document.fonts.load("700 32px Silkscreen");
    document.fonts.load("400 14px Silkscreen");
  }

  /* ---------- input ---------- */
  function setKey(e, down) {
    var k = e.key,
      hit = true;
    if (k === "w" || k === "W") keys.w = down;
    else if (k === "s" || k === "S") keys.s = down;
    else if (k === "ArrowUp") keys.up = down;
    else if (k === "ArrowDown") keys.down = down;
    else hit = false;
    return hit;
  }
  window.addEventListener("keydown", function (e) {
    if (e.target && /^(INPUT|SELECT|TEXTAREA)$/.test(e.target.tagName)) return;
    if (e.code === "Space" && !e.repeat) {
      if (e.target && e.target.tagName === "BUTTON") return;
      e.preventDefault();
      primary();
      return;
    }
    if (setKey(e, true)) e.preventDefault();
  });
  window.addEventListener("keyup", function (e) {
    setKey(e, false);
  });
  window.addEventListener("blur", function () {
    keys.w = keys.s = keys.up = keys.down = false;
  });

  function toCourt(e) {
    var r = cv.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
  }
  var pressed = false;
  function steer(e) {
    var p = toCourt(e);
    if (s.mode === "cpu") {
      ptr.L = clamp(p.y, PH / 2, H - PH / 2);
      return;
    }
    if (e.pointerType === "mouse" && !pressed) return;
    if (p.x < W / 2) ptr.L = clamp(p.y, PH / 2, H - PH / 2);
    else ptr.R = clamp(p.y, PH / 2, H - PH / 2);
  }
  cv.addEventListener("pointerdown", function (e) {
    pressed = true;
    try {
      cv.setPointerCapture(e.pointerId);
    } catch (err) {}
    if (s.phase === "ready" || s.phase === "over") {
      newGame();
    } else if (s.phase === "paused") {
      togglePause();
    }
    steer(e);
    cv.focus({ preventScroll: true });
  });
  cv.addEventListener("pointermove", steer);
  cv.addEventListener("pointerup", function () {
    pressed = false;
  });
  cv.addEventListener("pointercancel", function () {
    pressed = false;
  });

  /* ---------- controls ---------- */
  var bCpu = document.getElementById("m-cpu"),
    bTwo = document.getElementById("m-two");
  var diffGroup = document.getElementById("diff-group");
  var bStart = document.getElementById("start"),
    bPause = document.getElementById("pause"),
    bMute = document.getElementById("mute");

  function setMode(m) {
    s.mode = m;
    ptr.L = null;
    ptr.R = null;
    bCpu.setAttribute("aria-pressed", m === "cpu");
    bTwo.setAttribute("aria-pressed", m === "two");
    diffGroup.hidden = m !== "cpu";
    newGame();
    s.phase = "ready";
    syncButtons();
  }
  function syncButtons() {
    bStart.textContent = s.phase === "ready" ? "Start" : s.phase === "over" ? "Play again" : "Restart";
    bPause.textContent = s.phase === "paused" ? "Resume" : "Pause";
    bPause.disabled = !(s.phase === "play" || s.phase === "serve" || s.phase === "paused");
    bPause.style.opacity = bPause.disabled ? "0.5" : "1";
  }
  bCpu.addEventListener("click", function () {
    setMode("cpu");
  });
  bTwo.addEventListener("click", function () {
    setMode("two");
  });
  Array.prototype.forEach.call(diffGroup.querySelectorAll("button[data-diff]"), function (b) {
    b.addEventListener("click", function () {
      s.diff = b.getAttribute("data-diff");
      Array.prototype.forEach.call(diffGroup.querySelectorAll("button[data-diff]"), function (x) {
        x.setAttribute("aria-pressed", x === b);
      });
    });
  });
  bStart.addEventListener("click", function () {
    newGame();
    cv.focus({ preventScroll: true });
  });
  bPause.addEventListener("click", function () {
    togglePause();
  });
  bMute.addEventListener("click", function () {
    muted = !muted;
    bMute.setAttribute("aria-pressed", muted);
    bMute.textContent = muted ? "Sound off" : "Sound on";
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden && (s.phase === "play" || s.phase === "serve")) togglePause();
  });
  syncButtons();
})();
