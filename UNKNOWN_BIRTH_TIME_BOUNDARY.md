# Unknown Birth Time in BaZi: A Testable Three-Pillars Boundary

> If a birth time is not known, the Hour Pillar must remain unknown. A calculator can still use the known date and city for disclosed date-level context, but it cannot recover or invent a birth hour.

## The boundary being tested

The evidence package contains a fictional vector named `shanghai_unknown_time`. Its input records:

- date: `2005-12-23`;
- time: `null`;
- time precision: `unknown`;
- city: Shanghai, China;
- IANA time zone: `Asia/Shanghai`;
- coordinates: latitude `31.2304`, longitude `121.4737`.

The expected result makes the missing information explicit:

```json
{
  "timeKnown": false,
  "pillars": [
    { "label": "Year", "ganZhi": "乙酉" },
    { "label": "Month", "ganZhi": "戊子" },
    { "label": "Day", "ganZhi": "辛巳" },
    { "label": "Hour", "unknown": true }
  ],
  "dayMaster": "辛",
  "dayMasterElement": "metal"
}
```

This is a Three Pillars result. It is not a complete Four Pillars chart and it must not be displayed as one.

## Why the city is still recorded

A city supplies an IANA time zone and coordinates. Those inputs are useful when a birth time is known because historical UTC offsets, daylight-saving rules, longitude, and the disclosed true-solar-time method can affect the corrected wall time.

When the time is unknown, the city cannot recover an unknown birth hour. It remains part of the source record and the date-level calculation context, but it does not authorize the software to choose noon, midnight, or any other hour for the person.

A city field is therefore neither decorative nor magical. The calculator should disclose when it affects an output and when it cannot resolve missing information.

## Why noon appears in the evidence snapshot

The methodology states that noon may be used internally to obtain date-level calendar context for an unknown-time vector. This internal reference is not presented as the person's birth time.

That distinction is testable:

- `expected.timeKnown` must remain `false`;
- the Hour record must remain `{ "label": "Hour", "unknown": true }`;
- the public result must not contain an invented Hour `ganZhi`;
- Hour-dependent interpretation must be omitted or marked conditional.

An internal date anchor is an implementation detail. Treating it as a supplied birth hour would be a boundary failure.

## What remains available

With a reliable date, a Three Pillars view can still expose the calculated Year, Month, and Day Pillars, the Day Master, seasonal context from the known Month Branch, the known stems and branches, and a disclosed element-weight snapshot based only on the available chart.

Those outputs can support structured reflection. They do not justify an exact claim about a missing Hour Pillar or an hour-dependent life event.

## What must remain unavailable or conditional

Without a birth hour, a transparent result should not assert:

- an Hour Stem or Hour Branch;
- hidden stems that exist only in an invented Hour Branch;
- combinations or clashes that require an assumed hour;
- interpretations presented as though all Four Pillars were known;
- precise event timing derived from the missing pillar.

Birth-time rectification is a separate and uncertain process. It should not be performed silently from a name, personality description, city, or marketing preference.

## Reproduce the check

From the repository root, run:

```text
npm run verify
```

Then inspect `evidence/test-vectors.json` and locate `shanghai_unknown_time`. The verifier checks the unknown-hour boundary as part of the evidence package.

The input is fictional software test data. It is not a customer, testimonial, public figure, order, or proof of a predicted outcome.

## Public interfaces and fuller explanation

- [Try the free Three Pillars reading](https://baziclarity.com/free-reading?utm_source=github&utm_medium=repository&utm_campaign=calculation_evidence&utm_content=unknown_time_boundary) — birth time is optional and no email is required.
- [Read the full guide to BaZi without a birth time](https://baziclarity.com/en/learn/bazi-reading-without-birth-time/?utm_source=github&utm_medium=repository&utm_campaign=calculation_evidence&utm_content=unknown_time_boundary).
- [Review the disclosed methodology](METHODOLOGY.md) and [limitations](LIMITATIONS.md).

BaZi is a traditional symbolic framework, not a scientifically validated prediction method. This evidence documents deterministic software boundaries only. It is not medical, legal, financial, psychological, or relationship advice and cannot guarantee an outcome.
