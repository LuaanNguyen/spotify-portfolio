# Customization Guide

## 1. Update the core profile

Edit `src/config/site.ts` first. That file controls:

- your name and role
- homepage bio copy
- base site URL
- social links and email
- SEO defaults
- optional GitHub, Spotify, and analytics settings

## 2. Replace the starter data

Edit the content arrays in:

- `data/experience.ts`
- `data/projects.ts`

Use the existing examples as the format to follow. Mark any project you want in the homepage spotlight with `featured: true`.

## 3. Replace the media

Swap these starter assets with your own:

- `public/avatar-placeholder.svg`
- `public/og-template.svg`
- `public/projects/*`
- `public/blogs/*`

You can keep SVGs, PNGs, or JPGs as long as the paths in the config and data files stay in sync.

## 4. Write or replace blog posts

Each post in `src/content/blog/` uses frontmatter with:

- `title`
- `description`
- `date`
- `readTime`
- `image`
- `slug`
- `author`
- `tags`
- `category`
- `excerpt`

The body is regular markdown. Internal links like `/blog/post/my-post-slug` work out of the box.

## 5. Final cleanup before launch

- update `siteUrl`
- replace `Your Name`, `yourusername`, and `yourhandle`
- swap all starter media
- remove or rewrite the sample blog posts
- run `npm run build`
