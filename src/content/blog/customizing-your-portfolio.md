---
title: "Customize the Starter Before You Touch the CSS"
description: "A sample post showing how to replace the default content, links, and media in this portfolio starter."
date: "Jan 12, 2026"
readTime: "4 min read"
image: "/blogs/customizing-template.svg"
slug: "customizing-your-portfolio"
author: "Your Name"
tags:
  ["Portfolio", "Next.js", "Customization", "Personal Website"]
category: "Template Guide"
excerpt: "This starter looks best when you replace the default content intentionally. Start with the config, then the data files, then the media."
---

## Start with the content layer

Before changing layouts or colors, update the files that shape the portfolio's voice:

- `src/config/site.ts`
- `data/experience.ts`
- `data/projects.ts`
- `src/content/blog/*.md`

Those files control the name, metadata, biography, social links, experience entries, project cards, and blog content across the site.

## Replace structure before polish

The fastest way to make this template yours is to swap the example information in the same order a visitor reads it:

1. your identity and links
2. your current role and short bio
3. your featured projects
4. your experience list
5. your writing or notes

If you start with visuals first, you usually end up styling around placeholder content instead of shaping the site around your actual story.

## Keep the starter opinionated

This repo is intentionally not blank. A polished starter teaches people how a section should look after it has been filled in.

```txt
src/config/site.ts
data/projects.ts
data/experience.ts
public/projects/*
public/blogs/*
```

Treat the example content as scaffolding. Replace it quickly, but use it to understand the expected level of detail.

## Use your blog as proof

Even two or three short posts can make a portfolio feel alive. If you are not sure what to write first, start with:

- a case study about your best project
- a note on how you like to work
- a short reflection on something you learned recently

The next sample post, [Turning Project Notes Into Case Studies](/blog/post/turning-projects-into-case-studies), is a good place to begin.
