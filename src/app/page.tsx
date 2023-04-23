"use client";

import { Inter } from "next/font/google";
import Image from "next/image";
import useSWR, { SWRConfig } from "swr";
const inter = Inter({ subsets: ["latin"] });
const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "api/manga/chapters?mangaId=a1b7c0e2-1acc-4e1f-9e51-c0653db47561";

function Chapters() {
  const { data, error } = useSWR(API, fetcher);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;

  return (
    <div>
      <h1>Chapters</h1>
      <ul>
        {data.chapter.data.map((chapter: any) => (
          <li key={chapter.id}>
            <Image
              src={`${data.baseUrl}/data/${data.chapter.hash}/${chapter}`}
              alt="Manga Chapters"
              width={500}
              height={500}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Chapters />
    </main>
  );
}

export async function getServerSideProps() {
  const repoInfo = await fetcher(API);
  return {
    props: {
      fallback: {
        [API]: repoInfo,
      },
    },
  };
}
