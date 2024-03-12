export const request = async (url = "") => {
  try {
    const result = await fetch(url);

    return result.json();
  } catch (e) {
    console.error(e);
  }
};
