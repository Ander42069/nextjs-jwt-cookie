import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("myTokenName");

  if (!token) {
    return res.status(401).json({ error: "Not logged in" });
  }

  const {numero_control, username} = jwt.verify(token.value, "secret");

  return NextResponse.json({
    numero_control,
    username,
  });
}
