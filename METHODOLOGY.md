# Calculation Methodology

## Scope

This document describes the calculation layer exported by Bazi Clarity engine version `bazi-web-v2.0`. It does not document payment processing, report-generation prompts, commercial report templates, customer records, or private infrastructure.

## Input sequence

1. A selected city supplies a name, country, latitude, longitude, and IANA time-zone identifier.
2. The IANA zone is used to recover the UTC offset that applied on the supplied civil date and time.
3. January and July offsets are compared with the birth-date offset to disclose whether daylight saving was observed.
4. Longitude relative to the standard meridian contributes a longitude correction.
5. A disclosed equation-of-time approximation contributes an additional correction.
6. The combined correction produces the true-solar wall time shown in the calculation snapshot.
7. Calendar primitives produce the Year, Month, Day, and—only when known—Hour Pillars.

## School profile

```json
{
  "yearBoundary": "li-chun",
  "monthBoundary": "solar-terms",
  "dayRollover": "00:00",
  "useTrueSolarTime": true,
  "elementWeightModel": "seasonal-v1",
  "hiddenStemWeightModel": "standard-v1"
}
```

Other BaZi schools may use different day-rollover, solar-time, hidden-stem, seasonal-strength, or Luck Pillar conventions. A different disclosed profile can legitimately produce a different result.

## Unknown birth time

If the time is missing or marked unknown, the public result contains Year, Month, and Day Pillars only. The Hour record is:

```json
{
  "label": "Hour",
  "unknown": true
}
```

Noon may be used internally to obtain date-level calendar context, but it is never presented as the person's birth hour.

## Five Element snapshot

The public snapshot contains percentages produced by the disclosed `seasonal-v1` model. Percentages are rounded to one decimal place, so their displayed total may differ from 100 by up to 0.2 percentage points.

These weightings are an interpretive model, not a scientific measurement of a person.

## Integrity hashes

Each successful vector has a SHA-256 hash over a canonical, key-sorted JSON representation of its expected calculation snapshot. The manifest has a SHA-256 hash over the full vector document.

Hashes show that the published records have not changed. They do not independently prove the cultural interpretation.
