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
  const res = await fetch(`${process.env.CHAPTERS}${searchParams.get('mangaId')}?forcePort443=false`);
  const data = await res.json();
  // return new Response(`${process.env.CHAPTERS}${searchParams.get('mangaId')}`);
  return NextResponse.json(data);
}
