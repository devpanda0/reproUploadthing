export default async function Home({ searchParams }: { searchParams: Promise<{ token: string }> }) {
    // const { token } = await searchParams;

    await fetch(`${process.env.NEXT_URL}/api/auth?token=${"apitoken1"}`, { method: "POST" });

    return (
      <div>
        Minimal Repro
      </div>
    );
}
