---
to: docs/<%= name %>.md
---
---
title: <%= locals.title || h.changeCase.titleCase(h.changeCase.sentenceCase(baseName)) %>
<% if (locals.description) { -%>
description: <%= description %>
<% } -%>
<% if (locals.hide_table_of_contents !== undefined) { -%>
hide_table_of_contents: <%= !!locals.hide_table_of_contents %>
<% } -%>
<% if (locals.hide_title !== undefined) { -%>
hide_title: <%= !!locals.hide_title %>
<% } -%>
<% if (locals.image) { -%>
image: <%= image %>
<% } -%>
<% if (locals.keywords) { -%>
keywords: [<%= keywords %>]
<% } -%>
<% if (locals.pagination_label) { -%>
pagination_label: <%= pagination_label %>
<% } -%>
<% if (locals.pagination_next) { -%>
pagination_next: <%= pagination_next %>
<% } -%>
<% if (locals.pagination_prev) { -%>
pagination_prev: <%= pagination_prev %>
<% } -%>
<% if (locals.sidebar_label) { -%>
sidebar_label: <%= sidebar_label %>
<% } -%>
<% if (locals.sidebar_position >= 0) { -%>
sidebar_position: <%= sidebar_position %>
<% } -%>
<% if (locals.sidebar_class_name) { -%>
sidebar_class_name: <%= sidebar_class_name %>
<% } -%>
<% if (locals.slug) { -%>
slug: <%= slug %>
<% } -%>
<% if (locals.tags) { -%>
tags: [<%= tags %>]
<% } -%>
<% if (locals.toc_max_heading_level) { -%>
toc_max_heading_level: <%= toc_max_heading_level %>
<% } -%>
<% if (locals.toc_min_heading_level) { -%>
toc_min_heading_level: <%= toc_min_heading_level %>
<% } -%>
---
