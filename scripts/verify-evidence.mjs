import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, canonical(value[key])]),
    );
  }
  return value;
}

const sha256 = (value) =>
  crypto
    .createHash("sha256")
    .update(JSON.stringify(canonical(value)))
    .digest("hex");

const document = JSON.parse(
  fs.readFileSync("evidence/test-vectors.json", "utf8"),
);
const manifest = JSON.parse(
  fs.readFileSync("evidence/manifest.json", "utf8"),
);

assert.equal(document.schemaVersion, "1.0.0");
assert.equal(document.engineVersion, manifest.engineVersion);
assert.equal(
  document.vectors.length + document.negativeVectors.length,
  manifest.fixtureCount,
);
assert.equal(sha256(document), manifest.vectorsSha256);

for (const vector of document.vectors) {
  assert.equal(sha256(vector.expected), vector.calculationHash, vector.id);
  assert.equal(vector.expected.pillars.length, 4, vector.id);
  const roundedElementTotal = Object.values(vector.expected.elementPercent)
    .reduce((a, b) => a + b, 0);
  assert.ok(
    Math.abs(roundedElementTotal - 100) <= 0.2,
    `${vector.id}: rounded element total ${roundedElementTotal}`,
  );
  if (vector.expected.timeKnown === false) {
    assert.deepEqual(
      vector.expected.pillars[3],
      { label: "Hour", unknown: true },
      vector.id,
    );
  }
}

assert.deepEqual(
  new Set(document.negativeVectors.map((x) => x.expectedErrorCode)),
  new Set(["INVALID_TIMEZONE", "INVALID_DATE", "INVALID_LONGITUDE"]),
);

const compatibility = JSON.parse(
  fs.readFileSync("evidence/compatibility-vector.json", "utf8"),
);
assert.equal(manifest.compatibilityFixtureCount, 1);
assert.equal(
  sha256(compatibility),
  manifest.compatibilityVectorSha256,
);
assert.equal(
  compatibility.sourceSha256.compatibilityCore,
  manifest.compatibilityCoreSha256,
);

const { evidenceHash, ...compatibilityPayload } = compatibility;
assert.equal(sha256(compatibilityPayload), evidenceHash);
assert.equal(compatibility.expected.rightChart.timeKnown, false);
assert.deepEqual(
  compatibility.expected.rightChart.pillars[3],
  { label: "Hour", unknown: true },
);
assert.equal("score" in compatibility.expected.comparison, false);
assert.doesNotMatch(
  JSON.stringify(compatibility),
  /% compatible|soulmate|perfect match|guaranteed marriage|customer result/i,
);

console.log(
  `evidence verification passed: ${manifest.fixtureCount} natal vectors + ${manifest.compatibilityFixtureCount} compatibility vector`,
);
