import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import Link from "next/link";
import Header from "../components/header";

import factory from "../ethereum/factory";
import Layout from "../components/layout";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
    </main>
  );
}

export default Index;
