import { Suspense } from "react";

import { GithubProfile } from "@/components/github-profile";
import { LongWaitComponent } from "@/components/long-wait-component";

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ea
        dolores, cum ex explicabo quam, impedit tenetur error officia culpa
        harum soluta exercitationem? Dolores earum soluta minima, quam
        perspiciatis impedit?
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  );
}
