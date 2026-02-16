import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@/features/auth/auth.schema";
import { registerUser } from "@/features/auth/auth.services";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const validated = registerSchema.safeParse(body);

    if (!validated.success) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }

    const user = await registerUser(validated.data);

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          id: user.id,
          email: user.email,
          name: user.name,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}