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
        return { success: false, message: "Missing required fields" };
    }

    try {
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

        return {
            success: true,
            message: "Booking confirmed!"
        };
    } catch (error) {
        console.error("Booking error:", error);
        return {
            success: false,
            message: "Failed to process booking. Please try again."
        };
    }
}
