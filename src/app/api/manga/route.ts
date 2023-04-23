import { useRouter } from "next/router";
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
  const res = await fetch(`${process.env.SEARCH}${searchParams.get("q")}`);
//   return new Response(`${process.env.SEARCH}${searchParams.get("q")}`) ;
  const data = await res.json();
  return NextResponse.json(data);
}
