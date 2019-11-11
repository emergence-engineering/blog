function removeSecondsFromTimeString(timeString: string): string {
  return timeString
    .split(":")
    .slice(0, 3)
    .join(":");
}

function removeTimeAndDateTypeFromUTCStringArray(
  utcStringItemsArray: string[],
): string[] {
  return utcStringItemsArray.slice(0, 4);
}

export function convertTimeStampToDateString(timeStamp: number): string {
  const date: Date = new Date(timeStamp);
  const utcString: string = date.toUTCString();
  const utcArray: string[] = utcString.split(" ");
  const timeString: string = removeSecondsFromTimeString(utcArray[4]);
  const modifiedUtcArray: string[] = [
    ...removeTimeAndDateTypeFromUTCStringArray(utcArray),
    `,${timeString}`,
  ];
  return modifiedUtcArray.join(" ");
}
