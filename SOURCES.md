# Sources and Implementation Boundaries

## IANA Time Zone Database

Source: https://www.iana.org/time-zones

Used for historical civil-time rules through the JavaScript runtime's IANA-compatible `Intl.DateTimeFormat` implementation. IANA data supports time-zone and daylight-saving handling only.

## Hong Kong Observatory: 24 Solar Terms

Source: https://www.hko.gov.hk/en/gts/time/24solarterms.htm

Used as a public astronomical description of the 24 solar terms. The source does not define or endorse Bazi Clarity's interpretive model.

## NOAA Solar Calculation Details

Source: https://gml.noaa.gov/grad/solcalc/calcdetails.html

Used as a published reference for solar-time equations and their limitations. Approximate equations are boundary-sensitive and are not a substitute for a full astronomical ephemeris.

## lunar-javascript

Source: https://github.com/6tail/lunar-javascript

Version referenced by the production calculation layer: `1.7.7`.

Used for calendar and Pillar primitives. The project retains its own license and is not redistributed in this evidence package.

## No endorsement

IANA, the Hong Kong Observatory, NOAA, and lunar-javascript do not endorse Bazi Clarity, its reports, or metaphysical prediction. They support only the time, calendar, astronomical-reference, and implementation layers identified above.
