# Cohesian Core — agent onboarding

## Context

Core is Cohesian's constitutional repository. It defines Cohesian's principles,
public identity, canonical brand primitives, and public identity policy without
owning operations, knowledge production, media production, or software tools.

```text
Core ──principles──▶ Foundations / Studio / Site
Core ──identity────▶ Studio / Site / loci-plugins/cohesian
Studio ──proposals─▶ Core
```

Core is a semantic dependency, not a runtime dependency. Organization manages
accounts and infrastructure; body repositories produce Cohesian's work;
tooling repositories remain independently usable.

## Repository index

| Need | Read |
|---|---|
| Stable principles and pillars | [`PRINCIPLES.md`](PRINCIPLES.md) |
| Public introduction | [`introduction.md`](introduction.md) |
| Canonical identity assets | [`assets/brand/`](assets/brand/) |
| License boundaries | [`LICENSING.md`](LICENSING.md) |
| Name and brand usage | [`TRADEMARKS.md`](TRADEMARKS.md) |
| Operational administration | [`../../Organization/AGENTS.md`](../../Organization/AGENTS.md) |

## Inheritance

Each Cohesian body repository links to the version of Core it follows and
states only the local consequences of those principles. Core keeps the exact
canonical language; consumers do not maintain independent rewrites.

Studio may explore identity variants. A variant becomes canonical only after it
is intentionally accepted here. Cohesian-specific reusable rendering behavior
belongs in `loci-plugins/cohesian`, while the identity specification remains in
Core.
