# AECCHEATSHEET print validation

## 2026-08-27 inspection notes

The regenerated handbook PDF now renders readable chapter covers and body copy, and the browser header/footer strings have been removed. A remaining print issue was observed in the early handbook pages: the bottom of the page after the Home route-card cluster still showed a dark spill area before the next chapter cover. This indicates that some parent wrappers were still carrying the website's dark background in print mode even after child cards were normalized.

## Corrective action

The print stylesheet is being tightened so the handbook wrapper, page shell, page-content wrapper, and route-grid container all resolve to a white print background. This preserves the chaptered handbook structure without leaving dark residual blocks between sections.
