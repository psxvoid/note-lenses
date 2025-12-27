# Note Lenses

Important: "Note Lenses" is an independent fork of the original "Notebook Navigator" project and not affiliated with or endorsed by it.

## Overview

This repo contains an experimental Excalidraw and PDF featured image support that does not exist in the original project (as well as some other improvements).

Another notable difference is that resized featured images/previews (including for regular images) are not stored on a file system as files, instead they are stored in indexeddb.

It has it's drawbacks:

1. Initial indexing is much slower
2. Indexing is happening on each device
3. `.gif` aren't animated in the note list (yet)

But after the initial indexing is done, the benefits are far more exciting:

1. Doesn't modify any frontmatter values in your notes
2. Better featured images thanks to `smartcrop.js` library
3. Resized previews are automatically generated for image/Excalidraw/PDF files (`Settings > Show feature image > Use embedded image fallback`)
4. No need to have separate plugins for resizing featured images
5. A note list is more responsive due to all previews being resized to the requested size

For the full changelog (including available features in the fork), see [releases](https://github.com/psxvoid/note-lenses/releases).

![Excalidraw File Preview Sample](./images/nn-fork-excalidraw-preview.png)

> [!NOTE]
> Why to fork the original project? See: [Issue: [FR] Add Excalidraw Featured Image Support (closed as not-planned)](https://github.com/johansan/notebook-navigator/issues/384)<br>

> [!NOTE]
> "Featured image" refers to an embed image/PDF/Excalidraw preview in the note list of this plugin (see the screenshot).

## Installation (The Forked Version)

1. Install [BRAT](https://obsidian.md/plugins?search=brat) obsidian plugin.
2. Go to obsidian settings > community plugins, find BRAT plugin and press a cog icon to go to it's settings.
3. Hit "Add beta plugin" button.
4. In the opened popup paste `https://github.com/psxvoid/note-lenses.git`.
5. Select the version you want to install (stable or pre-release).
6. Ensure "Enable after installing the plugin" checkbox is set.
7. Hit "Add plugin" button.

> [!NOTE]
>
> Be patient while the initial indexing is done, you can partially track the progress in `Settings > Advanced`.

> [!NOTE]
>
> This forked version doesn't work when the original plugin is turned on.
> To use it, disable or uninstall the original, then install/enable this one.

> [!NOTE]
>
> To migrate settings from the original plugin, go to your vault, then into
> `.obsidian/plugins` folder, then find `notebook-navigator`. Inside that folder
> find and copy `data.json` into `.obsidian/plugins/notebook-navigator-ex`.

## License

"Note Lenses" is an independent fork of Notebook Navigator.

It's based on source code of `Copiright (c)` Johan Sanneblad and contributors; and licensed under the GNU General Public License v3.0 (GPL-3.0).
Modifications by Pavel Sapehin. See the [LICENSE](https://github.com/psxvoid/note-lenses/blob/main/LICENSE) file for details.
