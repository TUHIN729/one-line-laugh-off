// One-Line Laugh-Off — program/v1 entry.
// Writes exactly one original funny line to /output/entry.txt.
// Deterministic: no network, no model call, no randomness — the line is the entry.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I hired a professional mourner for my funeral — she cried so well my ex asked for her number.";

// The gate allows 1–200 characters, not whitespace-only. Enforce it here
// so a bad edit can never ship an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1–200 characters, got ${chars.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

// The grader mounts /output root-owned, so never remove the directory itself.
mkdirSync("/output", { recursive: true });

// Write the line exactly, with no trailing newline, so the file holds
// one line of 1–200 characters and nothing else.
writeFileSync("/output/entry.txt", LINE, "utf8");
