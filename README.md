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
- fail-closed behavior for malformed date, time-zone, and coordinate input.

## Verify the evidence package

```text
npm run verify
```

The verifier checks the package hash, every calculation snapshot hash, the rounded Five Element totals, the unknown-hour boundary, and the three negative-input records.

## Related public pages

- [Calculation methodology](https://baziclarity.com/methodology)
- [Case and review policy](https://baziclarity.com/case-study-policy)
- [Complete fictional report demonstration](https://baziclarity.com/sample-report)

The demonstration report is not a real customer case. No customer review or practitioner credential is included in this package.
