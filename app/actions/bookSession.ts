"use server";

export async function bookSession(prevState: any, formData: FormData) {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const service = formData.get("service");
    // In a real app, validate and save to DB
    console.log("Processing booking for:", service);

    return {
        success: true,
        message: "Booking request received. We will contact you shortly."
    };
}
