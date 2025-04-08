import React from "react";
import { AudioPlayerContainer } from "./containers/AudioPlayer.container";

import "./styles/core.scss";

export const App: React.FC = () => (
  <div>
    <h1>TranStation 📻</h1>
    <p>Simple streaming radio app</p>
    <main>
      <section>
        <AudioPlayerContainer />
      </section>
    </main>
  </div>
);
