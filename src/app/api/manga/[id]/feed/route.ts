import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) {
  const { searchParams } = new URL(request.url);
  const res = await fetch(`${process.env.INFO}${params.id}/feed${searchParams.get('limit') ? '?limit=' + searchParams.get('limit') : ''}`);
  const data = await res.json();
//   return new Response(`${process.env.INFO}${params.id}`);
  return NextResponse.json(data);
}
