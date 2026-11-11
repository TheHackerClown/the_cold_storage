import os from "node:os";

export function GET() {
  const cpu = os.cpus()[0]?.model ?? os.arch();
  const cores = os.availableParallelism?.() ?? os.cpus().length;
  const ram = (os.totalmem() / 2 ** 30).toFixed(2);

  return new Response(
    `CPU: ${cpu} | Cores: ${cores} | RAM: ${ram} GB`,
    {
      headers: {
        "content-type": "text/plain; charset=utf-8",
      },
    },
  );
}
