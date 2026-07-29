# Bazi Clarity Calculation Evidence

This repository documents repeatable software outputs for the disclosed Bazi Clarity school profile. It contains fictional test inputs, expected calculation snapshots, integrity hashes, source boundaries, and an automated verifier.

It does not validate BaZi as a scientific prediction method. A deterministic calendar calculation does not establish personality claims, future events, or life outcomes. Bazi Clarity presents BaZi as a traditional symbolic framework for self-reflection and planning.

All birth inputs in this package are fictional test vectors. They do not represent customers, public figures, testimonials, orders, or outcomes.

## What is covered

- selected-city latitude, longitude, and IANA time zone;
- historical UTC offset and daylight-saving handling;
- disclosed true-solar-time correction;
- Li Chun year boundary, solar-term month boundary, and 00:00 day rollover;
- Three Pillars when birth time is unknown;
- Four Pillars when birth time is supplied;
- deterministic repetition for the same input and engine version;
- fail-closed behavior for malformed date, time-zone, and coordinate input;
- a limited two-chart comparison that uses Day Masters, Five Element context, and known branch interactions without inventing a score.

## Verify the evidence package

```text
npm run verify
```

The verifier checks the package hashes, every calculation snapshot hash, the rounded Five Element totals, the unknown-hour boundary, the three negative-input records, and the compatibility comparison boundary.

## Calculation guides

- [Unknown birth time boundary](UNKNOWN_BIRTH_TIME_BOUNDARY.md) — why the Hour Pillar remains unknown, why a city cannot recover the hour, and how the fictional boundary vector is verified.
- [Compatibility calculation boundary](COMPATIBILITY_CALCULATION.md) — how two charts are calculated independently and compared without names, an invented Hour Pillar, a percentage score, or a relationship verdict.
- [Why birth city changes a BaZi chart](BIRTH_CITY_CALCULATION.md) — a calculation note on historical time zones, daylight-saving rules, longitude, true solar time, solar-term boundaries, and unknown birth time.

## Use the public tools

The free interfaces are not customer examples. They do not validate predictive claims.

- [Build a free chart preview](https://baziclarity.com/free-reading?utm_source=github&utm_medium=repository&utm_campaign=calculation_evidence) — birth time is optional; when it is not supplied, the interface keeps the Hour Pillar unknown and uses a Three Pillars boundary.
- [Compare two charts](https://baziclarity.com/compatibility?utm_source=github&utm_medium=repository&utm_campaign=compatibility_evidence) — a limited compatibility view for relationship, marriage, communication, or partnership questions.
- [Learn the core BaZi terms](https://baziclarity.com/en/learn/?utm_source=github&utm_medium=repository&utm_campaign=calculation_evidence) — direct routes to Four Pillars, Day Master, Five Elements, Ten Gods, Officer and Seven Killings, luck cycles, and practical topics.

No sign-in or email is required for the free chart preview or the two-chart comparison. Birth time is optional; leaving it blank does not create an Hour Pillar.

## Related public pages

- [Calculation methodology](https://baziclarity.com/methodology?utm_source=github&utm_medium=repository&utm_campaign=calculation_evidence)
- [Case and review policy](https://baziclarity.com/case-study-policy?utm_source=github&utm_medium=repository&utm_campaign=calculation_evidence)
- [Complete fictional report demonstration](https://baziclarity.com/sample-report?utm_source=github&utm_medium=repository&utm_campaign=calculation_evidence)

The demonstration report is not a real customer case. No customer review or practitioner credential is included in this package.
