const Blog = () => {
  return (
    <section className="my-12 lg:my-20 px-4 lg:px-0">
      <div className="my-container space-y-3">
        <div className="qna1 space-y-4">
          <h1 className="p-4 bg-[#F6C6EA] rounded-lg font-semibold">
            What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p className="p-4 bg-[#C2E0EB] rounded-lg font-semibold">
            An access token and a refresh token both are used in authentication
            and authorization purpose. <br />
            <br />
            An <strong className="font-extrabold">Access token</strong> is a
            short-lived credential used for authentication and authorization to
            access specific resources. It proves that a client has permission to
            access those resources and is included in request headers. <br />
            <br />A <strong className="font-extrabold">Refresh token</strong> is
            a long-lived credential used to obtain a new access token when the
            current one expires. It allows the client to refresh the access
            token without reauthentication. <br />
            <br />
            To store them on the client-side, access tokens can be stored in
            memory, HTTP-only cookies, or browser's local storage. Refresh
            tokens should be stored in a more secure manner, such as in
            HTTP-only secure cookies or transmitted over HTTPS.
          </p>
        </div>
        <div className="qna1 space-y-4">
          <h1 className="p-4 bg-[#F6C6EA] rounded-lg font-semibold">
            Compare SQL and NoSQL databases?
          </h1>
          <div className="p-4 bg-[#C2E0EB] rounded-lg font-semibold">
            <p className="font-extrabold">SQL Databases:</p>
            <ul className="list-disc ml-7">
              <li>Follow a rigid, predefined schema.</li>
              <li>Use tables with rows and columns to store data.</li>
              <li>Use SQL as the standardized query language.</li>
            </ul>{" "}
            <br />
            <p className="font-extrabold">NoSQL Databases:</p>
            <ul className="list-disc ml-7">
              <li>Have flexible or schema-less data models.</li>
              <li>
                Store data in various formats like key-value pairs, documents,
                graphs, or wide-column stores.
              </li>
              <li>Use specific query languages based on their data models.</li>
            </ul>
          </div>
        </div>
        <div className="qna1 space-y-4">
          <h1 className="p-4 bg-[#F6C6EA] rounded-lg font-semibold">
            What is express js? What is Nest JS?
          </h1>
          <p className="p-4 bg-[#C2E0EB] rounded-lg font-semibold">
            <strong className="font-extrabold">Express.js</strong> is a
            minimalist and flexible web framework for Node.js.It allows you to
            handle routing, middleware, request handling, and response
            management efficiently. <br /> <br />
            <strong className="font-extrabold">Nest.js</strong>, on the other
            hand, is a progressive TypeScript-based web framework for building
            efficient and scalable server-side applications. It is built on top
            of Express.js. It is designed to enable developers to create robust
            and maintainable applications, particularly suited for larger and
            enterprise-level projects.
          </p>
        </div>
        <div className="qna1 space-y-4">
          <h1 className="p-4 bg-[#F6C6EA] rounded-lg font-semibold">
            What is MongoDB aggregate and how does it work?
          </h1>
          <p className="p-4 bg-[#C2E0EB] rounded-lg font-semibold">
            In MongoDB, the aggregate function is used to perform advanced data
            processing and analysis operations on collections. It allows you to
            perform computations, transformations, and aggregations on the
            documents within a collection. <br />
            <br />
            The aggregate function works by taking a pipeline of stages as
            input. Each stage performs a specific operation on the data and
            passes the transformed data to the next stage in the pipeline. The
            stages can include operations like filtering, grouping, sorting,
            projecting, joining, and performing calculations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Blog;
