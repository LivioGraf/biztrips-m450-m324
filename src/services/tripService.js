export async function getTripsJson() {
    const response = await fetch("http://localhost:3001/trips");
    if (response.ok) return response.json();
    throw response
}