import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hello: [
      {
        id: 1,
        name: "Shoes",
      },
    ],
  });
}


