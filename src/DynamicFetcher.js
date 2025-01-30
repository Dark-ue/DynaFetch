import config from "./config.default.js";

export async function fetchJSONFiles() {
  try {
    const response = await fetch(config.repoUrl);
    if (!response.ok) throw new Error(`Failed to fetch from ${config.repoUrl}`);

    const files = await response.json();
    const jsonFiles = files.filter((file) => file.name.endsWith(".json"));

    const fileContents = await Promise.all(
      jsonFiles.map(async (file) => {
        const contentResponse = await fetch(file.download_url);
        if (!contentResponse.ok) throw new Error(`Failed to fetch ${file.download_url}`);
        return { content: await contentResponse.json(), fileName: file.name.replace(".json", "") };
      })
    );

    return fileContents;
  } catch (error) {
    console.error("Error fetching JSON files:", error);
    return [];
  }
}
