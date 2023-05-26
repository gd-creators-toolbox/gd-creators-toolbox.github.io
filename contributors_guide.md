---
permalink: /contributors_guide/
title: Contributor's Guide
layout: page
---

<p class="lead">Strap in, this will be a bit of a long one.</p>

# Writing Tutorials
---

## Types of Tutorial
Currently, there are three types of tutorial. I am open to more categories being added, if you think one should be added, create an issue on GitHub proposing it.

#### Principles

Basic principles for creating levels. These are things like blending, spawn triggers, layers - stuff you should just know.

#### Techniques

Techniques you can combine to create effects or other...stuff. For example, masking, circles, spawn loops.

#### Effects

Self explanatory

# Building on other tutorials
Every tutorial should contain a section linking to the things it builds on. For example, a tutorial for an effect with white masking should link to the white masking technique tutorial. In turn, the white masking technique tutorial should link to the blending principle tutorial.

Put these at the top in a bulleted list, like as follows

```markdown
## Techniques Used
- [White Masking](/tutorials/white_masking/)
- [Spawn Loops](/tutorials/spawn_loops/)
```

## Explaining Things
When, for example, writing a tutorial for an effect, don't just tell the reader *how* to do it. Explain each step, and what it does. If you end up spending a while explaining how something works, consider writing a new technique or principle page and linking to it, or if one already exists, link to that instead. Try not to have duplicate information on the site where possible.

Do not assume the reader knows how to do something, as simple as it may be (within reason, we're not teaching the creator where the 'save' button is). If you had to learn it, so does the reader.

# The Technical Side of Things
---
This website is built with [jekyll](https://jekyllrb.com/) using Bootstrap for the styling. Tutorials belong in the `/_tutorials` directory, and are automatically added to the [tutorials](/tutorials/) page. You can look at other tutorials for examples, but here's the rundown of what makes up a tutorial.

## Tutorial Format
Tutorials are written in markdown, and parsed by Jekyll. There is some front matter which is used for displaying the tutorial in various places.

```markdown
---
layout: tutorial
category: effects // effects, techniques, principles
title: Example Tutorial
description: Description of your tutorial here!
image: file_name.png // place in /assets/tutorial_images/, preferably make this a gif if possible
difficulty: easy // easy, normal, hard, harder, insane - how complicated your tutorial is
author: jbritain // The author of the tutorial, not mandatory
---

tutorial goes here!
...
```

## Running Locally
First, of course, `git clone https://github.com/gd-creators-toolbox/gd-creators-toolbox.github.io.git`.

You will need to install [jekyll](https://jekyllrb.com).

Run `bundle install` in the folder you cloned the site to to install dependencies, and then `bundle exec jekyll serve` to host the site. You should now be able to access the site at [127.0.0.1:4000](http://127.0.0.1:4000).