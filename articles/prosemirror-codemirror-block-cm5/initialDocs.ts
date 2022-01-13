export const inlineImageDoc = {
  content: [
    {
      content: [
        {
          text: "before code",
          type: "text",
        },
      ],
      type: "paragraph",
    },
    {
      content: [
        {
          text: "const asd = 5 \n",
          type: "text",
        },
      ],
      attrs: {
        lang: "javascript",
      },
      type: "code_block",
    },
    {
      content: [
        {
          text: "after code",
          type: "text",
        },
      ],
      type: "paragraph",
    },
  ],
  type: "doc",
};
