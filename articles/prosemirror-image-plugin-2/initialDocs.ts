export const inlineImageDoc = {
  content: [
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
    {
      content: [
        {
          type: "image",
          attrs: {
            src: "https://prosemirror.net/img/picture.png",
            alt: "Image",
            align: "center",
            height: 300,
            width: 300,
          },
        },
      ],
      type: "paragraph",
    },
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
  ],
  type: "doc",
};

export const createBlockImageDoc = (withTitle: boolean) => ({
  content: [
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
    {
      type: "image",
      attrs: {
        src: "https://prosemirror.net/img/picture.png",
        alt: "Image",
        align: "center",
        height: 300,
        width: 300,
      },
      ...(withTitle
        ? {
            content: [
              {
                text: "This could be YOUR image title ;)",
                type: "text",
              },
            ],
          }
        : {}),
    },
    {
      content: [
        {
          text: "Start typing!",
          type: "text",
        },
      ],
      type: "paragraph",
    },
  ],
  type: "doc",
});
