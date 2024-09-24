export default async function importJSON(jsonFile) {

    try {

    const response = await fetch(jsonFile);
    const data = await response.json();
    return data;

    } catch(error) {
        console.error(error);
    }
}