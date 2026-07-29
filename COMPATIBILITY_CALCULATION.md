# How the Two-Chart Compatibility Comparison Is Calculated

This note documents the calculation boundary behind the public Bazi Clarity two-chart comparison. It is written so that a reader can inspect one fixed input pair, reproduce the evidence check, and see exactly which facts the comparison does and does not use.

> Fictional software test vector—not a customer case.

The evidence demonstrates deterministic software behavior. It is not a scientific compatibility test, a relationship verdict, or proof that BaZi predicts an outcome.

## Evidence boundary

The comparison has two separate stages:

1. calculate each natal chart independently from that person's date, optional time, and selected city;
2. compare a limited set of disclosed facts that actually exist in the two calculated charts.

Names do not affect either natal chart. They are not part of the evidence fixture, are not converted into numbers, and cannot change the comparison.

The production calculation files used for this vector are identified by SHA-256 hashes in [`evidence/compatibility-vector.json`](evidence/compatibility-vector.json). The vector also contains its own integrity hash. This makes silent changes detectable; it does not prove the cultural interpretation.

## Fictional input pair

The fixed test pair uses:

- Chart A: Shanghai, China; 18 August 1994; 09:30; time supplied.
- Chart B: New York, United States; 20 June 1992; birth time unknown.

The selected city supplies latitude, longitude, and an IANA time zone. The engine uses the civil date and time with the zone's historical UTC offset. It also discloses whether a daylight-saving offset applied on that date.

When a time is known, longitude relative to the standard meridian and the equation-of-time approximation contribute to the disclosed true-solar-time correction. The published vector records the resulting offsets and corrections, so a reviewer can compare them with the calculated pillars.

## Calculate each chart independently

The natal engine first calculates the Year, Month, Day, and—only when supplied—Hour Pillars under the repository's disclosed school profile:

- Li Chun is the year boundary;
- solar terms define month boundaries;
- the day rolls over at 00:00;
- the disclosed true-solar-time method is enabled;
- element weights use the disclosed seasonal model.

For Chart A, the vector records four calculated pillars, a `丙` Day Master, and its Five Element snapshot.

For Chart B, the time is explicitly `unknown`. The result therefore contains Three Pillars and `{ "label": "Hour", "unknown": true }`. There is no invented Hour Pillar. The city remains useful source context, but a city cannot recover a missing birth hour.

The two calculations happen before the comparison. Changing Chart A cannot recalculate Chart B, and a name or nickname cannot alter either chart.

## Compare only available chart facts

The comparison layer receives the two calculated chart objects and exposes four limited groups of facts:

### Day Master relationship

It compares the two Day Master stems and their elements. In this fictional fixture, both Day Masters are Fire stems, so the output records a shared-element pattern. This is a descriptive chart relationship, not a claim about whether two people should remain together.

### Five Element context

It preserves each chart's own raw element contributions, seasonal weights, rounded percentages, strongest element, and weakest element. It does not average the two people into a new personality score.

### Known branch interactions

The comparison checks only branches that are present. Its disclosed interaction types are:

- branch combination;
- branch clash;
- branch harm.

The fixture contains two combinations and one clash. It contains no harm, so none is added to the output. Because Chart B has no Hour Branch, no interaction is calculated from an assumed hour.

### Reflection prompts

The output includes neutral prompts about mutual support, boundaries, and repair after tension. They are questions for reflection, not predictions or clinical advice.

## Unknown birth time stays unknown

The evidence vector records `leftTimeKnown: true` and `rightTimeKnown: false`. It also carries this notice:

> At least one Hour Pillar is unknown; conclusions use only the provided data.

This boundary prevents the comparison from quietly turning an internal date anchor into a person's birth hour. Hour-dependent interactions must be omitted when the hour is missing.

## What the comparison never returns

The published comparison model does not return:

- a percentage match;
- a soulmate label;
- a pass/fail verdict;
- a guaranteed marriage or breakup claim;
- a diagnosis or instruction to make a major life decision;
- a conclusion derived from a person's name;
- an Hour Pillar when birth time is unknown.

The public interface is intentionally a limited symbolic comparison. The paid report may provide more written context, but payment does not create missing birth data or remove the stated limitations.

## Reproduce the evidence

Clone or download the repository, then run:

```text
npm run verify
```

The verifier checks:

- the original 12 natal vectors and their package hash;
- the complete compatibility vector hash;
- the hash of the comparison source recorded in the manifest;
- the Three Pillars boundary for the unknown-time chart;
- the absence of a score field and prohibited deterministic claims.

Inspect these files:

- [`evidence/compatibility-vector.json`](evidence/compatibility-vector.json) — the fictional input pair, expected charts, comparison object, source hashes, and evidence hash;
- [`evidence/manifest.json`](evidence/manifest.json) — package-level counts and hashes;
- [`scripts/verify-evidence.mjs`](scripts/verify-evidence.mjs) — the executable integrity and boundary checks;
- [`METHODOLOGY.md`](METHODOLOGY.md) — the natal calculation profile;
- [`LIMITATIONS.md`](LIMITATIONS.md) — interpretation and use limits.

## Try the public comparison

[Open the free two-chart comparison](https://baziclarity.com/compatibility?utm_source=github&utm_medium=repository&utm_campaign=compatibility_evidence). No email is required. Birth time is optional for either person; leaving it blank keeps that Hour Pillar unknown.

## Limitations

BaZi is a traditional symbolic framework for reflection and planning. Different schools may use different boundaries, solar-time conventions, hidden-stem weights, or interpretation rules and can therefore produce different outputs. This evidence documents one disclosed software profile and one fictional regression fixture.

It is not medical, legal, financial, psychological, or relationship advice. It cannot establish identity, consent, safety, relationship quality, or a future event. Use direct communication and appropriate qualified support for consequential decisions.
