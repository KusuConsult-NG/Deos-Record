"use server";

import { db } from "@/lib/firebase-admin";

export async function bookSession(prevState: any, formData: FormData) {
    const serviceName = formData.get("serviceName") as string;
    const serviceId = formData.get("serviceId") as string;
    const staff = formData.get("staff") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const price = formData.get("price") as string;

    // User Details & Payment
    const clientName = formData.get("clientName") as string;
    const clientEmail = formData.get("clientEmail") as string;
    const clientPhone = formData.get("clientPhone") as string;
    const paymentReference = formData.get("paymentReference") as string;

    if (!serviceId || !date || !time || !clientName || !clientEmail || !paymentReference) {
        console.error("Booking failed: Missing fields", { serviceId, date, time, clientName, clientEmail, paymentReference });
        return { success: false, message: "Missing required fields: Service, Date, Time, Client Name, Client Email, or Payment Reference." };
    }

    try {
        // 0. Verify Payment with Paystack
        const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY;
        if (paystackSecretKey) {
            const verificationResponse = await fetch(`https://api.paystack.co/transaction/verify/${paymentReference}`, {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${paystackSecretKey}`
                }
            });

            if (!verificationResponse.ok) {
                console.error("Paystack API connection failed");
                return { success: false, message: "Could not verify payment. Please contact support." };
            }

            const verificationData = await verificationResponse.json();
            if (!verificationData.status || verificationData.data.status !== "success") {
                console.error("Payment verification failed:", verificationData);
                return { success: false, message: "Payment verification failed or was not completed." };
            }
            console.log("Payment Verified Successfully:", verificationData.data.reference);
        } else {
            console.warn("PAYSTACK_SECRET_KEY not found. Skipping server-side verification.");
        }

        // 1. Save Booking
        const docRef = await db.collection("bookings").add({
            serviceName,
            serviceId,
            staff,
            date,
            time,
            price,
            clientName,
            clientEmail,
            clientPhone,
            paymentReference,
            paymentStatus: "paid",
            status: "confirmed",
            createdAt: new Date().toISOString(),
        });
        console.log("Booking successfully saved with ID:", docRef.id);

        // 2. Trigger Email (via Firestore Extension)
        await db.collection("mail").add({
            to: clientEmail,
            message: {
                subject: "Booking Confirmed - Deos Record",
                html: `
                    <h1>Booking Confirmed!</h1>
                    <p>Hi ${clientName},</p>
                    <p>Your session for <strong>${serviceName}</strong> with <strong>${staff}</strong> has been confirmed.</p>
                    <p><strong>Date:</strong> ${date}</p>
                    <p><strong>Time:</strong> ${time}</p>
                    <p><strong>Reference:</strong> ${paymentReference}</p>
                    <br/>
                    <p>See you at the studio!</p>
                `
            }
        });

        return {
            success: true,
            message: "Booking confirmed!",
            bookingId: docRef.id
        };
    } catch (error) {
        console.error("Booking error:", error);
        return {
            success: false,
            message: `Failed to process booking: ${error instanceof Error ? error.message : "Unknown error"}`
        };
    }
}
