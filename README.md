# Cohesian Core

Cohesian Core is the public, operationally agnostic source of Cohesian's
principles and accepted identity. “Core” means constitutional kernel here, not
a software runtime or framework.

Current principles version: **0.1.0**.

## Contents

- [`PRINCIPLES.md`](PRINCIPLES.md) — canonical pillars and structural lens;
- [`introduction.md`](introduction.md) — public description and identity;
- [`assets/brand/`](assets/brand/) — accepted marks, wordmarks, and icons;
- [`LICENSING.md`](LICENSING.md) — license boundaries; and
- [`TRADEMARKS.md`](TRADEMARKS.md) — name and brand-use policy.

Core intentionally contains no ecosystem topology, operational state, consumer
index, or consumer-specific procedure.

## Structured principles export

`principles.json` is a machine-readable export of PRINCIPLES.md, with its
version, identity and sentence-case questions. The Markdown remains canonical.
After accepting a principle change, regenerate and check the export:

```sh
node scripts/check-principles.mjs --write
node scripts/check-principles.mjs
```

The exporter uses Node.js and no packages. The existing content/identity
license boundaries also apply to this export.

## License

License scopes and the Cohesian brand boundary are defined in
[`LICENSING.md`](LICENSING.md) and [`TRADEMARKS.md`](TRADEMARKS.md).
