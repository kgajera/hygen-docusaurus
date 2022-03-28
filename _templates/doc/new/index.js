const changeCase = require('change-case');
const path = require('path');

const nameToTitle = (name) =>
  changeCase.titleCase(changeCase.sentenceCase(name));

/**
 * Prompts for front matter metadata fields
 * https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs#markdown-front-matter
 *
 * @param {string} name Slug
 */
const questions = (name) => [
  {
    type: 'input',
    name: 'title',
    message: 'Title?',
    initial: nameToTitle(name),
  },
  {
    type: 'input',
    name: 'slug',
    message: 'Slug?',
    initial: name,
  },
  {
    type: 'input',
    name: 'id',
    message: 'ID?',
    initial: name,
  },
  {
    type: 'input',
    name: 'description',
    message: 'Description?',
  },
  {
    type: 'input',
    name: 'tags',
    message: 'Tags?',
  },
  {
    type: 'input',
    name: 'image',
    message: 'Image?',
  },
  {
    type: 'input',
    name: 'keywords',
    message: 'Keywords?',
  },
  {
    type: 'input',
    name: 'pagination_label',
    message: 'Pagination label?',
    initial: nameToTitle(name),
  },
  {
    type: 'input',
    name: 'sidebar_label',
    message: 'Sidebar label?',
    initial: nameToTitle(name),
  },
  {
    type: 'input',
    name: 'sidebar_position',
    message: 'Sidebar position?',
  },
  {
    type: 'input',
    name: 'sidebar_class_name',
    message: 'Sidebar class name?',
  },
  {
    type: 'confirm',
    name: 'hide_title',
    message: 'Hide title?',
    initial: false,
  },
  {
    type: 'confirm',
    name: 'hide_table_of_contents',
    message: 'Hide table of contents?',
    initial: false,
  },
];

module.exports = {
  prompt: async ({ prompter, args }) => {
    const frontMatterData = {
      ...args,
    };

    // Prompt for given questions and merge answers to frontMatterData
    const prompt = async (questions) => {
      const answers = await prompter.prompt(
        questions.filter((q) => args[q.name] === undefined)
      );
      Object.assign(frontMatterData, answers);
    };

    // If the required "name" argument was not given, prompt for it
    await prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Name?',
      },
    ]);

    const baseName = path.parse(frontMatterData.name).base;

    // Only continue with front matter prompts if using "interactive" mode
    if (args.i === true || args.interactive === true) {
      await prompt(questions(baseName));

      if (!frontMatterData.hide_table_of_contents) {
        await prompt([
          {
            type: 'input',
            name: 'toc_min_heading_level',
            message: 'Table of contents min heading level?',
            initial: 2,
          },
          {
            type: 'input',
            name: 'toc_max_heading_level',
            message: 'Table of contents max heading level?',
            initial: 3,
          },
        ]);
      }
    }

    return {
      ...frontMatterData,
      baseName,
    };
  },
};
