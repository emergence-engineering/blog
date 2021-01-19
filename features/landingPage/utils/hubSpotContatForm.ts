const portalId = "6783875";
const formGuid = "ec622a29-b5eb-4c37-85a6-ffcd612cef18";
export const formAddress = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

export const createHubSpotFormBody = (
  email: string,
  firstName: string,
  lastName: string,
  subject: string,
  message: string,
): Record<string, unknown> => {
  const milliseconds = Date.now();

  return {
    submittedAt: milliseconds,
    fields: [
      {
        name: "email",
        value: email,
      },
      {
        name: "firstname",
        value: firstName,
      },
      {
        name: "lastname",
        value: lastName,
      },
      {
        name: "subject",
        value: subject,
      },
      {
        name: "message",
        value: message,
      },
    ],
  };
};
