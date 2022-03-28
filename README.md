# hygen-docusaurus

A [Hygen](https://github.com/jondot/hygen) package for [Docusaurus](https://github.com/facebook/docusaurus) that supercharges your workflow.

## Getting Started

Install [`hygen-add`](https://github.com/jondot/hygen-add):

```
npm i -g hygen-add
```

And add the `hygen-docusaurus` package:

```
hygen-add docusaurus
```

## Generators

- [Blog Post](#blog-post) - Generates a `./blog/YYYY-MM-DD-name/index.md` file for the [blog content plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-blog)
- [Docs](#docs) - Generates a markdown file in the `./docs` directory for the [docs content plugin](https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs)

### Blog Post

```
hygen blog new [name]
```

| Argument                   | Type      | Description                                                                                                                                                                                   |
| -------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[name]`                   | `string`  | Name of blog post (`my-blog-post`)                                                                                                                                                            |
| `--authors`                | `string`  | Comma separated list of blog post authors.                                                                                                                                                    |
| `--title`                  | `string`  | The blog post title.                                                                                                                                                                          |
| `--tags`                   | `string`  | Comma separated list of tags.                                                                                                                                                                 |
| `--draft`                  | `boolean` | A boolean flag to indicate that the blog post is work-in-progress and therefore should not be published yet. However, draft blog posts will be displayed during development.                  |
| `--hide_table_of_contents` | `boolean` | Whether to hide the table of contents to the right.                                                                                                                                           |
| `--toc_min_heading_level`  | `number`  | The minimum heading level shown in the table of contents. Must be between 2 and 6 and lower or equal to the max value.                                                                        |
| `--toc_max_heading_level`  | `number`  | The max heading level shown in the table of contents. Must be between 2 and 6.                                                                                                                |
| `--keywords`               | `string`  | Keywords meta tag, which will become the `<meta name="keywords" content="keyword1,keyword2,..."/>` in `<head>`, used by search engines.                                                       |
| `--description`            | `string`  | The description of your document, which will become the `<meta name="description" content="..."/>` and `<meta property="og:description" content="..."/>` in `<head>`, used by search engines. |
| `--image`                  | `string`  | Cover or thumbnail image that will be used when displaying the link to your post.                                                                                                             |
| `--slug`                   | `string`  | Allows to customize the blog post url.                                                                                                                                                        |
| `-i`                       | `boolean` | Run the generator in interactive mode to prompt for all arguments.                                                                                                                            |

### Docs

```
hygen doc new [name]
```

| Argument                   | Type      | Description                                                                                                                                                                                          |
| -------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[name]`                   | `string`  | Support multiple patterns: `getting-started`, `/my/path/to/getting-started`.                                                                                                                         |
| `--id`                     | `string`  | A unique document id.                                                                                                                                                                                |
| `--title`                  | `string`  | The text title of your document.                                                                                                                                                                     |
| `--pagination_label`       | `string`  | The text used in the document next/previous buttons for this document.                                                                                                                               |
| `--sidebar_label`          | `string`  | The text shown in the document sidebar for this document.                                                                                                                                            |
| `--sidebar_position`       | `number`  | Controls the position of a doc inside the generated sidebar slice when using `autogenerated` sidebar items. See also [Autogenerated sidebar metadata](/docs/sidebar#autogenerated-sidebar-metadata). |
| `--sidebar_class_name`     | `string`  | Gives the corresponding sidebar label a special class name when using autogenerated sidebars.                                                                                                        |
| `--hide_title`             | `boolean` | Whether to hide the title at the top of the doc. It only hides a title declared through the front matter, and have no effect on a Markdown title at the top of your document.                        |
| `--hide_table_of_contents` | `boolean` | Whether to hide the table of contents to the right.                                                                                                                                                  |
| `--toc_min_heading_level`  | `number`  | The minimum heading level shown in the table of contents. Must be between 2 and 6 and lower or equal to the max value.                                                                               |
| `--toc_max_heading_level`  | `number`  | The max heading level shown in the table of contents. Must be between 2 and 6.                                                                                                                       |
| `--pagination_next`        | `string`  | The ID of the documentation you want the "Next" pagination to link to. Use `null` to disable showing "Next" for this page.                                                                           |
| `--pagination_prev`        | `string`  | The ID of the documentation you want the "Previous" pagination to link to. Use `null` to disable showing "Previous" for this page.                                                                   |
| `--keywords`               | `string`  | Keywords meta tag for the document page, for search engines.                                                                                                                                         |
| `--description`            | `string`  | The description of your document, which will become the `<meta name="description" content="..."/>` and `<meta property="og:description" content="..."/>` in `<head>`, used by search engines.        |
| `image`                    | `string`  | Cover or thumbnail image that will be used when displaying the link to your post.                                                                                                                    |
| `--slug`                   | `string`  | Allows to customize the document url.                                                                                                                                                                |
| `--tags`                   | `string`  | Comma separated list to tag to your docs.                                                                                                                                                            |
| `-i`                       | `boolean` | Run the generator in interactive mode to prompt for all arguments.                                                                                                                                   |
