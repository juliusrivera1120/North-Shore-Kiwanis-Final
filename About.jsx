import React from "react";

function About() {
  return (
    <section className="page">
      <header className="page-header">
        <h2>About North Shore Kiwanis</h2>
      </header>

      <article className="page-content">
        <p>
          North Shore Kiwanis is part of Kiwanis International, a global service
          organization of clubs dedicated to serving the children of the world.
          Our club focuses on the communities along the North Shore, partnering
          with schools, churches, and local agencies.
        </p>

        <p>
          Members meet regularly to plan projects, raise funds, and support Key
          Club and Circle K students as they develop leadership through service.
        </p>

        <h3>What We Believe</h3>
        <ul>
          <li>Service to children and families comes first.</li>
          <li>Strong communities are built through hands-on volunteering.</li>
          <li>
            Youth leadership should be encouraged in every school we support.
          </li>
          <li>
            Fellowship and friendship make it easier to serve more people over
            time.
          </li>
        </ul>
      </article>
    </section>
  );
}

export default About;
