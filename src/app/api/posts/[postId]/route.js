// import data  from "@/data.json";
import { NextResponse } from "next/server";

const posts = [
  {
    id: 12,
    name: "Arm",
    description: "Arm's Post",
  },
  {
    id: 89,
    name: "Zqw",
    description: "Zqw's Post",
  },
];

export async function GET(req, context) {
  const { params } = context;
  //   const user = data.filter((x) => params.userId === x.id.toString());
  return NextResponse.json({
    post: posts.find((x) => x.id.toString() === params.postId),
  });
}
