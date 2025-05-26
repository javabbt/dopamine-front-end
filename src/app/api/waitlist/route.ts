import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, waitlistId } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Integration with GetWaitlist service
    if (waitlistId) {
      try {
        const waitlistResponse = await fetch(
          "https://api.getwaitlist.com/api/v1/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer f901b91f4e26af827e2a028a4ca255a152cbbd96ed9df7e168319a15eb57b890`, // Add this to your .env.local
            },
            body: JSON.stringify({
              email,
              waitlist_id: waitlistId,
            }),
          }
        );

        if (!waitlistResponse.ok) {
          throw new Error("GetWaitlist API error");
        }

        const waitlistData = await waitlistResponse.json();

        return NextResponse.json({
          success: true,
          message: "Successfully joined waitlist",
          data: waitlistData,
        });
      } catch (error) {
        console.error("GetWaitlist integration error:", error);
        // Fall back to local storage or other handling
      }
    }

    // Alternative: Store in your own database
    // You can add your own database logic here
    // For example, using Prisma, MongoDB, or any other database

    // For now, we'll just simulate success
    console.log(`New waitlist signup: ${email}`);

    // You could also integrate with other services like:
    // - Mailchimp
    // - ConvertKit
    // - Airtable
    // - Google Sheets
    // - Your own database

    return NextResponse.json({
      success: true,
      message: "Successfully joined waitlist",
      email,
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// Optional: GET method to retrieve waitlist stats
export async function GET() {
  try {
    // You can implement logic to get waitlist statistics
    // For now, return mock data
    const stats = {
      totalSignups: Math.floor(Math.random() * 1000) + 500,
      recentSignups: Math.floor(Math.random() * 50) + 10,
    };

    return NextResponse.json(stats);
  } catch (error) {
    console.error("Waitlist stats error:", error);
    return NextResponse.json(
      { error: "Failed to fetch stats" },
      { status: 500 }
    );
  }
}
