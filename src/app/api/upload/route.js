import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Ensure the POST function is exported correctly
export async function POST(req) {
  const data = await req.formData();
  const file = data.get("file");

  if (!file) {
    return NextResponse.json({ success: false, message: "No file uploaded" });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Save to public/uploads directory
  const filePath = path.join(process.cwd(), "public", "uploads", file.name);
  await writeFile(filePath, buffer);

  const fileUrl = `/uploads/${file.name}`;

  return NextResponse.json({ success: true, message: "File uploaded", url: fileUrl });
}
