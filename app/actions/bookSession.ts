"use server";

import { db } from "@/lib/firebase-admin";

export async function bookSession(prevState: any, formData: FormData) {
    const serviceName = formData.get("serviceName") as string;
    const serviceId = formData.get("serviceId") as string;
    const staff = formData.get("staff") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const price = formData.get("price") as string;

    if (!serviceId || !date || !time) {
        console.error("Booking failed: Missing fields", { serviceId, date, time });
        return { success: false, message: "Missing required fields: Service, Date, or Time." };
    }

    try {
        console.log("Attempting to save booking to Firestore:", { serviceName, staff, date, time });
        await db.collection("bookings").add({
            serviceName,
            serviceId,
            staff,
            date,
            time,
            price,
            status: "pending",
            createdAt: new Date().toISOString(),
        });
        console.log("Booking successfully saved.");

        return {
            success: true,
            message: "Booking confirmed!"
        };
    } catch (error) {
        console.error("Booking error:", error);
        return {
            success: false,
            message: `Failed to process booking: ${error instanceof Error ? error.message : "Unknown error"}`
        };
    }
}
