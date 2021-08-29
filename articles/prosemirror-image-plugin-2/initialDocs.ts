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
            src: "https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg",
            alt: "Image",
            align: "center",
            height: 200,
            width: 340,
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
        src: "https://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg",
        alt: "Image",
        align: "center",
        height: 200,
        width: 340,
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
