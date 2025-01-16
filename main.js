export function findProvider(n) {
    // Mapping provider codes to their names
    const providers = {
        "07107": "O2",
        "07400": "Three",
        "07551": "Vodafone",
        "07550": "EE / T-Mobile",
        "07777": "BT",
        "07448": "Lycamobile",
        "07666": "Skynet",
    }

    // Convert input to string
    const numberString = String(n);

    // Extract the first 5 digits
    const code = numberString.slice(0, 5);

    // Return the provider name or "Unknown Provider" if no match is found
    return providers[code] || "Unknown Provider";

}

