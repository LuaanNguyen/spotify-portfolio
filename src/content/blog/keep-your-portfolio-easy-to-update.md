---
title: "Keep Your Portfolio Easy To Update"
description: "A sample post about designing your portfolio so future updates take minutes instead of hours."
date: "Dec 28, 2025"
readTime: "4 min read"
image: "/blogs/maintenance.svg"
slug: "keep-your-portfolio-easy-to-update"
author: "Your Name"
tags:
  ["Maintenance", "Portfolio", "Workflow"]
category: "Workflow"
excerpt: "The best portfolio systems are easy to revisit. This sample post explains how to keep content updates lightweight."
---

## Prefer small content files over scattered strings

This starter uses a central site config plus dedicated data files so you do not have to hunt through components every time your role, links, or projects change.

That matters because personal sites usually fail from neglect, not lack of ambition.

## Make updates obvious

When you add a new project, you should only need to touch:

- `data/projects.ts`
- `public/projects/`
- optionally `src/content/blog/`

When your bio changes, you should only need to touch:

- `src/config/site.ts`
- `data/experience.ts`

## Keep a publishing rhythm you can sustain

You do not need weekly essays. A better rule is simple:

1. write when you finish something meaningful
2. document the decision that shaped the work
3. stop once the main idea is clear

That is enough to keep the site feeling current without turning it into homework.
